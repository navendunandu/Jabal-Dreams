"use client";

import { PROCESS } from "../_data/content";
import { Reveal, SectionLabel } from "./primitives";

export function Process() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
              From concept to <span className="italic text-brand-gold">final installation</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-ink/10 border border-brand-ink/10">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="group bg-brand-cream p-8 md:p-10 h-full hover:bg-brand-ink hover:text-brand-cream transition-colors duration-500">
                <div className="font-serif text-5xl md:text-6xl font-light text-brand-gold leading-none">
                  {p.step}
                </div>
                <h3 className="mt-6 font-serif text-xl md:text-2xl leading-tight">{p.title}</h3>
                <p className="mt-4 font-sans text-[13px] leading-relaxed text-brand-ink/60 group-hover:text-brand-cream/70 transition-colors">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
