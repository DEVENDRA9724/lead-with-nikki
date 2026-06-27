import React from 'react';
import { Shield, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

interface PlanItem {
  name: string;
  price: string;
  priceSub: string;
  badge?: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  accentColor: string;
  btnStyle: string;
}

interface PlansSectionProps {
  theme: 'dark' | 'light';
}

export const PlansSection: React.FC<PlansSectionProps> = ({ theme }) => {
  const plans: PlanItem[] = [
    {
      name: 'Core Sample Tier',
      price: '₹39,000',
      priceSub: 'Baseline Retainer / Quote on Request',
      description: 'Ideal for local businesses wishing to secure their organic search bedrock and baseline online authority.',
      icon: Shield,
      accentColor: 'text-blue-400',
      btnStyle: 'bg-white/10 hover:bg-white/15 dark:text-white border border-white/20',
      features: [
        'Local SEO & Keyword Mapping',
        'Speed & Core Web Vitals Audits',
        'Monthly Transparent Reporting',
        '2 Conversion Landing Pages',
        'Lead Capture Form Integration',
      ],
    },
    {
      name: 'Stratum Tier',
      price: '₹99,000',
      priceSub: 'Average Retainer / Quote on Request',
      badge: 'Popular Choice',
      description: 'Engineered for scaling brands looking to deploy high-pressure performance ad campaigns and secure lead pipelines.',
      icon: Zap,
      accentColor: 'text-[#e8702a]',
      btnStyle: 'bg-[#e8702a] hover:bg-[#d2611f] text-white shadow-md shadow-[#e8702a]/20',
      features: [
        'Everything in Core Sample',
        'Performance Ads (Google & Meta)',
        'Full Funnel A/B Testing',
        'Custom Web & UX Development',
        'Bi-weekly Performance Syncs',
        'Up to 10 Target Keywords Ranked',
      ],
    },
    {
      name: 'Deep Time Tier',
      price: 'Custom Retainer',
      priceSub: 'Omnichannel Campaign / Pricing on Request',
      description: 'Omnichannel expansion campaigns combining deep data intelligence, custom app development, and social media engines.',
      icon: Sparkles,
      accentColor: 'text-purple-400',
      btnStyle: 'bg-white dark:bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-100',
      features: [
        'Everything in Stratum Tier',
        'Social Media Content Engine',
        'Full Brand Creative Storytelling',
        'Dedicated Campaign Manager',
        'Unlimited Site Speed Optimizations',
        'Predictive Lead Modeling',
      ],
    },
  ];

  const isDark = theme === 'dark';

  return (
    <section 
      id="plans" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 relative overflow-hidden ${
        isDark ? 'bg-[#050507] border-zinc-900 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
      }`}
    >
      {/* Background glow decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900/10 dark:bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 inline-block mb-3">
            Investment Levels
          </span>
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal mb-4">
            Custom <span className="italic">Growth Plans</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}>
            Choose the strategic depth that matches your growth budget. Transparent reporting and ROI calculations integrated at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            // Overwrite buttons for light mode so they are contrasty
            let buttonClass = plan.btnStyle;
            if (!isDark && plan.name === 'Core Sample Tier') {
              buttonClass = 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200';
            } else if (!isDark && plan.name === 'Deep Time Tier') {
              buttonClass = 'bg-zinc-900 hover:bg-zinc-850 text-white';
            }

            return (
              <div
                key={index}
                className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.badge
                    ? 'border-[#e8702a] shadow-lg shadow-[#e8702a]/5 lg:scale-105 z-10'
                    : isDark ? 'border-zinc-900 hover:border-zinc-800' : 'border-slate-200 hover:border-slate-300'
                } ${isDark ? 'bg-zinc-950/60' : 'bg-white'}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8702a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <Icon className={`w-5 h-5 ${plan.accentColor}`} />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-mono">{plan.price}</span>
                      {plan.price !== 'Custom Retainer' && (
                        <span className="text-xs text-zinc-500 font-semibold uppercase">/ month</span>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide block mt-1">
                      {plan.priceSub}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}>
                    {plan.description}
                  </p>

                  <ul className="space-y-3.5 pt-6 border-t border-zinc-900/10 dark:border-zinc-900">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`text-xs flex items-start gap-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.accentColor}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`w-full py-3 px-4 rounded-full text-center text-xs font-semibold block transition-all hover:scale-[1.02] active:scale-95 ${buttonClass}`}
                  >
                    Request Custom Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
