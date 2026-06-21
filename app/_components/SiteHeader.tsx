"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../_data/content";
import { HeaderLogo } from "./HeaderLogo";
import { Logo } from "./Logo";

export function SiteHeader({ onContact }: { onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 48) return true;
        if (prev && y < 16) return false;
        return prev;
      });
    };

    const rafId = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock background scroll while the mobile menu is open.
  // Use overflow hidden only — position:fixed + scrollTo on close causes scroll jumps.
  useEffect(() => {
    if (!menuOpen) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-brand-cream/85 backdrop-blur-md border-b border-brand-ink/5 py-3"
          : "bg-transparent py-4 lg:py-5"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
        <HeaderLogo compact={scrolled} />

        <nav className="hidden lg:flex items-center gap-5 xl:gap-9 shrink-0" aria-label="Primary">
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
          className="lg:hidden p-2 -mr-2 text-brand-ink"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-brand-ink text-brand-cream lg:hidden flex flex-col overflow-y-auto overscroll-contain"
              >
                <div className="flex shrink-0 items-center justify-between px-6 py-6">
                  <Logo variant="fullLight" height={46} />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 -mr-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex-1 flex flex-col justify-center gap-2 px-8 min-h-0" aria-label="Mobile">
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
                <div className="shrink-0 px-8 pb-12 pt-4">
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
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  );
}
