
import React from 'react';
import { Quote, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: "Tshepo Modise",
    role: "Owner, Jozi Flame Grill",
    location: "Soweto / Sandton",
    content: "We were losing R15,000 a month to 'delivery taxes'. GreenNova helped us migrate our regulars to our own WhatsApp ordering portal. Our margins jumped 22% in the first month.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, The Coastal Kitchen",
    location: "Cape Town",
    content: "The AI Menu Upsell tool is a game changer. It suggests pairings that actually make sense, and we've seen our average order value rise from R180 to R245 without any extra marketing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Arjun Naidoo",
    role: "Manager, Curry Express",
    location: "Durban",
    content: "Integration with Yoco was seamless. Getting paid instantly instead of waiting for app payouts fixed our cash flow issues. Best decision we made this year.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "Bianca Rossouw",
    role: "Owner, The Daily Bean Cafe",
    location: "Stellenbosch",
    content: "For a small cafe, every Rand counts. Switching our morning pastry pre-orders to GreenNova reduced our daily admin by hours and saved us enough in fees to hire a new barista.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    name: "Marco D'Angelo",
    role: "Founder, Mama's Pizza Hub",
    location: "Pretoria / Hatfield",
    content: "We do high volume on weekends. Delivery apps were taking nearly 40% when you factor in hidden costs. Now, 60% of our orders are direct. The payout is instant, which is vital for our suppliers.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop"
  },
  {
    name: "Lindiwe Nkosi",
    role: "CEO, The Heritage Grill",
    location: "Gqeberha",
    content: "Regaining our customer data has been the biggest win. We used to be invisible on the apps, but now we have a direct line to our diners through WhatsApp. Our repeat business is up 35%.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-100 dark:border-emerald-900 shadow-sm">
            <Star size={14} className="fill-current" />
            Verified Wall of Profit
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Trusted by SA’s <span className="text-emerald-600 italic">Smartest</span> Kitchens.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <Quote className="text-emerald-600 dark:text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-10 italic flex-1">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-slate-100 dark:border-slate-800" />
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg">{t.name}</h4>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <MapPin size={12} />
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
