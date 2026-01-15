
import React from 'react';
import { ChevronRight, TrendingUp, ShieldCheck, MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';

interface HeroProps {
  onSecondaryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSecondaryClick }) => {
  const waMessage = encodeURIComponent("Hi! I just saw the Commission-Killer tool. Can we schedule a Profit Audit for my kitchen?");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-teal-50/60 dark:bg-teal-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest mb-12 shadow-xl shadow-emerald-500/20 backdrop-blur-sm animate-bounce-slow">
          <ShieldCheck size={16} />
          <span>Founding Member Beta: 12 Spots Remaining for April</span>
        </div>
        
        <h1 className="text-5xl md:text-[7.5rem] font-black text-slate-900 dark:text-white leading-[0.9] mb-8 tracking-tighter transition-colors duration-300">
          Stop Paying the <br/>
          <span className="text-gradient italic drop-shadow-sm">30% “App Tax.”</span>
        </h1>

        <p className="text-xl md:text-3xl text-slate-900 dark:text-emerald-50 max-w-4xl mx-auto mb-6 font-bold transition-colors duration-300">
          Reclaim Your Restaurant’s Profits.
        </p>
        
        <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium transition-colors duration-300">
          Uber Eats and Mr D take a massive cut of every plate you serve. We build your branded direct-ordering system so you can keep <span className="text-emerald-600 dark:text-emerald-400 font-extrabold bg-emerald-50/80 dark:bg-emerald-900/20 px-4 py-2 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/50">100% of your revenue</span>. 
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollTo('calculator')}
            className="shimmer group w-full md:w-auto px-12 py-8 bg-slate-900 text-white dark:bg-emerald-600 rounded-3xl font-black text-2xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-200 dark:shadow-emerald-950/40 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3"
          >
            Run My Profit Audit
            <TrendingUp size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <a 
            href={`https://wa.me/${CONFIG.contact.whatsappNumber}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 rounded-3xl font-black text-2xl hover:border-emerald-600 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-500 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            Chat on WhatsApp
            <MessageCircle size={24} strokeWidth={3} className="text-emerald-600" />
          </a>
        </div>

        {/* Integration Bar */}
        <div className="mt-32 flex flex-col items-center">
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] mb-12 transition-colors duration-300">Diagnostic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale dark:invert opacity-40 hover:opacity-100 hover:grayscale-0 dark:hover:invert-0 transition-all duration-700">
            <span className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white">YOCO</span>
            <span className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white italic">PAYSTACK</span>
            <span className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white">PAYFAST</span>
            <span className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white">WHATSAPP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
