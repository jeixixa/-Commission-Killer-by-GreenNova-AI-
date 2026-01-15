
import React from 'react';
import { ArrowLeft, Clock, Share2, ShieldCheck, ChevronRight, Zap } from 'lucide-react';
import { Article } from '../types';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onAction: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onAction }) => {
  return (
    <div className="pt-32 pb-40 bg-white dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-100 dark:border-emerald-900">
              {article.category}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">
              {article.title}
            </h1>

            <div className="flex items-center gap-8 mb-12 py-6 border-y border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-black text-xs">GN</div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white">GreenNova Editorial</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Strategy Team</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-xs">
                <Clock size={14} />
                {article.tag}
              </div>
              <button className="ml-auto flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors font-black text-[10px] uppercase tracking-widest">
                <Share2 size={14} />
                Share
              </button>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-medium leading-[1.8] space-y-8">
              {article.content}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-slate-900 dark:bg-emerald-600 p-8 md:p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="text-emerald-400 dark:text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-tight">Ready to stop donating 30%?</h3>
                  <p className="text-slate-300 dark:text-emerald-50 text-sm mb-8 font-medium">
                    Join 500+ SA restaurants reclaiming their margins today. No commission. No hidden fees.
                  </p>
                  <button 
                    onClick={onAction}
                    className="w-full py-4 bg-emerald-500 dark:bg-white dark:text-emerald-700 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl"
                  >
                    Start My Free Trial
                    <ChevronRight size={16} strokeWidth={3} />
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm">
                <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Key Takeaways</h4>
                <ul className="space-y-4">
                  {[
                    "Direct ordering increases profit per plate by 22%.",
                    "Instant payouts fix hospitality cash flow.",
                    "WhatsApp ordering reduces order friction by 40%."
                  ].map((tip, idx) => (
                    <li key={idx} className="flex gap-3 text-sm font-bold text-slate-500 dark:text-slate-400 leading-snug">
                      <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
