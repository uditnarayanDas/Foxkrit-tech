import { ServicesSection } from "@/components/ServicesSection";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

export const metadata = {
    title: "Services | Premium Tech",
};

export default function ServicesPage() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#def249] selection:text-black">
            <section className="pt-32 pb-24 md:pt-36 md:pb-24 min-h-[50vh] lg:min-h-[55vh] flex flex-col justify-center border-b border-neutral-900 relative overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#def249] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase text-neutral-300 mb-8 mt-auto md:mt-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#89c240]"></div>
                        SERVICES
                    </div>
                    <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-tight">
                        Powering modern <br className="hidden md:block" /> enterprises.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mt-2">
                        Comprehensive technology solutions and strategic advisory designed to scale your operations, increase revenue, and drive sustainable growth.
                    </p>
                </div>
                <ScrollDownIndicator />
            </section>

            <div className="bg-[#050505]">
                <ServicesSection isPage={true} />
            </div>
        </div>
    );
}
