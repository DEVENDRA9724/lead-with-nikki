import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column: Brand & Metadata */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 256 256"
              fill="#ffffff"
            >
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
            <span className="text-white text-lg font-playfair italic">Lead With Nikki</span>
          </div>
          <p className="text-zinc-500 text-xs mt-1 text-center md:text-left leading-normal">
            &copy; {new Date().getFullYear()} Lead With Nikki. All rights reserved.
          </p>
        </div>

        {/* Center: Contact Brief */}
        <p className="text-zinc-500 text-xs text-center max-w-sm hidden lg:block leading-relaxed">
          Lead With Nikki is a digital marketing agency based in Ahmedabad, Gujarat. Owner: Nikita Tejwani.
        </p>

        {/* Right Column: Back to Top */}
        <button
          onClick={scrollToTop}
          className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full p-3 transition-all border border-zinc-800 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-md"
          aria-label="Scroll back to top"
        >
          <span className="text-xs font-semibold px-1 hidden sm:inline">Back to Top</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
};
