import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: String,
  type: String,
  dosage: String,
  description: String,
  uses: [String],
  sideEffects: [String],
  precautions: [String],
  price: String,
});

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;
