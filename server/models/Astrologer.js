import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  link: String
});

export default mongoose.model("Astrologer", astrologerSchema);
