import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LithosHero } from './components/LithosHero';
import { AgencyServices } from './components/AgencyServices';
import { AgencyApproach } from './components/AgencyApproach';
import { MarketingQuiz } from './components/MarketingQuiz';
import { GeologyExplorer } from './components/GeologyExplorer';
import { ROICalculator } from './components/ROICalculator';
import { BlogSection } from './components/BlogSection';
import { PlansSection } from './components/PlansSection';
import { StrategyCall } from './components/StrategyCall';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [quizResult, setQuizResult] = useState<{ bottleneck: string; budget: string; channel: string } | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle smooth scrolling
  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Open booking form / scroll to contact
  const handleOpenBooking = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle Theme state and update document body styles
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handle quiz diagnostic submit
  const handleQuizSubmit = (data: { bottleneck: string; budget: string; channel: string }) => {
    setQuizResult(data);
    setTimeout(() => {
      handleNavClick('contact');
    }, 400);
  };

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('bg-black');
      body.classList.remove('bg-white');
    } else {
      body.classList.add('bg-white');
      body.classList.remove('bg-black');
    }
  }, [theme]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['services', 'methodology', 'strata', 'insights', 'plans', 'contact'];
    
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          // Match section when it occupies a solid chunk of the viewport
          rootMargin: '-20% 0px -40% 0px'
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div 
      className={`min-h-screen tracking-[-0.02em] transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050507] text-white' : 'bg-white text-zinc-900'
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fixed Navigation */}
      <Navbar 
        onNavClick={handleNavClick} 
        activeSection={activeSection}
        onOpenBooking={handleOpenBooking}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 100dvh Spotlight Reveal Hero Section (Always Dark-Themed for Visual Effect) */}
      <LithosHero onStartDigging={() => handleNavClick('strata')} />

      {/* Agency Services Section (Mapped to 'services') */}
      <AgencyServices theme={theme} />

      {/* Agency Approach Section (Mapped to 'methodology') */}
      <AgencyApproach theme={theme} />

      {/* Interactive Diagnostic Quiz (Tied to methodology flow) */}
      <MarketingQuiz theme={theme} onSubmitQuiz={handleQuizSubmit} />

      {/* Campaign Strata budget simulator (Mapped to 'strata') */}
      <GeologyExplorer theme={theme} />

      {/* Interactive ROI Calculator */}
      <ROICalculator theme={theme} />

      {/* Blog & Marketing Insights Section (Mapped to 'insights') */}
      <BlogSection theme={theme} onCtaClick={handleOpenBooking} />

      {/* Investment Plans & Packages (Mapped to 'plans') */}
      <PlansSection theme={theme} />

      {/* Strategy Booking Form & Details (Mapped to 'contact') */}
      <StrategyCall theme={theme} quizResult={quizResult} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
