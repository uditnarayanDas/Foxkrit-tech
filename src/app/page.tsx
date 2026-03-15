import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { FeatureGridSection } from "@/components/FeatureGridSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsScrollSection } from "@/components/ProjectsScrollSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Website Developer & IT Consulting | Foxkrit AI Consulting",
  description: "Drive business growth with Foxkrit AI Consulting. Expert website developers specializing in Business Websites, E-commerce Websites, Web Apps / Dashboards, and UI/UX Design.",
  openGraph: {
    title: "Foxkrit AI Consulting | Premium Web Development",
    description: "Drive business growth with expert website developers specializing in Business Websites, E-commerce, Web Apps, and Performance + SEO.",
    url: "https://foxkrit-tech.onrender.com",
    images: [{
      url: "https://foxkrit-tech.onrender.com/og-image.jpg", // Assuming an og-image will be placed here
      width: 1200,
      height: 630,
      alt: "Foxkrit Technology",
    }],
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGridSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsScrollSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
