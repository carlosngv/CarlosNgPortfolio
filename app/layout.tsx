import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

const displayFontBold = Cormorant_Garamond({
  variable: "--font-cormorant-bold",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Ng — Full Stack Developer",
  description:
    "Personal portfolio and blog of Carlos Ng, Full Stack Developer specializing in modern web applications.",
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "React", "Carlos Ng"],
  authors: [{ name: "Carlos Ng" }],
  openGraph: {
    title: "Carlos Ng — Full Stack Developer",
    description: "Personal portfolio and blog of Carlos Ng, Full Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${displayFontBold.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
