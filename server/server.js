import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import astrologerRoutes from "./routes/astrologerRoutes.js";

dotenv.config();

// MongoDB Connection (only once)
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ⭐ Serve uploaded images correctly
app.use("/uploads/astrologers", express.static("uploads/astrologers"));

// API Routes
app.use("/api/users", authRoutes);
app.use("/api/users", authRoutes)
app.use("/api/astrologers", astrologerRoutes);


// Root Test Route
app.get("/", (req, res) => {
res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
