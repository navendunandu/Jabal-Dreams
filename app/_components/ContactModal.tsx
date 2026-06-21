"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Phone, X } from "lucide-react";
import { BRAND } from "../_data/content";
import { ContactForm } from "./ContactForm";
import { Logo } from "./Logo";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-ink/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-cream shadow-2xl flex flex-col md:flex-row"
            role="dialog"
            aria-modal="true"
            aria-label={`Contact ${BRAND.name}`}
          >
            {/* Brand panel */}
            <div className="hidden md:flex w-2/5 bg-brand-ink text-brand-cream p-10 flex-col justify-between">
              <div>
                <Logo variant="fullLight" height={100} />
                <h3 className="mt-8 font-serif text-3xl leading-tight">
                  Let&apos;s design <br />
                  <span className="italic text-brand-gold">together.</span>
                </h3>
                <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-brand-cream/55 leading-relaxed">
                  Share your vision with our studio in {BRAND.location}, and we&apos;ll bring it to
                  life with precision and artistry.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-brand-cream/60">
                  <Phone className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-[0.18em]">{BRAND.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-cream/60">
                  <Mail className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-[0.18em]">{BRAND.email}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-grow p-8 md:p-10 relative">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 p-2 hover:bg-brand-ink/5 rounded-full transition-colors"
                aria-label="Close contact form"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-2xl mb-8 md:hidden">Start a Project</h3>
              <ContactForm tone="light" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
