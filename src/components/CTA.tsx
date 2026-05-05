import { Phone, Calendar, Thermometer } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-charcoal py-20 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(212,175,55,0.06),transparent)]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
          <Thermometer className="w-7 h-7 text-gold" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight mb-5">
          Don't Wait Until<br />
          <span className="italic text-gold">the Heat Gets Worse</span>
        </h2>

        <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Every hour without working AC is one hour too many — especially in Arizona summer heat.
          Gabriel is standing by to get your system running today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+15551234567"
            className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-charcoal font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-95"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            Call Now — (555) 123-4567
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-gold/40 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            Book Service Online
          </button>
        </div>

        <p className="text-white/30 text-sm mt-6">Same-day availability. No appointment fee. Honest pricing guaranteed.</p>
      </div>
    </section>
  );
}
