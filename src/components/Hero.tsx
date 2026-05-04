import { Phone, Calendar, Star, Clock, DollarSign, ShieldCheck } from 'lucide-react';

const TRUST_BADGES = [
  { icon: Star, label: '5-Star Rated', sub: '100+ Reviews' },
  { icon: Clock, label: 'Same-Day Service', sub: 'Fast Response' },
  { icon: DollarSign, label: 'Honest Pricing', sub: 'No Surprise Bills' },
  { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'Certified Techs' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#0a0a0f] to-[#0d1520]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_60%,rgba(59,130,246,0.06),transparent)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Hero image (background) */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="HVAC technician at work"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">Available Today — Same-Day Service</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            AC Broke in{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">the Heat?</span>
            </span>
            <br />
            <span className="text-white">We Show Up—</span>
            <span className="text-blue-400">Fast.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
            Same-day HVAC repairs, honest diagnostics, and service you can trust.
            No upsells. No runaround. Just cool air when you need it most.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="tel:+15551234567"
              className="group flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-charcoal font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now — (555) 123-4567
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-gold/40 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Request Service Online
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-3 hover:border-gold/20 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">{label}</p>
                  <p className="text-white/40 text-xs leading-tight mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}
