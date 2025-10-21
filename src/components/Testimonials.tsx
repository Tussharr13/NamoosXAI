import { Star } from 'lucide-react';
import { memo } from 'react';

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

const TestimonialCard = memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="relative w-[280px] sm:w-[320px] md:w-[380px] shrink-0 rounded-xl sm:rounded-2xl bg-white border border-sky-100 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5 md:p-6 snap-start">
    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md flex-shrink-0">
        {testimonial.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm sm:text-base font-bold text-slate-900">{testimonial.name}</p>
        <p className="text-xs sm:text-sm text-slate-600 truncate">{testimonial.role}</p>
      </div>
      <div className="flex gap-0.5 flex-shrink-0">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </div>
    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
      "{testimonial.content}"
    </p>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

const Testimonials = memo(() => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight">
            What Our <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Real results from businesses that trust NamoosX AI solutions
          </p>
        </div>

        <div
          className="relative overflow-x-auto lg:overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div
            className="flex gap-4 py-4 w-max lg:animate-scroll lg:hover:[animation-play-state:paused]"
            style={{
              '--animation-duration': '40s',
              '--animation-direction': 'forwards',
            } as React.CSSProperties}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <TestimonialCard key={`${testimonial.name}-${idx}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
