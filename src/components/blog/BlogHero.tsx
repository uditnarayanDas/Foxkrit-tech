"use client";

import { motion } from "framer-motion";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

export function BlogHero() {
    return (
        <section className="pt-28 pb-20 md:pt-32 md:pb-20 min-h-[50vh] lg:min-h-[55vh] flex flex-col justify-center border-b border-neutral-900 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase text-neutral-300 mb-8 mt-auto md:mt-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#89c240]"></div>
                        INSIGHTS
                    </div>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-tight"
                >
                    Insights & <br className="hidden md:block" />
                    Technology Perspectives
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mt-2"
                >
                    Expert insights on AI, technology consulting, software development, and business growth from our elite engineering team.
                </motion.p>
            </div>
            <ScrollDownIndicator />
        </section>
    );
}
