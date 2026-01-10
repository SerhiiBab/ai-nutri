import { GoogleGenAI, Type } from "@google/genai";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { description } = await req.json();

  const ai = new GoogleGenAI({
    apiKey: process.env.API_KEY!,
  });

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

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Extrahiere die Nährwertinformationen für die folgende Mahlzeitenbeschreibung: "${description}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: nutritionSchema,
      },
    });

    return new Response(response.text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Analyse fehlgeschlagen" }),
      { status: 500 }
    );
  }
}
