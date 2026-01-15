
import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: "Commission Fee", third: "15% – 30% per order", green: "0% Commission", status: 'loss' },
    { name: "Customer Data", third: "They keep it. You’re invisible.", green: "You own it. Build your list.", status: 'loss' },
    { name: "Payouts", third: "Weekly or Bi-weekly", green: "Instant (via Yoco/Paystack)", status: 'loss' },
    { name: "Menu Prices", third: "Marked up (Hurts your brand)", green: "True Prices (Happy customers)", status: 'loss' },
    { name: "Loyalty", third: "They belong to the app.", green: "They belong to YOU.", status: 'loss' },
  ];

  return (
    <div className="py-32 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-3xl mb-6">
            <ShieldAlert size={32} />
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">The Brutal Math of App Fees</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto transition-colors duration-300">Why the biggest brands in South Africa are moving their loyal customers to GreenNova.</p>
        </div>
        
        <div className="overflow-hidden bg-white dark:bg-slate-900 shadow-[0_32px_120px_rgba(0,0,0,0.08)] dark:shadow-none rounded-[48px] border border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 dark:bg-slate-800 text-white">
                <th className="py-10 px-12 text-xl font-black border-r border-slate-800 dark:border-slate-700">Operational Value</th>
                <th className="py-10 px-12 text-xl font-black">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    Delivery Apps
                  </div>
                </th>
                <th className="py-10 px-12 text-xl font-black bg-emerald-600 dark:bg-emerald-700 relative overflow-hidden">
                  <div className="relative z-10 flex items-center gap-3">
                    <ShieldCheck className="text-white" />
                    GreenNova Direct
                  </div>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {features.map((f, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all">
                  <td className="py-8 px-12 font-black text-slate-800 dark:text-slate-100 border-r border-slate-100 dark:border-slate-800 transition-colors duration-300">{f.name}</td>
                  <td className="py-8 px-12 text-slate-500 dark:text-slate-400 font-bold transition-colors duration-300">
                    <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
                      <X className="text-red-400 shrink-0" size={20} />
                      {f.third}
                    </div>
                  </td>
                  <td className="py-8 px-12 font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50/20 dark:bg-emerald-950/20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <Check className="text-emerald-600 dark:text-emerald-400 shrink-0" size={24} strokeWidth={3} />
                      {f.green}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-400 dark:text-slate-600 text-xs font-black uppercase tracking-[0.4em] transition-colors duration-300">Every percentage point you keep is pure profit.</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
