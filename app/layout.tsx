import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, El_Messiri, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./components/lang-context";
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

// Arabic display + body faces (applied automatically in RTL via CSS var swap)
const elMessiri = El_Messiri({
  variable: "--font-elmessiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jabaldreams.com"),
  title: {
    default: "Jabal Dreams | Architectural Art, Sculptures & Heritage Restoration in Oman",
    template: "%s | Jabal Dreams",
  },
  description:
    "Jabal Dreams (JD) is a specialized creative fabrication, architectural enhancement, and heritage restoration company based in Muscat, Oman — crafting sculptural art, textured finishes, water features, and scale models. Preserving the Past, Crafting the Future.",
  keywords: [
    "Jabal Dreams",
    "JD Events Oman",
    "architectural art Oman",
    "heritage restoration Oman",
    "sculptural wall art",
    "creative fabrication Muscat",
    "3D architectural features",
    "texture murals",
    "scale modeling",
    "interior fabrication Oman",
  ],
  applicationName: "Jabal Dreams",
  authors: [{ name: "Jabal Dreams Intl. LLC" }],
  creator: "Jabal Dreams Intl. LLC",
  publisher: "Jabal Dreams Intl. LLC",
  openGraph: {
    title: "Jabal Dreams | Preserving Heritage, Creating Landmarks",
    description:
      "Specialized creative fabrication, architectural art, and heritage restoration crafted across the Sultanate of Oman.",
    type: "website",
    siteName: "Jabal Dreams",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabal Dreams | Architectural Art & Heritage Restoration in Oman",
    description:
      "Sculptural art, heritage restoration, and creative fabrication based in Muscat, Oman.",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${elMessiri.variable} ${cairo.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
