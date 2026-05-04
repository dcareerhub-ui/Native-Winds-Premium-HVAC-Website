import React, { useState, useRef, useEffect } from 'react';
import { MousePointer2, Zap } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImg, afterImg, title, description }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="space-y-6 reveal-hidden" data-animation="fade-up">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
        <p className="text-white/50 text-sm">{description}</p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImg} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Before Image (Foreground with Clip) */}
        <div 
          className="absolute inset-0 w-full h-full object-cover overflow-hidden"
          style={{ width: `${sliderPosition}%`, borderRight: '2px solid #D4AF37' }}
        >
          <img 
            src={beforeImg} 
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current?.offsetWidth || '100%' }}
          />
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-gold z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300">
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-charcoal rounded-full opacity-60"></div>
              <div className="w-1 h-4 bg-charcoal rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-widest border border-white/10 z-20">Before</div>
        <div className="absolute top-4 right-4 bg-gold px-3 py-1 rounded-full text-[10px] text-charcoal uppercase tracking-widest font-black z-20">After</div>

        {/* Interaction Hint */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="bg-charcoal/60 backdrop-blur-sm p-4 rounded-full border border-gold/20">
              <MousePointer2 className="w-6 h-6 text-gold animate-bounce" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default function BeforeAfter() {
  return (
    <section id="results" className="relative bg-[#0f0f12] py-24 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Visual Proof</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight">
            The Gold Standard <br className="hidden md:block" />
            <span className="italic text-gold">of HVAC Care</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light tracking-wide">
            Don't just take our word for it. See the transformative difference our professional maintenance and installations make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ComparisonSlider 
            beforeImg="/images/before-unit.png"
            afterImg="/images/after-unit.png"
            title="Full System Replacement"
            description="Upgrading an aging, inefficient unit to a modern high-performance system reduces noise and slashes energy bills."
          />
          <ComparisonSlider 
            beforeImg="/images/before-filter.png"
            afterImg="/images/after-filter.png"
            title="Professional Maintenance"
            description="Deep cleaning and filter replacement prevents system strain and ensures the air your family breathes is pure."
          />
        </div>
        
        {/* Statistics/CTA under the gallery */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 text-center">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                 <div className="text-3xl font-serif text-gold mb-1">15+</div>
                 <div className="text-xs text-white/40 uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                 <div className="text-3xl font-serif text-gold mb-1">100%</div>
                 <div className="text-xs text-white/40 uppercase tracking-widest">Honesty Rate</div>
              </div>
              <div>
                 <div className="text-3xl font-serif text-gold mb-1">500+</div>
                 <div className="text-xs text-white/40 uppercase tracking-widest">Happy Homes</div>
              </div>
              <div>
                 <div className="text-3xl font-serif text-gold mb-1">24/7</div>
                 <div className="text-xs text-white/40 uppercase tracking-widest">Support</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
