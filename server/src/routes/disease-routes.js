import dotenc from "dotenv";
dotenc.config();
import express from "express";
import multer from "multer";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import verifyUser from "../middlewares/auth.js";
import Diagnosis from "../models/disease-model.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post(
  "/diagnose",
  verifyUser,
  upload.single("image"),
  async (req, res) => {
    try {
      const symptoms = req.body.symptoms;
      const prompt = `
You are a highly experienced medical AI trained with verified medical data.

A patient is presenting the following symptoms: "${symptoms}".
${
  req.file
    ? "You also have a medical image to review."
    : "No image is available."
}

Your task is to carefully analyze the symptoms ${
        req.file ? "and the image" : ""
      } and provide a response STRICTLY in the JSON format mentioned below. The JSON must be:
- 100% valid
- Free from markdown, code blocks, or commentary
- Fully filled with accurate and simple medical language

Do not add any introduction, explanation, or formatting. Just return raw valid JSON.

### Medical Response Format (fill all fields properly):

{
  diagnosis: "<brief, accurate medical diagnosis>",
  confidence: "<confidence percentage (e.g., 80%)>",
  symptoms: ["<symptom1>", "<symptom2>", "..."],
  recommendations: [
    {
      medicine: "<real medicine name>",
      dosage: "<accurate dosage like '500mg every 6 hours'>",
      duration: "<proper duration like '5 days'>"
    },
    {
      medicine: "<optional 2nd medicine>",
      dosage: "<dosage>",
      duration: "<duration>"
    }
  ],
  precautions: ["<precaution1>", "<precaution2>", "<precaution3>"]
}

### Rules you MUST follow:
- Do NOT include \`\`\`json or any markdown/code block
- Do NOT explain anything
- Use simple and real-world medicines and doses (like Paracetamol, Cough Syrup, Azithromycin, etc.)
- Include realistic, specific, and full content in each section
- Always complete the structure — no missing fields
- Use general medical knowledge only, not rare conditions

Respond with ONLY the above JSON and nothing else.
`;
      console.log(req.user);
      const userId = req.user?.uid || null;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      let result;

      // With image
      if (req.file) {
        const imageBuffer = fs.readFileSync(req.file.path);
        const base64Image = imageBuffer.toString("base64");

        result = await model.generateContent([
          { text: prompt },
          {
            inlineData: {
              mimeType: req.file.mimetype,
              data: base64Image,
            },
          },
        ]);

        fs.unlinkSync(req.file.path); // Clean up temp image
      } else {
        // Only text
        result = await model.generateContent([{ text: prompt }]);
      }

      const response = await result.response;
      let text = await response.text();

      // Remove Markdown code block formatting (like ```json ... ```)
      text = text.replace(/```json|```/g, "").trim();

      // Now safely parse
      const diagnosisData = JSON.parse(text);

      const newDiagnosis = new Diagnosis({ ...diagnosisData, userId });
      await newDiagnosis.save();

      res.status(200).json({ res: newDiagnosis });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get diagnosis." });
    }
  }
);

export default router;
