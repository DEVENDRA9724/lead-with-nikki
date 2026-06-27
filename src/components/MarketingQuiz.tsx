import React, { useState } from 'react';
import { HelpCircle, ArrowRight, ArrowLeft, RefreshCw, Send, CheckCircle2 } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    desc: string;
  }[];
}

interface MarketingQuizProps {
  theme: 'dark' | 'light';
  onSubmitQuiz: (quizData: { bottleneck: string; budget: string; channel: string }) => void;
}

export const MarketingQuiz: React.FC<MarketingQuizProps> = ({ theme, onSubmitQuiz }) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: 'What is your primary digital marketing bottleneck?',
      options: [
        { label: 'Low Traffic Volume', value: 'traffic', desc: 'Struggling to get qualified visitors to see your products or services.' },
        { label: 'Poor Conversion Rate', value: 'conversion', desc: 'Getting visitors to your site, but they leave without buying or signing up.' },
        { label: 'Unoptimized Ad Spend', value: 'adspend', desc: 'Running ads on Google/Meta but the ROI is too low or inconsistent.' },
        { label: 'Weak Social Presence', value: 'social', desc: 'Lacking brand authority and engagement on Instagram, LinkedIn, etc.' },
      ],
    },
    {
      id: 2,
      text: 'What is your estimated monthly marketing ad budget?',
      options: [
        { label: 'Less than ₹50,000 / mo', value: 'low', desc: 'Focusing on high-yield bootstrapping, local SEO, and conversion optimization.' },
        { label: '₹50,000 - ₹2,00,000 / mo', value: 'mid', desc: 'Ready to scale paid performance ads and targeted lead capture systems.' },
        { label: '₹2,00,000 - ₹5,00,000 / mo', value: 'high', desc: 'Expanding national presence, multichannels, and custom web assets.' },
        { label: 'Above ₹5,00,000 / mo', value: 'enterprise', desc: 'Seeking category dominance, enterprise software integrations, and content engines.' },
      ],
    },
    {
      id: 3,
      text: 'Where does your target audience primarily make transactions?',
      options: [
        { label: 'B2B / Inbound Consultation', value: 'consult', desc: 'Booking discovery calls, requests for quotes, or sales consultations.' },
        { label: 'E-Commerce Storefront', value: 'ecommerce', desc: 'Direct purchasing of consumer products through a digital storefront.' },
        { label: 'Local Service Booking', value: 'local', desc: 'Booking physical services, medical appointments, or local services.' },
        { label: 'Digital Products / Education', value: 'digital', desc: 'Purchasing courses, software subscriptions (SaaS), or ebook resources.' },
      ],
    },
  ];

  const handleAnswerSelect = (optionValue: string) => {
    setAnswers({ ...answers, [step]: optionValue });
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setStep(0);
    setShowResult(false);
    setQuizSubmitted(false);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setQuizSubmitted(true);
      
      // Get answer labels
      const bottleneckLabel = questions[0].options.find(o => o.value === answers[0])?.label || '';
      const budgetLabel = questions[1].options.find(o => o.value === answers[1])?.label || '';
      const channelLabel = questions[2].options.find(o => o.value === answers[2])?.label || '';
      
      onSubmitQuiz({
        bottleneck: bottleneckLabel,
        budget: budgetLabel,
        channel: channelLabel
      });
    }, 1000);
  };

  // Derive customized campaign suggestions based on responses
  const getCustomBlueprint = () => {
    const bn = answers[0];
    const bg = answers[1];
    const ch = answers[2];

    let focus = '';
    let description = '';
    let recommendation = [] as string[];

    // 1. Bottleneck recommendations
    if (bn === 'traffic') {
      focus = 'Organic Traffic Growth & High-Intent Paid Search';
      description = 'Your site has low visibility. We need to establish an organic search bedrock and buy high-intent traffic via search ads.';
      recommendation.push('Run a technical SEO keyword crawl to rank for top transactional terms.');
      recommendation.push('Launch targeted Google Search Ad campaign directed at product keyword pages.');
    } else if (bn === 'conversion') {
      focus = 'Conversion Funnel & Core Web Shift';
      description = 'Your traffic is bouncing off. We need to reconstruct your landing page layouts and add automated lead magnets.';
      recommendation.push('Optimize landing page load speeds to React/Vite standards.');
      recommendation.push('Deploy sticky lead-capture elements and A/B test hook copy.');
    } else if (bn === 'adspend') {
      focus = 'Attribution Audit & Performance Bids';
      description = 'Your ads are burning money. We must audit your pixel setup, tracking funnels, and test creative hooks.';
      recommendation.push('Set up server-side conversion API tracking to resolve attribution loss.');
      recommendation.push('Design a high-frequency Meta creative testing pipeline.');
    } else {
      focus = 'Social Media Storytelling Engine';
      description = 'Your brand lack engagement. We should formulate a consistent story calendar and partner with index influencers.';
      recommendation.push('Produce 12 short-form Reels/Shorts per month demonstrating customer success.');
      recommendation.push('Map out a corporate LinkedIn narrative campaign.');
    }

    // 2. Budget qualifiers
    if (bg === 'low') {
      recommendation.push('Focus budget strictly on direct local conversion funnels before expanding.');
    } else {
      recommendation.push('Deploy automated email drip campaigns to nurture non-converting ad traffic.');
    }

    // 3. Sales channel qualifiers
    if (ch === 'consult') {
      recommendation.push('Integrate direct CRM booking widgets to schedule strategy appointments instantly.');
    } else if (ch === 'ecommerce') {
      recommendation.push('Deploy dynamic shopping feed retargeting and checkout abandonment emails.');
    }

    return { focus, description, recommendation };
  };

  const blueprint = showResult ? getCustomBlueprint() : null;
  const isDark = theme === 'dark';

  return (
    <section 
      id="methodology" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 ${
        isDark ? 'bg-[#050507] border-zinc-900 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-full px-4 py-1.5 text-[#e8702a] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Growth Diagnostic
          </div>
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal">
            Get Your <span className="italic">Campaign Blueprint</span>
          </h2>
          <p className={`text-sm sm:text-base max-w-lg mx-auto mt-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Answer 3 quick questions to receive a customized growth audit outline prepared specifically for your business goals.
          </p>
        </div>

        {/* Quiz Workspace */}
        <div className={`border rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 ${
          isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-slate-100'
        }`}>
          {!showResult ? (
            <div>
              {/* Progress indicator */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Question {step + 1} of {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 w-8 rounded-full transition-all ${
                        idx === step
                          ? 'bg-[#e8702a] w-12'
                          : idx < step
                          ? 'bg-[#e8702a]/40'
                          : isDark ? 'bg-zinc-800' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question title */}
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-6">
                {questions[step].text}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {questions[step].options.map((opt) => {
                  const isSelected = answers[step] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswerSelect(opt.value)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                        isSelected
                          ? 'border-[#e8702a] bg-[#e8702a]/5 ring-1 ring-[#e8702a]'
                          : isDark
                          ? 'border-zinc-900 bg-zinc-900/30 hover:border-zinc-800 hover:bg-zinc-900/60'
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-slate-100/50'
                      }`}
                    >
                      <span className="text-sm font-bold block">{opt.label}</span>
                      <span className={`text-xs mt-2 block ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        {opt.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center pt-6 border-t border-zinc-900/10 dark:border-zinc-900">
                <button
                  onClick={handleBack}
                  disabled={step === 0}
                  className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    step === 0 
                      ? 'text-zinc-600 cursor-not-allowed opacity-40' 
                      : isDark ? 'text-white hover:text-[#e8702a]' : 'text-zinc-700 hover:text-[#e8702a]'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!answers[step]}
                  className="bg-[#e8702a] hover:bg-[#d2611f] disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all active:scale-95 flex items-center gap-1.5 shadow-md"
                >
                  <span>{step === questions.length - 1 ? 'Analyze' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              {blueprint && (
                <div>
                  <div className="flex justify-between items-start gap-4 pb-6 mb-6 border-b border-zinc-900/10 dark:border-zinc-900">
                    <div>
                      <span className="text-[10px] font-bold text-[#e8702a] uppercase tracking-widest block">
                        Custom Strategy Focus
                      </span>
                      <h3 className="text-2xl font-bold font-playfair mt-1">
                        {blueprint.focus}
                      </h3>
                    </div>
                    <button
                      onClick={handleReset}
                      className={`p-2 rounded-full border transition-colors ${
                        isDark ? 'border-zinc-800 text-zinc-400 hover:text-white' : 'border-slate-200 text-zinc-500 hover:text-zinc-900'
                      }`}
                      aria-label="Restart Quiz"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {blueprint.description}
                  </p>

                  <div className={`p-5 rounded-2xl mb-8 ${isDark ? 'bg-zinc-900/40 border border-zinc-900' : 'bg-slate-50 border border-slate-100'}`}>
                    <span className="text-xs font-bold text-[#e8702a] uppercase tracking-widest block mb-3">
                      Recommended Implementation Steps:
                    </span>
                    <ul className="space-y-3">
                      {blueprint.recommendation.map((rec, index) => (
                        <li key={index} className="text-xs sm:text-sm flex items-start gap-3">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#e8702a] shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Submission Form to Nikita */}
                  {!quizSubmitted ? (
                    <form onSubmit={handleLeadSubmit} className="pt-6 border-t border-zinc-900/10 dark:border-zinc-900">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold mb-1">Email this Strategy Blueprint to Nikita</h4>
                        <p className="text-xs text-zinc-500">We will verify your details and follow up with a fully structured campaign brief.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="Your Name"
                          className={`w-full border rounded-xl px-4 py-3 text-xs outline-none transition-all ${
                            isDark 
                              ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white placeholder-zinc-600' 
                              : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900 placeholder-slate-400'
                          }`}
                        />
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="Business Email"
                          className={`w-full border rounded-xl px-4 py-3 text-xs outline-none transition-all ${
                            isDark 
                              ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white placeholder-zinc-600' 
                              : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900 placeholder-slate-400'
                          }`}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#e8702a] hover:bg-[#d2611f] disabled:bg-zinc-800 text-white text-xs font-semibold py-3 px-6 rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md shadow-[#e8702a]/15 w-full sm:w-auto"
                      >
                        {loading ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>Send Blueprint & Pre-fill Booking</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-2xl p-5 text-center animate-scale-in">
                      <span className="text-sm font-bold text-[#e8702a] block">✓ Blueprint Submitted & Connected</span>
                      <p className="text-xs text-zinc-500 mt-1">
                        Excellent! Your profile is connected. Scroll down to the booking form below to pick a consultation time.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
