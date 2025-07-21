import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  medicine: { type: String, required: true },
  dosage: { type: String, required: true },
  duration: { type: String, required: true },
});

const diagnosisSchema = new mongoose.Schema({
  diagnosis: { type: String, required: true },
  confidence: { type: String, required: true },
  symptoms: [{ type: String, required: true }],
  recommendations: [recommendationSchema],
  precautions: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

export default Diagnosis;
