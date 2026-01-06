import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text, imageBase64, history } = req.body;

    // 🔒 СКРЫТЫЙ КОНТЕКСТ (не виден пользователю)
    const SYSTEM_PROMPT = `
Ты должен строго проанализировать запрос и определить максимально точно сколько углеводов, жиров, калорий и белков в еде.
Ответ должен быть строго в формате = 
Kohlenhydrate-(число g), 
Fette-(число g), 
Proteine-(число g), 
Kalorien-(число kkal).
`;

    const messages: any[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || [])
    ];

    // 📸 Если есть картинка
    if (imageBase64) {
      messages.push({
        role: "user",
        content: [
          { type: "text", text },
          {
            type: "image_url",
            image_url: {
              url: imageBase64
            }
          }
        ]
      });
    } else {
      messages.push({
        role: "user",
        content: text
      });
    }

    const response = await fetch(
      "https://api.deepseek.com/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages
        })
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "DeepSeek error" });
  }
}
