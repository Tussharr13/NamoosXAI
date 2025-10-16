import { Puzzle, Workflow, Smile } from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: 'Custom AI Solutions',
    description: 'Every business is unique. We build tailored AI assistants that perfectly match your brand, industry, and customer needs.',
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    icon: Workflow,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools, CRMs, and platforms effortlessly. Our AI works where you work.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smile,
    title: 'Human-like Experience',
    description: 'Natural conversations that feel authentic. Our AI understands context, emotions, and intent like a real person.',
    gradient: 'from-cyan-500 to-sky-500',
  },
];

export default function WhyChoose() {
  const handleGetStarted = () => {
    const products = document.getElementById('products');
    if (products) products.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleDemo = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-gradient">NamoosX</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The perfect blend of technology, customization, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-sky-100 card-hover h-full">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using NamoosX to deliver exceptional customer experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetStarted} className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
            <button onClick={handleScheduleDemo} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
