import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // <-- Make sure this runs!
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!uri) {
      console.error("❌ ERROR: MONGODB_URI is undefined!");
      process.exit(1);
    }

    await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB,
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    process.exit(1);
  }
};

export default connectDB;
