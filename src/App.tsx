import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import About from './components/About';
import ServiceMap from './components/ServiceMap';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal-slide-left') || entry.target.classList.contains('reveal-slide-right')) {
            entry.target.classList.add('reveal-slide-visible');
          } else {
            entry.target.classList.add('reveal-visible');
          }
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-hidden, .reveal-slide-left, .reveal-slide-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-charcoal min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <BeforeAfter />
      <WhyUs />
      <HowItWorks />
      <Reviews />
      <About />
      <ServiceMap />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <StickyCallButton />
    </div>
  );
}

export default App;
