import React, { useState } from 'react';
import { Layers, Landmark, DollarSign, Eye, Sparkles } from 'lucide-react';

interface GrowthLayer {
  id: string;
  name: string;
  age: string; // Used as time/maturity horizon
  depth: string; // Used as investment depth
  composition: string; // Used as campaign core tools
  description: string;
  fossil: string; // Used as core deliverable/asset
  color: string;
  patternClass: string;
  marketingAnalogy: {
    title: string;
    desc: string;
  };
}

interface GeologyExplorerProps {
  theme: 'dark' | 'light';
}

export const GeologyExplorer: React.FC<GeologyExplorerProps> = ({ theme }) => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('seo');
  const [budgetVal, setBudgetVal] = useState<number>(15); // in Thousands

  const layers: GrowthLayer[] = [
    {
      id: 'seo',
      name: 'Organic SEO Bedrock',
      age: '6 - 12 Month Maturity',
      depth: '₹35,000 - ₹75,000/mo',
      composition: 'Keyword architectures, technical index crawling, backlink networks',
      description: 'Built through structured content generation and technical SEO. Like deep limestone bedrock, it takes months to deposit but forms a permanent organic foundation that stands strong for years without ad-spend dependencies.',
      fossil: 'High-Authority Backlinks & Keyword Ranks',
      color: 'bg-zinc-800 border-zinc-700',
      patternClass: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-800 to-zinc-900',
      marketingAnalogy: {
        title: 'Search Authority',
        desc: 'Accumulates layer-by-layer over time. Once established, it delivers organic clicks day after day, capturing intent-driven traffic and securing long-term brand dominance.',
      },
    },
    {
      id: 'ads',
      name: 'Paid Performance Ads',
      age: 'Instant Visibility',
      depth: '₹50,000 - ₹3,00,000+/mo',
      composition: 'Google Search Ads, Meta Retargeting, LinkedIn ABM funnels',
      description: 'Erupts search traffic and conversions immediately. Formed by targeted bid algorithms and copy testing, performance ads act like rapid volcanic basalt, generating high heat, instant views, and quick leads.',
      fossil: 'Google search slots & Meta ad copy',
      color: 'bg-amber-950 border-amber-900',
      patternClass: 'bg-[linear-gradient(45deg,_#78350f_25%,_transparent_25%),_linear-gradient(-45deg,_#78350f_25%,_transparent_25%)] bg-[size:20px_20px] bg-amber-950',
      marketingAnalogy: {
        title: 'Paid Acquisition',
        desc: 'Direct, rapid conversion streams. Highly responsive campaigns built to capture searchers at the immediate purchasing stage, offering transparent and traceable ROI.',
      },
    },
    {
      id: 'funnels',
      name: 'Lead Automation Funnels',
      age: '1 - 3 Month Automation',
      depth: '₹25,000 - ₹75,000/mo',
      composition: 'Landing portals, CRM triggers, email sequences, SMS alerts',
      description: 'Formed in quiet valleys where user traffic is captured and refined. Lead funnels compress raw web visitors into qualified leads through automated email nurturing, form segmentation, and instant alerts.',
      fossil: 'CRM Integrations & Email Templates',
      color: 'bg-slate-800 border-slate-700',
      patternClass: 'bg-[repeating-linear-gradient(0deg,_#334155,_#334155_2px,_#1e293b_2px,_#1e293b_10px)]',
      marketingAnalogy: {
        title: 'Lead Generation',
        desc: 'Compresses passive traffic into high-value clients. Nurtures prospects using custom drip copy, transforming simple traffic numbers into sales meetings.',
      },
    },
    {
      id: 'stack',
      name: 'Core Technical Web Stack',
      age: 'Enduring Architecture',
      depth: 'Custom Project Build',
      composition: 'React 18, Vite build engines, Tailwind styling, clean semantic markup',
      description: 'Provides structural integrity to all landing assets. Engineered with zero layout shifts and fast load times, sandstone-solid development prevents mobile click-drops and ensures perfect search index rating.',
      fossil: 'Vite code bundles & Tailwind config',
      color: 'bg-orange-950 border-orange-900',
      patternClass: 'bg-[radial-gradient(circle_at_bottom_left,_#7c2d12_20%,_#431407_80%)]',
      marketingAnalogy: {
        title: 'Web Engineering',
        desc: 'Constructs custom, ultra-fast web frameworks that keep users engaged, prevent bounce-off rates, and provide high security for enterprise clients.',
      },
    },
  ];

  const activeLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  const getSimulationDetails = (val: number) => {
    if (val < 5) {
      return {
        epoch: 'Foundational Tier',
        period: 'Local Organic & Setup',
        kpi: 'SEO Bedrock & Core Web Vitals',
        events: 'Perfect for startups. Focuses on setting up local search metrics, securing key keyword domains, optimizing speeds, and preparing lead-capture frameworks.',
      };
    } else if (val < 20) {
      return {
        epoch: 'Scaling Tier',
        period: 'Ads & Lead Funnels Integration',
        kpi: 'Performance Campaigns + Email Drips',
        events: 'Perfect for growing businesses. Paid Meta/Google ads scale direct user clicks, while email automation systems turn these cold clicks into warm appointments.',
      };
    } else {
      return {
        epoch: 'Market Dominance Tier',
        period: 'Omnichannel National Scale',
        kpi: 'Custom App Engines + Content Calendar',
        events: 'Engineered for industry leaders. High ad budgets fuel national search listings, custom React portal development, deep attribution analytics, and extensive social video production.',
      };
    }
  };

  const simInfo = getSimulationDetails(budgetVal);
  const isDark = theme === 'dark';

  return (
    <section 
      id="strata" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 relative overflow-hidden ${
        isDark ? 'bg-[#0a0a0d] border-zinc-900 text-white' : 'bg-white border-slate-200 text-zinc-900'
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#e8702a]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-full px-4 py-1.5 text-[#e8702a] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Interactive Campaign strata
          </div>
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal mb-4">
            Peel Back the <span className="italic">Strata of Scale</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Every level of digital marketing builds upon the last to create your brand authority. Select a layer below to analyze the campaign layers and see how they stack together.
          </p>
        </div>

        {/* Dynamic Geological Slider */}
        <div className={`border rounded-2xl p-6 sm:p-8 mb-12 shadow-xl transition-colors ${
          isDark ? 'bg-zinc-950 border-zinc-800/80' : 'bg-slate-50 border-slate-100'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#e8702a]" />
                Campaign Budget Scaling Simulator
              </h3>
              <p className="text-zinc-400 text-sm mt-1">
                Drag the slider to preview campaigns and yields at various monthly marketing investments.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:flex gap-4">
              <div className={`border rounded-xl px-4 py-2 ${isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-slate-200'}`}>
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Monthly Budget</span>
                <span className="text-base font-bold text-[#e8702a]">${budgetVal},000 / mo</span>
              </div>
              <div className={`border rounded-xl px-4 py-2 ${isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-slate-200'}`}>
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Target Tier</span>
                <span className={`text-base font-bold flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  <DollarSign className="w-4 h-4 text-orange-400" />
                  {simInfo.epoch}
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 mb-6">
            <input
              type="range"
              min="2"
              max="50"
              value={budgetVal}
              onChange={(e) => setBudgetVal(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-3">
              <span>Foundation (₹50k)</span>
              <span>Growth (₹1.5L)</span>
              <span>Expansion (₹3L)</span>
              <span>Dominance (₹5L+)</span>
            </div>
          </div>

          <div className={`border rounded-xl p-5 mt-4 ${isDark ? 'bg-[#0a0a0d] border-zinc-900' : 'bg-white border-slate-100'}`}>
            <span className="text-xs font-bold text-[#e8702a] uppercase tracking-widest block mb-1">
              Active Strategy: {simInfo.period}
            </span>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-650'}`}>
              {simInfo.events}
            </p>
          </div>
        </div>

        {/* Vertical Stratigraphy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Stratigraphic Columns (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>Marketing Campaign layers</span>
              <span className="text-[11px] text-zinc-500 font-normal font-sans">(Click a layer to inspect)</span>
            </h4>

            {layers.map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`group relative text-left border rounded-xl overflow-hidden p-6 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#e8702a] shadow-lg shadow-[#e8702a]/10 ring-1 ring-[#e8702a] scale-[1.01]'
                      : isDark ? 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/40' : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  {/* Layer texture pattern background */}
                  <div className={`absolute inset-0 opacity-15 mix-blend-overlay ${layer.patternClass}`} />

                  <div className="relative flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${layer.color}`} />
                        <span className="text-lg font-bold group-hover:text-[#e8702a] transition-colors">
                          {layer.name}
                        </span>
                      </div>
                      <div className="flex gap-4 mt-1.5 text-xs text-zinc-400 font-semibold font-sans">
                        <span>Horizon: {layer.age}</span>
                        <span>Scope: {layer.depth}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-zinc-800 group-hover:bg-[#e8702a]/20 group-hover:text-[#e8702a] text-zinc-400 text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold transition-all">
                        {layer.marketingAnalogy.title}
                      </span>
                      <Eye className={`w-4 h-4 transition-all ${isSelected ? 'text-[#e8702a] scale-110' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Core Sample Analysis Panel (5 Cols) */}
          <div className={`lg:col-span-5 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative transition-colors ${
            isDark ? 'bg-gradient-to-b from-zinc-950 to-zinc-900 border-zinc-800/80' : 'bg-white border-slate-200'
          }`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8702a]/5 blur-3xl rounded-full" />

            <div>
              <div className="flex justify-between items-center pb-4 border-b border-zinc-900/10 dark:border-zinc-900">
                <span className="text-[11px] uppercase tracking-widest text-[#e8702a] font-bold">
                  Campaign Layer Audit
                </span>
                <span className="text-zinc-500 text-xs font-mono">ID: {activeLayer.id.toUpperCase()}-9327</span>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold font-playfair">{activeLayer.name}</h3>
                <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">
                  Deliverables: {activeLayer.composition}
                </p>

                <p className={`text-sm leading-relaxed mt-4 rounded-xl p-4 border ${
                  isDark ? 'bg-black/40 border-zinc-800/40 text-zinc-300' : 'bg-slate-50 border-slate-100 text-zinc-650'
                }`}>
                  {activeLayer.description}
                </p>
              </div>

              {/* Fossil/Asset Showcase */}
              <div className={`mt-6 border rounded-xl p-4 ${isDark ? 'bg-zinc-900/60 border-zinc-850' : 'bg-slate-50 border-slate-100'}`}>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                  Key Assets Created
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e8702a]/10 flex items-center justify-center text-[#e8702a] border border-[#e8702a]/30">
                    📈
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">
                      {activeLayer.fossil}
                    </span>
                    <span className="text-xs text-zinc-400">
                      Standard performance benchmark assets
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metaphor Link */}
            <div className="mt-8 pt-6 border-t border-zinc-900/10 dark:border-zinc-900">
              <div className="bg-[#e8702a]/5 border border-[#e8702a]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#e8702a] font-semibold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Growth Strategy: {activeLayer.marketingAnalogy.title}</span>
                </div>
                <p className={`text-xs leading-relaxed font-sans ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {activeLayer.marketingAnalogy.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
