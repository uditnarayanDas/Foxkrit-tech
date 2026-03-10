"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { BadgeCheck, Briefcase, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

// Custom Counter Component using Framer Motion
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const springValue = useSpring(0, {
        bounce: 0,
        duration: 2500,
    });

    const displayValue = useTransform(springValue, (current) =>
        `${Math.floor(current)}${suffix}`
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, springValue, value]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function StatsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });

    return (
        <section className="pt-24 md:pt-32 pb-24 md:pb-32 bg-[#f8f9fa] relative overflow-hidden">
            <Reveal>
                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10" ref={containerRef}>

                    {/* Desktop Connecting Line - centered exactly behind the 72px tall icons (top-[36px]) */}
                    <div className="hidden md:block absolute top-[36px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent z-0 opacity-100" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-4 relative z-10">

                        {/* Stat 1: Team Collaborations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            <div className="h-[72px] flex items-center justify-center relative z-10 mb-5">
                                <div className="flex -space-x-3">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffb6b9" alt="User 1" className="w-12 h-12 rounded-xl object-cover border-[3px] border-[#f8f9fa] shadow-md z-30" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=fde08b" alt="User 2" className="w-12 h-12 rounded-xl object-cover border-[3px] border-[#f8f9fa] shadow-md z-20 translate-y-2" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Liam&backgroundColor=ffb6b9" alt="User 3" className="w-12 h-12 rounded-xl object-cover border-[3px] border-[#f8f9fa] shadow-md z-10" />
                                </div>
                            </div>
                            <h3 className="text-[40px] md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none mb-2">
                                <Counter value={300} suffix="K+" />
                            </h3>
                            <p className="text-neutral-600 text-[13px] font-medium tracking-wide">Team Collaborations</p>
                        </motion.div>

                        {/* Stat 2: Tasks Completed */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            <div className="h-[72px] w-[72px] flex items-center justify-center relative z-10 mb-5 rounded-full bg-[#111] border-[2px] border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.15)] ring-4 ring-[#f8f9fa] overflow-hidden">
                                <BadgeCheck className="w-6 h-6 text-white relative z-10 stroke-[1.5]" />
                            </div>
                            <h3 className="text-[40px] md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none mb-2">
                                <Counter value={500} suffix="K+" />
                            </h3>
                            <p className="text-neutral-600 text-[13px] font-medium tracking-wide">Tasks Completed</p>
                        </motion.div>

                        {/* Stat 3: Projects Managed */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            <div className="h-[72px] w-[72px] flex items-center justify-center relative z-10 mb-5 rounded-full bg-[#111] border-[2px] border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.15)] ring-4 ring-[#f8f9fa] overflow-hidden">
                                <Briefcase className="w-6 h-6 text-white relative z-10 stroke-[1.5]" />
                            </div>
                            <h3 className="text-[40px] md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none mb-2">
                                <Counter value={20} suffix="K+" />
                            </h3>
                            <p className="text-neutral-600 text-[13px] font-medium tracking-wide">Projects Managed</p>
                        </motion.div>

                        {/* Stat 4: Successful Integrations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            <div className="h-[72px] w-[72px] flex items-center justify-center relative z-10 mb-5 rounded-full bg-[#111] border-[2px] border-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.15)] ring-4 ring-[#f8f9fa] overflow-hidden">
                                <Zap className="w-6 h-6 text-white relative z-10 stroke-[1.5]" />
                            </div>
                            <h3 className="text-[40px] md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none mb-2">
                                <Counter value={100} suffix="K+" />
                            </h3>
                            <p className="text-neutral-600 text-[13px] font-medium tracking-wide">Successful Integrations</p>
                        </motion.div>

                    </div>
                </div>
            </Reveal>
        </section>
    );
}
