import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ChatButton from "./components/chatbot/ChatButton";
import ChatWindow from "./components/chatbot/ChatWindow";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialChatMessage, setInitialChatMessage] = useState("");

  useEffect(() => {
    const handleOpenChatWithMessage = (event) => {
      const query = event.detail?.message || "";

      setInitialChatMessage(query);
      setIsChatOpen(true);
    };

    window.addEventListener(
      "open-zeva-chat-with-message",
      handleOpenChatWithMessage,
    );

    return () => {
      window.removeEventListener(
        "open-zeva-chat-with-message",
        handleOpenChatWithMessage,
      );
    };
  }, []);

  const openChat = () => {
    setInitialChatMessage("");
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setInitialChatMessage("");
  };

  return (
    <>
      <Navbar />

      <Home />

      {isChatOpen ? (
        <ChatWindow
          onClose={closeChat}
          initialMessage={initialChatMessage}
        />
      ) : (
        <ChatButton onClick={openChat} />
      )}
    </>
  );
}

export default App;