"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export function BlogCTA() {
    const { openModal } = useBookingModal();

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#def249]/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm mb-8">
                        <Sparkles className="w-4 h-4 text-[#def249]" />
                        <span>Ready to scale?</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Looking to scale your business with technology?
                    </h2>
                    
                    <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                        Our experts help forward-thinking companies build powerful, custom digital solutions designed for maximum growth and operational efficiency.
                    </p>
                    
                    <button
                        onClick={openModal}
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Book a Strategy Call
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
