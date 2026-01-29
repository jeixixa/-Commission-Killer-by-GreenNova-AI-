
import React, { useState, useEffect } from 'react';
import { Bell, Smartphone, MessageCircle, Check, ArrowRight, Zap, ShoppingCart, History } from 'lucide-react';
import { generateWhatsAppOrderLink, OrderDetails } from '../services/notificationService';

const LiveOrderSimulator: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);
  const [orderHistory, setOrderHistory] = useState<OrderDetails[]>([]);

  const simulateOrder = () => {
    const dummyOrder: OrderDetails = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      items: [
        { name: "Signature Beef Burger", price: 125, quantity: 1 },
        { name: "Sweet Potato Fries", price: 45, quantity: 1 },
        { name: "Craft Ginger Ale", price: 35, quantity: 2 }
      ],
      total: 240,
      customerName: "Sipho M.",
      customerPhone: "+27 82 555 0123",
      paymentMethod: "Yoco Instant"
    };

    setActiveOrder(dummyOrder);
    setOrderHistory(prev => [dummyOrder, ...prev].slice(0, 5));
    setShowNotification(true);
    
    // Auto-hide UI notification after 10 seconds
    setTimeout(() => setShowNotification(false), 10000);
  };

  const viewHistoryDetail = (order: OrderDetails) => {
    setActiveOrder(order);
    setShowNotification(true);
  };

  return (
    <section id="demo-notification" className="py-32 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-400 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-emerald-500/20">
              <Zap size={14} fill="currentColor" />
              Instant Response Engine
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              From Payment to <br/>
              <span className="text-emerald-500 italic">WhatsApp</span> in 0.4s.
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed max-w-xl">
              Don't leave your kitchen staff guessing. The moment a customer pays via Yoco or PayFast, your kitchen's WhatsApp rings with the full order details.
            </p>
            
            <button 
              onClick={simulateOrder}
              className="group relative px-10 py-6 bg-white text-slate-900 rounded-[32px] font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl flex items-center gap-4 hover:scale-[1.02] active:scale-95"
            >
              <ShoppingCart size={24} />
              Simulate Customer Order
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side: Visual Phone Mockup */}
          <div className="relative">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse"></div>
            
            <div className="relative mx-auto w-[320px] h-[640px] bg-slate-800 rounded-[60px] border-[8px] border-slate-700 shadow-2xl overflow-hidden p-4">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-3xl z-20"></div>
              
              {/* Screen Content */}
              <div className="h-full bg-slate-950 rounded-[40px] overflow-hidden flex flex-col pt-10">
                <div className="px-6 mb-8 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Kitchen View</p>
                    <h4 className="text-white font-black text-lg">Active Orders</h4>
                  </div>
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                    <Bell size={14} className="text-slate-500" />
                  </div>
                </div>

                <div className="flex-1 px-4 space-y-4 overflow-y-auto custom-scrollbar pb-10">
                  {/* Current Active Orders Simulated List */}
                  <div className="p-5 bg-slate-900/50 rounded-3xl border border-white/5 opacity-50">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-black text-slate-500">#GN-9021</span>
                      <span className="text-[10px] font-black text-emerald-500">READY</span>
                    </div>
                    <p className="text-white font-bold text-sm">2x Pepperoni Pizza</p>
                  </div>
                  <div className="p-5 bg-slate-900/50 rounded-3xl border border-white/5 opacity-50">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-black text-slate-500">#GN-9020</span>
                      <span className="text-[10px] font-black text-emerald-500">DONE</span>
                    </div>
                    <p className="text-white font-bold text-sm">1x Vegan Wrap</p>
                  </div>

                  {/* Order History Section */}
                  {orderHistory.length > 0 && (
                    <div className="pt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <div className="flex items-center gap-2 px-2 mb-4">
                        <History size={12} className="text-slate-500" />
                        <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Recent History</h5>
                      </div>
                      <div className="space-y-3">
                        {orderHistory.map((order) => (
                          <button 
                            key={order.id}
                            onClick={() => viewHistoryDetail(order)}
                            className="w-full text-left p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group/hist"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-emerald-400">#{order.id}</span>
                              <span className="text-[9px] font-bold text-slate-500">R{order.total}</span>
                            </div>
                            <p className="text-slate-300 text-[11px] font-bold truncate mt-1 group-hover/hist:text-white transition-colors">
                              {order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated Notification Toast */}
                {showNotification && activeOrder && (
                  <div className="absolute top-12 left-2 right-2 z-30 animate-in slide-in-from-top-12 duration-500">
                    <div className="bg-white rounded-[32px] p-4 shadow-2xl border-4 border-emerald-500 flex items-start gap-4 ring-8 ring-emerald-500/10">
                      <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                        <MessageCircle size={24} className="text-white" fill="currentColor" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-[10px] font-black text-emerald-600 uppercase">WhatsApp • Now</p>
                          <button 
                            onClick={() => setShowNotification(false)}
                            className="text-slate-300 hover:text-slate-900 transition-colors"
                          >
                            <Check size={14} />
                          </button>
                        </div>
                        <p className="text-slate-900 font-black text-sm mb-1 leading-tight">NEW ORDER: #{activeOrder.id}</p>
                        <p className="text-slate-500 text-xs font-bold truncate">R{activeOrder.total} Paid - {activeOrder.customerName}</p>
                        
                        <a 
                          href={generateWhatsAppOrderLink(activeOrder)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 w-full bg-slate-900 text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
                        >
                          View Order Link
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Float Labels */}
            <div className="absolute -right-12 top-1/4 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 animate-float hidden md:block">
               <div className="flex items-center gap-3 mb-2">
                  <Check className="text-emerald-500" size={18} strokeWidth={4} />
                  <span className="font-black text-xs dark:text-white">Customer Paid</span>
               </div>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Yoco Settlement Confirmed</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </section>
  );
};

export default LiveOrderSimulator;
