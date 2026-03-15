import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Insights & Technology Perspectives | Foxkrit AI Consulting",
  description: "Expert insights on AI, technology consulting, software development, and business growth from our elite engineering team.",
  openGraph: {
      title: "Insights & Technology Perspectives | Foxkrit AI Consulting",
      description: "Expert insights on AI, technology consulting, software development, and business growth.",
      url: "https://foxkrit-tech.onrender.com/blog",
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
