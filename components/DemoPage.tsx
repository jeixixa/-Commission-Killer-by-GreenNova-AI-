
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  MessageSquare,
  Zap,
  Globe,
  MapPin,
  ChevronRight,
  TrendingUp,
  Star
} from 'lucide-react';
import { CONFIG } from '../config';

interface DemoPageProps {
  onBack: () => void;
}

const DemoPage: React.FC<DemoPageProps> = ({ onBack }) => {
  const [scheduled, setScheduled] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
  };

  const salesTeam = [
    { name: "James Shizha", role: "Growth Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { name: "Sipho Khumalo", role: "Profit Auditor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    { name: "Lize van Wyk", role: "Onboarding Specialist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" }
  ];

  if (scheduled) {
    return (
      <div className="pt-40 pb-60 px-6 max-w-4xl mx-auto text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/20">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Profit Recovery <br/> <span className="text-emerald-600">Locked In.</span></h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
          Check your WhatsApp. A calendar invite and prep-list have been sent to you. We'll show you exactly how much your kitchen can save in 15 minutes.
        </p>
        <button onClick={onBack} className="bg-slate-900 dark:bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all">
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Scheduling Section */}
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-100 dark:border-emerald-900">
              Phase 1: Diagnosis
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1] tracking-tighter">
              Schedule Your <br/>
              <span className="text-emerald-600">Profit Recovery.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-16 leading-relaxed max-w-2xl">
              Book a 15-minute diagnostic call with our Sales Recovery Team. We'll analyze your current app volumes and show you the exact Rand value GreenNova will reclaim for you.
            </p>

            <form onSubmit={handleSchedule} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Preferred Day</label>
                  <div className="flex flex-wrap gap-3">
                    {days.map((day, i) => (
                      <button 
                        key={i}
                        type="button"
                        onClick={() => setSelectedDay(i)}
                        className={`px-5 py-3 rounded-xl font-black text-xs transition-all border ${
                          selectedDay === i 
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/20' 
                            : 'bg-white dark:bg-slate-900 text-slate-400 border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Best Time (GMT+2)</label>
                  <div className="flex flex-wrap gap-3">
                    {times.map((time, i) => (
                      <button 
                        key={i}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-3 rounded-xl font-black text-[10px] transition-all border ${
                          selectedTime === time 
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/20' 
                            : 'bg-white dark:bg-slate-900 text-slate-400 border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8 bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] border border-slate-100 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Restaurant Name</label>
                    <input required type="text" placeholder="e.g. Cape Grill" className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-bold dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
                    <input required type="tel" placeholder="+27 82 000 0000" className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-bold dark:text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Current App Tax Monthly (Estimated)</label>
                  <select className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-bold dark:text-white">
                    <option>Under R5,000</option>
                    <option>R5,000 - R20,000</option>
                    <option>R20,000 - R50,000</option>
                    <option>Over R50,000 (Priority Audit)</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={selectedDay === null || selectedTime === null}
                  className="w-full py-8 bg-slate-900 dark:bg-emerald-600 text-white rounded-[32px] font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50 group"
                >
                  <Calendar size={24} />
                  Book My Recovery Audit
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar: Sales Team & Contact */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[56px] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-12 flex items-center gap-2">
                <Users size={14} /> Recovery Team
              </h3>

              <div className="space-y-8 mb-16">
                {salesTeam.map((member, i) => (
                  <div key={i} className="flex items-center gap-6 group/member">
                    <div className="w-16 h-16 rounded-[20px] overflow-hidden grayscale group-hover/member:grayscale-0 transition-all border-2 border-slate-100 dark:border-slate-800 p-0.5">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-lg leading-none mb-1">{member.name}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-12 border-t border-slate-50 dark:border-slate-800">
                <a href={`tel:${CONFIG.contact.whatsappNumber}`} className="flex items-center gap-4 text-slate-900 dark:text-white group/contact">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover/contact:bg-emerald-600 group-hover/contact:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="font-black text-sm">+27 68 426 5339</span>
                </a>
                <a href={`mailto:${CONFIG.contact.email}`} className="flex items-center gap-4 text-slate-900 dark:text-white group/contact">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover/contact:bg-emerald-600 group-hover/contact:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-black text-sm">{CONFIG.contact.email}</span>
                </a>
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="font-black text-sm">Johannesburg / Cape Town, SA</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-10 md:p-14 rounded-[56px] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
               </div>
               <div className="relative z-10 text-center">
                 <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20 rotate-6 group-hover:rotate-12 transition-transform">
                    <TrendingUp size={40} className="text-white" />
                 </div>
                 <h4 className="text-3xl font-black mb-6">Immediate Support</h4>
                 <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                   Need to talk profit recovery right now? Our live agents are active on WhatsApp 08:00 - 20:00.
                 </p>
                 <a 
                   href={`https://wa.me/${CONFIG.contact.whatsappNumber}`}
                   className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-sm hover:bg-emerald-50 transition-all shadow-xl"
                 >
                   <MessageSquare size={18} fill="currentColor" className="text-emerald-600" />
                   Chat with Sales Now
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
