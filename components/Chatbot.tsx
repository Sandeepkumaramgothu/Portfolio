import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Greetings. I am the Ronin Assistant. Ask me about Sandeep's [Projects], [Skills], or [Experience]." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      const stream = await sendMessageStream(userMessage);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsgIndex = newMessages.length - 1;
          if (newMessages[lastMsgIndex].role === 'model') {
            newMessages[lastMsgIndex] = {
              ...newMessages[lastMsgIndex],
              text: fullResponse
            };
          }
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "My comm-link is down... I cannot respond right now.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-cyber-panel/95 backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,60,0.3)] border border-cyber-neon rounded-lg flex flex-col overflow-hidden cyber-box"
            >

              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-cyber-panel to-cyber-base border-b border-cyber-neon/50 flex justify-between items-center shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,60,0.06),rgba(255,0,60,0.02),rgba(255,0,60,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none"></div>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-cyber-neon/20 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(255,0,60,0.5)] border border-cyber-neon">
                    <Bot size={24} className="text-cyber-neon" />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                      Ronin AI
                      <span className="w-2 h-2 bg-cyber-success rounded-full animate-pulse shadow-[0_0_5px_rgba(0,255,65,0.8)]"></span>
                    </h3>
                    <p className="text-[10px] text-cyber-neon font-rajdhani tracking-widest">SYSTEM ONLINE</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-cyber-neon hover:text-white transition-colors relative z-10">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cyber-base/50 scrollbar-thin scrollbar-thumb-cyber-neon scrollbar-track-cyber-base font-rajdhani">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 text-sm border ${msg.role === 'user'
                      ? 'bg-cyber-neon/20 text-white border-cyber-neon rounded-tl-xl rounded-br-xl shadow-[0_0_10px_rgba(255,0,60,0.2)]'
                      : msg.isError
                        ? 'bg-red-950 text-red-400 border-red-600'
                        : 'bg-cyber-panel/80 text-cyber-subtext border-cyber-neon/30 rounded-tr-xl rounded-bl-xl border-l-2 border-l-cyber-neon'
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.text === '' && (
                  <div className="flex justify-start">
                    <div className="bg-cyber-panel p-3 border border-cyber-neon/50 rounded-full cyber-glow">
                      <Loader2 size={16} className="animate-spin text-cyber-neon" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-cyber-base border-t border-cyber-neon/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about my projects..."
                    className="flex-1 bg-cyber-panel border border-cyber-neon/50 px-4 py-2 text-sm text-white focus:outline-none focus:border-cyber-neon font-orbitron transition-all placeholder:text-cyber-subtext/50"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="p-2 bg-cyber-dim border border-cyber-neon hover:bg-cyber-neon disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,0,60,0.5)]"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-cyber-panel text-cyber-neon shadow-[0_0_20px_rgba(255,0,60,0.5)] border-2 border-cyber-neon hover:bg-cyber-neon hover:text-white transition-all duration-300 flex items-center justify-center z-50 overflow-hidden relative group cyber-box"
        >
          <div className="absolute inset-0 bg-cyber-neon/20 animate-ping opacity-75 cyber-box"></div>
          <div className="relative z-10">
            {isOpen ? <X size={32} /> : <Bot size={32} className="drop-shadow-[0_0_5px_rgba(255,0,60,0.8)]" />}
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;