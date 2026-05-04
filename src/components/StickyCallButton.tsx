import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show earlier on mobile
      const threshold = window.innerWidth < 768 ? 100 : 400;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
       <div className="mx-4 mb-6">
          <div className="bg-[#0f0f12]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex gap-2.5">
             <a
               href="tel:+15551234567"
               className="flex-[1.2] flex items-center justify-center gap-2 bg-gold text-charcoal font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.97] transition-transform"
             >
               <div className="relative">
                  <Phone className="w-4 h-4 fill-charcoal" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-gold animate-pulse" />
               </div>
               Call Now
             </a>
             <button
               onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
               className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl active:scale-[0.97] transition-transform"
             >
               <Calendar className="w-4 h-4" />
               Book
             </button>
          </div>
       </div>
    </div>
  );
}
