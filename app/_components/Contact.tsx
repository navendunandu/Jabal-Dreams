"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND } from "../_data/content";
import { Blueprint } from "./Blueprint";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./primitives";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-brand-ink text-brand-cream overflow-hidden">
      <Blueprint className="opacity-[0.04] text-brand-cream" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Left: invitation + details */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-brand-gold font-bold">
                Start a Project
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif font-light leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
              Let&apos;s craft something <span className="italic text-brand-gold">enduring</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-sans text-sm leading-relaxed text-brand-cream/65 max-w-md">
              Share your vision with our studio. From heritage restoration to bespoke sculptural
              features, we partner with you from first concept to final installation.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            <Reveal delay={0.15}>
              <a
                href={`mailto:${BRAND.email}`}
                className="group flex items-center gap-4 hover:text-brand-gold transition-colors"
              >
                <span className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="font-sans text-sm tracking-wide">{BRAND.email}</span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 hover:text-brand-gold transition-colors"
              >
                <span className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="font-sans text-sm tracking-wide">{BRAND.phone}</span>
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="font-sans text-sm tracking-wide">{BRAND.location}</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <div className="bg-brand-cream/[0.04] border border-brand-cream/10 p-8 md:p-10">
              <ContactForm tone="dark" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
