import express from "express";
import { getAstrologers } from "../controllers/astrologerController.js";

const router = express.Router();

router.get("/", getAstrologers);

export default router;
