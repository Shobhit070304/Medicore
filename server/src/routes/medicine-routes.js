import express from "express";
const router = express.Router();
import Medicine from "../models/medicine-model.js";
import verifyUser from "../middlewares/auth.js";

// @route GET /api/medicines
router.get("/all", async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route GET /api/medicines/:id
router.get("/:id", verifyUser, async (req, res) => {
  try {
    const med = await Medicine.findById(req.params.id);
    if (!med) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json(med);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
