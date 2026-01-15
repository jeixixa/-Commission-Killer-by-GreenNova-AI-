
import React, { useState } from 'react';
import { Sparkles, Utensils, GlassWater, Loader2, ArrowRight } from 'lucide-react';
import { getMenuSuggestions } from '../services/geminiService';

const MenuUpsellTool: React.FC = () => {
  const [dish, setDish] = useState('');
  const [suggestions, setSuggestions] = useState<{ sides: string[], drinks: string[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    if (!dish) return;
    setLoading(true);
    const data = await getMenuSuggestions(dish);
    setSuggestions(data);
    setLoading(false);
  };

  return (
    <div className="bg-emerald-950 rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-emerald-500/20 p-3 rounded-2xl">
            <Sparkles className="text-emerald-400" size={24} />
          </div>
          <h3 className="text-2xl font-black">AI Upsell Engine</h3>
        </div>

        <div className="space-y-6">
          <p className="text-emerald-100/60 text-sm font-medium leading-relaxed">
            Enter a main dish to see how GreenNova AI suggests high-margin pairings to increase your order value.
          </p>
          
          <div className="relative">
            <input 
              type="text"
              value={dish}
              onChange={(e) => setDish(e.target.value)}
              placeholder="e.g. Signature Beef Burger"
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-bold placeholder:text-white/20"
            />
            <button 
              onClick={handleSuggest}
              disabled={loading || !dish}
              className="absolute right-2 top-2 bottom-2 bg-emerald-500 text-white px-6 rounded-xl font-black flex items-center gap-2 hover:bg-emerald-400 transition-all disabled:bg-white/10"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
            </button>
          </div>

          {suggestions && (
            <div className="pt-6 space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div>
                <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">
                  <Utensils size={12} /> Recommended Sides
                </h4>
                <div className="flex flex-wrap gap-2">
                  {suggestions.sides.map((s, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">
                  <GlassWater size={12} /> Profitable Pairings
                </h4>
                <div className="flex flex-wrap gap-2">
                  {suggestions.drinks.map((d, i) => (
                    <span key={i} className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-sm font-bold text-emerald-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuUpsellTool;
