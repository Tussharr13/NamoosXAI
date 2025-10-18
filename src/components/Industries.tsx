import { Heart, ShoppingCart, Building, GraduationCap, Banknote, Plane } from 'lucide-react';
import { memo } from 'react';
import CardSwap, { Card } from './ui/CardSwap';

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Patient scheduling, health queries, appointment reminders, and 24/7 medical support assistance.',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description: 'Product recommendations, order tracking, customer support, and personalized shopping experiences.',
  },
  {
    icon: Building,
    name: 'Real Estate',
    description: 'Property inquiries, virtual tours scheduling, lead qualification, and client communication.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Student enrollment, course information, assignment reminders, and academic support services.',
  },
  {
    icon: Banknote,
    name: 'Banking',
    description: 'Account inquiries, transaction support, loan applications, and financial advisory assistance.',
  },
  {
    icon: Plane,
    name: 'Travel',
    description: 'Booking assistance, itinerary management, travel recommendations, and 24/7 traveler support.',
  },
];

const Industries = memo(() => {
  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title and Description Only */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Industries We <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Tailored AI solutions for diverse industries and business needs. Our intelligent assistants adapt to your specific sector requirements.
            </p>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              From healthcare to e-commerce, real estate to education, banking to travel - we provide specialized AI solutions that understand the unique challenges and opportunities of your industry.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span className="text-slate-700">Industry-specific AI training</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span className="text-slate-700">Customizable workflows and responses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span className="text-slate-700">Compliance and regulatory support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span className="text-slate-700">24/7 multilingual capabilities</span>
              </div>
            </div>

            <div>
              <p className="text-slate-600 mb-4">And many more industries...</p>
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore All Solutions
              </button>
            </div>
          </div>

          {/* Right: Card Swap Animation - All Industries */}
          <div className="relative h-[400px] hidden lg:block">
            <CardSwap
              width={400}
              height={320}
              cardDistance={40}
              verticalDistance={40}
              delay={3500}
              pauseOnHover={true}
              skewAmount={2}
              easing="linear"
            >
              {industries.map((industry, index) => (
                <Card key={index}>
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-sky-100">
                      <span className="text-sm text-sky-600 font-semibold">Learn More →</span>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
});

Industries.displayName = 'Industries';

export default Industries;
