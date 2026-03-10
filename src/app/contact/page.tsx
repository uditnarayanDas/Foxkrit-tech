import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";

export const metadata = {
    title: "Contact | Premium Tech",
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
