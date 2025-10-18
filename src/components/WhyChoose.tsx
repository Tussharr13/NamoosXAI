import { Puzzle, Workflow, Smile, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { memo, useCallback } from 'react';

const features = [
  {
    icon: Puzzle,
    title: 'Custom AI Solutions',
    description: 'Tailored AI assistants that perfectly match your brand, industry, and customer needs.',
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    icon: Workflow,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools, CRMs, and platforms effortlessly.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smile,
    title: 'Human-like Experience',
    description: 'Natural conversations that understand context, emotions, and intent.',
    gradient: 'from-cyan-500 to-sky-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant responses with real-time processing for seamless interactions.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with industry standards.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support ensuring you never miss a customer.',
    gradient: 'from-orange-400 to-red-500',
  },
] as const;

const FeatureCard = memo(({ feature, index }: { feature: typeof features[number]; index: number }) => (
  <div
    className="relative group h-full"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-sky-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 h-full flex flex-col">
      <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow">{feature.description}</p>
    </div>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const WhyChoose = memo(() => {
  const handleGetStarted = useCallback(() => {
    const products = document.getElementById('products');
    if (products) products.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleScheduleDemo = useCallback(() => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Why <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">NamoosX</span> Stands Out
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The perfect blend of technology, customization, and exceptional user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 p-10 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sky-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using NamoosX to deliver exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted} 
                className="group px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleScheduleDemo} 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChoose.displayName = 'WhyChoose';

export default WhyChoose;
