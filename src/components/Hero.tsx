import { Sparkles, MessageSquare } from 'lucide-react';
import SiriOrb from './SiriOrb';
import { useMemo, useCallback, memo } from 'react';
import { isLowEndDevice, isTouchDevice } from '../utils/deviceDetection';

// Helper function for smooth scroll
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = memo(() => {
  // Memoize device detection to prevent recalculation on every render
  const lowEndMode = useMemo(() => isLowEndDevice(), []);
  const isTouch = useMemo(() => isTouchDevice(), []);
  
  // Memoize callbacks to prevent re-creation on every render
  const handleExploreSolutions = useCallback(() => {
    scrollToSection('products');
  }, []);

  const handleRequestDemo = useCallback(() => {
    scrollToSection('contact');
  }, []);

  // Memoize button classes to prevent recreation
  const primaryBtnClass = useMemo(() => 
    `group bg-gradient-to-r from-sky-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg ${isTouch ? '' : 'hover:scale-105'} transition-all duration-200 flex items-center justify-center gap-2`,
    [isTouch]
  );

  const secondaryBtnClass = useMemo(() => 
    `bg-slate-800/80 border-2 border-sky-500/30 text-white px-10 py-4 rounded-full font-semibold hover:border-sky-400 ${isTouch ? '' : 'hover:scale-105'} transition-all duration-200 flex items-center justify-center gap-2`,
    [isTouch]
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1628] via-[#0d2850] to-[#1e5f8f] overflow-hidden">
      {/* Strong radial gradient glow effect around orb */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3)_0%,_rgba(30,64,175,0.2)_30%,_transparent_60%)]"></div>
      
      {/* Bottom cyan gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-cyan-600/20 via-blue-700/10 to-transparent"></div>

      {/* Main content container - Text left, Orb right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] animate-fade-in-up">
              AI Agents That Deliver<br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Human-Like Customer</span><br />
              <span className="text-slate-100">Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Transform your business with <span className="text-sky-400 font-semibold">intelligent automation</span>. 
              NamoosX delivers advanced conversational AI that automates interactions, boosts sales, and provides exceptional 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={handleExploreSolutions}
                className={primaryBtnClass}
              >
                <span>Explore Our Solutions</span>
                <Sparkles className="w-4 h-4" />
              </button>
              <button 
                onClick={handleRequestDemo}
                className={secondaryBtnClass}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Request a Demo</span>
              </button>
            </div>
          </div>

          {/* Right side - SiriOrb */}
          {!lowEndMode && (
            <div className="flex items-center justify-center pointer-events-none">
              <div className="w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">
                <SiriOrb hue={0} hoverIntensity={0} rotateOnHover={false} forceHoverState={true} animSpeed={0.4} />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
