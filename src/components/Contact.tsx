import { useState, useRef } from 'react';
import { Phone, Send, CheckCircle, Upload, X, AlertCircle } from 'lucide-react';
import { submitContact } from '../lib/supabase';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setFormState('loading');
    try {
      await submitContact({
        name: name.trim(),
        phone: phone.trim(),
        issue: issue.trim(),
        image_url: imageFile ? imageFile.name : '',
      });
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
    setIssue('');
    setImageFile(null);
    setFormState('idle');
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0f] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(212,175,55,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-5">
            <Send className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Don't Wait Until the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Heat Gets Worse</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Reach out now and we'll get back to you fast — usually within the hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — Contact Info */}
          <div className="flex flex-col gap-5">
            <a
              href="tel:+15551234567"
              className="group flex items-center gap-5 bg-gold/10 hover:bg-gold/15 border border-gold/30 hover:border-gold/50 rounded-2xl p-6 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-shadow">
                <Phone className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">Call or Text Anytime</p>
                <p className="text-white font-bold text-2xl">(555) 123-4567</p>
                <p className="text-gold text-sm mt-1">Fastest way to reach us</p>
              </div>
            </a>

            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold text-base mb-4">Service Hours</h3>
              {[
                { day: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
                { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
                { day: 'Sunday', hours: 'Emergency Only' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center justify-between text-sm">
                  <span className="text-white/60">{day}</span>
                  <span className={`font-medium ${hours === 'Emergency Only' ? 'text-gold' : 'text-white'}`}>{hours}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {['Chandler', 'Gilbert', 'Mesa', 'Tempe', 'Scottsdale', 'Queen Creek', 'Ahwatukee'].map((city) => (
                  <span key={city} className="text-xs text-white/60 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Request Sent!</h3>
                <p className="text-white/50 text-sm mb-6">
                  Gabriel will be in touch shortly — usually within the hour during business hours.
                </p>
                <button
                  onClick={reset}
                  className="text-gold hover:text-gold-light text-sm font-medium underline underline-offset-2 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-white/60 text-xs font-medium uppercase tracking-wider block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Smith"
                    className="w-full bg-white/[0.06] border border-white/[0.1] focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs font-medium uppercase tracking-wider block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="(555) 000-0000"
                    className="w-full bg-white/[0.06] border border-white/[0.1] focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs font-medium uppercase tracking-wider block mb-2">
                    Describe the Issue
                  </label>
                  <textarea
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    rows={3}
                    placeholder="AC not cooling, strange noise, no airflow..."
                    className="w-full bg-white/[0.06] border border-white/[0.1] focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Image upload */}
                <div>
                  <label className="text-white/60 text-xs font-medium uppercase tracking-wider block mb-2">
                    Photo of Your Unit (Optional)
                  </label>
                  {imageFile ? (
                    <div className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3">
                      <Upload className="w-4 h-4 text-gold" />
                      <span className="text-white/70 text-sm flex-1 truncate">{imageFile.name}</span>
                      <button
                        type="button"
                        onClick={() => { setImageFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="text-white/40 hover:text-white/70 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 border border-dashed border-white/[0.15] hover:border-gold/30 rounded-xl py-3 text-white/40 hover:text-white/60 text-sm transition-all"
                    >
                      <Upload className="w-4 h-4" />
                      Attach a photo
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">Something went wrong. Please try calling instead.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Request
                    </>
                  )}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Or skip the form and just call: <a href="tel:+15551234567" className="text-gold hover:underline">(555) 123-4567</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
