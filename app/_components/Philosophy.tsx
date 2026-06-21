"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BRAND } from "../_data/content";

function ParallaxBackground({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <motion.div style={{ y }} className="absolute inset-0 -z-0">
      <Image
        src="/portfolio/jd-50.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30 grayscale"
        aria-hidden="true"
      />
    </motion.div>
  );
}

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const [parallaxReady, setParallaxReady] = useState(false);

  useEffect(() => {
    setParallaxReady(true);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-ink text-brand-cream">
      {parallaxReady && <ParallaxBackground sectionRef={ref} />}

      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/80 via-brand-ink/70 to-brand-ink/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 py-16 sm:py-24 lg:py-44 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-brand-gold" />
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-brand-gold font-bold">
            Our Philosophy
          </span>
          <span className="h-px w-12 bg-brand-gold" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-serif font-light leading-[1.1] text-[clamp(2rem,5.5vw,4.5rem)]"
        >
          Artistic creativity, met with <span className="italic text-brand-gold">technical precision.</span>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 font-sans uppercase tracking-[0.35em] text-[11px] text-brand-cream/60"
        >
          {BRAND.tagline}
        </motion.p>
      </div>
    </section>
  );
}
