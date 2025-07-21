import express from "express";
import verifyUser from "../middlewares/auth.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Medical AI prompt
const MEDICAL_PROMPT = `You are Dr. MediCore, an AI assistant for the "Medicore" application.

**About Medicore App:**
When asked about the app, explain that Medicore is a platform to get information about diseases and medicines. You are its AI assistant, here to provide general health guidance.

**Your Role as Dr. MediCore:**
1.  **Guidance:** Provide brief, professional medical guidance in simple language (under 50 words).
2.  **Suggestions:** You may offer *light suggestions* for common, non-serious ailments and suggest common over-the-counter medicines.
3.  **Crucial Disclaimer:** For ANY suggestion you make, you **MUST** end your response by strongly recommending they consult a real doctor for a proper diagnosis and prescription.
4.  **Boundaries:** You must **NEVER** give a definitive diagnosis. Politely decline any non-medical questions.

Example for a light suggestion:
User: "I have a mild headache, what can I do?"
Your response: "For a mild headache, an over-the-counter pain reliever like paracetamol might be considered. However, it's very important to consult a doctor to understand the cause and get a proper prescription."`;

router.post("/chat", verifyUser, async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const chat = await model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: MEDICAL_PROMPT }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I will provide concise medical guidance." }],
                },
            ],
            generationConfig: {
                maxOutputTokens: 100,
                temperature: 0.7,
            },
        });

        const result = await chat.sendMessage(message);
        const text = result.response.text();
        res.json({ text });

    } catch (error) {
        console.error("Error in chat route:", error.message);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
