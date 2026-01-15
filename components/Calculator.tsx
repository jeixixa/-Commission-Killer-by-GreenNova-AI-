
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';

const Calculator: React.FC = () => {
  const [avgOrder, setAvgOrder] = useState(200);
  const [ordersPerDay, setOrdersPerDay] = useState(25);
  
  const results = useMemo(() => {
    const monthlyRevenue = avgOrder * ordersPerDay * 30;
    const thirdPartyCut = monthlyRevenue * 0.30; // The 30% "App Tax"
    const greenNovaCut = 0; 
    const savings = thirdPartyCut - greenNovaCut;

    return {
      monthlyRevenue,
      thirdPartyCut,
      savings,
      chartData: [
        {
          name: 'Delivery Apps',
          Profit: monthlyRevenue - thirdPartyCut,
          Tax: thirdPartyCut,
        },
        {
          name: 'GreenNova Direct',
          Profit: monthlyRevenue,
          Tax: 0,
        }
      ]
    };
  }, [avgOrder, ordersPerDay]);

  const scrollToApply = () => {
    const element = document.getElementById('book-demo');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div id="calculator" className="py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-red-100 dark:border-red-900 shadow-sm">
            <AlertCircle size={14} className="animate-pulse" />
            Financial Leakage Assessment
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
            Stop guessing. <br/>
            <span className="text-red-600 dark:text-red-500 italic">See the leakage.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
            When a customer orders a R{avgOrder} meal through a delivery app, you are donating R{(avgOrder * 0.3).toFixed(0)} to a tech company. 
            <span className="block mt-4 text-emerald-600 dark:text-emerald-400 font-black">That money should be your rent, your staff wages, or your profit.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-12 bg-slate-50 dark:bg-slate-950 p-12 rounded-[48px] md:rounded-[64px] border border-slate-100 dark:border-slate-800 shadow-inner">
            <div className="space-y-10">
              <div className="group">
                <div className="flex justify-between items-end mb-6">
                  <label className="text-xs font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Average Order Value</label>
                  <span className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">R{avgOrder}</span>
                </div>
                <input 
                  type="range" 
                  min="50" max="1500" step="10" 
                  value={avgOrder} 
                  onChange={(e) => setAvgOrder(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
                />
              </div>

              <div className="group">
                <div className="flex justify-between items-end mb-6">
                  <label className="text-xs font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Orders Per Day</label>
                  <span className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">{ordersPerDay}</span>
                </div>
                <input 
                  type="range" 
                  min="5" max="300" step="5"
                  value={ordersPerDay} 
                  onChange={(e) => setOrdersPerDay(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8">
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[32px] md:rounded-[40px] shadow-2xl shadow-emerald-100/50 dark:shadow-emerald-950/20 border border-emerald-50 dark:border-emerald-900/30 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em] mb-2">Monthly Leakage</p>
                    <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">R{results.savings.toLocaleString()}</p>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-[24px] flex items-center justify-center shadow-2xl shadow-emerald-200">
                    <TrendingUp size={32} />
                  </div>
                </div>
              </div>

              <button 
                onClick={scrollToApply}
                className="w-full py-8 bg-slate-900 text-white rounded-[32px] font-black text-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-4 group"
              >
                Save These Profits
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="lg:col-span-7 h-[500px] md:h-[650px] w-full bg-white dark:bg-slate-950 rounded-[48px] md:rounded-[64px] p-8 md:p-16 border border-slate-100 dark:border-slate-800 flex flex-col shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative z-10 gap-6">
              <h3 className="font-black text-slate-900 dark:text-white text-2xl tracking-tight">Financial Shield Comparison</h3>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-slate-400 dark:text-slate-600">Donated to Apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-400 dark:text-slate-600">Your Money</span>
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-0 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={results.chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" className="dark:opacity-5" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontWeight: 800, fontSize: 12 }}
                    dy={20}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '32px', border: 'none', backgroundColor: '#0f172a', color: '#fff', boxShadow: '0 40px 100px rgba(0,0,0,0.4)', fontWeight: '800', padding: '24px 32px' }}
                    formatter={(value: number) => [`R${value.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="Profit" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} barSize={80} />
                  <Bar dataKey="Tax" stackId="a" fill="#ef4444" radius={[24, 24, 0, 0]} barSize={80} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-50 dark:border-slate-900 flex items-center gap-6 relative z-10">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shadow-inner shrink-0">
                <AlertCircle size={28} />
              </div>
              <p className="text-lg text-slate-400 dark:text-slate-500 font-bold leading-relaxed">
                <span className="text-emerald-600 dark:text-emerald-400 font-black">Audit Insight:</span> At your current volume, you are paying for Uber Eats' executive bonuses instead of your own growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
