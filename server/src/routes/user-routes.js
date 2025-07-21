import express from "express";
const router = express.Router();
import User from "../models/user-model.js";
import verifyUser from "../middlewares/auth.js";

router.post("/login", verifyUser, async (req, res) => {
  const { name, email } = req.user;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ user });
    } else {
      const newUser = await User.create({ name, email });
      return res.status(200).json({ user: newUser });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/profile/get", verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/profile/set", verifyUser, async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
