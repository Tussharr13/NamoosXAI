import { Brain, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-gradient">NamoosX</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At NamoosX, we're building human-like AI chatbots and voice assistants designed
              to revolutionize business communication. Our mission is to empower organizations
              with intelligent automation that feels natural, responsive, and truly helpful.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We combine cutting-edge natural language processing, machine learning, and voice
              recognition to create AI solutions that understand context, learn from interactions,
              and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-sky-50 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-sky-600" />
                <span className="text-sm font-medium text-slate-700">Fast & Reliable</span>
              </div>
              <div className="flex items-center space-x-2 bg-sky-50 px-4 py-2 rounded-full">
                <Target className="w-5 h-5 text-sky-600" />
                <span className="text-sm font-medium text-slate-700">Goal-Oriented</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-sky-100">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center animate-pulse-ring">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                    <Zap className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">AI-Powered Intelligence</h3>
                <p className="text-slate-600">
                  Advanced algorithms that learn and adapt to your business needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
