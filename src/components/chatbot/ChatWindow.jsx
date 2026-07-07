import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Bot, Send, X } from "lucide-react";

function ChatWindow({ onClose }) {
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [sessionId, setSessionId] = useState(
    localStorage.getItem("zevora-session") || "",
  );

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello!\nI'm Zeva AI.\nHow can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/chat`,
        {
          message: userMessage,
        },
        {
          headers: {
            "session-id": sessionId,
          },
        },
      );

      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId);

        localStorage.setItem("zevora-session", data.sessionId);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Unable to reach Zeva AI. Please check your internet connection or try again in a few moments.",
        },
      ]);

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-180 w-95 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
      {/* Header */}

      <div className="flex items-center justify-between bg-orange-500 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500">
            <Bot size={24} />
          </div>

          <div>
            <h3 className="font-bold">Zeva AI</h3>

            <p className="text-sm text-orange-100">Online</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="rounded-full p-2 transition hover:bg-orange-600"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 shadow ${
                  msg.sender === "user"
                    ? "rounded-br-sm bg-orange-500 text-white"
                    : "rounded-bl-sm bg-white text-gray-800"
                }`}
              >
                <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-2 prose-li:my-1">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow">
                <div className="animate-pulse text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      Zeva AI is typing
                    </span>

                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-orange-400"></span>
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-orange-400"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-orange-400"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div>
      </div>

      {/* Quick Actions */}

      <div className="flex flex-wrap gap-2 border-t bg-white px-4 py-3">
        {[
          "🍔 Recommend a Burger",
          "🍕 Best Pizza",
          "🥗 Healthy Food",
          "📦 Track My Order",
          "💳 Payment Help",
          "🎁 Latest Offers",
        ].map((item) => (
          <button
            key={item}
            disabled={loading}
            onClick={() => {
              const text = item.replace(/^[^\s]+\s/, "");

              setMessage(text);

              setTimeout(() => {
                inputRef.current?.focus();
              }, 100);
            }}
            className="rounded-full border border-orange-200 px-3 py-2 text-xs font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white disabled:opacity-50"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Input */}

      <div className="border-t bg-white p-4">
        <div className="flex items-center gap-3 rounded-2xl border border-gray-300 px-4 py-3 shadow-sm">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about food, restaurants, offers..."
            disabled={loading}
            className="flex-1 outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-full bg-orange-500 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
