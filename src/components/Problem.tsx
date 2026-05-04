import { Thermometer, Baby, PawPrint, AlertTriangle } from 'lucide-react';
import { useReveal } from '../lib/hooks';

const PAIN_POINTS = [
  {
    icon: Thermometer,
    title: '100°+ Outside',
    desc: 'When temperatures soar, every minute without AC feels unbearable. Your home turns into an oven.',
  },
  {
    icon: Baby,
    title: 'Kids & Elderly',
    desc: 'Young children and seniors are especially vulnerable to extreme heat. Their safety is not negotiable.',
  },
  {
    icon: PawPrint,
    title: 'Pets in Danger',
    desc: 'Pets cannot regulate body temperature like adults. A broken AC becomes a life-threatening situation fast.',
  },
  {
    icon: AlertTriangle,
    title: 'Every Hour Counts',
    desc: "The longer it waits, the worse it gets. You can't afford to sit on hold or wait 3 days for an appointment.",
  },
];

export default function Problem() {
  const revealRef = useReveal();

  return (
    <section className="relative bg-charcoal py-20 lg:py-28 overflow-hidden" ref={revealRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(239,68,68,0.05),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 reveal-hidden">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-5">
            <Thermometer className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-400 text-sm font-medium tracking-wide">The Reality of a Broken AC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            A Broken AC Isn't Just<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Uncomfortable. It's Dangerous.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            When your HVAC system fails in peak summer heat, you're not just sweating —
            you're dealing with a real emergency that demands an immediate solution.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PAIN_POINTS.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-red-500/20 rounded-2xl p-6 transition-all duration-300 glass-glow reveal-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                <Icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="relative bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-2xl px-8 py-6 max-w-3xl mx-auto text-center reveal-hidden" style={{ transitionDelay: '400ms' }}>
          <p className="text-white text-xl font-semibold leading-snug">
            "That's why Native Winds offers same-day HVAC service —
            because <span className="text-gold">your family's comfort can't wait.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
