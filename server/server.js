import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoute.js"; 

dotenv.config();

// ❗ Define app BEFORE using it
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
 

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
