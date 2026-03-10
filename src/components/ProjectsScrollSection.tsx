"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const allProjects = [
    {
        title: "Understanding Complex System Architectures",
        category: "Consulting",
        date: "Apr 8, 2024",
        image: "/images/dashboard.png",
    },
    {
        title: "A Beginner's Guide to Scalable Cloud Infrastructure",
        category: "Cloud Services",
        date: "Jan 12, 2024",
        image: "/images/healthcare.png",
    },
    {
        title: "Building Resilient Financial Platforms",
        category: "Web App",
        date: "Mar 15, 2024",
        image: "/images/ecommerce.png",
    },
    {
        title: "Modernizing Legacy E-commerce Systems",
        category: "E-commerce",
        date: "Feb 22, 2024",
        image: "/images/construction.png",
    },
    {
        title: "Optimizing Mobile Workflows",
        category: "Mobile",
        date: "May 10, 2024",
        image: "/images/dashboard.png",
    },
    {
        title: "Data Analytics and Visualization Real-time",
        category: "Data",
        date: "Jun 05, 2024",
        image: "/images/healthcare.png",
    },
];

// Duplicate items for infinite scroll effect
const col1 = [...allProjects, ...allProjects];
const col2 = [...allProjects, ...allProjects].reverse();
const col3 = [...allProjects, ...allProjects];

export function ProjectsScrollSection() {
    return (
        <section className="py-16 bg-white text-zinc-900 overflow-hidden relative">
            <Reveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-semibold tracking-wide uppercase text-zinc-600 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                        PROJECTS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                        Explore Projects
                    </h2>
                </div>

                <div className="relative h-[600px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Gradient overlays for smooth fading at top and bottom */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                        {/* Column 1 - Starts at bottom, scrolls up */}
                        <div className="h-full overflow-hidden hidden md:block">
                            <motion.div
                                animate={{ y: ["-50%", "0%"] }}
                                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                                className="flex flex-col gap-6"
                            >
                                {col1.map((project, idx) => (
                                    <ProjectCard key={idx} project={project} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Column 2 - Starts at top, scrolls down */}
                        <div className="h-full overflow-hidden block">
                            <motion.div
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                                className="flex flex-col gap-6"
                            >
                                {col2.map((project, idx) => (
                                    <ProjectCard key={idx} project={project} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Column 3 - Starts at bottom, scrolls up */}
                        <div className="h-full overflow-hidden hidden lg:block">
                            <motion.div
                                animate={{ y: ["-50%", "0%"] }}
                                transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
                                className="flex flex-col gap-6"
                            >
                                {col3.map((project, idx) => (
                                    <ProjectCard key={idx} project={project} />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="relative z-20 mt-12 flex justify-center pb-8">
                    <Link
                        href="/work"
                        className="relative overflow-hidden inline-flex items-center gap-4 bg-[#1e1e1e] text-neutral-200 font-semibold rounded-[40px] pl-6 pr-2 py-2 transition-transform duration-300 border border-[#333] group w-fit hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Explore More</span>
                        <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                            <div className="absolute inset-0 bg-white/10 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[50] group-hover:bg-[#333]"></div>
                            <ArrowRight className="w-5 h-5 text-neutral-300 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-45 group-hover:text-white" />
                        </div>
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}

interface Project {
    title: string;
    category: string;
    date: string;
    image: string;
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col bg-zinc-50 rounded-[2rem] p-3 border border-zinc-100 group hover:border-zinc-200 transition-colors">
            <div className="relative h-40 sm:h-48 lg:h-52 w-full rounded-2xl overflow-hidden mb-3 bg-zinc-200">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-2 pb-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-2">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.date}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 leading-tight">
                    {project.title}
                </h3>
            </div>
        </div>
    );
}
