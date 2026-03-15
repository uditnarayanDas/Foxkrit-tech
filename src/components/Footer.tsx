"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-20 md:pt-32 pb-0 relative overflow-hidden border-t border-neutral-900 flex flex-col justify-between">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mb-12 md:mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <span className="text-3xl font-bold tracking-tighter text-white mb-6 block">FOXKRIT</span>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm font-light">
                                Engineering premium digital experiences and strategic software solutions for modern enterprises.
                            </p>
                        </div>

                        <div className="mt-12 hidden md:block">
                            <h4 className="text-sm font-semibold mb-4 text-white">Stay updated</h4>
                            <div className="flex items-center gap-2 max-w-[280px]">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-neutral-900/50 border border-neutral-800 rounded-full px-4 py-2 w-full text-sm outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-500"
                                />
                                <button className="bg-white text-black p-2 rounded-full hover:bg-neutral-200 transition-colors shrink-0">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
                        <div>
                            <h3 className="font-semibold mb-6 text-sm uppercase tracking-widest text-[#89c240]">Company</h3>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-neutral-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                                <li><Link href="/services" className="text-neutral-400 hover:text-white text-sm transition-colors">Services</Link></li>
                                <li><Link href="/work" className="text-neutral-400 hover:text-white text-sm transition-colors">Our Work</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-6 text-sm uppercase tracking-widest text-[#89c240]">Resources</h3>
                            <ul className="space-y-4">
                                <li><Link href="/contact" className="text-neutral-400 hover:text-white text-sm transition-colors">Contact</Link></li>
                                <li><Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Blog</Link></li>
                                <li><Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="font-semibold mb-6 text-sm uppercase tracking-widest text-[#89c240]">Social</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Twitter (X)</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sub Footer Row */}
                <div className="mt-16 md:mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 z-10 relative">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} FOXKRIT AI CONSULTING. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link href="#" className="text-neutral-500 hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>

            {/* Massive Bottom Text Watermark */}
            <div className="w-full relative z-0 flex justify-center items-end mt-4 pointer-events-none select-none overflow-hidden h-fit px-4 sm:px-6">
                <h1 className="text-[20vw] sm:text-[21vw] font-black tracking-tighter text-white/[0.03] leading-[0.75] m-0 p-0 text-center w-full">
                    FOXKRIT
                </h1>
            </div>
        </footer>
    );
}
