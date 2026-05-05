import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Natalie R.',
    location: 'Chandler, AZ',
    stars: 5,
    title: 'Same-day lifesaver',
    text: "Our AC went out at 8am on one of the hottest days of the year. I called Native Winds and Gabriel was at our door by noon. He diagnosed the problem in 15 minutes and had us cooling again within the hour.",
    date: 'July 2024',
  },
  {
    name: 'Katie M.',
    location: 'Gilbert, AZ',
    stars: 5,
    title: 'Finally, an honest tech',
    text: "I called another company first and they told me I needed a full $6,000 replacement. I got a second opinion from Gabriel and he found it was just a bad capacitor — $80 fix. He could have easily agreed with the other guys.",
    date: 'August 2024',
  },
  {
    name: 'Juhi P.',
    location: 'Tempe, AZ',
    stars: 5,
    title: 'My go-to HVAC guy',
    text: "I've called Gabriel for three different issues over the past two years. Every single time he's been on time, professional, and reasonably priced. This is what a local business should be.",
    date: 'June 2024',
  },
  {
    name: 'Lydia C.',
    location: 'Mesa, AZ',
    stars: 5,
    title: 'Communication was perfect',
    text: "He texted me when he was 20 minutes away, explained exactly what was wrong in plain English, showed me the broken part, and gave me the price before touching anything. No surprises.",
    date: 'September 2024',
  },
  {
    name: 'Mark S.',
    location: 'Chandler, AZ',
    stars: 5,
    title: 'Professional and Clean',
    text: "Gabriel replaced our entire unit. He was meticulous with the installation and left the area cleaner than he found it. The new unit is so quiet we barely know it's on.",
    date: 'October 2024',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold icon-gold-glow" />
      ))}
    </div>
  );
}

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, activeIndex]);

  return (
    <section id="reviews" className="relative bg-charcoal py-24 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <GoogleIcon />
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Verified Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            What Your <span className="italic text-gold">Neighbors</span> Say
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We've helped hundreds of families stay cool. Here's the word on the street about our commitment to honesty and speed.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Area */}
          <div className="overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm shadow-3xl p-8 md:p-16">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {REVIEWS.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                   <div className="flex flex-col items-center text-center">
                      <Quote className="w-12 h-12 text-gold/20 mb-8" />
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-snug">
                        "{review.text}"
                      </h3>
                      <div className="flex flex-col items-center">
                         <div className="flex items-center gap-2 mb-3">
                            <StarRow count={review.stars} />
                            <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                               <CheckCircle2 className="w-3 h-3 text-green-400" />
                               <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Verified Customer</span>
                            </div>
                         </div>
                         <p className="text-white font-bold text-lg">{review.name}</p>
                         <p className="text-white/40 text-sm tracking-wide">{review.location} • {review.date}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-xl backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-xl backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Aggregate Score Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 border-t border-white/[0.05]">
           <div className="flex items-center gap-4">
              <div className="text-5xl font-serif text-white">5.0</div>
              <div>
                 <StarRow count={5} />
                 <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Google Rating</div>
              </div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10" />
           <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-white/10 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-charcoal bg-gold flex items-center justify-center text-[10px] font-black text-charcoal">+100</div>
              </div>
              <div className="text-sm">
                 <span className="text-white font-bold">100+ Happy Clients</span>
                 <p className="text-white/40 text-xs mt-0.5">East Valley Homeowners</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
