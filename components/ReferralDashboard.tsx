
import React, { useState } from 'react';
import { Gift, Users, Copy, Check, Share2, Award, Zap } from 'lucide-react';
import { CONFIG } from '../config';

const ReferralDashboard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = `https://greennova.ai/ref/owner_${Math.random().toString(36).substring(7)}`;

  const stats = [
    { label: "Referrals Sent", value: "12", icon: <Share2 size={20} /> },
    { label: "Successful Switches", value: "3", icon: <Users size={20} /> },
    { label: "Credits Earned", value: `R3,000`, icon: <Award size={20} /> },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="referral" className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-900 rounded-[48px] md:rounded-[64px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-5 p-10 md:p-20 bg-slate-900 text-white relative">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                  <Zap size={12} fill="currentColor" />
                  Network Growth Program
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                  Expand the <br/>
                  <span className="text-emerald-500 italic underline decoration-emerald-500/30 decoration-8 underline-offset-8">Shield.</span>
                </h2>
                <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12">
                  Help fellow restaurant owners reclaim their margins. Every referral that kills their App Tax earns you **R1,000 in account credits.**
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                      <Gift size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-emerald-400">The Reward</h4>
                      <p className="text-slate-300 font-bold">R1,000 credit per signup</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-emerald-400">The Impact</h4>
                      <p className="text-slate-300 font-bold">Help a friend save 30%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dashboard Area */}
            <div className="lg:col-span-7 p-10 md:p-20">
              <div className="mb-16">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 block">Your Referral Shield Link</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 flex items-center justify-between group overflow-hidden">
                    <span className="text-sm font-bold text-slate-400 dark:text-slate-600 truncate mr-4">
                      {referralLink}
                    </span>
                    <button 
                      onClick={handleCopy}
                      className="text-emerald-600 hover:text-emerald-500 transition-colors p-2"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="bg-slate-900 dark:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {stats.map((s, i) => (
                  <div key={i} className="p-8 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 group hover:border-emerald-500/30 transition-all">
                    <div className="text-emerald-600 dark:text-emerald-400 mb-4">{s.icon}</div>
                    <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{s.value}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress Bar for Rewards */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Next Milestone: Free Year of Service</p>
                  <p className="text-sm font-black text-emerald-600">3/10 Referrals</p>
                </div>
                <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="h-full bg-emerald-600 w-[30%] transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[9px] font-bold text-slate-400">Current: R3,000 Credit</span>
                  <span className="text-[9px] font-bold text-slate-400">Reward: Lifetime 0% Fees</span>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800 flex items-center gap-6">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Share2 size={24} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                  Join the movement. Every kitchen you refer makes the direct-ordering network stronger for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralDashboard;
