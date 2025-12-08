import Astrologer from "../models/Astrologer.js";

export const getAstrologers = async (req, res) => {
  try {
    const astrologers = await Astrologer.find();
    res.json(astrologers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
