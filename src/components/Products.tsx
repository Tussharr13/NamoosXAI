import { TrendingUp, Calendar, Headphones, Phone, Users, Briefcase, Heart, ArrowRight } from 'lucide-react';
import { memo } from 'react';
import { GlareCard } from './ui/glare-card';

const Products = memo(() => {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight">
            Powerful <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">AI Products</span><br className="hidden sm:block" />
            <span className="text-slate-700">For Every Business Need</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive AI solutions designed to transform every aspect of your business communication
          </p>
        </div>

        {/* Single Unified Bento Grid Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 p-1">
          <div className="grid grid-cols-12 gap-3 sm:gap-2 md:gap-1 h-full md:min-h-[700px]">
            
            {/* AI Sales Bot - Large Featured (Top Left) */}
            <GlareCard className="col-span-12 md:col-span-6 lg:col-span-5 md:row-span-2">
              <div className="group relative h-full bg-gradient-to-br from-sky-50 to-blue-100 hover:from-sky-100 hover:to-blue-200 transition-all duration-300 p-5 sm:p-6 md:p-8 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 sm:px-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg z-10">
                Popular
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">AI Sales Bot</h3>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 flex-grow">
                Increase conversions with intelligent lead follow-up and personalized engagement powered by advanced AI.
              </p>
              <div className="flex items-center gap-2 text-sky-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

            {/* Appointment Scheduling (Top Right) */}
            <GlareCard className="col-span-6 md:col-span-3 lg:col-span-4">
              <div className="group relative h-full bg-gradient-to-br from-blue-50 to-cyan-100 hover:from-blue-100 hover:to-cyan-200 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Appointment Scheduling</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                Automate meeting bookings and calendar management seamlessly.
              </p>
              <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

            {/* Customer Support Bot */}
            <GlareCard className="col-span-6 md:col-span-3 lg:col-span-3">
              <div className="group relative h-full bg-gradient-to-br from-cyan-50 to-sky-100 hover:from-cyan-100 hover:to-sky-200 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg z-10">
                Popular
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-sky-400 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Customer Support Bot</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                Provide 24/7 instant assistance with human-like responses.
              </p>
              <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

            {/* AI Voice Agent */}
            <GlareCard className="col-span-6 md:col-span-3 lg:col-span-4">
              <div className="group relative h-full bg-gradient-to-br from-purple-50 to-pink-100 hover:from-purple-100 hover:to-pink-200 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">AI Voice Agent</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                Handle voice-based queries with natural tone and conversational flow.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

            {/* AI Receptionist */}
            <GlareCard className="col-span-6 md:col-span-3 lg:col-span-3">
              <div className="group relative h-full bg-gradient-to-br from-pink-50 to-purple-100 hover:from-pink-100 hover:to-purple-200 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">AI Receptionist</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                Manage visitor communication and greetings with professional courtesy.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

            {/* HR Assistant */}
            <GlareCard className="col-span-6 md:col-span-4 lg:col-span-5">
              <div className="group relative h-full bg-gradient-to-br from-blue-50 to-sky-100 hover:from-blue-100 hover:to-sky-200 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">HR Assistant</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                Automate onboarding, FAQs, and employee support for HR teams.
              </p>
              <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

            {/* Healthcare Assistant */}
            <GlareCard className="col-span-6 md:col-span-4 lg:col-span-7">
              <div className="group relative h-full bg-gradient-to-br from-blue-50 to-sky-100 lg:from-cyan-50 lg:to-blue-100 hover:from-blue-100 hover:to-sky-200 lg:hover:from-cyan-100 lg:hover:to-blue-200 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col rounded-2xl sm:rounded-3xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-sky-500 lg:from-cyan-400 lg:to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Healthcare Assistant</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                Manage appointments, reminders, and patient queries with care and precision.
              </p>
              <div className="flex items-center gap-2 text-sky-600 lg:text-cyan-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </div>
            </GlareCard>

          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 md:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/70 backdrop-blur-sm border-2 border-sky-200 text-slate-700 rounded-full font-semibold text-sm sm:text-base hover:border-sky-400 hover:bg-white hover:scale-105 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Products.displayName = 'Products';

export default Products;