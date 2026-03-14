"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollDownIndicator() {
    const scrollToNext = () => {
        // Scroll down slightly so users see the next section
        window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" });
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 cursor-pointer flex flex-col items-center justify-center group"
            onClick={scrollToNext}
        >
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center group-hover:border-neutral-600 group-hover:bg-neutral-800 transition-all duration-300"
            >
                <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
            </motion.div>
        </motion.div>
    );
}
