"use client";

import { ArrowUpRight } from "lucide-react";
import { EXPERTISE, CONSULTANCY } from "../_data/content";
import { Reveal, SectionLabel } from "./primitives";

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-20">
        {/* Specialized expertise */}
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>Specialized Expertise</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
              A rare breadth of disciplines under one roof
            </h2>
          </Reveal>
          <ol className="mt-10 border-t border-brand-ink/10">
            {EXPERTISE.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 0.04}>
                <div className="group flex items-baseline gap-5 py-4 border-b border-brand-ink/10 hover:border-brand-gold/40 transition-colors">
                  <span className="font-sans text-[10px] font-bold text-brand-gold tabular-nums tracking-widest pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-lg md:text-xl text-brand-ink/85 group-hover:text-brand-ink transition-colors leading-snug">
                    {e}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Consultancy */}
        <div className="md:col-span-7">
          <div className="md:sticky md:top-28 bg-brand-ink text-brand-cream p-8 md:p-12">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-brand-gold" />
                <span className="font-sans uppercase tracking-[0.35em] text-[10px] text-brand-gold font-bold">
                  {CONSULTANCY.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-6 font-serif font-light leading-[1.1] text-[clamp(1.6rem,3.2vw,2.4rem)]">
                {CONSULTANCY.title}
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 font-sans text-sm leading-relaxed text-brand-cream/65 max-w-xl">
                {CONSULTANCY.intro}
              </p>
            </Reveal>

            <div className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-px">
              {CONSULTANCY.items.map((item, i) => (
                <Reveal key={item} delay={0.04 * i}>
                  <div className="group flex items-center gap-3 py-3 border-b border-brand-cream/10">
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="font-sans text-[13px] leading-snug text-brand-cream/80">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
