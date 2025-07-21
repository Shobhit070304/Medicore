import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, unique: true },
  age: { type: String },
  bloodGroup: { type: String },
  allergies: {
    type: Array,
    default: [],
  },
  conditions: {
    type: Array,
    default: [],
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
