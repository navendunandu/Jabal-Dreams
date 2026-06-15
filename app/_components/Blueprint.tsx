"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Blueprint — the continuously self-drawing architectural grid motif.
 * Used as a faint ambient background layer behind hero / feature sections.
 */
export function Blueprint({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const draw = (duration: number, delay: number) =>
    reduce
      ? { pathLength: 1 }
      : {
          pathLength: [0, 1],
          transition: {
            duration,
            delay,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "reverse" as const,
          },
        };

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="text-brand-ink"
      >
        <motion.path
          d="M 100 100 L 900 100 L 900 900 L 100 900 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={draw(3, 0)}
        />
        <motion.path
          d="M 100 300 L 900 300 M 100 600 L 900 600 M 300 100 L 300 900 M 600 100 L 600 900"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={draw(4, 1)}
        />
        <motion.path
          d="M 200 200 L 400 400 M 800 200 L 600 400 M 200 800 L 400 600 M 800 800 L 600 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={draw(5, 2)}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="180"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={draw(6, 1.5)}
        />
      </svg>
    </div>
  );
}
