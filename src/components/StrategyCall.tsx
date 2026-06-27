import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Calendar, CheckCircle2, User, Building, MessageSquare, ChevronRight } from 'lucide-react';

interface StrategyCallProps {
  theme: 'dark' | 'light';
  quizResult: { bottleneck: string; budget: string; channel: string } | null;
}

export const StrategyCall: React.FC<StrategyCallProps> = ({ theme, quizResult }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Performance Marketing',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync quiz diagnostic results when they are submitted
  useEffect(() => {
    if (quizResult) {
      // Map bottleneck value to form services
      let targetService = 'Performance Marketing';
      if (quizResult.bottleneck.toLowerCase().includes('seo') || quizResult.bottleneck.toLowerCase().includes('traffic')) {
        targetService = 'SEO';
      } else if (quizResult.bottleneck.toLowerCase().includes('lead') || quizResult.bottleneck.toLowerCase().includes('conversion')) {
        targetService = 'Lead Generation';
      } else if (quizResult.bottleneck.toLowerCase().includes('social') || quizResult.bottleneck.toLowerCase().includes('presence')) {
        targetService = 'SMM';
      }

      setFormData((prev) => ({
        ...prev,
        service: targetService,
        message: `Diagnostic Results:\n- Primary Bottleneck: ${quizResult.bottleneck}\n- Target Budget: ${quizResult.budget}\n- Buyer Channel: ${quizResult.channel}\n\nHi Nikita, I just completed the diagnostic calculator. Let's design a custom roadmap!`,
      }));
    }
  }, [quizResult]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const isDark = theme === 'dark';

  return (
    <section 
      id="contact" 
      className={`py-24 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 ${
        isDark ? 'bg-[#0a0a0d] border-zinc-900 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
      }`}
    >
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#e8702a]/5 blur-[150px] pointer-events-none" />

      <div id="booking-form" className="max-w-7xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Panel: Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8702a]/10 border border-[#e8702a]/30 rounded-full px-4 py-1.5 text-[#e8702a] text-xs font-semibold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5" />
                Let's Partner
              </div>
              <h2 className="text-3xl sm:text-5xl font-playfair font-normal leading-[1.1] mb-6">
                Book a Free <span className="italic block mt-1">Growth Audit Call</span>
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                In this 30-minute strategy session, we will analyze your website framework, dissect your search footprints, and outline a custom roadmap to scale your online authority.
              </p>
            </div>

            {/* Owner & Contact details card */}
            <div className={`border rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden transition-colors ${
              isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-slate-100'
            }`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#e8702a]/10 to-transparent rounded-bl-full" />
              
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono block">
                  Lead Strategist & Founder
                </span>
                <span className="text-xl font-bold block mt-1 font-playfair">
                  Nikita Tejwani
                </span>
                <span className="text-xs text-[#e8702a] font-medium font-sans">
                  Digital Marketing Consultant
                </span>
              </div>

              <div className="space-y-4 border-t border-zinc-900/10 dark:border-zinc-900 pt-6">
                <a
                  href="tel:+919327428481"
                  className={`flex items-center gap-3 transition-colors text-sm group ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900/10 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-[#e8702a] group-hover:bg-[#e8702a] group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 93274 28481</span>
                </a>

                <div className={`flex items-start gap-3 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900/10 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-[#e8702a] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-relaxed">
                    Block no:-701, Ananta premium living, opposite German Venya Bunglows, near Karnavati Vivanta Living, Bhat, Ahmedabad, Gujarat 382428
                  </span>
                </div>

                <a
                  href="https://www.instagram.com/nikki_tejwani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 transition-colors text-sm group ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900/10 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-[#e8702a] group-hover:bg-[#e8702a] group-hover:text-white transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs">@nikki_tejwani</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form (7 Cols) */}
          <div className={`lg:col-span-7 border rounded-3xl p-6 sm:p-10 shadow-2xl relative min-h-[460px] transition-colors ${
            isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-slate-100'
          }`}>
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#e8702a]/10 border border-[#e8702a]/30 flex items-center justify-center text-[#e8702a] mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-2">
                  Strategy Request Submitted
                </h3>
                <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-[#e8702a]">{formData.name}</span>. Nikita Tejwani will review your business profile and contact you within 24 hours at <span className="font-semibold text-[#e8702a]">{formData.email}</span>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#e8702a] font-bold uppercase tracking-wider hover:text-white hover:bg-[#e8702a] transition-all border border-[#e8702a]/20 rounded-full px-5 py-2"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold mb-1">Send a Message</h3>
                  <p className="text-xs text-zinc-500">Provide details so we can research your business before our call.</p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <User className="w-3.5 h-3.5 text-[#e8702a]" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                      isDark 
                        ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white placeholder-zinc-600' 
                        : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <Mail className="w-3.5 h-3.5 text-[#e8702a]" />
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                      isDark 
                        ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white placeholder-zinc-600' 
                        : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <Building className="w-3.5 h-3.5 text-[#e8702a]" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Lead With Nikki Ltd."
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                      isDark 
                        ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white placeholder-zinc-600' 
                        : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Service Select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                      isDark 
                        ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white' 
                        : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900'
                    }`}
                  >
                    <option value="Performance Marketing">Performance Marketing (Google/Meta Ads)</option>
                    <option value="Lead Generation">Lead Generation Funnels</option>
                    <option value="SEO">Search Engine Optimization (SEO)</option>
                    <option value="SMM">Social Media Marketing (SMM)</option>
                    <option value="Web Design & Development">Web Design & Fullstack Development</option>
                    <option value="Custom Project">Custom Integrated Campaign</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <MessageSquare className="w-3.5 h-3.5 text-[#e8702a]" />
                    Goals & Context
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, targets, and current pain points..."
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none ${
                      isDark 
                        ? 'bg-black border-zinc-900 focus:border-[#e8702a] text-white placeholder-zinc-600' 
                        : 'bg-slate-50 border-slate-200 focus:border-[#e8702a] text-zinc-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#e8702a] hover:bg-[#d2611f] disabled:bg-zinc-800 disabled:text-zinc-600 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 mt-2 shadow-lg shadow-[#e8702a]/10 hover:shadow-[#e8702a]/20 cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Strategy Request</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
