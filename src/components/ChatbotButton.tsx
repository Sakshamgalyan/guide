import React, { useEffect, useState } from "react";
import ChatbotModal from "./ChatbotModal";

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(match.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    match.addEventListener("change", listener);
    return () => match.removeEventListener("change", listener);
  }, []);

  return (
    <>
      <button onClick={() => setOpen(true)} className="bottomAskAI">
        Ask AI
      </button>

      <ChatbotModal open={open} onClose={() => setOpen(false)} isDark={isDark} />

      <style>{`
        .bottomAskAI {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background-color: #DACAFF;
          color: black;
          border: none;
          font-size: 18px;
          font-weight: bold;
          z-index: 9999;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .bottomAskAI:hover {
          transform: scale(1.1);
          background-color: #5223BC;
          color: white;
        }
      `}</style>
    </>
  );
};

export default ChatbotButton;
