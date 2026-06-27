import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Users, Award } from 'lucide-react';

interface ROICalculatorProps {
  theme: 'dark' | 'light';
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ theme }) => {
  // Input states
  const [traffic, setTraffic] = useState<number>(15000);
  const [convRate, setConvRate] = useState<number>(1.2); // as percentage
  const [customerLTV, setCustomerLTV] = useState<number>(25000); // customer value in Rupees
  const [trafficMult, setTrafficMult] = useState<number>(2.5); // target multiplier
  const [targetConvRate, setTargetConvRate] = useState<number>(2.8); // target conversion rate

  // Output states
  const [currentLeads, setCurrentLeads] = useState<number>(0);
  const [currentRevenue, setCurrentRevenue] = useState<number>(0);
  const [projectedLeads, setProjectedLeads] = useState<number>(0);
  const [projectedRevenue, setProjectedRevenue] = useState<number>(0);
  const [revenueGain, setRevenueGain] = useState<number>(0);

  // Sync calculations on slide updates
  useEffect(() => {
    const cLeads = Math.round(traffic * (convRate / 100));
    const cRev = cLeads * customerLTV;

    const pTraffic = traffic * trafficMult;
    const pLeads = Math.round(pTraffic * (targetConvRate / 100));
    const pRev = pLeads * customerLTV;

    setCurrentLeads(cLeads);
    setCurrentRevenue(cRev);
    setProjectedLeads(pLeads);
    setProjectedRevenue(pRev);
    setRevenueGain(pRev - cRev);
  }, [traffic, convRate, customerLTV, trafficMult, targetConvRate]);

  // Adjust target conversion rate when baseline exceeds it
  useEffect(() => {
    if (targetConvRate < convRate) {
      setTargetConvRate(Math.min(10, Number((convRate + 1.0).toFixed(1))));
    }
  }, [convRate]);

  const isDark = theme === 'dark';

  return (
    <section 
      id="calculator" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 ${
        isDark ? 'bg-[#0a0a0d] border-zinc-900 text-white' : 'bg-white border-slate-200 text-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-full px-4 py-1.5 text-[#e8702a] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            ROI Forecaster
          </div>
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal mb-4">
            Forecast Your <span className="italic">Revenue Velocity</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Input your current metrics below and adjust the target growth sliders to see how digital scaling compounds your monthly revenue pipeline.
          </p>
        </div>

        {/* Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Area (7 Cols) */}
          <div className={`lg:col-span-7 border rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl ${
            isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-slate-50 border-slate-100'
          }`}>
            <h3 className="text-lg font-bold flex items-center gap-2 border-b border-zinc-900/10 dark:border-zinc-900 pb-3 mb-2">
              <TrendingUp className="w-5 h-5 text-[#e8702a]" />
              Current Baseline Metrics
            </h3>

            {/* Slider 1: Traffic */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Monthly Traffic</span>
                <span className="text-[#e8702a] font-mono">{traffic.toLocaleString()} visitors</span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
              />
            </div>

            {/* Slider 2: Conversion Rate */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Current Conversion Rate</span>
                <span className="text-[#e8702a] font-mono">{convRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="10.0"
                step="0.1"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
              />
            </div>

            {/* Slider 3: LTV */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Average Deal/Customer Value (LTV)</span>
                <span className="text-[#e8702a] font-mono">₹{customerLTV.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="5000"
                value={customerLTV}
                onChange={(e) => setCustomerLTV(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
              />
            </div>

            <h3 className="text-lg font-bold flex items-center gap-2 border-b border-zinc-900/10 dark:border-zinc-900 pb-3 mt-4 mb-2">
              <Award className="w-5 h-5 text-[#e8702a]" />
              Target Growth Parameters
            </h3>

            {/* Slider 4: Traffic Multiplier */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Target Traffic Increase</span>
                <span className="text-[#e8702a] font-mono">{trafficMult.toFixed(1)}x Traffic ({ (traffic * trafficMult).toLocaleString() } visitors)</span>
              </div>
              <input
                type="range"
                min="1.5"
                max="5.0"
                step="0.5"
                value={trafficMult}
                onChange={(e) => setTrafficMult(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
              />
            </div>

            {/* Slider 5: Target Conv Rate */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Target Conversion Rate</span>
                <span className="text-[#e8702a] font-mono">{targetConvRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={convRate}
                max="10.0"
                step="0.1"
                value={targetConvRate}
                onChange={(e) => setTargetConvRate(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
              />
            </div>

          </div>

          {/* Results Area (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8702a]/10 blur-[80px] rounded-full" />

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#e8702a] font-mono block border-b border-zinc-800 pb-4">
                ROI Forecast Yields
              </span>

              {/* Net Gain Display */}
              <div className="my-8">
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider block">Estimated Monthly Gain</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-white text-3xl font-mono">₹</span>
                  <span className="text-5xl font-extrabold text-white font-mono tracking-tight animate-pulse">
                    {revenueGain.toLocaleString('en-IN')}
                  </span>
                  <span className="text-zinc-400 text-xs font-semibold uppercase">/ month</span>
                </div>
                <p className="text-[11px] text-zinc-500 mt-1.5 leading-relaxed">
                  Additional revenue generated by stacking SEO growth with automated funnels.
                </p>
              </div>

              {/* Data Comparisons */}
              <div className="space-y-4 pt-6 border-t border-zinc-900">
                
                {/* Traffic Comparer */}
                <div className="flex justify-between items-center bg-black/40 rounded-xl p-3 border border-zinc-900/40">
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Monthly Leads</span>
                  </div>
                  <div className="text-right text-xs">
                    <span className="text-zinc-500 block">Baseline: {currentLeads}</span>
                    <span className="text-white font-bold block">Target: {projectedLeads} (+{projectedLeads - currentLeads})</span>
                  </div>
                </div>

                {/* Revenue Comparer */}
                <div className="flex justify-between items-center bg-black/40 rounded-xl p-3 border border-zinc-900/40">
                  <div className="flex items-center gap-2 text-xs bg-transparent">
                    <div className="w-4 h-4 flex items-center justify-center font-bold text-emerald-400 text-[10px] border border-emerald-400 rounded-full select-none leading-none pt-0.5">₹</div>
                    <span>Monthly Revenue</span>
                  </div>
                  <div className="text-right text-xs">
                    <span className="text-zinc-500 block">Baseline: ₹{currentRevenue.toLocaleString('en-IN')}</span>
                    <span className="text-white font-bold block">Target: ₹{projectedRevenue.toLocaleString('en-IN')}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <a
                href="#contact"
                className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-center text-xs font-semibold py-3 px-4 rounded-full transition-all block active:scale-95 shadow-md shadow-[#e8702a]/10 hover:shadow-[#e8702a]/20"
              >
                Secure this Strategy Roadmap
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
