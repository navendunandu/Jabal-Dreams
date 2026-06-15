"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "../_data/content";
import { Logo } from "./Logo";

export function SiteHeader({ onContact }: { onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-cream/85 backdrop-blur-md border-b border-brand-ink/5 py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label={`${BRAND.name} home`}>
          <Logo variant="dark" height={scrolled ? 34 : 40} priority className="transition-all duration-500" />
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans uppercase tracking-[0.2em] text-[11px] font-medium text-brand-ink/70 hover:text-brand-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onContact}
            className="border border-brand-ink px-6 py-3 font-sans uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand-ink hover:text-brand-cream transition-colors"
          >
            Start a Project
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-brand-ink"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-ink text-brand-cream md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo variant="light" height={34} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-2 px-8" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-serif text-4xl font-light py-2 border-b border-brand-cream/10 hover:text-brand-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-12">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onContact();
                }}
                className="w-full bg-brand-gold text-brand-ink py-4 font-sans uppercase tracking-[0.3em] text-[11px] font-bold"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
