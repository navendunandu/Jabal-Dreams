"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  CheckCircle2,
  Compass,
  Hammer,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Send,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FormEvent, useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");

      setTimeout(() => {
        setIsContactOpen(false);
        setFormStatus("idle");
      }, 2500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-cream overflow-hidden relative flex flex-col">
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M 100 100 L 900 100 L 900 900 L 100 900 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 100 300 L 900 300 M 100 600 L 900 600 M 300 100 L 300 900 M 600 100 L 600 900"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 200 200 L 400 400 M 800 200 L 600 400 M 200 800 L 400 600 M 800 800 L 600 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut", delay: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <header className="relative z-10 px-8 py-6 md:p-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 border border-brand-ink flex items-center justify-center">
            <span className="font-serif text-xl font-light">JD</span>
          </div>
          <span className="font-sans uppercase tracking-[0.3em] text-xs font-semibold">Jabal Dreams</span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-widest font-medium items-center"
          aria-label="Social and contact links"
        >
          <a href="#" className="hidden md:block hover:text-brand-gold transition-colors">
            Instagram
          </a>
          <a href="#" className="hidden md:block hover:text-brand-gold transition-colors">
            Pinterest
          </a>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="hover:text-brand-gold transition-colors uppercase tracking-widest font-bold md:font-medium"
          >
            Contact
          </button>
        </motion.nav>
      </header>

      <main className="flex-grow flex flex-col md:flex-row relative z-10">
        <section className="w-full md:w-1/2 px-8 pt-32 pb-12 md:p-24 flex flex-col justify-start md:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-gold" />
              <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-brand-gold font-bold">Coming Soon</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl font-light leading-[1.1] mb-8">
              Crafting
              <br />
              <span className="italic">Timeless</span>
              <br />
              Spaces.
            </h1>

            <p className="font-sans text-sm md:text-base text-brand-ink/70 max-w-md leading-relaxed mb-12">
              Our new digital home is currently under construction. We are busy designing a space that reflects our
              passion for elegance, functionality, and the art of living.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 border border-brand-ink/10 rounded-full">
                  <Compass className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold">Visionary Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 border border-brand-ink/10 rounded-full">
                  <Ruler className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold">Precision Craft</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 border border-brand-ink/10 rounded-full">
                  <Hammer className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold">Master Build</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div
              className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#8e7b65_0%,#67594b_35%,#3d372f_70%,#2e2923_100%)] transition-opacity duration-700 ${
                isHeroImageLoaded ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden="true"
            />
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
              alt="Elegant interior designed living room"
              className="w-full h-full object-cover grayscale-[0.3] brightness-90"
              onLoad={() => setIsHeroImageLoaded(true)}
              onError={() => setIsHeroImageLoaded(false)}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-ink/10" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md p-8 shadow-2xl border border-white/20 max-w-[280px]"
          >
            <h2 className="font-serif text-2xl mb-4">The Jabal Dreams Philosophy</h2>
            <p className="font-sans text-[10px] leading-relaxed uppercase tracking-widest opacity-60">
              Every room tells a story. We are currently writing ours. Stay tuned for the grand reveal of our latest
              collections and projects.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center hover:bg-brand-ink hover:text-white transition-all cursor-pointer group"
                aria-label="Open contact form"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 p-8 md:p-12 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">Inquiries</span>
            <span className="text-xs font-medium">hello@jabaldreams.com</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">Studio</span>
            <span className="text-xs font-medium">123 Design District, NY</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <FaInstagram className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          <Phone
            onClick={() => setIsContactOpen(true)}
            className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
          />
          <Mail
            onClick={() => setIsContactOpen(true)}
            className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
          />
          <MapPin className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
        </div>

        <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-ink/20">© 2026 Jabal Dreams. All Rights Reserved.</div>
      </footer>

      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-cream shadow-2xl overflow-hidden flex flex-col md:flex-row"
              role="dialog"
              aria-modal="true"
              aria-label="Contact Jabal Dreams"
            >
              <div className="hidden md:flex w-1/3 bg-brand-ink text-brand-cream p-12 flex-col justify-between">
                <div>
                  <div className="w-12 h-12 border border-brand-cream/30 flex items-center justify-center mb-8">
                    <span className="font-serif text-2xl font-light">JD</span>
                  </div>
                  <h3 className="font-serif text-3xl leading-tight mb-4">
                    Let&apos;s Design <br />
                    Together.
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest opacity-60 leading-relaxed">
                    Share your vision with us, and we&apos;ll help you bring it to life with precision and elegance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 opacity-60">
                    <Phone className="w-3 h-3" />
                    <span className="text-[9px] uppercase tracking-widest">+1 234 567 890</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-60">
                    <Mail className="w-3 h-3" />
                    <span className="text-[9px] uppercase tracking-widest">hello@jabaldreams.com</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow p-8 md:p-12 relative">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-brand-ink/5 rounded-full transition-colors"
                  aria-label="Close contact form"
                >
                  <X className="w-5 h-5" />
                </button>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h3 className="font-serif text-3xl mb-4">Message Received</h3>
                    <p className="font-sans text-xs uppercase tracking-widest opacity-60">
                      Thank you for reaching out. <br />
                      We will be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl mb-8 md:hidden">Contact Us</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Name</label>
                          <input
                            required
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Email</label>
                          <input
                            required
                            type="email"
                            placeholder="email@example.com"
                            className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Contact Number</label>
                          <input
                            required
                            type="tel"
                            placeholder="+1 (000) 000-0000"
                            className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Location</label>
                          <input
                            required
                            type="text"
                            placeholder="City, Country"
                            className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Message</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your project..."
                          className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm resize-none"
                        />
                      </div>

                      <button
                        disabled={formStatus === "submitting"}
                        type="submit"
                        className="w-full bg-brand-ink text-brand-cream py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-brand-gold transition-colors flex items-center justify-center gap-3 group disabled:opacity-50"
                      >
                        {formStatus === "submitting" ? (
                          <div className="w-4 h-4 border-2 border-brand-cream/30 border-t-brand-cream rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
