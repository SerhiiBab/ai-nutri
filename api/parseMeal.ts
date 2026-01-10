// /pages/api/parseMeal.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenAI, Type } from "@google/genai";
import type { NutritionData } from "../types";

console.log("API_KEY exists?", !!process.env.API_KEY); // <-- это будет видно только в логах Vercel

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { description } = req.body;

  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY nicht gesetzt!");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const nutritionSchema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          itemName: { type: Type.STRING },
          calories: { type: Type.NUMBER },
          protein: { type: Type.NUMBER },
          fat: { type: Type.NUMBER },
          carbs: { type: Type.NUMBER },
        },
        required: ["itemName", "calories", "protein", "fat", "carbs"],
      },
    };

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Extrahiere die Nährwertinformationen für die folgende Mahlzeitenbeschreibung: "${description}". Gib genaue Schätzungen basierend auf Standard-Nährwertdaten an. Die Namen der Lebensmittel im JSON sollten auf Deutsch.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: nutritionSchema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Leere Antwort von der KI");

    res.status(200).json(JSON.parse(text) as NutritionData[]);
  } catch (error) {
    console.error(error); // <-- это будет видно в Vercel Logs
    res.status(500).json({ error: "Fehler bei der Analyse der Mahlzeit" });
  }
}
