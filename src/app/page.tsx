import { HeroSection } from "@/components/HeroSection";
import { FeatureGridSection } from "@/components/FeatureGridSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsScrollSection } from "@/components/ProjectsScrollSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

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
