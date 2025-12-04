import Astrologer from "../models/Astrologer.js";

export const getAstrologers = async (req, res) => {
  try {
    const data = await Astrologer.find();
    console.log("Fetched astrologers:", data);  // Debug
    res.json(data);
  } catch (err) {
    console.error("Astrologer Fetch Error:", err); // <– SHOW REAL ERROR
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
