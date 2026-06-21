"use client";

import { motion, useReducedMotion } from "motion/react";
import { BRAND } from "../_data/content";
import { Logo } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.5;

export function HeaderLogo({ compact }: { compact: boolean }) {
  const reduce = useReducedMotion();

  const fade = (visible: boolean) => ({
    opacity: visible ? 1 : 0,
    scale: reduce ? 1 : visible ? 1 : 0.96,
  });

  const transition = {
    duration: reduce ? 0.15 : DURATION,
    ease: EASE,
  };

  const inactiveLayer =
    "absolute left-0 top-1/2 -translate-y-1/2 origin-left pointer-events-none";

  return (
    <motion.a
      href="#top"
      layout
      className="relative flex shrink-0 items-center group"
      aria-label={`${BRAND.name} home`}
      transition={{ layout: { duration: DURATION, ease: EASE } }}
    >
      <motion.div
        animate={fade(!compact)}
        transition={transition}
        className={compact ? inactiveLayer : "relative origin-left"}
        aria-hidden={compact}
      >
        <Logo variant="full" priority className="h-16 sm:h-20 lg:h-24 xl:h-[120px]" />
      </motion.div>
      <motion.div
        animate={fade(compact)}
        transition={transition}
        className={compact ? "relative origin-left" : inactiveLayer}
        aria-hidden={!compact}
      >
        <Logo variant="mark" priority className="h-12 lg:h-[60px]" />
      </motion.div>
    </motion.a>
  );
}
