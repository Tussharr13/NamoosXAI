import { Sparkles, MessageSquare, TrendingUp, Users } from 'lucide-react';
import NamoosXLogo from './NamoosXLogo';
import { BrandIcon, BrandFull } from './Brand';
import SiriOrb from './SiriOrb';

function AnimatedNamoosXLogo() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto">
      {/* Massive outer glow rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 opacity-25 blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 opacity-35 blur-2xl animate-pulse" style={{ animationDelay: '0.3s' }}></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-blue-400 via-cyan-500 to-sky-400 opacity-40 blur-xl animate-pulse" style={{ animationDelay: '0.6s' }}></div>
      </div>
      
      {/* Enhanced main logo circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-300 shadow-2xl animate-pulse" style={{ animationDelay: '0.9s' }}></div>
      </div>
      
      {/* NamoosX icon in the center - bigger */}
      <div className="absolute inset-0 flex items-center justify-center">
        <NamoosXLogo size="xl" variant="icon" className="text-white drop-shadow-2xl" />
      </div>
      
      {/* More animated rings with enhanced styling */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '25s' }}>
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-sky-400/30 shadow-lg"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-blue-400/25 shadow-lg"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '30s' }}>
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border border-cyan-400/20 shadow-lg"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
        <div className="w-72 h-72 md:w-88 md:h-88 lg:w-[28rem] lg:h-[28rem] rounded-full border border-sky-400/10 shadow-lg"></div>
      </div>
      
      {/* Additional floating particles */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-sky-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-sky-300 rounded-full opacity-30 animate-ping" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-slate-900/70 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <BrandFull size={120} variant="light" />
          <div className="hidden md:flex space-x-8 text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition">About</a>
            <a href="#products" className="hover:text-sky-400 transition">Products</a>
            <a href="#industries" className="hover:text-sky-400 transition">Industries</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          </div>
        </div>
      </nav>

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
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Solutions</span>
            </button>
            <button 
              onClick={handleRequestDemo}
              className="bg-slate-800 border-2 border-slate-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 hover:border-sky-500 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request a Demo</span>
            </button>
          </div>
        </div>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="text-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/30 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-400 text-xs">Projects Completed</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/30 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-slate-400 text-xs">Client Satisfaction</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/30 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-400 text-xs">AI Solutions Deployed</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/30 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-400 text-xs">Support Available</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-float border border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-semibold text-white mb-2">Boost Sales</p>
              <p className="text-xs text-slate-400">Increase conversions with AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-float-delayed border border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-semibold text-white mb-2">24/7 Support</p>
              <p className="text-xs text-slate-400">Never miss a customer</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-float border border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:scale-105">
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
