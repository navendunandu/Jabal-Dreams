"use client";

import { useState } from "react";
import { SiteHeader } from "./_components/SiteHeader";
import { Hero } from "./_components/Hero";
import { Marquee } from "./_components/Marquee";
import { About } from "./_components/About";
import { Services } from "./_components/Services";
import { Gallery } from "./_components/Gallery";
import { Expertise } from "./_components/Expertise";
import { Industries } from "./_components/Industries";
import { Process } from "./_components/Process";
import { Philosophy } from "./_components/Philosophy";
import { Contact } from "./_components/Contact";
import { SiteFooter } from "./_components/SiteFooter";
import { ContactModal } from "./_components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <>
      <SiteHeader onContact={openContact} />
      <main className="bg-brand-cream">
        <Hero onContact={openContact} />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Expertise />
        <Industries />
        <Process />
        <Philosophy />
        <Contact />
      </main>
      <SiteFooter onContact={openContact} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
