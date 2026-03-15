import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";

export const metadata = {
    title: "Contact Foxkrit AI Consulting | IT & Website Consulting",
    description: "Book a strategy call with our elite team. Partner with Foxkrit for Website consulting, AI technology integration, and Performance + SEO improvements.",
    openGraph: {
        title: "Contact Foxkrit AI Consulting | IT & Website Consulting",
        description: "Partner with Foxkrit for Website consulting, AI technology integration, and Performance + SEO improvements.",
        url: "https://foxkrit-tech.onrender.com/contact",
    }
};

export default function ContactPage() {
    return (
        <>
            <div className="pt-20 bg-[#09090b]">
                <ContactSection />
            </div>

            <div className="border-t border-border">
                <FAQSection />
            </div>
        </>
    );
}
