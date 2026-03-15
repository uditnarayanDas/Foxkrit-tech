"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function FloatingMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Close menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Floating Menu Button */}
            <div className="fixed top-6 right-6 sm:right-8 z-[10000]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
                    aria-label="Toggle Navigation Menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-6 w-6 text-white" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-2xl"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#def249]/5 blur-[120px] rounded-full pointer-events-none"></div>

                        <nav className="relative z-10 flex flex-col items-center space-y-8">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`group relative text-5xl md:text-7xl font-bold tracking-tighter transition-colors duration-300 ${isActive ? "text-white" : "text-neutral-500 hover:text-white"
                                                }`}
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-2 left-0 h-1 w-0 bg-[#def249] transition-all duration-300 ease-out group-hover:w-full"></span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute bottom-12 text-neutral-500 text-sm tracking-widest uppercase"
                        >
                            Foxkrit Technology
                        </motion.div> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
