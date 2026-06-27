import React from 'react';
import { TrendingUp, UserPlus, Search, Globe, Code, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<any>;
  title: string;
  badge: string;
  description: string;
  features: string[];
}

interface AgencyServicesProps {
  theme: 'dark' | 'light';
}

export const AgencyServices: React.FC<AgencyServicesProps> = ({ theme }) => {
  const services: ServiceItem[] = [
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      badge: 'Data-Driven ROI',
      description: 'Run targeted ad campaigns that translate directly into measurable sales and growth, leaving zero space for guesswork.',
      features: ['PPC Campaigns', 'Conversion Funnels', 'A/B Testing', 'ROI Dashboards'],
    },
    {
      icon: UserPlus,
      title: 'Lead Generation',
      badge: 'Targeted Growth',
      description: 'Attract, engage, and capture interest from your ideal customers. Build a continuous pipeline of high-converting leads.',
      features: ['Lead Capture Funnels', 'Inbound Strategies', 'Email Automation', 'Audience Segmentation'],
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      badge: 'Organic Authority',
      description: 'Optimize search footprint and scale visibility. Rank higher, secure traffic, and build permanent long-term brand equity.',
      features: ['Technical Audit', 'Keyword Strategy', 'On-Page & Off-Page', 'E-commerce SEO'],
    },
    {
      icon: Globe,
      title: 'Social Media Marketing (SMM)',
      badge: 'Engaged Community',
      description: 'Establish a dominant brand footprint across digital platforms through consistent narrative delivery and audience connection.',
      features: ['Content Production', 'Brand Storytelling', 'Influencer Partnering', 'Analytics Review'],
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      badge: 'Conversion Engine',
      description: 'Construct websites and landing portals engineered specifically for user flow speed and brand conversion strength.',
      features: ['React & Next.js Apps', 'Responsive Designs', 'UI/UX Prototypes', 'Conversion Audits'],
    },
  ];

  const isDark = theme === 'dark';

  return (
    <section 
      id="services" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 relative overflow-hidden ${
        isDark ? 'bg-[#050507] border-zinc-900 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
      }`}
    >
      {/* Visual decorations */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#e8702a]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-full px-4 py-1.5 text-[#e8702a] text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e8702a] animate-pulse"></span>
              Core Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-playfair font-normal">
              Engineered for <span className="italic">Digital Expansion</span>
            </h2>
          </div>
          <p className={`max-w-md text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Lead With Nikki designs customized digital marketing models built to increase traffic, capture verified interest, and solidify market value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group border rounded-2xl p-6 sm:p-8 hover:border-[#e8702a]/30 transition-all duration-500 flex flex-col justify-between hover:shadow-xl relative ${
                  isDark 
                    ? 'bg-zinc-950/60 border-zinc-900 hover:bg-zinc-950 hover:shadow-black/40' 
                    : 'bg-white border-slate-200 hover:bg-white hover:shadow-slate-200/50'
                }`}
              >
                {/* Accent top gradient hover reveal */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-[#e8702a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border text-[#e8702a] group-hover:bg-[#e8702a] group-hover:text-white transition-all duration-500 group-hover:scale-105 ${
                      isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-100'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 font-bold uppercase tracking-widest font-mono">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#e8702a] transition-colors">
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2.5 border-t border-zinc-900/10 dark:border-zinc-900 pt-6 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`text-xs flex items-center gap-2 ${isDark ? 'text-zinc-500 group-hover:text-zinc-400' : 'text-zinc-500 group-hover:text-zinc-700'}`}>
                        <span className="w-1 h-1 rounded-full bg-[#e8702a]/60" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className="text-xs font-semibold hover:text-[#e8702a] flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-300 cursor-pointer">
                    Learn methodology
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Interactive Callout Card (Final placeholder in Grid) */}
          <div className={`border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#e8702a]/40 transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-[#e8702a]/10 to-transparent border-[#e8702a]/20' 
              : 'bg-gradient-to-br from-[#e8702a]/5 to-transparent border-[#e8702a]/10'
          }`}>
            <div>
              <span className="text-[10px] font-bold text-[#e8702a] uppercase tracking-widest font-mono">
                Custom Strategy
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-3">
                Need a Custom-Built Blueprint?
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Tell us about your brand goals. Our experts will outline a customized growth roadmap showing you where to optimize.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-center text-xs font-semibold py-3 px-6 rounded-full transition-all block mt-6 active:scale-95 shadow-md shadow-[#e8702a]/10 hover:shadow-[#e8702a]/25"
            >
              Get Custom Marketing Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
