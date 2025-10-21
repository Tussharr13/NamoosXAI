import { Brain, Zap, Target, Sparkles, Award, TrendingUp } from 'lucide-react';
import { memo } from 'react';

const About = memo(() => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/20 via-transparent to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight">
              Building The Future of <span className="text-gradient">AI Interactions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-5">
              At NamoosX, we're creating <span className="font-semibold text-slate-900">human-like AI</span> chatbots and voice assistants that revolutionize business communication. Our mission is to empower organizations with intelligent automation that feels natural, responsive, and truly helpful.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 sm:mb-6">
              We combine cutting-edge <span className="text-sky-600 font-medium">natural language processing</span>, machine learning, and voice recognition to create AI solutions that understand context, learn from interactions, and deliver exceptional customer experiences.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="group flex items-start gap-2 sm:gap-3 bg-gradient-to-br from-sky-50 to-blue-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-sky-200/50 hover:border-sky-300 transition-all hover:shadow-lg">
                <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Lightning Fast</span>
                  <span className="text-[10px] sm:text-xs text-slate-600">Real-time responses</span>
                </div>
              </div>
              <div className="group flex items-start gap-2 sm:gap-3 bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-200/50 hover:border-purple-300 transition-all hover:shadow-lg">
                <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Goal-Oriented</span>
                  <span className="text-[10px] sm:text-xs text-slate-600">Results-driven AI</span>
                </div>
              </div>
              <div className="group flex items-start gap-2 sm:gap-3 bg-gradient-to-br from-cyan-50 to-blue-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-cyan-200/50 hover:border-cyan-300 transition-all hover:shadow-lg">
                <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Award Winning</span>
                  <span className="text-[10px] sm:text-xs text-slate-600">Industry recognized</span>
                </div>
              </div>
              <div className="group flex items-start gap-2 sm:gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-blue-200/50 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Scalable</span>
                  <span className="text-[10px] sm:text-xs text-slate-600">Grows with you</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right mt-8 md:mt-0">
            {/* Main card with glassmorphism */}
            <div className="relative glass-effect rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative">
                  {/* Main brain orb - static gradient */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-sky-500/30">
                    <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                  </div>
                  {/* Static badges */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl border border-sky-200">
                    <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-sky-600" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl border border-purple-200">
                    <Target className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
                  </div>
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border border-cyan-200">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">AI-Powered Intelligence</h3>
                <p className="text-base sm:text-lg text-slate-700 mb-4 sm:mb-6">
                  Advanced algorithms that learn and adapt to your business needs
                </p>
                {/* Stats mini cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
                  <div className="bg-sky-50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-sky-200">
                    <div className="text-lg sm:text-2xl font-bold text-sky-600">99.9%</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">Uptime</div>
                  </div>
                  <div className="bg-purple-50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-purple-200">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">&lt; 1s</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">Response</div>
                  </div>
                  <div className="bg-cyan-50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-cyan-200">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-600">50+</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
