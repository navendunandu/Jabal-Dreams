"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "../_data/content";
import { Reveal, SectionLabel } from "./primitives";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % GALLERY.length)),
    []
  );
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-brand-ink text-brand-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-brand-gold" />
                <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-brand-gold font-bold">
                  Selected Work
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
                A portfolio of <span className="italic text-brand-gold">crafted detail</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-sans text-sm leading-relaxed text-brand-cream/60 max-w-sm">
              Sculptural walls, heritage restorations, water features, and scale models realised
              across Oman. Select any piece to view it in detail.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 [column-fill:_balance] columns-2 md:columns-3 gap-4 md:gap-5">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} y={24} className="mb-4 md:mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden cursor-pointer"
                aria-label={`Open project image ${i + 1}`}
              >
                <Image
                  src={g.src}
                  alt={`Jabal Dreams project ${i + 1}`}
                  width={g.w}
                  height={g.h}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/20 transition-colors duration-500" />
                <span
                  className="absolute inset-0 border border-brand-cream/0 group-hover:border-brand-gold/40 transition-colors duration-500"
                  aria-hidden="true"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-ink/95 backdrop-blur-sm p-4 md:p-12"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 p-2 text-brand-cream/70 hover:text-brand-gold transition-colors"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 md:left-8 p-3 text-brand-cream/60 hover:text-brand-gold transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 md:right-8 p-3 text-brand-cream/60 hover:text-brand-gold transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[82vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[active].src}
                alt={`Jabal Dreams project ${active + 1}`}
                width={GALLERY[active].w}
                height={GALLERY[active].h}
                className="max-h-[82vh] w-auto h-auto object-contain"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-brand-cream/50">
                  Jabal Dreams · Portfolio
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-brand-cream/50">
                  {String(active + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
