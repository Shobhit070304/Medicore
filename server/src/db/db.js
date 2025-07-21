import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;
