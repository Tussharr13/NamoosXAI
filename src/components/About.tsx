import { Brain, Zap, Target, Sparkles, Award, TrendingUp } from 'lucide-react';
import { memo } from 'react';

const About = memo(() => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/20 via-transparent to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Building The Future of <span className="text-gradient">AI Interactions</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              At NamoosX, we're creating <span className="font-semibold text-slate-900">human-like AI</span> chatbots and voice assistants that revolutionize business communication. Our mission is to empower organizations with intelligent automation that feels natural, responsive, and truly helpful.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We combine cutting-edge <span className="text-sky-600 font-medium">natural language processing</span>, machine learning, and voice recognition to create AI solutions that understand context, learn from interactions, and deliver exceptional customer experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="group flex items-start gap-3 bg-gradient-to-br from-sky-50 to-blue-50 p-4 rounded-2xl border border-sky-200/50 hover:border-sky-300 transition-all hover:shadow-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">Lightning Fast</span>
                  <span className="text-xs text-slate-600">Real-time responses</span>
                </div>
              </div>
              <div className="group flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-200/50 hover:border-purple-300 transition-all hover:shadow-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">Goal-Oriented</span>
                  <span className="text-xs text-slate-600">Results-driven AI</span>
                </div>
              </div>
              <div className="group flex items-start gap-3 bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-2xl border border-cyan-200/50 hover:border-cyan-300 transition-all hover:shadow-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">Award Winning</span>
                  <span className="text-xs text-slate-600">Industry recognized</span>
                </div>
              </div>
              <div className="group flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200/50 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">Scalable</span>
                  <span className="text-xs text-slate-600">Grows with you</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            {/* Main card with glassmorphism */}
            <div className="relative glass-effect rounded-[2rem] p-10 shadow-2xl border border-white/50">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  {/* Main brain orb - static gradient */}
                  <div className="w-40 h-40 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-sky-500/30">
                    <Brain className="w-20 h-20 text-white" />
                  </div>
                  {/* Static badges */}
                  <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-sky-200">
                    <Zap className="w-7 h-7 text-sky-600" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-purple-200">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-cyan-200">
                    <Sparkles className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-3">AI-Powered Intelligence</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Advanced algorithms that learn and adapt to your business needs
                </p>
                {/* Stats mini cards */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-sky-50 p-3 rounded-xl border border-sky-200">
                    <div className="text-2xl font-bold text-sky-600">99.9%</div>
                    <div className="text-xs text-slate-600">Uptime</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">&lt; 1s</div>
                    <div className="text-xs text-slate-600">Response</div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded-xl border border-cyan-200">
                    <div className="text-2xl font-bold text-cyan-600">50+</div>
                    <div className="text-xs text-slate-600">Languages</div>
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
