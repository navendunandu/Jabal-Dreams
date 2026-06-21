"use client";

import { INDUSTRIES } from "../_data/content";
import { Reveal, SectionLabel } from "./primitives";

export function Industries() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-brand-cream border-y border-brand-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>Industries We Serve</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(1.9rem,4vw,3rem)]">
                Trusted across the built environment
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((ind, i) => (
                <Reveal as="span" key={ind} delay={i * 0.03}>
                  <span className="inline-flex items-center gap-2 border border-brand-ink/15 px-4 py-2.5 font-sans uppercase tracking-[0.12em] text-[11px] font-medium text-brand-ink/70 hover:border-brand-gold hover:text-brand-ink transition-colors">
                    <span className="w-1 h-1 bg-brand-gold rounded-full" />
                    {ind}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
