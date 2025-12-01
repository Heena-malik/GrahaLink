import React, { useState } from "react";
import "./Assistant.css";

const Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = async () => {
  if (!text.trim()) return;

  const newMsg = { sender: "user", text };
  setMessages((prev) => [...prev, newMsg]);
  setText("");

  try {
    const res = await fetch("http://localhost:5000/api/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: newMsg.text }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: data.reply },
    ]);

  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: "Error connecting to server." },
    ]);
  }
};

  return (
    <div className="assistant-box">
      <div className="chat-area">
        {messages.map((m, i) => (
          <p key={i} className={m.sender}>
            <strong>{m.sender === "user" ? "You" : "AI"}:</strong> {m.text}
          </p>
        ))}
      </div>

      <div className="input-area">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Assistant;
