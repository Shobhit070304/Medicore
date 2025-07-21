import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI medical assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { text: message, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/chatbot/chat`,
        {
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const botMessage = { text: response.data.text, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 z-50 shadow-lg hover:shadow-2xl transform hover:scale-110"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[28rem] bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-3 bg-gray-800/90 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">
                  AI Health Assistant
                </h3>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:bg-gray-700 rounded-full w-8 h-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('/path/to/tle-bg.svg')] bg-repeat">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${msg.isBot ? "justify-start" : "justify-end"
                  }`}
              >
                {msg.isBot && (
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.isBot
                    ? "bg-gray-800 text-white rounded-bl-none"
                    : "bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-br-none"
                    }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                {!msg.isBot && (
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg text-sm flex items-start space-x-2 bg-white/10 text-white border border-white/10">
                  <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-gray-800/90 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && sendMessage()}
                placeholder="Ask a question..."
                className="flex-1 bg-gray-700 border-gray-600 text-sm text-white placeholder-gray-400 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent h-10"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                size="icon"
                className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleChatbot;
