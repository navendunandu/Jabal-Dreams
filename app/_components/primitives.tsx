"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Reveal — fade + rise on scroll into view. Respects reduced-motion.
// ---------------------------------------------------------------------------
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container + child for lists.
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ---------------------------------------------------------------------------
// SectionLabel — gold rule + wide-tracked uppercase eyebrow.
// ---------------------------------------------------------------------------
export function SectionLabel({
  children,
  className = "",
  align = "left",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="h-px w-12 bg-brand-gold" />
      <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-brand-gold font-bold">
        {children}
      </span>
      {align === "center" && <span className="h-px w-12 bg-brand-gold" />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Monogram — the bordered "JD" mark.
// ---------------------------------------------------------------------------
export function Monogram({
  size = 40,
  invert = false,
  className = "",
}: {
  size?: number;
  invert?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center border ${
        invert ? "border-brand-cream/30 text-brand-cream" : "border-current"
      } ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="font-serif font-light" style={{ fontSize: size * 0.5 }}>
        JD
      </span>
    </span>
  );
}
