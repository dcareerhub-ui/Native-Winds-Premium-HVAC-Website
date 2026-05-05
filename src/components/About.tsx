import { MapPin, Award, Users, Heart } from 'lucide-react';

const VALUES = [
  { icon: Award, label: 'Certified Technician', desc: 'Licensed, insured, and continuously trained' },
  { icon: Users, label: 'Local & Independent', desc: 'Not a franchise — your neighbor, your tech' },
  { icon: Heart, label: 'Community First', desc: 'Serving the Valley with pride and care' },
  { icon: MapPin, label: 'Always Nearby', desc: 'Chandler, Gilbert, Mesa, Tempe & more' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_0%_50%,rgba(212,175,55,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative reveal-slide-left">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/8159744/pexels-photo-8159744.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gabriel, HVAC technician"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 lg:-right-8 bg-charcoal border border-gold/30 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">EPA 608 Certified</p>
                  <p className="text-white/50 text-xs">Licensed & Insured</p>
                </div>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/10 rounded-3xl -z-10" />
          </div>

          {/* Right — Content */}
          <div className="reveal-slide-right">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-sm font-medium tracking-wide">Meet Your Technician</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Hi, I'm Gabriel —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Your Honest HVAC Tech.</span>
            </h2>

            <div className="space-y-4 text-white/60 text-base leading-relaxed mb-8">
              <p>
                I started Native Winds because I was tired of watching customers get taken advantage of by
                companies pushing unnecessary replacements and inflated repair bills.
              </p>
              <p>
                With over 10 years in the HVAC trade, I've seen every type of system failure imaginable —
                and I know the difference between a system that needs a $90 part and one that genuinely
                needs replacing. I'll always tell you the truth.
              </p>
              <p>
                When your AC breaks in the Arizona heat, you shouldn't have to wonder if you're being told
                the whole story. With me, you always are.{' '}
                <span className="text-white font-medium">That's my promise to every customer.</span>
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3">
              {VALUES.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
