import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 lg:hidden transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href="tel:+15551234567"
        className="flex items-center gap-2.5 bg-gold hover:bg-gold-light text-charcoal font-bold text-sm px-5 py-3.5 rounded-2xl shadow-[0_4px_24px_rgba(212,175,55,0.5)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.7)] transition-all duration-200 active:scale-95"
      >
        <div className="w-5 h-5 relative">
          <Phone className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-charcoal animate-pulse" />
        </div>
        Call Now
      </a>
    </div>
  );
}
