"use client";

import { FaInstagram, FaPinterestP, FaFacebookF } from "react-icons/fa";
import { BRAND, NAV_LINKS, SERVICES, SOCIALS } from "../_data/content";
import { Logo } from "./Logo";

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  facebook: FaFacebookF,
} as const;

export function SiteFooter({ onContact }: { onContact: () => void }) {
  return (
    <footer className="relative bg-brand-cream border-t border-brand-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo variant="full" className="h-16 sm:h-24 lg:h-32" />
            <p className=" font-serif italic text-2xl text-brand-ink/80 max-w-sm leading-snug">
              {BRAND.tagline}
            </p>
            <div className="mt-7 flex items-center gap-4">
              {SOCIALS.map(({ platform, href }) => {
                const Icon = SOCIAL_ICONS[platform];
                const isLink = href !== "";
                return (
                  <a
                    key={platform}
                    href={isLink ? href : "#"}
                    {...(isLink
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { "aria-disabled": true, tabIndex: -1 })}
                    aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    className="w-9 h-9 border border-brand-ink/15 flex items-center justify-center text-brand-ink/50 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-4">
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
