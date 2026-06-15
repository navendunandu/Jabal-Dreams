import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_DESCRIPTION =
  "Jabal Dreams is a creative fabrication, architectural enhancement, and heritage restoration studio in Muscat, Oman — delivering sculptural features, texture murals, 3D architectural elements, water features, and detailed scale models from concept to installation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jabaldreams.com"),
  title: {
    default: "Jabal Dreams | Architectural Art, Heritage Restoration & Creative Fabrication",
    template: "%s | Jabal Dreams",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Jabal Dreams",
    "architectural art",
    "heritage restoration",
    "creative fabrication",
    "sculptural wall art",
    "texture murals",
    "scale models",
    "archaeological conservation",
    "Muscat",
    "Oman",
  ],
  applicationName: "Jabal Dreams",
  authors: [{ name: "Jabal Dreams" }],
  creator: "Jabal Dreams",
  publisher: "Jabal Dreams",
  openGraph: {
    title: "Jabal Dreams | Preserving the Past, Crafting the Future",
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "Jabal Dreams",
    locale: "en_US",
    images: [{ url: "/portfolio/jd-34.webp", width: 1024, height: 1024, alt: "Jabal Dreams craftsmanship" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabal Dreams | Preserving the Past, Crafting the Future",
    description: SITE_DESCRIPTION,
    images: ["/portfolio/jd-34.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
