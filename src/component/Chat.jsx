import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  const mockResponse = (question) => {
    const lower = question.toLowerCase();

    if (lower.includes("how do i sell my license")) {
      return "To sell your license, go to your Dashboard, select the license you want to sell, and click on 'Sell License'. You'll be guided through the steps.";
    }

    if (lower.includes("license")) {
      return "To sell your license, go to your Dashboard and click on 'Sell License'.";
    }

    if (lower.includes("support")) {
      return "You can reach our support team through the Contact section or email us directly.";
    }

    if (lower.includes("payment")) {
      return "We accept UPI, credit/debit cards, and PayPal.";
    }

    return "I'm still learning! Try asking: 'How do I sell my license?', 'license', 'support', or 'payment'.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    const reply = mockResponse(input);
    setMessages([...newMessages, { sender: "ai", text: reply }]);
    setInput("");
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          className="p-3 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 transition-colors duration-200 flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      ) : (
        <div className="w-80 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl shadow-xl p-4 flex flex-col justify-between h-96 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                SoftSell Assistant
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 px-1 text-sm scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 text-xs py-4">
                Ask me about selling licenses, payments, or support
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-gray-200 text-gray-800 dark:bg-zinc-700 dark:text-white"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="mt-2">
            <div className="relative">
              <input
                className="w-full border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-sm text-black dark:text-white px-3 py-2 rounded-lg placeholder:text-sm dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about selling licenses..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                onClick={sendMessage}
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}