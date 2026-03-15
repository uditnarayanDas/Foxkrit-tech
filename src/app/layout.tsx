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
  metadataBase: new URL("https://foxkrit-tech.onrender.com"),
  title: {
    default: "Foxkrit AI Consulting | Web Development & IT Consulting",
    template: "%s | Foxkrit AI Consulting",
  },
  description: "Elite website developer and IT consulting agency. We engineer business growth through premium Business Websites, E-commerce Websites, Web Apps, and UI/UX Design.",
  keywords: [
    "IT consulting",
    "AI consulting services",
    "software development company",
    "website development services",
    "business website development",
    "ecommerce website development",
    "web application development",
    "UI UX design services",
    "website maintenance services",
    "SEO optimization services",
    "machine learning development",
    "AI automation solutions",
    "Foxkrit Tech"
  ],
  openGraph: {
    title: "Foxkrit Technology | Elite Digital Experiences",
    description: "Premium websites, web apps, and strategic tech consulting that accelerates growth.",
    url: "https://foxkrit-tech.onrender.com",
    siteName: "Foxkrit Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxkrit Technology | Elite Digital Experiences",
    description: "Premium websites, web apps, and strategic tech consulting that accelerates growth.",
  },
};

import { NavigationWrapper } from "@/components/NavigationWrapper";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BookingModalProvider } from "@/context/BookingModalContext";
import { BookingModal } from "@/components/BookingModal";
import { CookieBanner } from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 pointer-events-none z-[999] bg-[linear-gradient(rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <SmoothScroll>
          <BookingModalProvider>
            <NavigationWrapper />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <BookingModal />
            <CookieBanner />
          </BookingModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
