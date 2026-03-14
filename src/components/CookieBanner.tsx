"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already made a choice
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Add a small delay so it doesn't appear instantaneously on load
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-[1000] p-4 sm:p-6 pointer-events-none flex justify-center"
                >
                    <div className="w-full max-w-5xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-neutral-800/80 rounded-2xl md:rounded-full p-4 md:py-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-auto relative overflow-hidden">
                        
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#def249] opacity-[0.03] blur-[60px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

                        {/* Content Area */}
                        <div className="flex items-start gap-4 md:gap-5 relative z-10 max-w-3xl">
                            <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 items-center justify-center text-neutral-400">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-semibold text-base md:text-lg tracking-tight mb-0.5 flex items-center gap-2">
                                    <span className="sm:hidden text-neutral-400"><Cookie className="w-4 h-4"/></span>
                                    We value your privacy
                                </h3>
                                <p className="text-neutral-400 text-[13px] md:text-sm leading-snug pr-4">
                                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3 w-full md:w-auto shrink-0 relative z-10 pt-2 md:pt-0">
                            <button
                                onClick={declineCookies}
                                className="w-full sm:w-auto px-5 py-2 rounded-full bg-transparent border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-900 hover:text-white transition-colors duration-300"
                            >
                                Decline
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="w-full sm:w-auto px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#def249] transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(222,242,73,0.3)]"
                            >
                                Accept All
                            </button>
                        </div>
                        
                        {/* Close button (top right absolute) */}
                        <button 
                            onClick={declineCookies}
                            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors md:hidden z-20"
                            aria-label="Close cookie banner"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
