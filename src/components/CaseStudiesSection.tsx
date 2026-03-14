"use client";

import { Card } from "./Card";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export function CaseStudiesSection() {
    const projects = [
        {
            title: "LY Furniture",
            subtitle: "E-Commerce Experience",
            difficulty: "Medium",
            author: "Premium Tech Commerce",
            stat1Val: "+45%", stat1Lbl: "Conv. Rate",
            stat2Val: "$2M+", stat2Lbl: "Processed",
            stat3Val: "Global", stat3Lbl: "Shipping",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "DataMatrixAI",
            subtitle: "Enterprise SaaS Platform",
            difficulty: "High Scale",
            author: "Premium Tech Data Eng",
            stat1Val: "100k+", stat1Lbl: "Active Users",
            stat2Val: "99.9%", stat2Lbl: "Uptime",
            stat3Val: "50TB", stat3Lbl: "Processed",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "AJ Finance",
            subtitle: "Fintech Dashboard",
            difficulty: "Critical",
            author: "Premium Tech Security",
            stat1Val: "$500M", stat1Lbl: "Managed",
            stat2Val: "0.1s", stat2Lbl: "Latency",
            stat3Val: "SOC2", stat3Lbl: "Compliant",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "BuildLy",
            subtitle: "PropTech Management",
            difficulty: "Enterprise",
            author: "Premium Tech Fullstack",
            stat1Val: "5k+", stat1Lbl: "Properties",
            stat2Val: "+120%", stat2Lbl: "Efficiency",
            stat3Val: "Mobile", stat3Lbl: "Native",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "NexaHealth",
            subtitle: "Telemedicine App",
            difficulty: "Complex",
            author: "Premium Tech Mobile",
            stat1Val: "1M+", stat1Lbl: "Consultations",
            stat2Val: "HIPAA", stat2Lbl: "Certified",
            stat3Val: "4.9★", stat3Lbl: "App Rating",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "SecureNet",
            subtitle: "Cybersecurity Protocol",
            difficulty: "Hard",
            author: "Premium Tech ML Core",
            stat1Val: "0", stat1Lbl: "Breaches",
            stat2Val: "Real-time", stat2Lbl: "Detection",
            stat3Val: "-40%", stat3Lbl: "False Pos",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "Aura Lifestyle",
            subtitle: "Wellness Marketplace",
            difficulty: "Medium",
            author: "Premium Tech Design",
            stat1Val: "100+", stat1Lbl: "Vendors",
            stat2Val: "0.8s", stat2Lbl: "Load Time",
            stat3Val: "Next.js", stat3Lbl: "Powered",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "Lumina Engine",
            subtitle: "3D Rendering Platform",
            difficulty: "Advanced",
            author: "Premium Tech Vision API",
            stat1Val: "WebGL", stat1Lbl: "Rendered",
            stat2Val: "60fps", stat2Lbl: "Performance",
            stat3Val: "Cloud", stat3Lbl: "Sync",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        }
    ];

    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <section className="py-12 md:py-24 bg-[#0a0a0a]">
            {/* Max width container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
                    {projects.map((project, idx) => {
                        const isActive = activeCard === idx;
                        return (
                            <div 
                                key={idx} 
                                className="relative overflow-hidden group rounded-[24px] md:rounded-[32px] aspect-[4/3] md:aspect-[16/10] bg-[#141414] border border-neutral-800"
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Background Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'scale-110 blur-sm brightness-50' : 'group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50'}`}
                                />
                                
                                {/* Always visible subtle gradient to make the bottom left icon/text readable if needed, or just let the image shine */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-0' : 'group-hover:opacity-0'}`}></div>

                                {/* Mobile Toggle Button (Visible only on touch / small screens or when inactive) */}
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveCard(isActive ? null : idx);
                                    }}
                                    className={`absolute bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 xl:hidden ${isActive ? 'rotate-45 bg-white/20' : ''}`}
                                    aria-label="Toggle project details"
                                >
                                    <Plus className="w-6 h-6" />
                                </button>

                                {/* Project Identity (Always visible initially, moves up on hover/active) */}
                                <div className={`absolute bottom-6 left-6 z-20 transition-all duration-500 ease-out transform ${isActive ? 'translate-y-[-120%] opacity-0' : 'group-hover:translate-y-[-120%] group-hover:opacity-0'}`}>
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1 drop-shadow-md">{project.title}</h3>
                                    <p className="text-sm font-medium text-neutral-300 drop-shadow-md">{project.subtitle}</p>
                                </div>

                                {/* Detailed Overlay (Hidden initially, slides up on hover/active) */}
                                <div className={`absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-transparent transition-all duration-500 ease-out transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                                    
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-white tracking-tight mb-2">{project.title}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#89c240] font-semibold">{project.subtitle}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                                            <span className="text-neutral-400 text-sm">{project.difficulty}</span>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4 pt-6 mt-2 border-t border-neutral-800">
                                        <div className="flex flex-col">
                                            <span className="text-[18px] md:text-xl font-bold text-white mb-1">{project.stat1Val}</span>
                                            <span className="text-xs md:text-sm text-neutral-400">{project.stat1Lbl}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[18px] md:text-xl font-bold text-white mb-1">{project.stat2Val}</span>
                                            <span className="text-xs md:text-sm text-neutral-400">{project.stat2Lbl}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[18px] md:text-xl font-bold text-white mb-1">{project.stat3Val}</span>
                                            <span className="text-xs md:text-sm text-neutral-400">{project.stat3Lbl}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 text-xs text-neutral-500 font-medium uppercase tracking-widest">
                                        Built by {project.author}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
