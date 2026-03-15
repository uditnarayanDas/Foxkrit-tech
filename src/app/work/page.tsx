import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

export const metadata = {
    title: "Business Websites & Web Apps Portfolio | Foxkrit",
    description: "Explore how Foxkrit AI Consulting accelerates business growth through high-performance Business Websites, E-commerce Websites, and custom Web Apps.",
    openGraph: {
        title: "Portfolio: Business Websites & Web Apps | Foxkrit AI Consulting",
        description: "Explore how we accelerate business growth through high-performance Business Websites, E-commerce, and custom Web Apps.",
        url: "https://foxkrit-tech.onrender.com/work",
    }
};

export default function WorkPage() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#def249] selection:text-black">
            <section className="pt-32 pb-24 md:pt-36 md:pb-24 min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center border-b border-neutral-900 relative overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 bg-neutral-900 pointer-events-none overflow-hidden">
                    {/* Fallback pattern while loading */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    {/* The Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute min-w-full min-h-full object-cover object-center w-auto h-auto opacity-30 mix-blend-screen grayscale-[0.5]"
                    >
                        {/* We use a high quality abstract tech/office video placeholder from a reliable CDN */}
                        <source src="https://cdn.pixabay.com/video/2020/02/16/32468-392576770_large.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient Overlays for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Subtle Background Glow behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#def249] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0"></div>

                <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-neutral-300 mb-8 mt-auto md:mt-0 shadow-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#89c240] animate-pulse"></div>
                        PROJECTS
                    </div>
                    <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 leading-[1.05] drop-shadow-sm">
                        Proof over <br className="hidden md:block" /> promises.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed mt-2 drop-shadow-md">
                        Explore how we've helped visionary businesses achieve measurable results through premium, high-performance web experiences.
                    </p>
                </div>
                <ScrollDownIndicator />
            </section>

            <div className="bg-[#050505]">
                <CaseStudiesSection />
            </div>
        </div>
    );
}
