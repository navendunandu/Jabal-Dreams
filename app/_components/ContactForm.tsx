"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";

/**
 * ContactForm — shared between the inline Contact section and the modal.
 * NOTE: submission is simulated on the client. Wire to a route handler /
 * server action + email service for production delivery.
 */
export function ContactForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const dark = tone === "dark";
  const labelCls = `text-[9px] uppercase tracking-[0.2em] font-bold ${
    dark ? "text-brand-cream/50" : "text-brand-ink/40"
  }`;
  const inputCls = `w-full bg-transparent border-b py-2.5 outline-none transition-colors font-sans text-sm ${
    dark
      ? "border-brand-cream/20 focus:border-brand-gold text-brand-cream placeholder:text-brand-cream/30"
      : "border-brand-ink/15 focus:border-brand-gold text-brand-ink placeholder:text-brand-ink/30"
  }`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1400);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-14"
      >
        <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-gold" />
        </div>
        <h3 className={`font-serif text-3xl mb-3 ${dark ? "text-brand-cream" : ""}`}>
          Message Received
        </h3>
        <p
          className={`font-sans text-xs uppercase tracking-[0.2em] ${
            dark ? "text-brand-cream/60" : "text-brand-ink/60"
          }`}
        >
          Thank you for reaching out.
          <br /> Our studio will be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="cf-name" className={labelCls}>
            Name
          </label>
          <input id="cf-name" name="name" required type="text" placeholder="Your name" className={inputCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-email" className={labelCls}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            required
            type="email"
            placeholder="email@example.com"
            className={inputCls}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="cf-phone" className={labelCls}>
            Contact Number
          </label>
          <input id="cf-phone" name="phone" type="tel" placeholder="+968 0000 0000" className={inputCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-type" className={labelCls}>
            Project Type
          </label>
          <input
            id="cf-type"
            name="type"
            type="text"
            placeholder="Heritage, sculpture, scale model…"
            className={inputCls}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="cf-message" className={labelCls}>
          Tell us about your project
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Share your vision, scope, and timeline…"
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`group w-full py-4 uppercase tracking-[0.3em] text-[10px] font-bold flex items-center justify-center gap-3 transition-colors disabled:opacity-50 ${
          dark
            ? "bg-brand-gold text-brand-ink hover:bg-brand-cream"
            : "bg-brand-ink text-brand-cream hover:bg-brand-gold"
        }`}
      >
        {status === "submitting" ? (
          <span className="w-4 h-4 border-2 border-current/40 border-t-current rounded-full animate-spin" />
        ) : (
          <>
            Send Inquiry
            <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
