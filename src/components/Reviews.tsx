import { Star, Quote } from 'lucide-react';
import { useReveal } from '../lib/hooks';

const REVIEWS = [
  {
    name: 'Natalie R.',
    location: 'Chandler, AZ',
    stars: 5,
    title: 'Same-day lifesaver',
    text: "Our AC went out at 8am on one of the hottest days of the year. I called Native Winds and Gabriel was at our door by noon. He diagnosed the problem in 15 minutes and had us cooling again within the hour. Absolute lifesaver with two kids in the house.",
    date: 'July 2024',
  },
  {
    name: 'Katie M.',
    location: 'Gilbert, AZ',
    stars: 5,
    title: 'Finally, an honest tech',
    text: "I called another company first and they told me I needed a full $6,000 replacement. I got a second opinion from Gabriel and he found it was just a bad capacitor — $80 fix. He could have easily agreed with the other guys and made a lot more money. I'll never call anyone else.",
    date: 'August 2024',
    highlight: true,
  },
  {
    name: 'Juhi P.',
    location: 'Tempe, AZ',
    stars: 5,
    title: 'My go-to HVAC guy',
    text: "I've called Gabriel for three different issues over the past two years. Every single time he's been on time, professional, and reasonably priced. He even remembered my system from the previous visit. This is what a local business should be.",
    date: 'June 2024',
  },
  {
    name: 'Lydia C.',
    location: 'Mesa, AZ',
    stars: 5,
    title: 'Communication was perfect',
    text: "He texted me when he was 20 minutes away, explained exactly what was wrong in plain English, showed me the broken part, and gave me the price before touching anything. No surprises. This level of communication is rare. Highly recommend.",
    date: 'September 2024',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const revealRef = useReveal();

  return (
    <section id="reviews" className="relative bg-[#0a0a0f] py-20 lg:py-28 overflow-hidden" ref={revealRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(212,175,55,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal-hidden">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-5">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">100+ Five-Star Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Real Stories from<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Real Customers</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what your neighbors have to say about working with Gabriel.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className={`relative group flex flex-col rounded-2xl p-6 transition-all duration-300 glass-glow reveal-hidden ${
                review.highlight
                  ? 'bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/30 hover:border-gold/50'
                  : 'bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-gold/15'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {review.highlight && (
                <div className="absolute -top-3 left-6 animate-shimmer">
                  <span className="text-xs font-bold bg-gold text-charcoal px-3 py-1 rounded-full">Most Impactful</span>
                </div>
              )}

              <Quote className="w-6 h-6 text-gold/30 mb-4 flex-shrink-0" />

              <div className="flex-1">
                <p className="text-white/70 text-sm leading-relaxed mb-4">"{review.text}"</p>
              </div>

              <div className="pt-4 border-t border-white/[0.07]">
                <StarRow count={review.stars} />
                <div className="mt-2">
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white/40 text-xs">{review.location}</p>
                    <p className="text-white/30 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 max-w-lg mx-auto reveal-hidden" style={{ transitionDelay: '400ms' }}>
          <div className="text-center">
            <p className="text-6xl font-bold text-white">5.0</p>
            <StarRow count={5} />
            <p className="text-white/40 text-sm mt-1">Overall Rating</p>
          </div>
          <div className="w-px h-16 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg">100+ Reviews</p>
            <p className="text-white/50 text-sm mt-1">Across Google & Yelp</p>
            <p className="text-gold text-sm font-medium mt-1">Verified Local Business</p>
          </div>
        </div>
      </div>
    </section>
  );
}
