import React from 'react';
import { PhoneCall, ClipboardCheck, Snowflake, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: PhoneCall,
    title: "1. Request Service",
    desc: "Call or book online. We gather a few details about your issue and schedule a fast arrival window.",
    color: "from-gold/20 to-transparent"
  },
  {
    icon: ClipboardCheck,
    title: "2. Honest Diagnosis",
    desc: "Gabriel arrives on time, finds the root cause, and provides a clear price before starting any work.",
    color: "from-white/10 to-transparent"
  },
  {
    icon: Snowflake,
    title: "3. Relax in Comfort",
    desc: "We perform the repair correctly, clean up our workspace, and leave you with a perfectly cool home.",
    color: "from-gold/20 to-transparent"
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Simple. <span className="italic text-gold">Honest.</span> Professional.
          </h2>
          <p className="text-white/40 text-lg font-light tracking-wide max-w-xl mx-auto">
            Getting your AC fixed shouldn't be stressful. Here is exactly what to expect when you call Native Winds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line (Desktop) */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0 -translate-x-12" />
              )}
              
              <div className={`relative z-10 bg-white/[0.02] border border-white/[0.08] rounded-[2rem] p-8 lg:p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 group-hover:border-gold/20`}>
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-gold icon-gold-glow" />
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4">{step.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">
                  {step.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-gold/40 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
