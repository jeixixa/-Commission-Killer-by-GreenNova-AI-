
import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, ShieldCheck, ArrowUpRight, Coins, Activity, Zap, PieChart } from 'lucide-react';

const SavingsDashboardHero: React.FC = () => {
  const [totalSaved, setTotalSaved] = useState(24580);
  const [recentRecoveries, setRecentRecoveries] = useState([
    { id: 1, amount: 42.50, platform: 'App Tax Avoided' },
    { id: 2, amount: 12.00, platform: 'Service Fee Saved' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.random() * 5;
      setTotalSaved(prev => prev + increment);
      
      if (Math.random() > 0.8) {
        const newAmt = Math.floor(Math.random() * 50) + 10;
        setRecentRecoveries(prev => [
          { id: Date.now(), amount: newAmt, platform: 'Direct Order Bonus' },
          ...prev.slice(0, 1)
        ]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard-preview" className="py-40 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full blur-[180px] -translate-y-1/2 -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-teal-600/5 rounded-full blur-[140px] translate-y-1/2 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-emerald-500/20">
              <Activity size={14} className="animate-pulse" />
              Real-Time Profit Analytics
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">
              The Dashboard <br/>
              <span className="text-emerald-500 italic">of Truth.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
              Stop guessing your margins. Every order through GreenNova is automatically compared against third-party platform fees. Watch your bank account grow, not Uber's.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Coins className="text-emerald-500" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">Total Transparency</h4>
                  <p className="text-slate-500 font-bold leading-relaxed">See exact Rand values of commissions saved per day, week, and month.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <PieChart className="text-emerald-500" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">Category Insights</h4>
                  <p className="text-slate-500 font-bold leading-relaxed">Analyze which dishes are driving your highest direct-order profits.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Visual Dashboard Card */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Dynamic Glow */}
              <div className="absolute -inset-10 bg-emerald-600/20 rounded-[80px] blur-[80px] group-hover:bg-emerald-600/30 transition-all duration-700"></div>
              
              <div className="relative bg-slate-900 border border-white/10 rounded-[56px] p-8 md:p-14 shadow-2xl backdrop-blur-3xl overflow-hidden">
                <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg animate-logo-glow">
                      <img src="logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Profit Monitor</p>
                      <h5 className="font-black text-white text-lg tracking-tight uppercase flex items-center gap-2">
                        Dashboard <Zap size={14} className="text-emerald-500" fill="currentColor" />
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Sync</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Main Counter Card */}
                  <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-[40px] p-10 relative overflow-hidden group/card hover:bg-white/10 transition-all">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/card:scale-110 transition-transform">
                      <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">Commission Recovered</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-400">R</span>
                        <span className="text-6xl md:text-7xl font-black text-white tabular-nums tracking-tighter">
                          {totalSaved.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-emerald-400 font-bold text-sm">
                        <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                          <ArrowUpRight size={18} />
                        </div>
                        +12.4% vs Last Month
                      </div>
                    </div>
                  </div>

                  {/* Secondary Data Cards */}
                  <div className="bg-white/5 border border-white/5 rounded-[40px] p-8 flex flex-col justify-between hover:bg-white/10 transition-all">
                    <div>
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                        <BarChart3 size={20} className="text-slate-400" />
                      </div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Orders</p>
                      <p className="text-3xl font-black text-white">412</p>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full mt-6 overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[65%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-[40px] p-8 flex flex-col justify-between hover:bg-white/10 transition-all overflow-hidden relative">
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                        <ShieldCheck size={20} className="text-emerald-500" />
                      </div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Recent Recoveries</p>
                      
                      <div className="space-y-3">
                        {recentRecoveries.map(rec => (
                          <div key={rec.id} className="flex justify-between items-center animate-in slide-in-from-right-4 fade-in duration-500">
                            <span className="text-[10px] font-bold text-slate-400">{rec.platform}</span>
                            <span className="text-[11px] font-black text-emerald-500">+R{rec.amount.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Labels */}
              <div className="absolute -left-12 -bottom-6 bg-white dark:bg-slate-900 p-6 rounded-[32px] shadow-2xl border border-slate-100 dark:border-white/10 hidden md:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={18} className="text-white" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-black text-sm tracking-tight">Financial Shield: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsDashboardHero;
