import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ChatButton from "./components/chatbot/ChatButton";
import ChatWindow from "./components/chatbot/ChatWindow";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Navbar />

      <Home />

      {isChatOpen ? (
        <ChatWindow onClose={() => setIsChatOpen(false)} />
      ) : (
        <ChatButton onClick={() => setIsChatOpen(true)} />
      )}
    </>
  );
}

export default App;
