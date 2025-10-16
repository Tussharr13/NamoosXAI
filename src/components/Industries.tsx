import { Heart, ShoppingCart, Building, GraduationCap, Banknote, Plane } from 'lucide-react';

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

export default function Industries() {
  return (
    <section id="industries" className="py-24 gradient-blue-radial relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored AI solutions for diverse industries and business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-sky-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.name}</h3>
              <p className="text-slate-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">And many more industries...</p>
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Explore All Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
