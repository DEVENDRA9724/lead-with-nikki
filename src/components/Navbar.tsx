import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
  onOpenBooking: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavClick,
  activeSection,
  onOpenBooking,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Methodology', id: 'methodology' },
    { label: 'Growth Strata', id: 'strata' },
    { label: 'Insights', id: 'insights' },
    { label: 'Plans', id: 'plans' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Main Header Wrapper */}
      <nav className="fixed top-0 left-0 right-0 z-[100] p-4 sm:p-5 bg-gradient-to-b from-black/75 via-black/40 to-transparent backdrop-blur-[1px] transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
          
          {/* Left Logo + Wordmark */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavClick('hero')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="#ffffff"
              className="transition-transform duration-500 group-hover:rotate-185"
            >
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
            <span className="text-white text-lg sm:text-xl font-playfair italic tracking-tight select-none">
              Lead With Nikki
            </span>
          </div>

          {/* Center Pill (Desktop only - aligned inside relative layout) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-full p-1 items-center gap-0.5 shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black shadow-md scale-105'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions (Desktop only) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Light/Dark Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenBooking}
              className="bg-white text-gray-900 text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-100 hover:scale-[1.03] active:scale-95 transition-all shadow-md flex items-center gap-1 group cursor-pointer"
            >
              Sign Up
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Actions (Mobile/Tablet only) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Light/Dark Toggle for Mobile */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Full Screen Mobile Navigation Tab Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-[150] flex flex-col p-6 lg:hidden animate-fade-in">
          
          {/* Overlay Header */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 256 256" fill="#ffffff">
                <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
              </svg>
              <span className="text-white text-lg font-playfair italic">Lead With Nikki</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 p-2.5 rounded-full border border-zinc-800 bg-zinc-900/50 cursor-pointer hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Screen Navigation Tabs */}
          <div className="flex flex-col gap-4 mt-8 flex-grow">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavClick(item.id);
                  }}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#e8702a] text-white border-[#e8702a] shadow-lg shadow-[#e8702a]/15'
                      : 'bg-zinc-900/30 text-zinc-400 border-zinc-900/80 hover:bg-zinc-900/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-6 border-t border-zinc-900">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-white text-zinc-950 py-3.5 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:bg-gray-100 transition-all cursor-pointer"
            >
              Sign Up
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
