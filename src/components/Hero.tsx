import { Sparkles, MessageSquare, TrendingUp, Users } from 'lucide-react';
import SiriOrb from './SiriOrb';
import { useRef } from 'react';
import { isLowEndDevice, isTouchDevice } from '../utils/deviceDetection';

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const lowEndMode = isLowEndDevice();
  const isTouch = isTouchDevice();
  const handleExploreSolutions = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestDemo = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduce blur intensity on low-end devices */}
        <div className={`absolute top-20 left-10 w-96 h-96 bg-sky-500/10 rounded-full ${lowEndMode ? 'blur-xl' : 'blur-3xl'} animate-float`} style={{ willChange: 'transform' }}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full ${lowEndMode ? 'blur-xl' : 'blur-3xl'} animate-float-delayed`} style={{ willChange: 'transform' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-full ${lowEndMode ? 'blur-xl' : 'blur-3xl'}`}></div>
      </div>

      {/* Background Siri orb (from /siri) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30">
        <div className="w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] lg:w-[38rem] lg:h-[38rem]">
          <SiriOrb hue={0} hoverIntensity={0.1} rotateOnHover={true} forceHoverState={false} animSpeed={0.3} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl mx-auto">
            AI Agents, That Deliver<br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Human-Like Customer</span><br />
            Experiences
          </h1>

          <p className="text-base md:text-lg text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            Scale your business with intelligent automation. NamoosX delivers advanced conversational
            AI that helps you automate interactions, boost sales, and provide exceptional support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleExploreSolutions}
              className={`bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-sky-500/50 ${isTouch ? '' : 'hover:scale-105'} transition-transform duration-300 flex items-center justify-center space-x-2`}
            >
              <span>Explore Our Solutions</span>
            </button>
            <button 
              onClick={handleRequestDemo}
              className={`bg-slate-800 border-2 border-slate-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 hover:border-sky-500 ${isTouch ? '' : 'hover:scale-105'} transition-all duration-300 flex items-center justify-center space-x-2`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request a Demo</span>
            </button>
          </div>
        </div>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className={`text-center p-3 rounded-lg ${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/30 backdrop-blur-sm'} border border-slate-700/50 hover:border-sky-500/30 transition-colors`}>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-400 text-xs">Projects Completed</div>
            </div>
            <div className={`text-center p-3 rounded-lg ${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/30 backdrop-blur-sm'} border border-slate-700/50 hover:border-sky-500/30 transition-colors`}>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-slate-400 text-xs">Client Satisfaction</div>
            </div>
            <div className={`text-center p-3 rounded-lg ${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/30 backdrop-blur-sm'} border border-slate-700/50 hover:border-sky-500/30 transition-colors`}>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-400 text-xs">AI Solutions Deployed</div>
            </div>
            <div className={`text-center p-3 rounded-lg ${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/30 backdrop-blur-sm'} border border-slate-700/50 hover:border-sky-500/30 transition-colors`}>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-400 text-xs">Support Available</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className={`${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/50 backdrop-blur-sm'} p-6 rounded-xl shadow-lg animate-float border border-slate-700 hover:border-sky-500/50 transition-transform duration-300 ${isTouch ? '' : 'hover:scale-105'}`} style={{ willChange: 'transform' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-semibold text-white mb-2">Boost Sales</p>
              <p className="text-xs text-slate-400">Increase conversions with AI</p>
            </div>
            <div className={`${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/50 backdrop-blur-sm'} p-6 rounded-xl shadow-lg animate-float-delayed border border-slate-700 hover:border-sky-500/50 transition-transform duration-300 ${isTouch ? '' : 'hover:scale-105'}`} style={{ willChange: 'transform' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-semibold text-white mb-2">24/7 Support</p>
              <p className="text-xs text-slate-400">Never miss a customer</p>
            </div>
            <div className={`${lowEndMode ? 'bg-slate-800/90' : 'bg-slate-800/50 backdrop-blur-sm'} p-6 rounded-xl shadow-lg animate-float border border-slate-700 hover:border-sky-500/50 transition-transform duration-300 ${isTouch ? '' : 'hover:scale-105'}`} style={{ willChange: 'transform' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-semibold text-white mb-2">Smart Automation</p>
              <p className="text-xs text-slate-400">Reduce operational costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
