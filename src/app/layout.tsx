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
  title: {
    default: "FitFusion | Multi Power Gym — Premium Luxury Fitness",
    template: "%s | FitFusion Multi Power Gym",
  },
  description:
    "Sculpt your body and elevate your spirit at FitFusion Multi Power Gym. Featuring state-of-the-art equipment, certified master trainers, custom workout plans, and elite facilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#C6FF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
