
import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-600 text-white p-12 md:p-20 rounded-[48px] md:rounded-[64px] text-center animate-in zoom-in duration-500">
        <CheckCircle2 size={80} className="mx-auto mb-8" />
        <h3 className="text-4xl md:text-5xl font-black mb-6">Application Received</h3>
        <p className="text-xl text-emerald-100 max-w-xl mx-auto font-medium leading-relaxed">
          We only take on 12 new restaurants per month to ensure 100% success. A GreenNova specialist will contact you within 2 hours to verify your details.
        </p>
      </div>
    );
  }

  return (
    <section id="book-demo" className="py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-[48px] md:rounded-[64px] overflow-hidden relative border border-white/5">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-lg">
                <Star size={12} fill="currentColor" />
                Founding Member Beta Access
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                Apply to Kill <br/>
                <span className="text-emerald-500">Your App Tax.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                We are validating our platform with a limited group of South African restaurants. As a founding member, you get:
              </p>
              
              <div className="space-y-6">
                {[
                  "Lifetime 0% Commission (Guaranteed)",
                  "First 30 Days Free (Proof of Profit)",
                  "Priority White-Glove Setup",
                  "Direct line to the Founders"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-300 font-bold">
                    <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-12 md:p-20 relative z-10 backdrop-blur-sm border-l border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Restaurant Name</label>
                    <input required type="text" placeholder="e.g. Jozi Grill" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-emerald-500 transition-all font-bold placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input required type="text" placeholder="Owner or Manager" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-emerald-500 transition-all font-bold placeholder:text-slate-600" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
                  <input required type="tel" placeholder="+27 82 000 0000" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-emerald-500 transition-all font-bold placeholder:text-slate-600" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Current Monthly App Revenue</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-emerald-500 transition-all font-bold">
                    <option value="under-10k">Under R10,000</option>
                    <option value="10k-50k">R10,000 - R50,000</option>
                    <option value="50k-150k">R50,000 - R150,000</option>
                    <option value="over-150k">Over R150,000</option>
                  </select>
                </div>

                <button 
                  disabled={loading}
                  className="w-full group shimmer bg-emerald-600 hover:bg-emerald-500 text-white py-6 rounded-3xl font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Apply for Profit Audit
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] font-black text-slate-600 uppercase tracking-widest">
                  Validation Phase: We choose partners based on impact.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
