"use client";

import { FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { BRAND, NAV_LINKS, SERVICES } from "../_data/content";
import { Logo } from "./Logo";

export function SiteFooter({ onContact }: { onContact: () => void }) {
  return (
    <footer className="relative bg-brand-cream border-t border-brand-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="dark" height={48} />
            <p className="mt-6 font-serif italic text-2xl text-brand-ink/80 max-w-sm leading-snug">
              {BRAND.tagline}
            </p>
            <div className="mt-7 flex items-center gap-4">
              {[FaInstagram, FaPinterestP, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 border border-brand-ink/15 flex items-center justify-center text-brand-ink/50 hover:text-brand-gold hover:border-brand-gold transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-brand-ink/40">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-brand-ink/70 hover:text-brand-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-brand-ink/40">
              Disciplines
            </h4>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="font-sans text-sm text-brand-ink/70 hover:text-brand-gold transition-colors"
                  >
                    {s.title.split(" & ")[0]}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onContact}
                  className="font-sans text-sm text-brand-gold hover:text-brand-ink transition-colors"
                >
                  Request a consultation →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-brand-ink/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-sans uppercase tracking-[0.2em] text-[9px] font-bold text-brand-ink/30">
            © {BRAND.established} {BRAND.name}. All Rights Reserved.
          </span>
          <span className="font-sans uppercase tracking-[0.2em] text-[9px] font-bold text-brand-ink/30">
            Architectural Art · Heritage Restoration · Creative Fabrication
          </span>
        </div>
      </div>
    </footer>
  );
}
