
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import ComparisonTable from './components/ComparisonTable';
import ImageEditor from './components/ImageEditor';
import MenuUpsellTool from './components/MenuUpsellTool';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import LeadForm from './components/LeadForm';
import WhatsAppWidget from './components/WhatsAppWidget';
import AiChatbot from './components/AiChatbot';
import ArticleView from './components/ArticleView';
import ReferralDashboard from './components/ReferralDashboard';
import LiveOrderSimulator from './components/LiveOrderSimulator';
import SavingsDashboardHero from './components/SavingsDashboardHero';
import { Article } from './types';
import { CONFIG } from './config';
import { 
  Check, 
  Shield, 
  Clock, 
  MessageSquare, 
  ArrowUpRight, 
  BarChart3, 
  Send,
  Heart,
  TrendingUp,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  QrCode,
  Smartphone,
  Moon,
  Sun,
  Gift,
  WifiOff,
  DollarSign,
  ArrowRight,
  Globe
} from 'lucide-react';

const App: React.FC = () => {
  const [liveSavings, setLiveSavings] = useState(14820);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const blogArticles: Article[] = [
    {
      id: 'app-tax-guide',
      category: "Economics",
      title: "How to Ditch Uber Eats Without Losing Your Customers",
      desc: "A step-by-step migration strategy for restaurant owners who are tired of 30% fees.",
      tag: "12 min read",
      image: "",
      content: (
        <>
          <p>The relationship between South African restaurants and delivery platforms has reached a breaking point. While platforms like Uber Eats and Mr D Food provide visibility, the cost of doing business has shifted from a convenience fee to a <strong>30% "App Tax"</strong> that devours the already thin margins of our hospitality sector.</p>
          <h3>The Hidden Cost of "Visibility"</h3>
          <p>Many owners believe they need these apps for marketing. However, the data shows that 65% of orders are from repeat customers who already know your brand. Why are you paying 30% to a middleman for a customer who would have ordered from you anyway?</p>
          <p className="bg-emerald-50 dark:bg-emerald-950/30 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900 italic font-black text-emerald-900 dark:text-emerald-100">
            "We found that by moving just our regulars to GreenNova, we saved R14,000 in our first month without a single drop in order volume." — Marco, Mama's Pizza.
          </p>
          <h3>The GreenNova Migration Strategy</h3>
          <ol>
            <li><strong>Audit Your Audience:</strong> Identify who your regulars are.</li>
            <li><strong>Deploy the QR Shield:</strong> Use branded QR codes on every takeaway bag.</li>
            <li><strong>Offer the "Direct Perk":</strong> Give a R10 discount or a free drink for direct orders. You still keep 25% more than you would on the app.</li>
            <li><strong>Own the Data:</strong> Use GreenNova to capture their WhatsApp numbers and send them personalized promos on slow Tuesdays.</li>
          </ol>
          <p>In conclusion, the apps are great for finding you <em>new</em> strangers, but GreenNova is built to ensure your <em>loyal</em> base pays your rent, not the app's fees.</p>
        </>
      )
    },
    {
      id: 'yoco-vs-paystack',
      category: "Payments",
      title: "Yoco vs Paystack vs PayFast: The Settlement Battle",
      desc: "A breakdown of payment gateway fees and settlement times for SA restaurants.",
      tag: "15 min read",
      image: "",
      content: (
        <>
          <p>Cash flow is the lifeblood of a restaurant. Waiting 14 days for a delivery app to settle your funds is an operational nightmare. That's why GreenNova integrates with SA's leading gateways.</p>
          <h3>The Fee Comparison</h3>
          <p>While delivery apps charge 30%, direct payment gateways like Yoco or Paystack typically charge between 2.5% and 3.5%. That's a <strong>90% reduction in processing costs.</strong></p>
          <h3>Why Instant Payouts Matter</h3>
          <p>Hospitality operates on daily needs. Fresh produce, staff wages, and utility bills don't wait for weekly cycles. With GreenNova + Yoco, your Friday night rush funds are in your account by Saturday or Sunday (T+0 or T+1).</p>
        </>
      )
    },
    {
      id: 'whatsapp-loyalty',
      category: "Marketing",
      title: "Why WhatsApp is the Ultimate Loyalty Tool in SA",
      desc: "How direct WhatsApp ordering creates a 40% higher repeat order rate.",
      tag: "10 min read",
      image: "",
      content: (
        <>
          <p>In South Africa, WhatsApp is the most used app. By meeting your customers where they already are, you remove the "App Fatigue" of downloading yet another food platform.</p>
          <h3>Frictionless Ordering</h3>
          <p>GreenNova sends order confirmations directly to your customer's WhatsApp. This creates a direct line of communication that the major apps actively block you from having.</p>
          <h3>The Birthday Promo Hack</h3>
          <p>When you own your customer data, you can send a simple "Happy Birthday, enjoy 10% off tonight" message. This converts at 4x the rate of an email campaign.</p>
        </>
      )
    }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const id = hash.split('/')[1];
        const article = blogArticles.find(a => a.id === id);
        if (article) {
          setCurrentArticle(article);
          window.scrollTo(0, 0);
        }
      } else {
        setCurrentArticle(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(initialDark);
    if (initialDark) document.documentElement.classList.add('dark');

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const interval = setInterval(() => {
      setLiveSavings(prev => prev + Math.floor(Math.random() * 8) + 2);
    }, 5000);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  const navigateToArticle = (id: string) => {
    window.location.hash = `#blog/${id}`;
  };

  const closeArticle = () => {
    window.location.hash = '';
  };

  const toggleDarkMode = () => {
    const newDark = !isDarkMode;
    setIsDarkMode(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollTo = (id: string) => {
    if (currentArticle) {
      closeArticle();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 antialiased selection:bg-emerald-100 dark:selection:bg-emerald-900 selection:text-emerald-900 dark:selection:text-emerald-100">
      {!isOnline && (
        <div className="fixed top-0 left-0 w-full z-[200] bg-red-600 text-white text-xs font-black py-2 text-center animate-in slide-in-from-top duration-500 flex items-center justify-center gap-2">
          <WifiOff size={14} />
          YOU ARE CURRENTLY OFFLINE. BROWSING CACHED CONTENT.
        </div>
      )}

      <AiChatbot />
      <WhatsAppWidget />

      <nav className={`fixed w-full z-[120] transition-all duration-500 ${isScrolled || currentArticle ? 'glass py-3 shadow-2xl border-b border-emerald-100/20' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => { if (currentArticle) closeArticle(); else window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#F8FAFC] dark:bg-[#212529] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-logo-glow animate-border-pulse">
              <img src="logo.png" alt="GreenNova Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
              GREEN<span className="text-emerald-600">NOVA</span>
              <span className="ml-1 text-[9px] bg-slate-900 dark:bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold align-top">AI</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 font-black text-slate-500 dark:text-slate-400 text-[11px] uppercase tracking-[0.2em]">
            <button onClick={() => scrollTo('how-it-works')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Process</button>
            <button onClick={() => scrollTo('referral')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2">
              <Gift size={14} className="text-emerald-500" />
              Referral Program
            </button>
            <button onClick={() => scrollTo('testimonials')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Testimonials</button>
            <button onClick={() => scrollTo('resources')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Resources Hub</button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button 
              onClick={toggleDarkMode} 
              className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => scrollTo('book-demo')}
              className="bg-slate-900 dark:bg-emerald-600 text-white px-8 py-4 rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all shadow-2xl hover:shadow-emerald-100 dark:hover:shadow-emerald-900 hover:-translate-y-1"
            >
              Start Recovery
            </button>
          </div>
          
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-3 bg-white dark:bg-slate-900 shadow-xl rounded-xl text-slate-900 dark:text-white"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {currentArticle ? (
          <ArticleView article={currentArticle} onBack={closeArticle} onAction={() => scrollTo('book-demo')} />
        ) : (
          <>
            <Hero onSecondaryClick={() => scrollTo('calculator')} />
            <ComparisonTable />
            <Calculator />
            <SavingsDashboardHero />
            <LiveOrderSimulator />
            <ReferralDashboard />
            
            <section id="how-it-works" className="py-40 bg-slate-950 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-emerald-600 rounded-full blur-[280px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-600 rounded-full blur-[220px] translate-y-1/2 -translate-x-1/2 opacity-30"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                  <div className="inline-block px-5 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-emerald-500/20">3 Steps to Direct-Ordering Independence</div>
                  <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Reclaim Your Brand in <span className="text-emerald-400 italic">Minutes.</span></h2>
                  <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">No complex tech—we handle the heavy lifting for you.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  <div className="group relative p-10 md:p-14 rounded-[48px] md:rounded-[64px] bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-700 hover:bg-white/10">
                    <div className="absolute -top-8 -left-8 w-20 h-20 md:w-24 md:h-24 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black text-3xl md:text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 z-20">01</div>
                    <div className="mb-12 h-48 bg-slate-900/50 rounded-[40px] border border-white/5 flex items-center justify-center overflow-hidden relative">
                      <div className="relative w-20 h-32 bg-slate-800 rounded-3xl border border-white/10 flex flex-col p-3 shadow-2xl group-hover:translate-y-[-10px] transition-transform duration-700">
                        <div className="w-full h-2 bg-emerald-500/40 rounded-full mb-3 animate-pulse"></div>
                        <div className="mt-auto w-full h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center"><Smartphone size={24} className="text-emerald-400 animate-pulse" /></div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6">Sign Up & Sync</h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-lg">We transform your current menu into a high-speed, mobile-friendly ordering portal.</p>
                  </div>

                  <div className="group relative p-10 md:p-14 rounded-[48px] md:rounded-[64px] bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-700 hover:bg-white/10">
                    <div className="absolute -top-8 -left-8 w-20 h-20 md:w-24 md:h-24 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black text-3xl md:text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 z-20">02</div>
                    <div className="mb-12 h-48 bg-slate-900/50 rounded-[40px] border border-white/5 flex items-center justify-center overflow-hidden relative">
                      <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500"><DollarSign size={32} className="text-white" /></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6">Connect & Collect</h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-lg">Link your Yoco or PayFast account. Money flows directly to you instantly.</p>
                  </div>

                  <div className="group relative p-10 md:p-14 rounded-[48px] md:rounded-[64px] bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-700 hover:bg-white/10">
                    <div className="absolute -top-8 -left-8 w-20 h-20 md:w-24 md:h-24 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black text-3xl md:text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 z-20">03</div>
                    <div className="mb-12 h-48 bg-slate-900/50 rounded-[40px] border border-white/5 flex items-center justify-center overflow-hidden relative">
                       <div className="relative p-6 bg-white rounded-3xl group-hover:scale-110 transition-transform duration-500"><QrCode size={64} className="text-slate-900" /></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6">Go Direct & Save</h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-lg">Place QR codes on tables and stickers on takeaway bags. Your loyal customers order direct.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="features" className="py-40 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                  <div>
                    <div className="inline-block px-5 py-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8">Built for the South African Restaurant Owner</div>
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-12 leading-[1.05] tracking-tighter">
                      Engineered for <br/>
                      <span className="text-emerald-600 dark:text-emerald-500">Pure Profit.</span>
                    </h2>
                    <div className="mb-12"><MenuUpsellTool /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shadow-inner"><MessageSquare size={28} /></div>
                        <h4 className="text-lg font-black text-slate-900 dark:text-white">WhatsApp Notifications</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold leading-relaxed">Get instant alerts on your phone the second an order is paid.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shadow-inner"><Send size={28} /></div>
                        <h4 className="text-lg font-black text-slate-900 dark:text-white">Direct Marketing</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold leading-relaxed">Automatically capture data to send birthday promos and slow Tuesday specials.</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group animate-float">
                    <div className="relative bg-white dark:bg-slate-950 rounded-[56px] md:rounded-[72px] p-10 md:p-14 border border-slate-100 dark:border-slate-800 shadow-[0_50px_120px_rgba(0,0,0,0.1)] transition-transform duration-700">
                       <div className="flex items-center justify-between mb-14">
                          <h5 className="font-black text-slate-900 dark:text-white flex items-center gap-3 text-2xl tracking-tighter uppercase"><Shield size={28} className="text-emerald-600 dark:text-emerald-500" />Profit Shield</h5>
                       </div>
                       <div className="bg-slate-50 dark:bg-slate-900 p-10 md:p-12 rounded-[40px] md:rounded-[48px] border border-slate-100 dark:border-slate-800 flex items-center justify-between group-hover:border-emerald-300 dark:group-hover:border-emerald-700 transition-all shadow-inner relative overflow-hidden">
                          <div className="relative z-10">
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mb-4">Total Profits Recovered</p>
                            <p className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tabular-nums">R{liveSavings.toLocaleString()}.00</p>
                          </div>
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-600 rounded-[28px] md:rounded-[32px] flex items-center justify-center shadow-2xl shadow-emerald-200 rotate-6 group-hover:rotate-12 transition-transform">
                            <TrendingUp className="text-white" size={40} />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ImageEditor />
            <Testimonials />
            <Resources onArticleClick={navigateToArticle} />
            <LeadForm />

            <section className="py-40 bg-emerald-950 text-white overflow-hidden relative transition-colors duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] bg-white opacity-5 rounded-full blur-[140px] -translate-y-1/2"></div>
              <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-14 tracking-tighter leading-[0.9]">It’s not a website. <br/> It’s a Financial Shield.</h2>
                <p className="text-xl md:text-3xl text-emerald-50 mb-20 leading-relaxed font-medium max-w-5xl mx-auto">Stop donating your margins to big tech giants.</p>
                <div className="flex flex-col items-center">
                  <button onClick={() => scrollTo('book-demo')} className="group shimmer relative px-12 md:px-24 py-8 md:py-12 bg-white text-emerald-950 rounded-[48px] md:rounded-[64px] font-black text-2xl md:text-4xl hover:bg-emerald-50 transition-all shadow-2xl hover:scale-105 active:scale-95 mb-16 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-6">Launch My Commission-Killer System Today<ArrowUpRight size={40} strokeWidth={3} /></span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="bg-slate-950 text-white pt-40 pb-20 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-24 mb-32 border-b border-white/5 pb-32">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#F8FAFC] dark:bg-[#212529] rounded-3xl p-4 shadow-2xl shadow-emerald-500/10 transition-transform hover:scale-105 animate-border-pulse border border-slate-100 dark:border-slate-800">
                  <img src="logo.png" alt="GreenNova Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-4xl md:text-5xl font-black tracking-tighter uppercase">GREENNOVA AI</span>
              </div>
              <p className="text-slate-400 text-2xl max-w-xl mb-14 leading-relaxed font-medium">
                Proudly supporting South African Hospitality. Built to restore restaurant profitability.
              </p>
              <div className="space-y-4 mb-12">
                <a href={CONFIG.brand.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-emerald-400 font-black text-lg hover:underline decoration-emerald-400/30">
                  <Globe size={24} />
                  www.greennovaailaunchpad.com
                </a>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Find us on Social Media</p>
                <div className="flex flex-wrap gap-6">
                  <a href={CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all group border border-white/10" title="Instagram">
                    <Instagram size={24} className="text-slate-400 group-hover:text-white" />
                  </a>
                  <a href={CONFIG.social.x} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all group border border-white/10" title="X (Twitter)">
                    <Twitter size={24} className="text-slate-400 group-hover:text-white" />
                  </a>
                  <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all group border border-white/10" title="LinkedIn">
                    <Linkedin size={24} className="text-slate-400 group-hover:text-white" />
                  </a>
                  <a href={CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all group border border-white/10" title="Facebook">
                    <Facebook size={24} className="text-slate-400 group-hover:text-white" />
                  </a>
                  <a href={CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all group border border-white/10 relative" title="Please Subscribe on YouTube">
                    <Youtube size={24} className="text-slate-400 group-hover:text-white" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-black text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Please Subscribe</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h5 className="font-black text-white mb-10 uppercase tracking-widest text-[10px] text-emerald-500">Platform</h5>
              <ul className="space-y-6 text-slate-400 font-bold text-lg">
                <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-emerald-500 transition-colors">Process</button></li>
                <li><button onClick={() => scrollTo('calculator')} className="hover:text-emerald-500 transition-colors">Economics</button></li>
                <li><button onClick={() => scrollTo('features')} className="hover:text-emerald-500 transition-colors">Features</button></li>
                <li><button onClick={() => scrollTo('resources')} className="hover:text-emerald-500 transition-colors">Resources Hub</button></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h5 className="font-black text-white mb-10 uppercase tracking-widest text-[10px] text-emerald-500">Contact</h5>
              <p className="text-slate-400 text-lg font-bold mb-8">
                {CONFIG.contact.email}<br/>
                {CONFIG.contact.location}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
            <p className="text-slate-600 font-black text-xs uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} GreenNova AI. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 bg-emerald-500/5 px-4 py-2 rounded-full border border-emerald-500/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Commission-Killer Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
