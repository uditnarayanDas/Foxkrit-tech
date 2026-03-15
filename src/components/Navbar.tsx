"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";
import { cn } from "../lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { openModal } = useBookingModal();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        // Trigger once to set initial state correctly
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center",
                isScrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
            )}
        >
            <nav
                className={cn(
                    "w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-50 bg-white/80 backdrop-blur-xl",
                    isScrolled
                        ? "max-w-5xl rounded-full border border-black/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]"
                        : "max-w-[2000px] rounded-none border-b border-border/50 shadow-none"
                )}
            >
                <div
                    className={cn(
                        "mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between",
                        isScrolled ? "h-16" : "h-20 max-w-[1280px]"
                    )}
                >
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center relative z-50">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-black flex items-center gap-2 group">
                            {/* <div className="w-8 h-8 bg-[#a8db56] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                <span className="text-white text-lg font-bold">K</span>
                            </div> */}
                            Foxkrit
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-center space-x-1 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-[14px] font-semibold text-gray-500 hover:text-black transition-colors group"
                            >
                                {link.name}
                                <span className="absolute inset-x-4 bottom-1 h-[2px] bg-[#a8db56] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="hidden md:flex items-center space-x-3 relative z-50">
                        <button onClick={openModal} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#333] bg-[#1e1e1e] px-5 py-2 text-[13px] sm:text-sm font-semibold text-neutral-200 shadow-md transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95">
                            <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0"></div>
                            <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-black">Book a Call</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center relative z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black p-2 focus:outline-none bg-black/5 rounded-full hover:bg-black/10 transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden flex flex-col h-[100dvh]"
                    >
                        {/* Menu Links */}
                        <div className="flex flex-col space-y-6 flex-1 justify-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1, duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-4xl sm:text-5xl font-bold tracking-tight text-black hover:text-[#a8db56] transition-colors py-2"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="mt-auto mb-10 flex flex-col space-y-4"
                        >

                            <button onClick={() => { setIsOpen(false); openModal(); }} className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-full border border-[#333] bg-[#1e1e1e] px-6 py-3.5 text-base font-bold text-neutral-200 shadow-md transition-all duration-500 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95">
                                <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0"></div>
                                <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-black whitespace-nowrap">Book a Call</span>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
