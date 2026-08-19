import { useEffect } from "react";
import { Bot } from "lucide-react";

function ChatButton({ onClick }) {
  useEffect(() => {
    const handleOpenChat = () => {
      onClick();
    };

    window.addEventListener("open-zeva-chat", handleOpenChat);

    return () => {
      window.removeEventListener("open-zeva-chat", handleOpenChat);
    };
  }, [onClick]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-orange-500 px-5 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500">
        <Bot size={26} />
      </div>

      <div className="text-left">
        <p className="text-xs opacity-90">Need Help?</p>

        <h3 className="font-semibold leading-none">Ask Zeva AI</h3>
      </div>
    </button>
  );
}

export default ChatButton;