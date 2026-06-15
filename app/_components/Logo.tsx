import Image from "next/image";
import { BRAND } from "../_data/content";

const SRC = {
  dark: "/jd-logo.png",
  light: "/jd-logo-light.png",
  gold: "/jd-logo-gold.png",
} as const;

// Intrinsic dimensions of the extracted logo lockup.
const W = 511;
const H = 202;

/**
 * Logo — the brand lockup extracted from the company brochure.
 * `variant` picks the colour treatment for light vs. dark surfaces.
 * `height` sets the rendered height in px (width scales automatically).
 */
export function Logo({
  variant = "dark",
  height = 38,
  className = "",
  priority = false,
}: {
  variant?: keyof typeof SRC;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt={`${BRAND.name} logo`}
      width={W}
      height={H}
      priority={priority}
      style={{ height, width: "auto" }}
      className={className}
    />
  );
}
