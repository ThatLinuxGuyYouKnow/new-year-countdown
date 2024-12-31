import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Year",
  description: "Countdown to a new year",
  openGraph: {
    title: "New Year",
    description: "Countdown to a new year",
    images: ["https://new-year-countdown-eight-lilac.vercel.app/fallback-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Year",
    description: "Countdown to a new year",
    images: ["https://new-year-countdown-eight-lilac.vercel.app/fallback-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
