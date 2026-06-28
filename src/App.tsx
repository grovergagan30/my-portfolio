import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  AlertCircle,
  CheckCircle2,
  Activity,
  Target,
  TrendingDown,
  TrendingUp,
  ShoppingBag,
  LineChart
} from 'lucide-react';

export default function App() {
  const [activeToolkit, setActiveToolkit] = useState<number | null>(0);
  const [wssiPhase, setWssiPhase] = useState('risk');
  const [activeRangeStep, setActiveRangeStep] = useState(0);
  const [dashboardView, setDashboardView] = useState('overview');

  const careerData = [
    {
      role: "Assistant Merchandise Planner",
      company: "Tesco PLC",
      location: "UK",
      period: "Aug 2024 — Present",
      description: "Directing £40M WSSI planning and merchandising for the F&F Footwear & Accessories category across 700+ stores."
    },
    {
      role: "Merchandising Manager",
      company: "Collectif London",
      location: "UK",
      period: "Jan 2023 — Jul 2024",
      description: "Managed £6M annual inventory, multi-channel allocation, and seasonal range planning for 400+ SKUs."
    },
    {
      role: "Regional Merchandiser",
      company: "CaratLane",
      location: "IN",
      period: "May 2022 — Nov 2022",
      description: "Drove £9M in sales and 10% regional growth through data-driven category optimization across 3,000+ active SKUs."
    },
    {
      role: "Assistant Merchandising Manager",
      company: "Lenskart Solutions",
      location: "IN",
      period: "Sep 2021 — May 2022",
      description: "Planned seasonal assortments for 175+ SKUs and conducted granular sales analytics to optimize conversion and ATV."
    },
    {
      role: "Buyer & Merchandiser",
      company: "Bata India Ltd",
      location: "IN",
      period: "May 2019 — Jul 2021",
      description: "Executed merchandising strategies and comprehensive seasonal OTB planning across 1,300+ retail stores."
    }
  ];

  const frameworkData = [
    { step: "Customer insights & Trends forecasting", context: "Going through Product vision, customers feedback from retail team & trends supplied by buying team." },
    { step: "Competitor Review", context: "Conducted through detailed competitor store visits and online benchmarking." },
    { step: "Historical Performance", context: "Analysing previous year's sell-through, margin, and terminal stock." },
    { step: "Price Architecture", context: "Structuring entry, mid, and exit price points to protect margin." },
    { step: "Option Planning", context: "Determining the exact width of the range based on OTB allocation." },
    { step: "Depth Planning", context: "Calculating volume buys per option based on risk profile." },
    { step: "Final Assortment", context: "Signing off the range against LY performance and Budget targets." }
  ];

  const toolkitItems = [
    {
      id: "01",
      title: "WSSI & Trade Analysis",
      desc: "Governing the trade lifecycle through rigorous weekly analysis. I balance stock health and intake ensuring seasonal shifts are anticipated to achieve maximum sell through.",
      capabilities: ["Terminal Stock Optimization", "Dynamic Markdown", "Sales Forecasting", "Seasonality Integration"]
    },
    {
      id: "02",
      title: "Assortment & Range Planning",
      desc: "Curating product ranges that marry creative trends with hard historical data to hit the sweet spot of consumer demand.",
      capabilities: ["Attribute & Size Profiling", "Best/Worst Seller Reviews", "400+ SKU Management"]
    },
    {
      id: "03",
      title: "OTB & Inventory Management",
      desc: "Managing inventory investment with disciplined planning to maximise availability, profitability and return on stock.",
      capabilities: ["Budget Phasing", "Intake Margin Protection", "Weeks of Cover Analysis"]
    },
    {
      id: "04",
      title: "Supplier & Commercial Planning",
      desc: "Building strong supplier partnerships to deliver products efficiently while protecting commercial objectives.",
      capabilities: ["Price Negotiation", "Critical Path Management", "Landed Cost Optimization"]
    },
    {
      id: "05",
      title: "Omnichannel Allocation",
      desc: "Optimising inventory across stores, ecommerce and wholesale by aligning stock with customer demand, regional performance and channel priorities.",
      capabilities: ["Retail, Ecom & Wholesale", "Store Rollout Strategy", "Intelligent Replenishment"]
    },
    {
      id: "06",
      title: "Data & Analytics Tools",
      desc: "Turning retail data into actionable insights through KPI reporting, forecasting, dashboard development and performance analysis to support strategic decisions.",
      capabilities: ["Power BI & Tableau", "Advanced Excel Modeling", "SAP & ERP Integration"]
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="min-h-screen bg-white text-neutral-900 font-inter">
        
        <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-[90rem] mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
            <div className="text-sm font-bold tracking-[0.2em] uppercase">Gagan Grover.</div>
            <div className="hidden md:flex space-x-12 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-neutral-500">
              <a href="#about" className="hover:text-black transition-colors">My Lens</a>
              <a href="#expertise" className="hover:text-black transition-colors">Expertise</a>
              <a href="#projects" className="hover:text-black transition-colors">Case Studies</a>
              <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            </div>
            <a href="#contact" className="text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:text-neutral-500 transition-all">
              Contact
            </a>
          </div>
        </nav>

        <section id="about" className="pt-48 pb-32 px-8 md:px-12 max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h1 className="font-playfair text-[4rem] md:text-[5.5rem] leading-[0.9] tracking-tight mb-10">
                Curating <br />
                <span className="italic text-neutral-500 font-playfair">Assortments.</span>
              </h1>
              <div className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed max-w-xl space-y-6">
                <p>Retail has always fascinated me—not just because of trends, but because of the science behind getting the right product to the right customer at exactly the right time.</p>
                <p>Over the last 7+ years I've worked across multi-million pound categories, balancing sales, stock, margin and customer demand. I enjoy transforming retail data into commercial decisions using WSSI, OTB, range planning and trading analysis.</p>
              </div>
              <div className="flex items-center space-x-6 mt-12 text-neutral-400">
                <a href="https://linkedin.com/in/gagangrover95" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#contact" className="hover:text-black transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100 flex shadow-xl group">
              <img 
                src="ChatGPT Image Jun 28, 2026, 03_30_55 PM.png" 
                alt="Curated Assortments Hero"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80";
                }}
              />
            </div>
          </div>
        </section>

        <section id="expertise" className="py-32 bg-neutral-50">
          <div className="max-w-[70rem] mx-auto px-8 md:px-12">
            <h2 className="font-playfair text-5xl md:text-6xl mb-6">The Analytical Eye.</h2>
            <p className="text-neutral-500 mb-20 max-w-2xl font-light text-lg md:text-xl leading-relaxed">
              Beyond the spreadsheets. Employing industry-standard methodologies to drive commercial success, protect margins, and minimize terminal risk.
            </p>
            
            <div className="border-t border-neutral-300">
              {toolkitItems.map((item, idx) => (
                <div key={idx} className="border-b border-neutral-300 group">
                  <button 
                    onClick={() => setActiveToolkit(activeToolkit === idx ? null : idx)}
                    className="w-full py-10 flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center md:space-x-12 space-x-6">
                      <span className="text-xs font-bold text-neutral-400 tracking-[0.2em] w-8">{item.id}</span>
                      <h3 className={`text-2xl md:text-4xl font-playfair transition-all duration-300 ${activeToolkit === idx ? 'italic text-black' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="relative w-6 h-6 text-neutral-400">
                      <div className={`absolute top-1/2 left-0 w-full h-[1px] bg-current transition-transform duration-300 ${activeToolkit === idx ? 'rotate-180' : ''}`}></div>
                      <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-current transition-transform duration-300 ${activeToolkit === idx ? 'rotate-90 opacity-0' : ''}`}></div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeToolkit === idx ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-14 md:pl-[5.5rem] pr-8 grid md:grid-cols-2 gap-12 items-start">
                      <p className="text-neutral-600 font-light text-lg leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm">
                        <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">Core Capabilities</h4>
                        <ul className="space-y-4">
                          {item.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-center space-x-4 text-base font-light text-neutral-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-32 px-8 md:px-12 max-w-[90rem] mx-auto">
          <div className="mb-24">
            <h2 className="font-playfair text-5xl md:text-6xl mb-6">Case Studies.</h2>
            <p className="text-neutral-500 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
              Real-world applications of commercial strategy, data analysis, and risk mitigation.
            </p>
          </div>

          <div className="space-y-40">
            
            <div>
              <div className="relative w-full h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden flex items-center justify-center shadow-lg mb-32">
                 <img 
                   src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1600&q=80" 
                   alt="Footwear Assortment Analytics" 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/60"></div>
                 <div className="relative z-10 text-center px-6 mt-10">
                   <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/70 mb-6 block">Case Study 01</h4>
                   <h3 className="font-playfair text-4xl md:text-5xl lg:text-7xl leading-tight text-white mb-12">
                     Improving Sell Thru & Mitigating High Closing Stock Risk <br/>
                     <span className="italic text-white/90">— WSSI Analysis</span>
                   </h3>
                 </div>
                 
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:p-8 grid grid-cols-3 gap-4 md:gap-8 divide-x divide-neutral-100 z-20">
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Category</p>
                     <p className="text-xl md:text-3xl font-playfair">Footwear</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Category Annual Revenue</p>
                     <p className="text-xl md:text-3xl font-playfair">£40M</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Action</p>
                     <p className="text-xl md:text-3xl font-playfair text-neutral-900">Trade Recovery</p>
                   </div>
                 </div>
              </div>

              <div className="grid xl:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
                
                <div className="space-y-12">
                  <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                    <p className="text-lg text-neutral-700 font-light leading-relaxed">
                      <span className="font-semibold text-black">Scenario:</span> Mid-season trading identified that sales were below forecast while inventory levels remained high.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-3 mb-6 text-red-800">
                        <AlertCircle size={20} />
                        <h5 className="font-bold text-xs uppercase tracking-widest">Business Challenge</h5>
                      </div>
                      <ul className="space-y-4">
                        {["Declining sell-through", "Increasing weeks of cover", "Risk of end-of-season markdowns"].map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6 text-emerald-800">
                        <CheckCircle2 size={20} />
                        <h5 className="font-bold text-xs uppercase tracking-widest">Quantifiable Impact</h5>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span className="leading-relaxed"><strong className="text-emerald-900 font-medium">Deferred Intake:</strong> Brought down terminal stock value to £1.04M.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span className="leading-relaxed"><strong className="text-emerald-900 font-medium">Store Reallocation:</strong> Accelerated full-price sales, driving Sell Through to 74%.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span className="leading-relaxed"><strong className="text-emerald-900 font-medium">Markdown Control:</strong> Protected profitability, rescuing achieved Margin to 59.2%.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-8">
                      <Target size={20} className="text-neutral-400" />
                      <h5 className="font-playfair italic text-2xl">My Approach</h5>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Reviewed WSSI performance against budget",
                        "Analysed category and SKU-level performance",
                        "Revised sales forecast",
                        "Deferred future intake",
                        "Reallocated inventory to stronger-performing stores"
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                          <span className="text-xs font-bold text-neutral-300">0{i+1}</span>
                          <p className="text-sm text-neutral-600 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A0A0A] rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden font-inter sticky top-32 border border-neutral-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-8 border-b border-white/10 gap-6">
                    <div className="flex items-center gap-3">
                      <Activity className="text-blue-400" size={20} />
                      <span className="font-bold tracking-widest text-[0.65rem] uppercase text-neutral-400">Live Analytics Dashboard</span>
                    </div>
                    
                    <div className="flex bg-white/5 rounded-full p-1 border border-white/10 w-fit">
                      <button 
                        onClick={() => setWssiPhase('risk')}
                        className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${wssiPhase === 'risk' ? 'bg-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'text-neutral-500 hover:text-white'}`}
                      >
                        Mid-Season Risk
                      </button>
                      <button 
                        onClick={() => setWssiPhase('recovery')}
                        className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${wssiPhase === 'recovery' ? 'bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'text-neutral-500 hover:text-white'}`}
                      >
                        Post-Action Recovery
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl relative">
                      <h6 className="text-[0.65rem] font-bold text-neutral-400 uppercase tracking-widest mb-4">
                        Margin % <span className="text-neutral-500 font-normal lowercase tracking-normal ml-1">{wssiPhase === 'risk' ? '(projected)' : '(achieved)'}</span>
                      </h6>
                      <div className="flex items-end gap-3">
                        <span className="text-4xl font-playfair transition-all duration-700">
                          {wssiPhase === 'risk' ? '52.5%' : '59.2%'}
                        </span>
                        <span className={`text-xs font-bold mb-1 transition-colors duration-500 ${wssiPhase === 'risk' ? 'text-red-400' : 'text-emerald-400'}`}>
                          {wssiPhase === 'risk' ? <TrendingDown size={16}/> : <TrendingUp size={16}/>}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                      <h6 className="text-[0.65rem] font-bold text-neutral-400 uppercase tracking-widest mb-4">Weeks Cover</h6>
                      <div className="flex items-end gap-3">
                        <span className="text-4xl font-playfair transition-all duration-700">
                          {wssiPhase === 'risk' ? '18.5' : '6.8'}
                        </span>
                        <span className="text-sm text-neutral-500 font-light mb-1">Wks</span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl col-span-2 sm:col-span-1">
                      <h6 className="text-[0.65rem] font-bold text-neutral-400 uppercase tracking-widest mb-4">
                        {wssiPhase === 'risk' ? 'Stock Value (Wk 10)' : 'Terminal Stock'}
                      </h6>
                      <span className="text-3xl font-light transition-all duration-700 text-neutral-200">
                        {wssiPhase === 'risk' ? '£10.2M' : '£1.04M'}
                      </span>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl col-span-2 sm:col-span-1 flex flex-col justify-center">
                      <div className="flex justify-between items-end mb-3">
                        <h6 className="text-[0.65rem] font-bold text-neutral-400 uppercase tracking-widest">Sell Through</h6>
                        <span className="text-lg font-playfair">{wssiPhase === 'risk' ? '22%' : '74%'}</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${wssiPhase === 'risk' ? 'bg-red-400 w-[22%]' : 'bg-emerald-400 w-[74%]'}`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
                    <div className="flex justify-between items-center mb-6">
                      <h6 className="text-[0.65rem] font-bold text-neutral-400 uppercase tracking-widest">Sales vs Forecast Variance</h6>
                      <span className={`text-sm font-bold transition-colors duration-500 ${wssiPhase === 'risk' ? 'text-red-400' : 'text-emerald-400'}`}>
                        {wssiPhase === 'risk' ? '-15.5%' : '+2.5%'}
                      </span>
                    </div>
                    
                    <div className="relative h-6 flex items-center">
                      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-neutral-700 z-10"></div>
                      <div className="w-1/2 h-full flex justify-end pr-1">
                        <div 
                          className="h-full bg-red-500/80 rounded-l-sm transition-all duration-1000 ease-out"
                          style={{ width: wssiPhase === 'risk' ? '65%' : '0%' }}
                        ></div>
                      </div>
                      <div className="w-1/2 h-full pl-1">
                        <div 
                          className="h-full bg-emerald-500/80 rounded-r-sm transition-all duration-1000 ease-out"
                          style={{ width: wssiPhase === 'risk' ? '0%' : '15%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 text-[0.65rem] text-neutral-500 font-bold tracking-widest">
                      <span>UNDER FORECAST</span>
                      <span>OVER FORECAST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-32 mt-32 border-t border-neutral-100 relative">
              <div className="relative w-full h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden flex items-center justify-center shadow-lg mb-32">
                 <img 
                   src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1600&q=80" 
                   alt="Editorial Women's Footwear" 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/50"></div>
                 <div className="relative z-10 text-center px-6 mt-10">
                   <h3 className="font-playfair text-4xl md:text-5xl lg:text-7xl leading-tight text-white mb-12">
                     Building a Commercially Balanced <br/>
                     <span className="italic text-white/90">Seasonal Footwear Range</span>
                   </h3>
                 </div>
                 
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:p-8 grid grid-cols-3 gap-4 md:gap-8 divide-x divide-neutral-100 z-20">
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Season</p>
                     <p className="text-xl md:text-3xl font-playfair">SS26</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Window</p>
                     <p className="text-xl md:text-3xl font-playfair">6 Mos</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Range</p>
                     <p className="text-xl md:text-3xl font-playfair text-neutral-900">~60 <span className="text-sm font-sans font-light text-neutral-500 hidden sm:inline">SKUs</span></p>
                   </div>
                 </div>
              </div>

              <div className="text-center mb-24 max-w-4xl mx-auto px-6">
                <h4 className="font-playfair text-3xl md:text-4xl mb-8">The Objective</h4>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {[
                    "Meets customer demand",
                    "Maximises full-price sales",
                    "Covers key price points",
                    "Supports margin targets",
                    "Optimises Open to Buy"
                  ].map((item, i) => (
                    <span key={i} className="px-5 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-sm md:text-base font-light text-neutral-700 flex items-center gap-2 transition-all hover:border-black hover:bg-black hover:text-white cursor-default">
                      <CheckCircle2 size={16} className="opacity-70" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-32">
                <div className="text-center mb-16">
                  <h4 className="font-playfair text-4xl md:text-5xl mb-4">My Planning Framework</h4>
                  <p className="text-neutral-500 font-light text-base md:text-lg">A 7-step iterative process governing product selection and investment.</p>
                </div>

                <div className="bg-neutral-50 rounded-[2rem] p-8 md:p-16 border border-neutral-100 shadow-sm max-w-5xl mx-auto">
                   <div className="relative flex justify-between items-center mb-16 max-w-3xl mx-auto px-4 md:px-0">
                      <div className="absolute left-4 right-4 md:left-0 md:right-0 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-200 z-0"></div>
                      <div 
                        className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 h-[2px] bg-black z-0 transition-all duration-700 ease-out"
                        style={{ width: `${(activeRangeStep / (frameworkData.length - 1)) * 100}%`, maxWidth: 'calc(100% - 2rem)' }}
                      ></div>
                      
                      {frameworkData.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveRangeStep(idx)}
                          className={`relative z-10 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-300 ${
                            activeRangeStep === idx 
                              ? 'bg-black text-white scale-125 shadow-lg' 
                              : activeRangeStep > idx 
                                ? 'bg-black text-white hover:scale-110' 
                                : 'bg-white text-neutral-400 border-2 border-neutral-200 hover:border-neutral-400 hover:scale-110'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                   </div>

                   <div className="text-center min-h-[140px] flex flex-col justify-center items-center">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Step 0{activeRangeStep + 1}</span>
                      <h5 className="text-3xl md:text-4xl font-playfair mb-4 transition-all">{frameworkData[activeRangeStep].step}</h5>
                      <p className="text-base md:text-xl font-light text-neutral-600 max-w-2xl leading-relaxed">
                        {frameworkData[activeRangeStep].context}
                      </p>
                   </div>
                </div>
              </div>

              <div className="mb-10">
                <div className="text-center mb-16">
                  <h4 className="font-playfair text-4xl md:text-5xl mb-4">Assortment Mix</h4>
                  <p className="text-neutral-500 font-light text-lg max-w-2xl mx-auto">
                    Category depth and pricing distribution mapped to a 60 SKU target.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                  <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] flex flex-col items-center">
                    <h5 className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-400 mb-8 text-center">Product Mix (60 SKUs)</h5>
                    
                    <div className="relative w-48 h-48 md:w-56 md:h-56 mb-10 transition-transform hover:scale-105 duration-700 shrink-0">
                      <div className="absolute inset-0 rounded-full shadow-lg" 
                           style={{ background: 'conic-gradient(#000000 0 15.5%, #1c1c1c 0 31%, #383838 0 44.8%, #555555 0 56.9%, #717171 0 67.2%, #8e8e8e 0 74.1%, #aaaaaa 0 81%, #c6c6c6 0 87.9%, #e2e2e2 0 93.1%, #f0f0f0 0 96.6%, #f8f8f8 0 100%)' }}>
                      </div>
                      <div className="absolute inset-[22%] bg-white rounded-full flex flex-col items-center justify-center shadow-[inset_0_2px_15px_rgba(0,0,0,0.05)]">
                         <span className="block text-3xl font-playfair text-neutral-900 leading-none">60</span>
                         <span className="block text-[0.55rem] uppercase tracking-widest text-neutral-400 mt-1">SKUs</span>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-x-6 gap-y-2 px-2">
                      {[
                        { label: 'Sandal', pct: '15.5%', color: 'bg-[#000000]' },
                        { label: 'Footbed', pct: '15.5%', color: 'bg-[#1c1c1c]' },
                        { label: 'Sports Fash', pct: '13.8%', color: 'bg-[#383838]' },
                        { label: 'Flat Shoe', pct: '12.1%', color: 'bg-[#555555]' },
                        { label: 'Heeled', pct: '10.3%', color: 'bg-[#717171]' },
                        { label: 'Clog', pct: '6.9%', color: 'bg-[#8e8e8e]' },
                        { label: 'Flip Flop', pct: '6.9%', color: 'bg-[#aaaaaa]' },
                        { label: 'Slider', pct: '6.9%', color: 'bg-[#c6c6c6]' },
                        { label: 'Sports Core', pct: '5.2%', color: 'bg-[#e2e2e2]' },
                        { label: 'Ballerina', pct: '3.5%', color: 'bg-[#f0f0f0]' },
                        { label: 'Canvas', pct: '3.5%', color: 'bg-[#f8f8f8]' }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-xs border-b border-neutral-50 pb-1.5 last:border-0">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                            <span className="text-neutral-600 font-light truncate max-w-[80px]">{item.label}</span>
                          </div>
                          <span className="font-bold text-neutral-900">{item.pct}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] flex flex-col justify-center">
                    <h5 className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-400 mb-8 text-center">Price Architecture (60 SKUs)</h5>
                    
                    <div className="w-full space-y-3.5">
                      {[
                        { price: '£7',  skus: '4 SKUs',  pct: '6.9%',  width: 'w-[7%]' },
                        { price: '£8',  skus: '6 SKUs',  pct: '10.3%', width: 'w-[10%]' },
                        { price: '£9',  skus: '4 SKUs',  pct: '6.9%',  width: 'w-[7%]' },
                        { price: '£14', skus: '2 SKUs',  pct: '3.5%',  width: 'w-[4%]' },
                        { price: '£16', skus: '10 SKUs', pct: '17.2%', width: 'w-[17%]' },
                        { price: '£18', skus: '14 SKUs', pct: '22.4%', width: 'w-[22%]', highlight: true },
                        { price: '£20', skus: '10 SKUs', pct: '17.2%', width: 'w-[17%]' },
                        { price: '£22', skus: '5 SKUs',  pct: '8.6%',  width: 'w-[9%]' },
                        { price: '£25', skus: '2 SKUs',  pct: '3.5%',  width: 'w-[4%]' },
                        { price: '£30', skus: '3 SKUs',  pct: '3.5%',  width: 'w-[4%]' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group cursor-default">
                          <span className="w-8 text-xs md:text-sm font-bold text-neutral-900 text-right">{item.price}</span>
                          
                          <div className="flex-1 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                            <div className={`h-full ${item.highlight ? 'bg-black' : 'bg-neutral-800'} rounded-full ${item.width} transition-all duration-500 group-hover:bg-neutral-500`}></div>
                          </div>
                          
                          <div className="w-16 text-right">
                            <span className="block text-xs md:text-sm font-bold text-neutral-900">{item.pct}</span>
                            <span className="block text-[0.55rem] md:text-[0.6rem] text-neutral-400 uppercase tracking-wider">{item.skus}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-5 border-t border-neutral-100 text-center">
                       <p className="text-xs text-neutral-500 font-light">
                         <strong className="font-bold text-neutral-900">Commercial Sweet Spot:</strong> Over 56% of range volume consolidated between £16 & £20.
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-32 mt-32 border-t border-neutral-100 relative">
              
              <div className="relative w-full h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden flex items-center justify-center shadow-lg mb-32">
                 <img 
                   src="https://images.unsplash.com/photo-1572804013309-82a891481bc2?auto=format&fit=crop&w=1600&q=80" 
                   alt="Collectif London Vintage Apparel" 
                   className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                   onError={(e) => {
                     e.currentTarget.src = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80";
                   }}
                 />
                 <div className="absolute inset-0 bg-black/50"></div>
                 <div className="relative z-10 text-center px-6 mt-10">
                   <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/70 mb-6 block">Case Study 03</h4>
                   <h3 className="font-playfair text-4xl md:text-5xl lg:text-7xl leading-tight text-white mb-12">
                     Optimising Ecom Sales <br/>
                     <span className="italic text-white/90">— Collectif London</span>
                   </h3>
                 </div>
                 
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:p-8 grid grid-cols-3 gap-4 md:gap-8 divide-x divide-neutral-100 z-20">
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Brand</p>
                     <p className="text-xl md:text-3xl font-playfair">Collectif London</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Channel</p>
                     <p className="text-xl md:text-3xl font-playfair">Ecommerce</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Platform</p>
                     <p className="text-xl md:text-3xl font-playfair text-neutral-900">Shopify</p>
                   </div>
                 </div>
              </div>

              <div className="grid xl:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
                
                <div className="space-y-12">
                  <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                    <p className="text-lg text-neutral-700 font-light leading-relaxed">
                      <span className="font-semibold text-black">Scenario:</span> With Ecommerce driving the majority of growth, the challenge was to maximize D2C profitability by deeply analyzing Shopify data to optimize stock availability, improve conversion rates, and drive Average Order Value (AOV).
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-3 mb-6 text-red-800">
                        <AlertCircle size={20} />
                        <h5 className="font-bold text-xs uppercase tracking-widest">Business Challenge</h5>
                      </div>
                      <ul className="space-y-4">
                        {["High traffic but stagnant conversion", "Stock-outs on best-selling sizes", "Sub-optimal Average Order Value"].map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6 text-emerald-800">
                        <CheckCircle2 size={20} />
                        <h5 className="font-bold text-xs uppercase tracking-widest">Quantifiable Impact</h5>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span className="leading-relaxed"><strong className="text-emerald-900 font-medium">Conversion Lift:</strong> Increased Ecom conversion rate from 2.8% to 3.2%.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span className="leading-relaxed"><strong className="text-emerald-900 font-medium">AOV Growth:</strong> Drove Average Order Value up by 12% through targeted upselling.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span className="leading-relaxed"><strong className="text-emerald-900 font-medium">Availability:</strong> Maintained 95%+ availability on never-out-of-stock (NOOS) lines.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-8">
                      <LineChart size={20} className="text-neutral-400" />
                      <h5 className="font-playfair italic text-2xl">My Approach</h5>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Analysed Shopify store sessions and drop-off points",
                        "Optimised product merchandising and sequencing",
                        "Reallocated inventory from retail to Ecom warehouse",
                        'Implemented "Shop the Look" for higher AOV',
                        "Tracked daily sales velocities to trigger auto-replenishment"
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                          <span className="text-xs font-bold text-neutral-300">0{i+1}</span>
                          <p className="text-sm text-neutral-600 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#f4f6f8] rounded-[2rem] p-4 md:p-8 text-[#202223] shadow-2xl relative overflow-hidden font-inter sticky top-32 border border-neutral-200">
                  
                  <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#008060] p-1.5 rounded-md text-white shadow-sm">
                        <ShoppingBag size={18} />
                      </div>
                      <span className="font-semibold text-xl tracking-tight">Analytics</span>
                    </div>
                    <div className="flex gap-2 text-sm bg-white border border-[#c9cccf] rounded-lg p-1 shadow-sm">
                       <button 
                         onClick={() => setDashboardView('overview')}
                         className={`px-4 py-1.5 rounded-md font-medium transition-all ${dashboardView === 'overview' ? 'bg-[#f4f6f8] text-[#202223]' : 'text-[#6d7175] hover:text-[#202223]'}`}
                       >
                         Overview
                       </button>
                       <button 
                         onClick={() => setDashboardView('products')}
                         className={`px-4 py-1.5 rounded-md font-medium transition-all ${dashboardView === 'products' ? 'bg-[#f4f6f8] text-[#202223]' : 'text-[#6d7175] hover:text-[#202223]'}`}
                       >
                         Top Products
                       </button>
                    </div>
                  </div>

                  <div className="min-h-[300px]">
                    {dashboardView === 'overview' ? (
                      <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                         <div className="bg-white p-5 rounded-xl border border-[#c9cccf] shadow-sm col-span-2 sm:col-span-1">
                           <p className="text-sm font-medium text-[#6d7175] mb-2 border-b border-dashed border-[#c9cccf] pb-1 inline-block cursor-help hover:text-[#202223]">Total sales</p>
                           <p className="text-2xl font-semibold mb-2">£3.38M</p>
                           <span className="inline-flex items-center gap-1 text-xs font-medium text-[#008060] bg-[#e3f1df] px-2 py-0.5 rounded-full">
                             <TrendingUp size={12}/> 15%
                           </span>
                         </div>
                         <div className="bg-white p-5 rounded-xl border border-[#c9cccf] shadow-sm col-span-2 sm:col-span-1">
                           <p className="text-sm font-medium text-[#6d7175] mb-2 border-b border-dashed border-[#c9cccf] pb-1 inline-block cursor-help hover:text-[#202223]">Online store sessions</p>
                           <p className="text-2xl font-semibold mb-2">1.2M</p>
                           <span className="inline-flex items-center gap-1 text-xs font-medium text-[#008060] bg-[#e3f1df] px-2 py-0.5 rounded-full">
                             <TrendingUp size={12}/> 8%
                           </span>
                         </div>
                         <div className="bg-white p-5 rounded-xl border border-[#c9cccf] shadow-sm col-span-2 sm:col-span-1">
                           <p className="text-sm font-medium text-[#6d7175] mb-2 border-b border-dashed border-[#c9cccf] pb-1 inline-block cursor-help hover:text-[#202223]">Store conversion rate</p>
                           <p className="text-2xl font-semibold mb-2">3.2%</p>
                           <span className="inline-flex items-center gap-1 text-xs font-medium text-[#008060] bg-[#e3f1df] px-2 py-0.5 rounded-full">
                             <TrendingUp size={12}/> 14%
                           </span>
                         </div>
                         <div className="bg-white p-5 rounded-xl border border-[#c9cccf] shadow-sm col-span-2 sm:col-span-1">
                           <p className="text-sm font-medium text-[#6d7175] mb-2 border-b border-dashed border-[#c9cccf] pb-1 inline-block cursor-help hover:text-[#202223]">Average order value</p>
                           <p className="text-2xl font-semibold mb-2">£65.40</p>
                           <span className="inline-flex items-center gap-1 text-xs font-medium text-[#008060] bg-[#e3f1df] px-2 py-0.5 rounded-full">
                             <TrendingUp size={12}/> 6%
                           </span>
                         </div>
                      </div>
                    ) : (
                      <div className="bg-white p-6 rounded-xl border border-[#c9cccf] shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
                         <h6 className="font-semibold mb-6 text-[15px] border-b border-[#f4f6f8] pb-4">Top products by units sold</h6>
                         <div className="space-y-4">
                            {[
                              { name: 'Dolores Doll Dress - Polka', units: '2,450', inv: '840 in stock' },
                              { name: 'Caterina Swing Dress - Navy', units: '1,820', inv: '210 in stock' },
                              { name: 'Trixie Pencil Dress - Red', units: '1,240', inv: '15 in stock (Low)' },
                              { name: 'Pearl Vintage Coat - Black', units: '850', inv: '0 in stock' }
                            ].map((prod, i) => (
                              <div key={i} className="flex justify-between items-center border-b border-[#f4f6f8] pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-[#f4f6f8] rounded border border-[#c9cccf] flex items-center justify-center text-[#6d7175] shrink-0">
                                    <ShoppingBag size={16} />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-[#005bd3] hover:underline cursor-pointer">{prod.name}</p>
                                    <p className={`text-xs mt-0.5 ${prod.inv.includes('0 in') || prod.inv.includes('Low') ? 'text-[#d82c0d] font-medium' : 'text-[#6d7175]'}`}>{prod.inv}</p>
                                  </div>
                                </div>
                                <span className="font-medium text-sm text-[#202223]">{prod.units}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-[#0A0A0A] text-white py-12 md:py-16 px-6 md:px-12 text-center rounded-2xl mt-24 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent"></div>
                 <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto leading-relaxed md:leading-relaxed text-neutral-200">
                   "A great assortment isn't built by choosing products—it is built by making <span className="italic text-neutral-400">hundreds of interconnected commercial decisions.</span>"
                 </h3>
              </div>

          </div>
        </section>

        <section id="experience" className="py-32 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-[80rem] mx-auto px-8 md:px-12">
            <div className="mb-20">
              <h2 className="font-playfair text-5xl md:text-6xl mb-6">Experience.</h2>
              <p className="text-neutral-500 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
                Over seven years managing high-volume portfolios and driving commercial success across global retail brands.
              </p>
            </div>

            <div className="border-t border-neutral-300">
              {careerData.map((job, idx) => (
                <div key={idx} className="border-b border-neutral-200 py-8 md:py-10 group hover:bg-white transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl cursor-default">
                  <div className="grid md:grid-cols-[1fr_2fr_3fr] gap-6 md:gap-8 items-start md:items-center">
                    
                    <div>
                      <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-1.5">{job.period}</span>
                      <span className="text-[0.65rem] uppercase tracking-widest text-neutral-300">{job.location}</span>
                    </div>
                    
                    <div>
                      <h3 className="font-playfair text-xl md:text-2xl text-neutral-900 group-hover:italic transition-all duration-300 mb-2">
                        {job.role}
                      </h3>
                      <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-black">
                        {job.company}
                      </h4>
                    </div>
                    
                    <div>
                      <p className="text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 bg-[#0A0A0A] text-white">
          <div className="max-w-[80rem] mx-auto px-8 md:px-12 text-center">
             <h2 className="font-playfair text-5xl md:text-6xl mb-8">Let's build profitable retail.</h2>
             <p className="text-neutral-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed">
               Currently open to new opportunities in Merchandising and Buying. Whether you have a specific role in mind or just want to discuss retail strategy, I'd love to hear from you.
             </p>
             
             <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-20 gap-y-12 border-t border-neutral-800 pt-16 text-center">
                <div className="flex flex-col items-center">
                   <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Location</span>
                   <p className="font-light text-neutral-300">London, UK</p>
                </div>
                <div className="flex flex-col items-center">
                   <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Direct</span>
                   <a href="tel:+447417491948" className="font-light text-neutral-300 hover:text-white transition-colors">
                     +44 7417 491948
                   </a>
                </div>
                <div className="flex flex-col items-center">
                   <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Email</span>
                   <a href="mailto:grovergagan30@gmail.com" className="font-light text-neutral-300 hover:text-white transition-colors">
                     grovergagan30@gmail.com
                   </a>
                </div>
                <div className="flex flex-col items-center">
                   <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Network</span>
                   <a href="https://linkedin.com/in/gagangrover95" target="_blank" rel="noreferrer" className="font-light text-neutral-300 hover:text-white transition-colors">
                     LinkedIn
                   </a>
                </div>
                <div className="flex flex-col items-center">
                   <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Resume</span>
                   <a href="Gagan CV 2026.pdf" download="Gagan_Grover_CV.pdf" className="font-light text-neutral-300 hover:text-white transition-colors">
                     Download CV
                   </a>
                </div>
             </div>
             
             <div className="mt-32 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-600">
               © {new Date().getFullYear()} Gagan Grover. All Rights Reserved.
             </div>
          </div>
        </section>

      </div>
    </>
  );
}
