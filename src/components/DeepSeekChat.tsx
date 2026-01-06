import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const DeepSeekChat = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const send = async () => {
    if (!text && !image) return;

    setLoading(true);

    let imageBase64 = null;
    if (image) {
      imageBase64 = await toBase64(image);
    }

    const res = await fetch("/api/deepseek", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        imageBase64,
        history: messages.map((m) => ({
          role: m.role,
          content: m.content
        }))
      })
    });

    const data = await res.json();
    const answer = data.choices[0].message.content;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text || "[Image]" },
      { role: "assistant", content: answer }
    ]);

    setText("");
    setImage(null);
    setLoading(false);
  };

  return (
    <div className="absolute bg-white flex flex-col" style={{ maxWidth: 600 }}>
      <textarea
  placeholder="Essen..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // не добавлять новую строку
      if (!loading) {
        send();
      }
    }
  }}
/>

      {/*<input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />*/}

      <button onClick={send} disabled={loading}>
        {loading ? "Analysieren..." : "Rechnen"}
      </button>

      <div>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.role === "user" ? "Essen" : "KI Analyse"}:</b>
            <pre id="antwort">{m.content}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeepSeekChat;
