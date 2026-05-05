import { Zap, Search, Smile, BadgeDollarSign } from 'lucide-react';

const REASONS = [
  {
    icon: Zap,
    title: 'Same-Day Response',
    desc: "When your AC fails, you don't have days to wait. We dispatch fast and arrive when we say we will—because every hour in the heat matters.",
    stat: '< 2 hrs',
    statLabel: 'Average Arrival Time',
  },
  {
    icon: Search,
    title: 'Honest Diagnostics',
    desc: "We find what's actually wrong and fix it. No invented problems, no unnecessary parts, no upsells. Just the truth about your system.",
    stat: '100%',
    statLabel: 'Transparent Quotes',
  },
  {
    icon: Smile,
    title: 'Friendly Professionals',
    desc: 'Gabriel and the team treat your home with respect. We show up clean, communicate clearly, and leave the space better than we found it.',
    stat: '5★',
    statLabel: 'Customer Satisfaction',
  },
  {
    icon: BadgeDollarSign,
    title: 'Fair, Clear Pricing',
    desc: 'You know the cost before we start. No surprises on the invoice. Competitive rates without cutting corners on quality.',
    stat: '$0',
    statLabel: 'Hidden Fees',
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-charcoal py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(59,130,246,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="reveal-slide-left">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-sm font-medium tracking-wide">Why Customers Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
              We Built This Business on{' '}
              <span className="italic text-gold">Trust</span>
              , Not Tactics.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Too many HVAC companies push expensive replacements when a simple fix will do.
              Native Winds was founded to be the honest alternative — the company your neighbor recommends, not the one you regret calling.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {REASONS.map(({ stat, statLabel }) => (
                <div key={statLabel} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4">
                  <p className="text-3xl font-bold text-gold mb-1">{stat}</p>
                  <p className="text-white/50 text-sm">{statLabel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal-slide-right">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-blue-500/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  <Icon className="w-5 h-5 text-gold icon-gold-glow" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
