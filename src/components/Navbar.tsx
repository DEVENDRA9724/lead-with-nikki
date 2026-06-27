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
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px] transition-all duration-300">
        {/* Left Logo + Wordmark */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavClick('hero')}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 256 256"
            fill="#ffffff"
            className="transition-transform duration-500 group-hover:rotate-180"
          >
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-xl sm:text-2xl font-playfair italic tracking-tight select-none">
            Lead With Nikki
          </span>
        </div>

        {/* Center Pill (Desktop only) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 items-center gap-1 shadow-lg shadow-black/20">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black shadow-md font-semibold scale-105'
                    : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Action (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenBooking}
            className="bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 hover:scale-[1.03] active:scale-95 transition-all shadow-md flex items-center gap-1 group"
          >
            Sign Up
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Light/Dark Toggle for Mobile */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/95 p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-[99] flex flex-col justify-center items-center gap-8 lg:hidden transition-all duration-300 animate-fade-in">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavClick(item.id);
                }}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="text-white/80 hover:text-white text-2xl font-medium tracking-wide transition-all border-b border-transparent hover:border-white/20 pb-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="bg-white text-gray-900 text-base font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-1 shadow-lg mt-6"
          >
            Sign Up
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
};
