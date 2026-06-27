import React, { useState } from 'react';
import { AreaChart, Compass, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ApproachStep {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  geologicalMetaphor: string;
  bullets: string[];
}

interface AgencyApproachProps {
  theme: 'dark' | 'light';
}

export const AgencyApproach: React.FC<AgencyApproachProps> = ({ theme }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ApproachStep[] = [
    {
      id: 0,
      icon: AreaChart,
      title: 'Data-Driven Analytics',
      subtitle: 'Mapping the Subsurface',
      description: 'We don\'t make guesses. We analyze user behaviors, market movements, and site heatmaps to discover hidden opportunities beneath the surface.',
      geologicalMetaphor: 'Similar to seismic scanning to map sedimentary layers and mineral deposits before drilling.',
      bullets: ['Competitor Analysis', 'User Heatmap Audits', 'Conversion Rate (CRO) Baseline', 'Traffic Source Attributions'],
    },
    {
      id: 1,
      icon: Compass,
      title: 'Strategic Planning',
      subtitle: 'Laying the Bedrock',
      description: 'Every client receives a custom-tailored campaign architectural plan aligned with their long-term growth and budget objectives.',
      geologicalMetaphor: 'Like surveying the tectonic bedrock to ensure structural designs survive high pressures.',
      bullets: ['Channel Allocation Plans', 'Funnel Architecture Map', 'Keyword Map Integration', 'Customer Persona Definition'],
    },
    {
      id: 2,
      icon: MessageSquare,
      title: 'Creative Storytelling',
      subtitle: 'Fossilizing the Narrative',
      description: 'We weave details about your brand into compelling content and social narratives that register emotional connection and trust.',
      geologicalMetaphor: 'Just as organic matter leaves detailed fossil imprints in soft shale, our stories imprint on consumers.',
      bullets: ['Multi-format Copywriting', 'Visual Identity Assets', 'Social Campaign Calendars', 'Interactive Brand Prompts'],
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Transparent ROI Reporting',
      subtitle: 'Measuring the Strata',
      description: 'Through clear analytics reports and direct feedback meetings, you see exactly where your marketing investments are generating leads.',
      geologicalMetaphor: 'Radiometric dating measuring exact sediment layer growth to determine geological progress.',
      bullets: ['Custom Performance Portals', 'Bi-weekly Direct Feedback Syncs', 'Attribution Reports', 'Cost Per Lead Tracking'],
    },
  ];

  const isDark = theme === 'dark';

  return (
    <section 
      id="methodology" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 relative overflow-hidden ${
        isDark ? 'bg-[#0a0a0d] border-zinc-900 text-white' : 'bg-white border-slate-200 text-zinc-900'
      }`}
    >
      {/* Decorative layout assets */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-full px-4 py-1.5 inline-block mb-3">
            Our Core Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal mb-4">
            How We Build <span className="italic">Enduring Authority</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            By blending analytical precision with creative narrative design, we construct campaigns that compound value and endure market pressure.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Steps list selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center gap-4 text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? isDark 
                        ? 'bg-zinc-900/60 border-[#e8702a] shadow-lg shadow-[#e8702a]/5 scale-[1.01]'
                        : 'bg-white border-[#e8702a] shadow-lg shadow-[#e8702a]/5 scale-[1.01]'
                      : isDark
                      ? 'bg-transparent border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20'
                      : 'bg-transparent border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                      isActive
                        ? 'bg-[#e8702a] text-white border-[#e8702a]'
                        : isDark
                        ? 'bg-zinc-950 text-zinc-400 border-zinc-800'
                        : 'bg-slate-50 text-zinc-600 border-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider ${
                        isActive ? 'text-[#e8702a]' : 'text-zinc-500'
                      }`}
                    >
                      Step 0{step.id + 1}
                    </span>
                    <h3 className="text-base font-bold transition-colors group-hover:text-[#e8702a]">
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Core Sample Analysis Panel (7 Cols) */}
          <div className={`lg:col-span-7 border rounded-3xl p-6 sm:p-10 shadow-2xl relative min-h-[420px] flex flex-col justify-between transition-colors ${
            isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-slate-50 border-slate-100'
          }`}>
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-blue-500 via-[#e8702a] to-orange-400" />

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900/10 dark:border-zinc-900 pb-6 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#e8702a] uppercase tracking-widest">
                    {steps[activeStep].subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-playfair mt-1">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <div className={`text-[10px] font-mono px-3 py-1.5 rounded-lg border ${
                  isDark ? 'text-zinc-500 bg-zinc-900 border-zinc-800' : 'text-zinc-500 bg-white border-slate-200'
                }`}>
                  METRIC: ACCURACY 100%
                </div>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {steps[activeStep].description}
              </p>

              {/* Metaphor Block */}
              <div className="bg-[#e8702a]/5 border border-[#e8702a]/15 rounded-xl p-4 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#e8702a] font-bold block mb-1">
                  Geological Metaphor
                </span>
                <p className={`text-xs italic leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {steps[activeStep].geologicalMetaphor}
                </p>
              </div>

              {/* Bullets Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps[activeStep].bullets.map((bullet, idx) => (
                  <div key={idx} className={`flex items-center gap-2 text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <CheckCircle2 className="w-4 h-4 text-[#e8702a]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-900/10 dark:border-zinc-900 text-xs text-zinc-500">
              <span>Owner: Nikita Tejwani</span>
              <span>Growth Focused agency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
