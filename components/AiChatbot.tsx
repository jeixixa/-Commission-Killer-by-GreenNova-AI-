
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Minus, Maximize2, Zap, Bot, ArrowRight, TrendingUp } from 'lucide-react';
import { sendMessageToNova } from '../services/chatService';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      parts: [{ text: "I'm the GreenNova Profit Specialist. You're likely donating 30% of your revenue to delivery apps right now. Ready to kill the 'App Tax' and reclaim your margins?" }] 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const logoAvatar = "logo.png";

  const quickPrompts = [
    { label: "Calculate my App Tax", prompt: "I do R100k a month on apps. How much money am I actually losing?" },
    { label: "Stop waiting for payouts", prompt: "How do I get my money via Yoco or Paystack instantly instead of waiting 14 days?" },
    { label: "Own my customers", prompt: "How does GreenNova help me get my customers' phone numbers back from the apps?" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customMessage?: string) => {
    const userMsg = (customMessage || input).trim();
    if (!userMsg || isLoading) return;

    if (!customMessage) setInput('');
    
    const newMessages: Message[] = [...messages, { role: 'user', parts: [{ text: userMsg }] }];
    setMessages(newMessages);
    setIsLoading(true);

    const response = await sendMessageToNova(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: response || '' }] }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-28 right-8 z-[110] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[420px] h-[600px] bg-white dark:bg-slate-950 rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 fade-in duration-500">
          {/* Header */}
          <div className="bg-slate-900 dark:bg-slate-900 p-8 flex items-center justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl overflow-hidden border-2 border-emerald-500/30 flex items-center justify-center shadow-xl p-2">
                <img 
                  src={logoAvatar} 
                  alt="GreenNova Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                />
              </div>
              <div>
                <h4 className="font-black tracking-tight text-lg leading-none mb-1 uppercase">GreenNova AI</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400/80">Intelligence Active</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-900/50 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {m.role === 'model' && (
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-white shadow-sm shrink-0 border border-emerald-500/20 mt-1 flex items-center justify-center p-1">
                    <img src={logoAvatar} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-3xl font-medium text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none shadow-lg shadow-emerald-200 dark:shadow-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {m.parts[0].text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-white shadow-sm shrink-0 border border-emerald-500/20 mt-1 flex items-center justify-center p-1">
                  <img src={logoAvatar} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Prompts */}
            {!isLoading && messages.length < 3 && (
              <div className="space-y-2 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mb-3">Recover Your Profits</p>
                {quickPrompts.map((qp, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(qp.prompt)}
                    className="w-full text-left p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all flex items-center justify-between group shadow-sm"
                  >
                    {qp.label}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about reclaiming your profit..."
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 pr-14 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all dark:text-white font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all disabled:opacity-50 shadow-lg shadow-emerald-200 dark:shadow-none"
              >
                <Send size={18} strokeWidth={3} />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Zap size={10} className="text-emerald-500 animate-pulse" />
              <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">Commission-Killer AI Active</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-[32px] flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group overflow-hidden ${
          isOpen 
            ? 'bg-slate-900 text-white' 
            : 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 border-2 border-slate-100 dark:border-slate-800 p-2 shadow-[0_15px_40px_rgba(16,185,129,0.2)]'
        }`}
      >
        {isOpen ? (
          <X size={32} strokeWidth={3} />
        ) : (
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[24px] overflow-hidden group-hover:rotate-6 transition-transform flex items-center justify-center p-3 border border-slate-100 dark:border-slate-800 shadow-inner">
              <img src={logoAvatar} alt="GreenNova AI ChatBot" className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
            </div>
            <div className="absolute -top-1 -right-1 flex items-center justify-center">
              <span className="w-5 h-5 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-full animate-pulse flex items-center justify-center">
                <Sparkles size={8} className="text-white fill-current" />
              </span>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default AiChatbot;
