"use client";

import { motion, useReducedMotion } from "motion/react";
import { BRAND } from "../_data/content";

/**
 * Marquee — a slow, continuous ticker of the studio's disciplines.
 * A dark band that punctuates the cream canvas.
 */
export function Marquee() {
  const reduce = useReducedMotion();
  const items = [...BRAND.disciplines, ...BRAND.disciplines, ...BRAND.disciplines];

  return (
    <div className="relative bg-brand-ink text-brand-cream py-5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((d, i) => (
          <span key={i} className="flex items-center">
            <span className="font-sans uppercase tracking-[0.35em] text-[11px] font-medium px-8">
              {d}
            </span>
            <span className="text-brand-gold text-lg leading-none">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
