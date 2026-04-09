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

export const metadata: Metadata = {
  metadataBase: new URL("https://jabaldreams.com"),
  title: "Jabal Dreams | Website Under Construction",
  description:
    "Jabal Dreams is an interior design company crafting timeless, elegant spaces. Our new website is currently under construction.",
  keywords: [
    "Jabal Dreams",
    "interior design",
    "interior designing company",
    "luxury interiors",
    "website under construction",
  ],
  applicationName: "Jabal Dreams",
  authors: [{ name: "Jabal Dreams" }],
  creator: "Jabal Dreams",
  publisher: "Jabal Dreams",
  openGraph: {
    title: "Jabal Dreams | Website Under Construction",
    description:
      "We are designing our new digital home. Explore Jabal Dreams, where timeless interior design meets modern living.",
    type: "website",
    siteName: "Jabal Dreams",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabal Dreams | Website Under Construction",
    description:
      "Jabal Dreams is an interior design company. Our new website is currently under construction.",
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
