"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useBookingModal } from "@/context/BookingModalContext";

export function HeroSection() {
    const { openModal } = useBookingModal();

    return (
        <section className="bg-[#e7eee8] relative flex flex-col pt-32 lg:pt-36 pb-0 overflow-hidden min-h-[max(600px,calc(100vh))] justify-center">
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 40s linear infinite;
                }
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800;900&display=swap');
                
                .brand-serif {
                    font-family: 'Playfair Display', Georgia, serif;
                }
                .brand-sans {
                    font-family: 'Outfit', 'Quicksand', system-ui, sans-serif;
                }
            `}</style>

            <div className="max-w-[1550px] 2xl:max-w-[1700px] mx-auto px-4 sm:px-8 max-lg:px-12 w-full flex flex-col lg:flex-row lg:flex-nowrap items-center justify-between relative z-10 flex-1 h-full gap-4 lg:gap-8 pb-20 lg:pb-0">

                {/* Left Side Content - New Billion Dollar Simple Aesthetic */}
                <Reveal delay={0.4} className="flex-[1.2] lg:flex-1 z-20 w-full flex flex-col justify-start md:justify-center h-full max-w-[850px] shrink-0 min-w-[320px] pt-8 md:pt-12 lg:pt-0 lg:pl-12 xl:pl-20">
                    <div className="space-y-6 sm:space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left pb-4 md:pb-16 lg:pb-20 h-full justify-start md:justify-center">

                        {/* Premium Soft Tag */}
                        <div className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-[#89c240]/40 bg-[#89c240]/10 text-[#5a8726] font-semibold text-[13px] md:text-sm tracking-wide mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#89c240] mr-2"></span>
                            Premium Tech Consulting
                        </div>

                        {/* Clean, Scaled-Down Header (Larger on Mobile) */}
                        <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.8rem] leading-[1.25] tracking-tight text-[#0f172a] font-[700] brand-sans mt-24 sm:mt-0">
                            Your partner in <span className="bg-[#def249] px-2 md:px-3 rounded-lg md:rounded-xl text-[#0f172a]">building</span> and <span className="bg-[#def249] px-2 md:px-3 rounded-lg md:rounded-xl text-[#0f172a]">scaling</span> business online.
                        </h1>

                        {/* Refined Subtitle */}
                        <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#3f5146] font-medium leading-[1.6] max-w-xl text-balance px-2 lg:px-0 lg:pr-4 mt-2 sm:mt-0">
                            We design and build fast, responsive, conversion-focused websites for businesses and startups plus elite consulting to accelerate growth.
                        </p>

                        {/* Enhanced High-Conversion CTA */}
                        <div className="pt-8 sm:pt-6 flex flex-col sm:flex-row items-center sm:items-center lg:items-start gap-3 sm:gap-5">
                            <button onClick={openModal} className="relative overflow-hidden inline-flex items-center justify-center gap-4 bg-[#1e1e1e] text-neutral-200 font-semibold rounded-[40px] pl-5 md:pl-6 pr-2 py-2 transition-transform duration-300 border border-[#333] group w-fit hover:-translate-y-1 shadow-[0_10px_24px_rgba(15,23,42,0.15)] text-[13px] md:text-[14px] whitespace-nowrap">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Book a Free Consultation</span>
                                <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                                    <div className="absolute inset-0 bg-white/10 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[75] group-hover:bg-[#333]"></div>
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-300 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-45 group-hover:text-white" />
                                </div>
                            </button>

                            {/* Trust Signals */}
                            <div className="flex flex-col gap-0.5 text-center sm:text-left">
                                <span className="text-[#0f172a] font-bold text-[12px]">No commitment necessary</span>
                                <span className="text-[#475569] font-medium text-[11px]">Free 30-minute strategy session</span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Right Side Image (Hidden on mobile/tablet, visible on desktop) */}
                <Reveal delay={0.6} direction="left" className="hidden lg:flex flex-[1] lg:flex-[1.4] w-full justify-center lg:justify-end items-end relative mt-2 lg:mt-0 z-10 h-[35vh] sm:h-[45vh] lg:h-[80%] xl:h-[90%] pr-0 md:pr-4 lg:-mr-16 xl:-mr-28 2xl:-mr-36 pointer-events-none self-end pb-0 bottom-0 lg:bottom-[4vh]">
                    <div className="relative w-[320px] sm:w-[500px] lg:w-[650px] xl:w-[800px] h-full min-h-[300px] sm:min-h-[450px] xl:min-h-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] translate-y-2 lg:translate-y-8">
                        <Image
                            src="/images/consulting2.png"
                            alt="Consultant Pointing"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain object-bottom pointer-events-none"
                            quality={100}
                        />
                    </div>
                </Reveal>
            </div>

            {/* Marquee Banner */}
            <div className="absolute bottom-0 left-0 w-full bg-[#0f172a] border-y border-neutral-800 overflow-hidden flex z-30 shadow-[0_-5px_20px_rgba(15,23,42,0.1)]">
                <div className="animate-marquee items-center py-2.5 sm:py-3 text-white font-bold text-sm sm:text-[15px] whitespace-nowrap tracking-wide leading-none">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            <span className="px-6 md:px-10 flex-shrink-0 pt-0.5">Special discounts available for recurring consulting!</span>
                            <div className="w-8 h-[1.5px] bg-neutral-700"></div>
                            <span className="px-6 md:px-10 flex-shrink-0 pt-0.5">Free estimates! Contact us today to schedule your call!</span>
                            <div className="w-8 h-[1.5px] bg-neutral-700"></div>
                            <span className="px-6 md:px-10 flex-shrink-0 pt-0.5">Elevate your online presence today!</span>
                            <div className="w-8 h-[1.5px] bg-neutral-700"></div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
