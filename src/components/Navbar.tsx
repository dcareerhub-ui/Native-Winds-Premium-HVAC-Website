import { useState, useEffect } from 'react';
import { Wind, Phone, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-xl border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Wind className="w-5 h-5 text-gold" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm leading-tight tracking-wide">Native Winds</p>
              <p className="text-gold/70 text-xs leading-tight tracking-widest uppercase">Heating & Cooling</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-gold text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/80 hover:text-gold p-2 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[40] transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-charcoal/90 backdrop-blur-2xl" 
          onClick={() => setMenuOpen(false)}
        />
        
        <div
          className={`absolute inset-x-0 top-0 pt-20 pb-10 px-6 bg-[#0f0f12] border-b border-gold/10 transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-2xl font-serif text-white/80 hover:text-gold text-left py-4 border-b border-white/5 transition-all duration-300 transform ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-8 flex flex-col gap-4">
               <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-3 bg-gold text-charcoal font-black text-sm uppercase tracking-widest py-5 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
              >
                <Phone className="w-4 h-4 fill-charcoal" />
                Call Now
              </a>
              <p className="text-center text-white/30 text-xs font-medium uppercase tracking-[0.2em]">
                 Available 24/7 for Emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
