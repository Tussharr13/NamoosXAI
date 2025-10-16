import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <FloatingParticles />
      <Hero />
      <About />
      <Products />
      <HowItWorks />
      <Industries />
      <WhyChoose />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
