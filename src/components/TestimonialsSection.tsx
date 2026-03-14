"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

export function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            quote: "From the initial consultation to the final deployment, the process was incredibly smooth. They understood our local market needs and delivered a platform that boosted our engagement by over 40%.",
            author: "Rahul Sharma",
            role: "Founder",
            company: "TechNova India",
            img: "11"
        },
        {
            id: 2,
            quote: "Their technical expertise and attention to our specific business requirements were outstanding. The new web application is fast, robust, and completely exceeded our expectations.",
            author: "Priya Patel",
            role: "CEO",
            company: "NexaGrowth Solutions",
            img: "47"
        },
        {
            id: 3,
            quote: "We needed an agile team to overhaul our legacy infrastructure. Foxkrit delivered a modern, scalable architecture that has significantly reduced our server costs and improved overall performance.",
            author: "Vikram Singh",
            role: "CTO",
            company: "DataSys Enterprise",
            img: "60"
        },
        {
            id: 4,
            quote: "Partnering with this team was a game-changer for our digital presence. They didn't just build a website; they created a reliable growth engine that has driven our client acquisition immensely.",
            author: "Ankur Desai",
            role: "Marketing Director",
            company: "Elevate Digital",
            img: "68"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const DURATION = 5000;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, DURATION);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const companies = [
        { name: "Command+R", icon: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-current rounded-sm"></div>, font: "tracking-widest" },
        { name: "Interlock", icon: <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-current"></div>, font: "tracking-tighter" },
        { name: "FocalPoint", icon: <div className="w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-current rotate-45 transform"></div>, font: "font-medium" },
        { name: "Polymath", icon: <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-current"></div>, font: "font-serif italic" },
        { name: "Alt+Shift", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>, font: "font-mono" },
        { name: "Quantum", icon: <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current rounded-tl-md rounded-br-md"></div>, font: "tracking-normal" },
        { name: "Nexus", icon: <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 border-2 border-current rounded-sm flex items-center justify-center"><div className="w-1 h-1 bg-current rounded-full"></div></div>, font: "uppercase tracking-widest text-[#a1a1aa]" },
        { name: "Zenith", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z" /></svg>, font: "font-light tracking-wide" },
        { name: "Vertex", icon: <div className="w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-b-2 border-current"></div>, font: "lowercase" },
        { name: "Horizon", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /></svg>, font: "font-bold" },
        { name: "NovaTech", icon: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-current rounded-full opacity-50 relative"><div className="absolute top-0 right-0 w-3 h-3 bg-[#0a0a0a] rounded-full translate-x-1 -translate-y-1"></div></div>, font: "tracking-tight" }
    ];

    return (
        <section className="py-12 md:py-20 bg-[#0a0a0a] border-t border-neutral-900 overflow-hidden">
            <Reveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Title Section */}
                    <div className="max-w-4xl mb-12 lg:mb-16">
                        <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1]">
                            Trusted by business owners<br />across the country
                        </h2>
                    </div>

                    {/* Content Grid: Avatars (Left) & Quote (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Avatars */}
                        <div className="flex justify-start">
                            <div className="flex items-center -space-x-6 sm:-space-x-8 h-[100px] pl-6">
                                {testimonials.map((t, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <div key={t.id} className={`relative flex items-center justify-center transition-all duration-300`} style={{ zIndex: isActive ? 50 : 10 }}>
                                            {isActive && (
                                                <svg
                                                    className="absolute w-[calc(100%+8px)] h-[calc(100%+8px)] sm:w-[calc(100%+12px)] sm:h-[calc(100%+12px)] -rotate-90 pointer-events-none"
                                                    viewBox="0 0 100 100"
                                                >
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="48"
                                                        fill="transparent"
                                                        stroke="currentColor"
                                                        className="text-[#bd93f9]/20"
                                                        strokeWidth="2"
                                                    />
                                                    <motion.circle
                                                        className="text-[#bd93f9]"
                                                        cx="50"
                                                        cy="50"
                                                        r="48"
                                                        fill="transparent"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 1 }}
                                                        transition={{ duration: DURATION / 1000, ease: "linear" }}
                                                        key={activeIndex}
                                                    />
                                                </svg>
                                            )}
                                            <button
                                                onClick={() => setActiveIndex(index)}
                                                className={`relative rounded-full overflow-hidden transition-all duration-300 focus:outline-none bg-neutral-800 flex items-center justify-center shadow-sm ${isActive
                                                    ? "w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] opacity-100 grayscale-0 mx-2"
                                                    : "w-12 h-12 sm:w-14 sm:h-14 opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                                                    }`}
                                            >
                                                <Image src={`https://i.pravatar.cc/100?img=${t.img}`} alt={t.author} width={100} height={100} className="w-full h-full object-cover" />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="flex justify-start text-left w-full h-[180px] sm:h-[160px]">
                            <div className="max-w-lg w-full flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#a1a1aa] mb-6 line-clamp-4">
                                            &quot;{testimonials[activeIndex].quote}&quot;
                                        </p>
                                        <div className="text-[14px] sm:text-[15px]">
                                            <span className="font-bold text-white tracking-wide">{testimonials[activeIndex].author}</span
                                            ><span className="text-[#888888]">, {testimonials[activeIndex].role} @ {testimonials[activeIndex].company}</span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>

                    {/* Logos Row */}
                    <div className="mt-12 md:mt-20 py-8 border-t border-neutral-900 overflow-hidden relative w-full">
                        {/* Gradient edges for smooth fading */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

                        <style>{`
                        @keyframes marquee {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 35s linear infinite;
                            will-change: transform;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                        <div className="flex w-max items-center animate-marquee">
                            {/* Duplicate the logos array to create an infinite marquee effect */}
                            {[...companies, ...companies].map((company, idx) => (
                                <div key={idx} className="flex items-center gap-2 md:gap-3 px-8 sm:px-12 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300 text-neutral-300">
                                    {company.icon}
                                    <span className={`text-lg md:text-xl font-bold tracking-wide ${company.font || ''} whitespace-nowrap`}>
                                        {company.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
