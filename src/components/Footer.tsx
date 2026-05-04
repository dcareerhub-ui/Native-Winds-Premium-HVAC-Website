import { Wind, Phone, MapPin, Clock, Mail } from 'lucide-react';

const LINKS = {
  pages: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    'AC Repair',
    'HVAC Maintenance',
    'System Replacement',
    'Warranty Work',
    'Emergency Service',
  ],
};

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/40 flex items-center justify-center">
                <Wind className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Native Winds</p>
                <p className="text-gold/70 text-xs tracking-widest uppercase">Heating & Cooling</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Honest HVAC service for the East Valley. Same-day repairs you can count on.
            </p>
            <div className="space-y-2">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors">
                <Phone className="w-3.5 h-3.5" />
                (555) 123-4567
              </a>
              <a href="mailto:gabriel@nativewinds.com" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
                <Mail className="w-3.5 h-3.5" />
                gabriel@nativewinds.com
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-2.5">
              {LINKS.pages.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {LINKS.services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Hours & Areas</h4>
            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-xs">Mon–Fri: 7am–7pm</p>
                  <p className="text-white/50 text-xs">Sat: 8am–5pm</p>
                  <p className="text-gold/70 text-xs">Sun: Emergency Only</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/30 mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-xs">
                  Chandler · Gilbert · Mesa<br />
                  Tempe · Scottsdale<br />
                  Queen Creek · Ahwatukee
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2024 Native Winds Heating & Cooling. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Licensed · Insured · EPA 608 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
