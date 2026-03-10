"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ServicesSection({ isPage = false }: { isPage?: boolean }) {
    const services = [
        {
            title: "Consulting + Maintenance",
            subtitle: "Ongoing tech support to keep your business growing.",
            author: "Premium Tech",
            tag: "Advisory",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop",
            bgColor: "bg-[#c4b5fd]"
        },
        {
            title: "Business Websites",
            subtitle: "Establish trust and convert visitors into clients.",
            author: "Premium Tech",
            tag: "Web Design",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            bgColor: "bg-[#f8c18c]"
        },
        {
            title: "E-commerce Websites",
            subtitle: "Sell more with a seamless shopping experience.",
            author: "Premium Tech",
            tag: "E-commerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2600&auto=format&fit=crop",
            bgColor: "bg-[#e5f1a4]"
        },
        {
            title: "Web Apps / Dashboards",
            subtitle: "Scale your operations with custom software.",
            author: "Premium Tech",
            tag: "Development",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            bgColor: "bg-[#f7a559]"
        },
        {
            title: "UI/UX Design",
            subtitle: "Interfaces that your users will actually love.",
            author: "Premium Tech",
            tag: "Design Strategy",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
            bgColor: "bg-[#a5d8ff]"
        },
        {
            title: "Performance + SEO",
            subtitle: "Rank higher and load faster than competitors.",
            author: "Premium Tech",
            tag: "Optimization",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop",
            bgColor: "bg-[#f5a3b7]"
        },

    ];

    return (
        <section className="py-20 md:py-28 bg-[#0a0a0a] text-white overflow-hidden">
            <Reveal>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

                    {/* Header Area */}
                    {!isPage && (
                        <div className="flex flex-col items-center justify-center mb-12 w-full text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-semibold tracking-wide uppercase text-neutral-300 mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                                SERVICES
                            </div>
                            <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-tight leading-none">
                                Explore Services
                            </h2>
                        </div>
                    )}

                    {/* Cards Area */}
                    <div className={isPage ? "w-full" : "w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"}>
                        <div className={isPage ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-sm mx-auto sm:max-w-none" : "flex gap-4 md:gap-8 w-max"}>
                            {services.map((service, index) => (
                                <Link href="/services" key={index} className={`flex flex-col group shrink-0 cursor-pointer ${isPage ? "w-full" : "w-[280px] md:w-[340px] lg:w-[360px]"}`}>
                                    {/* Image Card Container */}
                                    <div className={`relative w-full h-[200px] md:h-[240px] lg:h-[260px] rounded-[24px] overflow-hidden mb-4 md:mb-5 ${service.bgColor}`}>
                                        {/* Tag */}
                                        <div className="absolute top-0 right-0 bg-black text-white text-[11px] sm:text-[13px] font-semibold px-4 py-2 rounded-bl-[16px] z-20">
                                            {service.tag}
                                        </div>

                                        {/* Link Hover Arrow */}
                                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-30 shadow-xl">
                                            <ArrowRight className="w-5 h-5 -rotate-45" />
                                        </div>

                                        {/* Image */}
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="px-1 shrink-0">
                                        <h5 className="text-white text-base font-semibold mb-1 group-hover:text-[#fde08b] transition-colors">{service.title}</h5>
                                        <h4 className="text-lg md:text-[20px] font-bold tracking-tight leading-[1.2] text-neutral-300 transition-colors">
                                            {service.subtitle}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {!isPage && (
                    <div className="relative z-20 mt-12 flex justify-center pb-8">
                        <Link
                            href="/services"
                            className="relative overflow-hidden inline-flex items-center gap-4 bg-[#1e1e1e] text-neutral-200 font-semibold rounded-[40px] pl-6 pr-2 py-2 transition-transform duration-300 border border-[#333] group w-fit hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">See all</span>
                            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-white/10 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[50] group-hover:bg-[#333]"></div>
                                <ArrowRight className="w-5 h-5 text-neutral-300 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-45 group-hover:text-white" />
                            </div>
                        </Link>
                    </div>
                )}

                <style global jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
            </Reveal>
        </section>
    );
}

