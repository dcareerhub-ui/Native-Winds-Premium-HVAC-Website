import { Wrench, Settings, RefreshCw, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: Wrench,
    title: 'AC Repair',
    tag: 'Most Popular',
    tagColor: 'text-gold bg-gold/10 border-gold/20',
    desc: "Your AC stopped blowing cold? We diagnose it right the first time. No guessing, no unnecessary parts—just honest repairs that get you cooling fast.",
    items: ['Compressor & refrigerant issues', 'Electrical & capacitor failures', 'Fan motor & blower repairs', 'Thermostat calibration'],
    cta: 'Get It Fixed Today',
  },
  {
    icon: Settings,
    title: 'HVAC Maintenance',
    tag: 'Preventative',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    desc: 'A well-maintained system runs cooler, lasts longer, and saves you money. Our tune-ups keep breakdowns from happening at the worst time.',
    items: ['Full system inspection', 'Filter & coil cleaning', 'Refrigerant level check', 'Performance optimization'],
    cta: 'Schedule a Tune-Up',
  },
  {
    icon: RefreshCw,
    title: 'System Replacement',
    tag: 'Honest Advice',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    desc: "We only recommend replacement when it truly makes financial sense for you. No pressure tactics — we show you the numbers and let you decide.",
    items: ['Transparent cost comparison', 'Energy-efficient options', 'Licensed, clean installation', 'Manufacturer warranty honored'],
    cta: 'Get a Free Quote',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Work',
    tag: 'Authorized',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    desc: 'Already under warranty? We handle the paperwork and repairs properly so your coverage stays intact and you get what you paid for.',
    items: ['All major brands supported', 'Proper warranty documentation', 'Certified warranty repairs', 'No voided coverage risk'],
    cta: 'Use Your Warranty',
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative bg-[#0a0a0f] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,175,55,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-5">
            <Wrench className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Expert HVAC Services —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Done Right, Every Time</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From emergency repairs to seasonal maintenance, we handle everything with the care and honesty your home deserves.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, tag, tagColor, desc, items, cta }, idx) => (
            <div
              key={title}
              className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-gold/20 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] glass-glow reveal-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                  <Icon className="w-5 h-5 text-gold icon-gold-glow" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColor}`}>{tag}</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{desc}</p>

              <ul className="flex-1 space-y-2 mb-6">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full text-center text-gold hover:text-charcoal bg-gold/10 hover:bg-gold border border-gold/30 hover:border-gold text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
