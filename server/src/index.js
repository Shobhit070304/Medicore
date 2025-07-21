import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";

import rateLimit from "express-rate-limit";

// Import routes
import userRoutes from "./routes/user-routes.js";
import diseaseRoutes from "./routes/disease-routes.js";
import medicineRoutes from "./routes/medicine-routes.js";
import chatbotRoutes from "./routes/chatbot-routes.js";

const app = express();

//Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use(limiter);

// Connect to MongoDB
connectDB();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/", (req, res) => {
  res.status(200).json({ msg: "Hello from Backend" });
});
app.use("/api/user", userRoutes);
app.use("/api/disease", diseaseRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/chatbot", chatbotRoutes);

export default app;
