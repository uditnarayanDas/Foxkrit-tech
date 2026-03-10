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
  title: "Premium Tech Services",
  description: "Websites & web apps that look premium and bring customers.",
};

import { NavigationWrapper } from "@/components/NavigationWrapper";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BookingModalProvider } from "@/context/BookingModalContext";
import { BookingModal } from "@/components/BookingModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
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
          </BookingModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
