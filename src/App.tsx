import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import About from './components/About';
import ServiceMap from './components/ServiceMap';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';

function App() {
  return (
    <div className="bg-charcoal min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <BeforeAfter />
      <WhyUs />
      <Reviews />
      <About />
      <ServiceMap />
      <CTA />
      <Contact />
      <Footer />
      <StickyCallButton />
    </div>
  );
}

export default App;
