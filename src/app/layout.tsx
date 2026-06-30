import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Variable font with a width axis — powers the TextPressure name effect.
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Ronnel James Yacunas — Full-Stack Engineer",
  description:
    "Portfolio of Ronnel James Yacunas, a full-stack engineer building reliable, large-scale systems and AI-powered products across fintech, creator commerce, and B2B SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
