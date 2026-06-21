"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { BRAND, HERO_PHRASES, HERO_INTRO, HERO_IMAGE } from "../_data/content";
import { Blueprint } from "./Blueprint";
import { SectionLabel } from "./primitives";

export function Hero({ onContact }: { onContact: () => void }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_PHRASES.length), 3200);
    return () => clearInterval(t);
  }, []);

  const phrase = HERO_PHRASES[index];

  return (
    <section
      id="top"
      className="relative min-h-0 lg:py-16 xl:min-h-screen flex items-start lg:items-center overflow-hidden pt-[calc(var(--header-height)+1.5rem)] pb-12 xl:pt-[calc(var(--header-height)+2rem)] xl:pb-0"
    >
      <Blueprint className="opacity-[0.06]" />

      {/* warm ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-12 grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-6 xl:col-span-7 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <SectionLabel>{BRAND.tagline}</SectionLabel>
          </motion.div>

          <h1 className="mt-8 font-serif font-light leading-[1.05] text-[clamp(2rem,5vw,3.25rem)] lg:text-[clamp(2.25rem,3.8vw,4.25rem)] xl:text-[clamp(2.75rem,4.5vw,7.5rem)]">
            <span className="block overflow-hidden py-[0.12em] -my-[0.06em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrase.lead}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {phrase.lead}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block overflow-hidden py-[0.12em] -my-[0.06em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrase.accent}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="block italic text-brand-gold"
                >
                  {phrase.accent}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-full lg:max-w-md xl:max-w-xl font-sans text-sm md:text-base leading-relaxed text-brand-ink/70"
          >
            {HERO_INTRO}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-brand-ink text-brand-cream px-8 py-4 font-sans uppercase tracking-[0.25em] text-[10px] font-bold hover:bg-brand-gold transition-colors"
            >
              View Our Work
              <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <button
              type="button"
              onClick={onContact}
              className="inline-flex w-full sm:w-auto items-center justify-center border border-brand-ink/20 px-8 py-4 font-sans uppercase tracking-[0.25em] text-[10px] font-bold hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              Start a Project
            </button>
          </motion.div>
        </div>

        {/* Right: feature image */}
        <div className="lg:col-span-6 xl:col-span-5 min-w-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            className="relative max-w-full"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-3 border border-brand-gold/30 -z-10" aria-hidden="true" />
              <Image
                src={HERO_IMAGE.src}
                alt="Signature architectural sculpture by Jabal Dreams"
                width={HERO_IMAGE.w}
                height={HERO_IMAGE.h}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(26,26,26,0.25)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-brand-ink/40">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-brand-ink/30"
        />
      </motion.div>
    </section>
  );
}
