import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, HealthCare Plus',
    content: 'NamoosX transformed our patient communication. The AI receptionist handles scheduling flawlessly, and our staff can focus on providing better care. Response time reduced by 80%!',
    rating: 5,
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, ShopSmart E-commerce',
    content: 'The AI sales bot increased our conversion rate by 45%. It understands customer needs and provides personalized recommendations better than we imagined. Absolutely game-changing!',
    rating: 5,
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager, TravelWise',
    content: 'Our customer satisfaction scores skyrocketed after implementing NamoosX. The 24/7 support bot handles inquiries instantly, and customers love the quick, accurate responses.',
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'David Thompson',
    role: 'HR Director, TechCorp',
    content: 'The AI HR assistant streamlined our onboarding process completely. New employees get instant answers to their questions, and our HR team saves 20+ hours per week.',
    rating: 5,
    avatar: 'DT',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 gradient-blue-radial relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from businesses that trust NamoosX
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-12 top-0 text-sky-300 opacity-20">
            <Quote className="w-32 h-32" />
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-sky-100 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                {testimonials[current].avatar}
              </div>

              <div className="flex mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-xl text-slate-700 leading-relaxed mb-8 max-w-3xl italic">
                "{testimonials[current].content}"
              </p>

              <div>
                <p className="text-lg font-bold text-slate-900">{testimonials[current].name}</p>
                <p className="text-slate-600">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-sky-100"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-sky-600 w-8' : 'bg-sky-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-sky-100"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
