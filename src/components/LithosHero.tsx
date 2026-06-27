import React, { useState, useEffect, useRef } from 'react';
import { RevealLayer } from './RevealLayer';
import { Sparkles, Sliders, Play, Pause } from 'lucide-react';

interface LithosHeroProps {
  onStartDigging: () => void;
}

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85';
const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85';

export const LithosHero: React.FC<LithosHeroProps> = ({ onStartDigging }) => {
  const [spotlightRadius, setSpotlightRadius] = useState(260);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Mouse tracking refs
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  // Idle and Demo Mode state
  const lastMouseMoveTime = useRef<number>(Date.now());
  const angleRef = useRef<number>(0);

  useEffect(() => {
    // Check if the user is on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Auto-enable demo mode on mobile so the user gets a cool animation
      setIsDemoMode(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Disable demo mode on desktop when mouse starts moving
      if (!isMobile) {
        setIsDemoMode(false);
      }
      lastMouseMoveTime.current = Date.now();
      mouse.current = { x: e.clientX, y: e.clientY };

      if (smooth.current.x === -999) {
        smooth.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile) {
        setIsDemoMode(false);
      }
      lastMouseMoveTime.current = Date.now();
      const touch = e.touches[0];
      mouse.current = { x: touch.clientX, y: touch.clientY };

      if (smooth.current.x === -999) {
        smooth.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const tick = () => {
      const now = Date.now();

      // If idle for more than 4 seconds on desktop, we can orbit
      const isIdle = now - lastMouseMoveTime.current > 4000;

      if (isDemoMode || (isIdle && !isMobile)) {
        // Orbit spotlight in a circle at the center of the screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const radius = Math.min(window.innerWidth, window.innerHeight) * 0.2;

        angleRef.current += 0.015;
        const targetX = centerX + Math.cos(angleRef.current) * radius;
        const targetY = centerY + Math.sin(angleRef.current) * radius * 0.7;

        if (smooth.current.x === -999) {
          smooth.current = { x: targetX, y: targetY };
        } else {
          smooth.current.x += (targetX - smooth.current.x) * 0.08;
          smooth.current.y += (targetY - smooth.current.y) * 0.08;
        }
      } else {
        // Standard mouse lerp
        if (smooth.current.x === -999) {
          if (mouse.current.x !== -999) {
            smooth.current = { x: mouse.current.x, y: mouse.current.y };
          }
        } else {
          smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
          smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
        }
      }

      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDemoMode]);

  return (
    <section
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      {/* 1. Base image (z-10) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{
          backgroundImage: `url(${BG_IMAGE_1})`,
        }}
      />

      {/* 2. Reveal layer (z-30) */}
      <RevealLayer
        image={BG_IMAGE_2}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        spotlightRadius={spotlightRadius}
      />

      {/* Custom Spotlight Controls HUD (z-50) */}
      <div className="absolute top-24 left-5 sm:left-10 z-50 flex flex-col gap-2">
        <button
          onClick={() => setShowControls(!showControls)}
          className="bg-black/50 backdrop-blur-md border border-white/20 hover:border-white/40 text-white rounded-full p-2.5 flex items-center justify-center gap-2 hover:bg-black/75 transition-all text-xs font-semibold uppercase tracking-wider active:scale-95 shadow-lg pointer-events-auto"
        >
          <Sliders className="w-4 h-4" />
          <span className="hidden sm:inline">Analysis HUD</span>
        </button>

        {showControls && (
          <div className="bg-black/70 backdrop-blur-lg border border-white/10 rounded-2xl p-4 w-64 shadow-2xl flex flex-col gap-4 animate-fade-in pointer-events-auto">
            <div>
              <label className="text-[10px] uppercase font-bold text-white/50 tracking-widest block mb-1">
                Spotlight Radius: {spotlightRadius}px
              </label>
              <input
                type="range"
                min="100"
                max="450"
                value={spotlightRadius}
                onChange={(e) => setSpotlightRadius(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#e8702a]"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest">
                Auto-Orbit Mode
              </span>
              <button
                onClick={() => setIsDemoMode(!isDemoMode)}
                className={`p-1.5 rounded-lg border transition-all ${
                  isDemoMode
                    ? 'bg-[#e8702a]/20 border-[#e8702a] text-[#e8702a]'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {isDemoMode ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[10px] text-white/40 leading-normal">
              {isDemoMode
                ? 'Demo mode active. The spotlight is orbiting. Move mouse to release.'
                : 'Move your cursor over the screen to peel back raw web traffic and reveal your brand\'s growth structures.'}
            </p>
          </div>
        )}
      </div>

      {/* 3. Heading (z-50) */}
      <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none select-none z-50">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            Campaigns hold
          </span>
          <span
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
          >
            tales of growth
          </span>
        </h1>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#e8702a] to-transparent mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
      </div>

      {/* 4. Bottom-left paragraph (z-50) */}
      <div
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] hero-anim hero-fade z-50"
        style={{ animationDelay: '0.7s' }}
      >
        <p className="text-sm text-white/80 leading-relaxed drop-shadow-md">
          Every layer of digital traffic records a chapter of your brand's growth, from social impressions to high-value conversions, accumulated across campaigns over time.
        </p>
      </div>

      {/* 5. Bottom-right block (z-50) */}
      <div
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade z-50"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed drop-shadow-md">
          Our customized marketing plans let you peel back the surface metrics to trace how user experience, SEO, and paid media combine to shape your revenue bedrock.
        </p>
        <button
          onClick={onStartDigging}
          className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 pointer-events-auto flex items-center gap-2 group"
        >
          <span>Examine Growth Strata</span>
          <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
        </button>
      </div>

      {/* Interactive indicator for the spotlight reveal */}
      {cursorPos.x === -999 && !isDemoMode && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
          <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white text-sm flex items-center gap-3 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-[#e8702a]"></div>
            <span>Move cursor to analyze conversion layers</span>
          </div>
        </div>
      )}
    </section>
  );
};
