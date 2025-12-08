import React, { useState } from "react";
import "../Components/chatbot.css";
import botImg from "../assets/chatbot.webp";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "Greetings",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 700);

    setInput("");
  };

  return (
    <>
      {/* FLOATING ICON BUTTON */}
      <div className="chatbot-icon" onClick={() => setOpen(!open)}>
        <img src={botImg} alt="chatbot" />
      </div>

      {/* CHAT POPUP */}
      {open && (
        <div className="chatbot-popup">
          <div className="chat-header">
            <span>May I Help You</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
