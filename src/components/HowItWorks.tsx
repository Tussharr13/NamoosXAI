import { Link, Settings, Zap } from 'lucide-react';

const steps = [
  {
    icon: Link,
    title: 'Connect',
    description: 'Integrate NamoosX with your existing systems, websites, and communication channels in minutes.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Customize your AI assistant with your brand voice, knowledge base, and business rules.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Automate',
    description: 'Let AI handle customer interactions, sales, support, and scheduling while you focus on growth.',
    color: 'from-cyan-500 to-sky-500',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get started with NamoosX in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-sky-100 card-hover h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-pulse-ring`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4 font-bold text-slate-700 text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
