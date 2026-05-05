import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronRight } from 'lucide-react';

const FAQS = [
  {
    question: "How quickly can you get to my house?",
    answer: "For emergency AC repairs, we typically arrive within 2-4 hours. We prioritize East Valley residents (Chandler, Gilbert, Mesa) to ensure the fastest possible response times during extreme heat."
  },
  {
    question: "Do you offer free estimates for system replacements?",
    answer: "Yes! We provide 100% free, no-pressure estimates for full system replacements. We'll show you multiple options (Good/Better/Best) and explain the long-term energy savings of each."
  },
  {
    question: "How do I know if I need a repair or a full replacement?",
    answer: "We follow the '50% Rule': if the repair cost is more than 50% of the value of a new system, or if the system is over 12-15 years old and requiring frequent repairs, replacement is usually the better investment. We always provide honest diagnostics first."
  },
  {
    question: "What brands of HVAC units do you service?",
    answer: "We service and repair ALL major brands, including Trane, Carrier, Lennox, Rheem, Goodman, and York. We use high-quality, manufacturer-approved parts for all repairs."
  },
  {
    question: "Do you have a service call fee?",
    answer: "We have a flat diagnostic fee of $89, which is WAIVED if you choose to move forward with the repair. We believe in transparent pricing with no hidden surprises."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#0f0f12] overflow-hidden border-t border-white/[0.05]">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Everything You <span className="italic text-gold">Need to Know</span>
          </h2>
          <p className="text-white/40 text-lg font-light">
            Honest answers to the questions we hear most from East Valley homeowners.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className={`group rounded-2xl border transition-all duration-300 ${
                openIndex === idx 
                  ? 'bg-white/[0.04] border-gold/30 shadow-2xl shadow-gold/5' 
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                  openIndex === idx ? 'text-white' : 'text-white/70 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-gold border-gold text-charcoal rotate-0' 
                    : 'border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white'
                }`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 text-white/50 leading-relaxed md:text-lg font-light">
                  <div className="w-full h-px bg-white/5 mb-6" />
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-white/30 text-sm mb-6 italic">Still have questions? We're just a phone call away.</p>
           <a 
            href="tel:+15551234567" 
            className="inline-flex items-center gap-3 text-gold hover:text-gold-light font-bold transition-colors group"
           >
              <span>Speak with Gabriel Directly</span>
              <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all">
                 <ChevronRight className="w-4 h-4" />
              </div>
           </a>
        </div>
      </div>
    </section>
  );
}
