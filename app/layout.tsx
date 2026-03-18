import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://typewriter-font.vercel.app";
const title = "Typewriter Font – Unicode Monospace Text Generator";
const description =
  "Convert text to monospace Unicode characters that look like a terminal or typewriter. Copy and paste them anywhere.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "typewriter font",
    "monospace text",
    "unicode monospace",
    "typewriter text generator",
    "fixed-width text",
    "copy paste font",
    "unicode text converter",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Typewriter Font",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
