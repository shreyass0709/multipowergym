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
    default: "Multi Power Gym Navunda — The Real Way of Fitness",
    template: "%s | Multi Power Gym Navunda",
  },
  description:
    "Sculpt your body and elevate your spirit at Multi Power Gym Navunda. Featuring state-of-the-art equipment, certified master trainers, master personal coaching, and elite training zones.",
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
