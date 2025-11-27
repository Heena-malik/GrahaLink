// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const PROKERALA_KEY = process.env.PROKERALA_API_KEY || "";
const PROKERALA_BASE = "https://api.prokerala.com"; // Prokerala base (they provide endpoints)
let commentsStore = []; // fallback

// optional MongoDB connection
let mongoClient = null;
let commentsCollection = null;
if (process.env.MONGODB_URI) {
  (async () => {
    try {
      mongoClient = new MongoClient(process.env.MONGODB_URI);
      await mongoClient.connect();
      const db = mongoClient.db(process.env.MONGODB_DB || "grahalink");
      commentsCollection = db.collection("comments");
      console.log("Connected to MongoDB Atlas");
    } catch (err) {
      console.error("Mongo connection failed:", err.message);
      commentsCollection = null;
    }
  })();
}

// Helper: convert your payload to Prokerala's expected format (example)
// NOTE: Prokerala API docs show multiple param formats; check their docs and adapt if needed.
function buildProkeralaPayload(groom, bride) {
  // Minimal: pass date/time/place in their format. This is example — adapt from their docs.
  return {
    // The demo form uses fields like: girl[name], girl[day], girl[month]...
    girl: {
      name: bride.name || "Bride",
      day: bride.day || "1",
      month: bride.month || "1",
      year: bride.year || "2000",
      time: `${bride.hour || "00"}:${bride.minute || "00"}:${bride.second || "00"} ${bride.ampm || "AM"}`,
      place: bride.place || ""
    },
    boy: {
      name: groom.name || "Groom",
      day: groom.day || "1",
      month: groom.month || "1",
      year: groom.year || "2000",
      time: `${groom.hour || "00"}:${groom.minute || "00"}:${groom.second || "00"} ${groom.ampm || "AM"}`,
      place: groom.place || ""
    }
  };
}

// Mock calculator (same style as frontend)
function mockScore(g, b) {
  const s1 = Math.min(12, (g.name?.length || 1) + (b.name?.length || 1));
  const d1 = parseInt(g.day || "1"), d2 = parseInt(b.day || "1");
  const dayScore = Math.max(0, 12 - Math.abs(d1 - d2));
  const year1 = parseInt(g.year || "2000"), year2 = parseInt(b.year || "2000");
  const yearScore = Math.max(0, 10 - Math.abs(year1 - year2) / 10);
  const rand = Math.floor(Math.random() * 6);
  const total = Math.round((s1 * 0.6) + (dayScore * 1.2) + yearScore + rand);
  return Math.min(36, Math.max(1, Math.round(total)));
}

// Route: POST /api/kundli/match
app.post("/api/kundli/match", async (req, res) => {
  const { groom, bride } = req.body || {};
  if (!groom || !bride) return res.status(400).json({ error: "Send groom and bride objects" });

  // If PROKERALA_KEY present -> try calling Prokerala (demo/production)
  if (PROKERALA_KEY) {
    try {
      const payload = buildProkeralaPayload(groom, bride);

      // Prokerala might expect form-encoded POST or particular path. Here we call the demo endpoint as an example
      // You should replace the endpoint/path with the one in your Prokerala account docs.
      const apiUrl = `${PROKERALA_BASE}/kundli/match`; // placeholder — check their docs and replace
      // Example: they require API key in headers or as query param — check your Prokerala account docs.
      const response = await axios.post(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": PROKERALA_KEY
        },
        timeout: 10000
      });

      // map response to { score, label, details, source }
      const data = response.data;
      // The structure varies by provider. Try to extract .score or .result
      let score = data?.score || data?.result?.score;
      if (!score) {
        // if Prokerala returns Ashtakoot or gun milan specifics, try compute total from fields (best-effort)
        if (data?.ashtakoot && typeof data.ashtakoot === "object") {
          let total = 0;
          Object.values(data.ashtakoot).forEach(v => { total += Number(v) || 0; });
          score = total || mockScore(groom, bride);
        } else {
          score = mockScore(groom, bride);
        }
      }
      const label = score >= 28 ? "Excellent" : (score >= 22 ? "Very Good" : (score >= 16 ? "Average" : "Low"));
      return res.json({ score, label, source: "prokerala", raw: data });
    } catch (err) {
      console.error("Prokerala call failed:", err.message);
      // fallback to mock
      const score = mockScore(groom, bride);
      return res.json({ score, label: score >= 28 ? "Excellent" : (score >= 22 ? "Very Good" : (score >= 16 ? "Average" : "Low")), source: "mock", error: err.message });
    }
  }

  // No API key -> return mock
  const score = mockScore(groom, bride);
  return res.json({ score, label: score >= 28 ? "Excellent" : (score >= 22 ? "Very Good" : (score >= 16 ? "Average" : "Low")), source: "mock" });
});

// Comments: GET /api/comments and POST /api/comments
app.get("/api/comments", async (req, res) => {
  try {
    if (commentsCollection) {
      const docs = await commentsCollection.find().sort({ date: -1 }).limit(100).toArray();
      return res.json(docs);
    } else {
      return res.json(commentsStore.slice(0, 100));
    }
  } catch (err) {
    return res.status(500).json({ error: "Failed to get comments" });
  }
});

app.post("/api/comments", async (req, res) => {
  try {
    const c = req.body;
    c.date = new Date().toISOString();
    if (commentsCollection) {
      await commentsCollection.insertOne(c);
      return res.json({ ok: true, stored: true });
    } else {
      commentsStore.unshift(c);
      if (commentsStore.length > 500) commentsStore.pop();
      return res.json({ ok: true, stored: false });
    }
  } catch (err) {
    return res.status(500).json({ error: "Failed to save comment" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
