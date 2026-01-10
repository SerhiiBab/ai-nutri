import { GoogleGenAI, Type } from "@google/genai";

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

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { description } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Extrahiere die Nährwertinformationen für die folgende Mahlzeitenbeschreibung: "${description}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: nutritionSchema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty AI response");

    return new Response(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "AI failed" }),
      { status: 500 }
    );
  }
}
