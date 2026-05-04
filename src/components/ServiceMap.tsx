import React from 'react';
import { MapPin, Shield } from 'lucide-react';

const LOCATIONS = [
  { name: 'Chandler', top: '65%', left: '45%' },
  { name: 'Gilbert', top: '55%', left: '60%' },
  { name: 'Mesa', top: '40%', left: '55%' },
  { name: 'Tempe', top: '45%', left: '35%' },
  { name: 'Queen Creek', top: '75%', left: '75%' },
  { name: 'Ahwatukee', top: '70%', left: '25%' },
];

export default function ServiceMap() {
  return (
    <section id="service-area" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden border-t border-white/[0.05]">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-hidden" data-animation="fade-right">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Service Region</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-tight">
              Rooted in the <br />
              <span className="italic text-gold text-glow">East Valley</span>
            </h2>
            <p className="text-white/40 text-lg mb-10 leading-relaxed max-w-xl font-light">
              Native Winds isn't just another service provider. We're your neighbors. 
              Based in Chandler, we've spent years ensuring our local communities stay cool and comfortable through the toughest Arizona summers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                { label: 'Licensed & Bonded', desc: 'Full peace of mind' },
                { label: 'East Valley Native', desc: 'We know AZ heat' },
                { label: 'Honest Diagnostics', desc: 'No invented repairs' },
                { label: 'Emergency Response', desc: 'Fast local dispatch' }
              ].map((feat) => (
                <div key={feat.label} className="group flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Shield className="w-3 h-3 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{feat.label}</div>
                    <div className="text-white/30 text-xs">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <div className="text-sm text-white/50 mb-2 font-medium">Top Rated in:</div>
               <div className="flex flex-wrap gap-2">
                  {['Chandler', 'Gilbert', 'Mesa', 'Tempe', 'Sun Lakes'].map(city => (
                    <span key={city} className="text-[10px] px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-white/60 uppercase tracking-widest font-bold">
                      {city}
                    </span>
                  ))}
               </div>
            </div>
          </div>

          <div className="relative group reveal-hidden" data-animation="fade-left">
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full group-hover:bg-gold/10 transition-colors duration-1000" />
            <div className="relative aspect-square bg-white/[0.02] rounded-[2.5rem] overflow-hidden border border-white/[0.08] shadow-3xl">
              <img 
                src="/images/service-map.png" 
                alt="Service Area Map" 
                className="w-full h-full object-cover opacity-50 grayscale contrast-125 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Glowing Markers */}
              {LOCATIONS.map((loc, idx) => (
                <div 
                  key={loc.name}
                  className="absolute"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="relative flex items-center justify-center">
                    <div 
                      className="absolute w-16 h-16 bg-gold/20 rounded-full animate-ping" 
                      style={{ animationDelay: `${idx * 0.5}s`, animationDuration: '3s' }}
                    />
                    <div className="relative w-5 h-5 bg-gold rounded-full border-[3px] border-charcoal shadow-[0_0_20px_rgba(212,175,55,0.9)]" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-charcoal/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-gold/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                      <div className="text-xs text-gold font-black uppercase tracking-widest whitespace-nowrap mb-0.5">{loc.name}</div>
                      <div className="text-[10px] text-white/50 whitespace-nowrap">Service Zone Active</div>
                      {/* Triangle pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gold/30" />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Overlay Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.4)_100%)]" />
            </div>
            
            {/* Map Frame Accent */}
            <div className="absolute -inset-4 border border-gold/5 rounded-[3rem] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
