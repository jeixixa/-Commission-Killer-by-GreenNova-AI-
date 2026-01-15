
import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

interface ResourcesProps {
  onArticleClick?: (id: string) => void;
}

const articles = [
  {
    id: "app-tax-guide",
    category: "Economics",
    title: "How to Ditch Uber Eats Without Losing Your Customers",
    desc: "A step-by-step migration strategy for restaurant owners who are tired of 30% fees.",
    tag: "12 min read"
  },
  {
    id: "whatsapp-loyalty",
    category: "Marketing",
    title: "The Psychology of Menu Upselling in the Digital Age",
    desc: "How direct WhatsApp ordering creates a 40% higher repeat order rate.",
    tag: "10 min read"
  },
  {
    id: "yoco-vs-paystack",
    category: "Operations",
    title: "Yoco vs Paystack vs PayFast: The Settlement Battle",
    desc: "A breakdown of payment gateway fees and settlement times for SA restaurants.",
    tag: "15 min read"
  }
];

const Resources: React.FC<ResourcesProps> = ({ onArticleClick }) => {
  return (
    <section id="resources" className="py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-100 dark:border-emerald-900 shadow-sm">
              <BookOpen size={14} />
              The Profit Playbook
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
              Restaurant Growth <br/>
              <span className="text-emerald-600 italic">Resources Hub.</span>
            </h2>
          </div>
          <button className="flex items-center gap-3 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
            View All Insights
            <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((art, i) => (
            <div 
              key={i} 
              className="group cursor-pointer"
              onClick={() => onArticleClick?.(art.id)}
            >
              <div className="bg-slate-100 dark:bg-slate-800 h-64 rounded-[40px] mb-8 overflow-hidden relative border border-slate-200 dark:border-slate-700">
                 <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-emerald-600/20 transition-colors"></div>
                 <div className="absolute top-6 left-6 px-4 py-1.5 bg-white dark:bg-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                   {art.category}
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                        Read Insight <ArrowUpRight size={16} />
                    </div>
                 </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                {art.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 line-clamp-2">
                {art.desc}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{art.tag}</span>
                <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
