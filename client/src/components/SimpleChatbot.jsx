
import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI medical assistant. How can I help you today?", isBot: true }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    
    // Enhanced bot responses
    setTimeout(() => {
      const responses = [
        "Thank you for your question. For specific medical advice, please consult with a licensed healthcare professional.",
        "I can help you find information about medicines and general health topics. What would you like to know?",
        "Based on your query, I recommend checking our medicines database or consulting with a doctor for personalized advice.",
        "I'm here to assist with general medical information. For urgent matters, please contact emergency services."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { 
        text: randomResponse, 
        isBot: true 
      }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-primary hover:opacity-90 transition-all duration-300 z-50 shadow-2xl animate-glow"
          size="sm"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] glass-card border-white/20 rounded-3xl shadow-2xl z-50 flex flex-col backdrop-blur-xl">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Medical Assistant</h3>
                <p className="text-xs text-gray-400">Online now</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="glass-button rounded-full w-8 h-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm flex items-start space-x-2 ${
                  msg.isBot 
                    ? 'bg-white/10 text-white border border-white/10' 
                    : 'gradient-primary text-white'
                }`}>
                  {msg.isBot && (
                    <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  )}
                  {!msg.isBot && (
                    <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  )}
                  <span className="leading-relaxed">{msg.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything about health..."
                className="flex-1 glass-card border-white/20 bg-white/5 text-white placeholder-gray-400 rounded-xl focus:border-purple-500/50"
              />
              <Button 
                onClick={sendMessage} 
                size="sm"
                className="gradient-primary hover:opacity-90 transition-all duration-300 rounded-xl px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI responses are for general information only. Consult a doctor for medical advice.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleChatbot;
