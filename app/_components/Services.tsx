"use client";

import Image from "next/image";
import {
  Landmark,
  Shapes,
  Boxes,
  Brush,
  AudioLines,
  Waves,
  Component,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "../_data/content";
import { Reveal, SectionLabel } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  Landmark,
  Shapes,
  Boxes,
  Brush,
  AudioLines,
  Waves,
  Component,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-brand-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Our Specialized Services</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
              Craft that transforms <span className="italic text-brand-gold">space into story</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-sans text-sm md:text-[15px] leading-relaxed text-brand-ink/60 max-w-xl">
              Sculptural features, textured finishes, architectural elements, heritage works, and
              precise scale models — each delivered from concept development to final installation.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-32">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Shapes;
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.id}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Image */}
                <Reveal
                  y={36}
                  className={`relative ${reversed ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="group relative overflow-hidden">
                    <div
                      className="absolute -inset-px border border-brand-ink/10 z-10 pointer-events-none"
                      aria-hidden="true"
                    />
                    <Image
                      src={s.image.src}
                      alt={s.title}
                      width={s.image.w}
                      height={s.image.h}
                      className="w-full aspect-[4/3] object-cover grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 z-20 flex items-center justify-center w-12 h-12 bg-brand-cream/90 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="absolute bottom-4 right-4 z-20 font-serif text-5xl text-brand-cream/80 leading-none mix-blend-overlay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                {/* Copy */}
                <div className={`${reversed ? "md:order-1" : "md:order-2"}`}>
                  <Reveal>
                    <span className="font-sans uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
                      {String(i + 1).padStart(2, "0")} / Service
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h3 className="mt-4 font-serif font-light leading-[1.1] text-[clamp(1.75rem,3.5vw,2.5rem)]">
                      {s.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-5 font-sans text-sm leading-relaxed text-brand-ink/65 max-w-lg">
                      {s.blurb}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <div className="mt-7">
                      <span className="font-sans uppercase tracking-[0.2em] text-[9px] font-bold text-brand-ink/40">
                        {s.itemsLabel}
                      </span>
                      <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check className="w-3.5 h-3.5 text-brand-gold mt-0.5 shrink-0" />
                            <span className="font-sans text-[13px] leading-snug text-brand-ink/75">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
