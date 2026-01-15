
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';

const WhatsAppWidget: React.FC = () => {
  const message = encodeURIComponent("Hi GreenNova! I'd like a Free Profit Audit for my restaurant. I want to stop paying the 30% App Tax.");
  
  return (
    <a 
      href={`https://wa.me/${CONFIG.contact.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-4"
    >
      <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none">
        <p className="text-sm font-black text-slate-900 dark:text-white whitespace-nowrap">Claim Your Free Profit Audit</p>
        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest text-right">Online Now</p>
      </div>
      <div className="w-16 h-16 bg-emerald-600 text-white rounded-[24px] flex items-center justify-center shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-110 active:scale-95 transition-all animate-float">
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white dark:border-slate-950 rounded-full"></span>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
