import React, { useState, useEffect } from 'react';

const ChatbotModal = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(match.matches);
    const listener = (e) => setIsDark(e.matches);
    match.addEventListener('change', listener);
    return () => match.removeEventListener('change', listener);
  }, []);

  const sendMessage = async () => {
  if (!input.trim()) return;

  setChat((prev) => [...prev, { sender: 'user', text: input }]);
  setInput('');
  setLoading(true);

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [{ role: 'user', content: input }],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'No reply.';

    setChat((prev) => [...prev, { sender: 'bot', text: reply }]);
  } catch (error) {
    setChat((prev) => [...prev, { sender: 'bot', text: 'Error contacting OpenRouter API.' }]);
    console.error(error);
  }

  setLoading(false);
};



  return (
    <>
      <button onClick={() => setOpen(true)} className="bottomAskAI">Ask AI</button>

      {open && (
        <div className={`chatbot-backdrop ${isDark ? 'dark' : 'light'}`} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className={`chatbot-modal ${isDark ? 'dark' : 'light'}`}>
            <h3 className="chatbot-header">AI Assistant</h3>

            <div className="chatbot-messages">
              {chat.map((msg, idx) => (
                <div key={idx} className={`chat-line ${msg.sender === 'user' ? 'from-user' : 'from-bot'}`}>
                  <span className="chat-message">{msg.text}</span>
                </div>
              ))}
            </div>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="custom-input"
              placeholder="Type your question..."
            />

            <div className="chatbot-buttons">
              <button onClick={sendMessage} disabled={loading} className={`custom-button ${loading ? 'disabled' : ''}`}>
                {loading ? '✨ Thinking...' : 'Send'}
              </button>
              <button onClick={() => setOpen(false)} className="close-button">Close</button>
            </div>
          </div>
        </div>
      )}

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

        .chatbot-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.4s ease-out forwards;
        }

        .chatbot-backdrop.light {
          background: rgba(255, 255, 255, 0.7);
        }

        .chatbot-backdrop.dark {
          background: rgba(0, 0, 0, 0.7);
        }

        .chatbot-modal {
          border-radius: 20px;
          padding: 24px;
          width: 90%;
          max-width: 500px;
          animation: slideIn 0.5s ease-out;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .chatbot-modal.light {
          background: linear-gradient(to bottom right, #ffffff, #f3f3f3);
          color: #111;
        }

        .chatbot-modal.dark {
          background: linear-gradient(to bottom right, #1c1c1c, #2a2a2a);
          color: #f1f1f1;
        }

        .chatbot-header {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(200, 200, 200, 0.3);
        }

        .chatbot-messages {
          max-height: 350px;
          overflow-y: auto;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-right: 6px;
          scroll-behavior: smooth;
        }

        .chat-line {
          display: flex;
        }

        .from-user {
          justify-content: flex-end;
          animation: slideLeft 0.3s ease-out;
        }

        .from-bot {
          justify-content: flex-start;
          animation: slideRight 0.3s ease-out;
        }

        .chat-message {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
          transition: transform 0.2s ease;
        }

        .from-user .chat-message {
          background: linear-gradient(to right, #667eea, #764ba2);
          color: white;
        }

        .from-bot .chat-message {
          background: linear-gradient(to right, #dbeafe, #e0e7ff);
          color: #111;
        }

        .chat-message:hover {
          transform: scale(1.02);
        }

        .custom-input {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          margin-bottom: 20px;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .chatbot-modal.dark .custom-input {
          background: #2d2d2d;
          border: 1px solid #444;
          color: white;
        }

        .custom-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.25);
          outline: none;
        }

        .chatbot-buttons {
          display: flex;
          gap: 10px;
        }

        .custom-button,
        .close-button {
          flex: 1;
          padding: 14px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-button {
          background: linear-gradient(to right, #667eea, #764ba2);
        }

        .custom-button:hover {
          transform: scale(1.05);
        }

        .custom-button.disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: scale(0.98);
        }

        .close-button {
          background: linear-gradient(to right, #f87171, #fca5a5);
        }

        .close-button:hover {
          transform: scale(0.95);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideRight {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ChatbotModal;
