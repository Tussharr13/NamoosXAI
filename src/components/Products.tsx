import { TrendingUp, Calendar, HeadphonesIcon, Phone, Users, Briefcase, Heart } from 'lucide-react';

const products = [
  {
    icon: TrendingUp,
    title: 'AI Sales Bot',
    description: 'Helps increase conversions with intelligent lead follow-up and personalized engagement.',
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling Bot',
    description: 'Automates meeting bookings and calendar management with seamless integration.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'AI Customer Support Bot',
    description: 'Provides 24/7 instant customer assistance with human-like responses.',
    gradient: 'from-cyan-500 to-sky-400',
  },
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Handles voice-based queries with natural tone and conversational flow.',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'AI Receptionist',
    description: 'Manages visitor communication and greetings with professional courtesy.',
    gradient: 'from-blue-400 to-sky-500',
  },
  {
    icon: Briefcase,
    title: 'AI HR Assistant',
    description: 'Automates onboarding, FAQs, and employee support for HR teams.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Heart,
    title: 'AI Healthcare Assistant',
    description: 'Manages appointments, reminders, and patient queries with care and accuracy.',
    gradient: 'from-sky-400 to-cyan-500',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 gradient-blue-radial relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-gradient">AI Products</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-sky-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
