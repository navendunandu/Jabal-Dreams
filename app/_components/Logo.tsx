import Image from "next/image";
import { BRAND } from "../_data/content";

// Brand logo assets supplied from the official brochure (CorelDRAW SVG export).
// `full`  = emblem + "JDevents" wordmark + tagline lockup.
// `mark`  = compact emblem only (used in the scrolled/condensed header).
// `*Light` = cream recolouring for dark surfaces.
const SRC = {
  full: { src: "/JD_LOGO_FULL.svg", w: 3712, h: 3140 },
  fullLight: { src: "/JD_LOGO_FULL_light.svg", w: 3712, h: 3140 },
  mark: { src: "/JD_LOGO.svg", w: 1937, h: 2556 },
  markLight: { src: "/JD_LOGO_light.svg", w: 1937, h: 2556 },
} as const;

/**
 * Logo — renders the brand logo at a given pixel height (width scales with the
 * artwork's aspect ratio). SVGs are served unoptimized so the vector stays crisp.
 */
export function Logo({
  variant = "full",
  height,
  className = "",
  priority = false,
}: {
  variant?: keyof typeof SRC;
  /** Pixel height fallback when no Tailwind h-* classes are passed via className. */
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const { src, w, h } = SRC[variant];
  return (
    <Image
      src={src}
      alt={`${BRAND.name} logo`}
      width={w}
      height={h}
      priority={priority}
      unoptimized
      style={height != null ? { height, width: "auto" } : undefined}
      className={`w-auto ${className}`}
    />
  );
}
