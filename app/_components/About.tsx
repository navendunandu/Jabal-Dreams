"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ABOUT, STATS, FEATURE_IMAGE } from "../_data/content";
import { Reveal, SectionLabel } from "./primitives";

export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Feature image */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <motion.div
              animate={reduce ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-brand-ink/10 -z-10" aria-hidden="true" />
              <Image
                src={FEATURE_IMAGE.src}
                alt="Detailed sculptural and architectural craftsmanship"
                width={FEATURE_IMAGE.w}
                height={FEATURE_IMAGE.h}
                className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(26,26,26,0.18)]"
              />
            </motion.div>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <SectionLabel>{ABOUT.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
              {ABOUT.title}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 max-w-2xl">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="font-sans text-sm md:text-[15px] leading-relaxed text-brand-ink/70">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-ink/10 border border-brand-ink/10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.12 + i * 0.06} className="min-w-0">
                <div className="bg-brand-cream p-5 h-full min-w-0">
                  <div className="font-serif text-[clamp(1.25rem,2.4vw,1.875rem)] text-brand-ink leading-tight break-words">
                    {s.value}
                  </div>
                  <div className="mt-2 font-sans uppercase tracking-[0.18em] text-[9px] font-bold text-brand-ink/50 leading-tight">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
