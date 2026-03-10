"use client";

import Image from "next/image";
import { Code2, Heart, Lightbulb, Zap, ArrowRight, ShieldCheck, Trophy, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// Custom Counter Component using Framer Motion
function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    // Spring configuration for smooth counting
    const spring = useSpring(0, {
        stiffness: 40,
        damping: 15,
        mass: 1,
    });

    const display = useTransform(spring, (current) =>
        `${prefix}${Math.floor(current)}${suffix}`
    );

    useEffect(() => {
        if (inView && !hasAnimated) {
            spring.set(value);
            setHasAnimated(true);
        }
    }, [inView, spring, value, hasAnimated]);

    return (
        <motion.span ref={ref} className="tabular-nums">
            {display}
        </motion.span>
    );
}

export default function AboutPage() {
    const values = [
        { icon: <Heart className="w-5 h-5" />, title: "Client First", desc: "We prioritize your business objectives above everything else. Your success is the true metric of our success." },
        { icon: <Lightbulb className="w-5 h-5" />, title: "Innovative", desc: "We don't settle for the status quo. We leverage cutting-edge tech to deliver superior performance and design." },
        { icon: <Zap className="w-5 h-5" />, title: "Fast Delivery", desc: "Speed matters. We build robust systems quickly without compromising on clean architecture or design." },
        { icon: <Code2 className="w-5 h-5" />, title: "Quality Code", desc: "Every product we build rests on a foundation of meticulously written, scalable, and maintainable code." },
        { icon: <ShieldCheck className="w-5 h-5" />, title: "Secure by Design", desc: "Security isn't an afterthought. We implement industry-leading practices to protect your data and users." },
        { icon: <Target className="w-5 h-5" />, title: "Results Driven", desc: "We focus on outcomes, not outputs. Everything we build is designed to increase your conversion rates and revenue." },
    ];

    const stats = [
        { animateValue: 98, suffix: "%", label: "Client Retention Rate" },
        { animateValue: 50, prefix: "$", suffix: "M+", label: "Revenue Generated for Clients" },
        { animateValue: 450, suffix: "+", label: "Projects Delivered" },
        { animateValue: 15, suffix: "+", label: "Years Combined Experience" },
    ];

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#def249] selection:text-black">

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-32 border-b border-neutral-900 overflow-hidden relative">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#def249]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase text-neutral-300 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#89c240]"></div>
                        ABOUT US
                    </div>

                    <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter leading-[0.95] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                        We engineer <br className="hidden md:block" />
                        digital excellence.
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                        An elite league of developers, designers, and strategists. We don't just build websites; we craft premium digital experiences that transform businesses and accelerate growth.
                    </p>
                </div>
            </section>

            {/* Our Story / Image Section */}
            <section className="py-24 md:py-32 relative border-b border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Column */}
                        <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Team collaborating"
                                fill
                                className="object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] grayscale-[0.5] group-hover:grayscale-0"
                            />
                        </div>

                        {/* Text Column */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                                Built on a foundation of <span className="text-[#89c240]">relentless quality.</span>
                            </h2>
                            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
                                <p>
                                    Our journey began with a simple observation: the digital consulting space was flooded with mediocrity. Businesses were paying premium prices for subpar templates and highly-coupled legacy code.
                                </p>
                                <p>
                                    We set out to change that. Foxkrit was founded as a boutique technology partner dedicated to true craftsmanship. We approach every project not as a vendor, but as a technical co-founder.
                                </p>
                                <p>
                                    Today, we partner with industry leaders, ambitious startups, and enterprise giants to deliver software that doesn't just work—it dominates exactly where it matters.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-y border-neutral-900">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">2020</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-widest font-semibold text-[11px]">Founded</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">Global</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-widest font-semibold text-[11px]">Remote Team</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-24 md:py-32 bg-[#050505] border-b border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col">
                                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                                    <Counter value={stat.animateValue} prefix={stat.prefix} suffix={stat.suffix} />
                                </span>
                                <span className="text-neutral-400 text-sm md:text-base font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-900 pb-12">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                The principles that guide our code.
                            </h2>
                            <p className="text-xl text-neutral-400 font-light max-w-2xl">
                                We don't compromise. These core values dictate how we write software, design interfaces, and interact with our partners.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center mb-8 text-[#89c240] group-hover:scale-110 transition-transform duration-500">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">{v.title}</h3>
                                <p className="text-neutral-400 leading-relaxed font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA to Contact Page */}


        </div>
    );
}
