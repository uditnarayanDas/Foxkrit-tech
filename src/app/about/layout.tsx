import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Foxkrit AI Consulting | Website Developers",
  description: "An elite league of website developers, designers, and IT consultants. Learn about our dedication to UI/UX Design, performance, and business growth.",
  openGraph: {
      title: "About Foxkrit AI Consulting | Website Developers",
      description: "An elite league of website developers, designers, and IT consultants dedicated to UI/UX Design and business growth.",
      url: "https://foxkrit-tech.onrender.com/about",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
