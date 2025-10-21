import { Link, Settings, Zap } from 'lucide-react';
import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GoogleGeminiEffect } from './ui/google-gemini-effect';

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section ref={ref} className="bg-white relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 animate-fade-in-up">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.1s' }}>
            Get started with NamoosX in three simple steps
          </p>
        </div>
      
      {/* Simple grid on mobile/tablet (no Gemini effect) */}
      <div className="lg:hidden">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-3 sm:mt-5 shadow-xl border border-sky-100 card-hover h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4 sm:mb-5 font-bold text-slate-700 text-xl sm:text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keep Gemini effect on large screens only */}
      <div className="hidden lg:block">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          className="absolute top-0 left-0 w-full"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-3 sm:mt-5 shadow-xl border border-sky-100 card-hover h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                      <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4 sm:mb-5 font-bold text-slate-700 text-xl sm:text-2xl">
                      {index + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GoogleGeminiEffect>
      </div>
      </div>
    </section>
  );
}
