"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default

    const faqs = [
        {
            q: "How long does a website take?",
            a: "Most standard websites take 2-4 weeks from kickoff to launch. Complex web applications or e-commerce platforms can take 6-10 weeks depending on features."
        },
        {
            q: "What do you need from me to start?",
            a: "We need an initial discovery call, any existing brand assets (logos, colors), and an idea of the content/pages you want. We guide you through everything else during onboarding."
        },
        {
            q: "Do you provide hosting & maintenance?",
            a: "Yes. All our builds can be paired with managed hosting on Vercel or standard servers, complete with monthly security updates and content edits."
        },
        {
            q: "Can you redesign my existing website?",
            a: "Absolutely. We can take your existing content and migrate it into a completely fresh, high-conversion modern digital experience."
        },
        {
            q: "What's your pricing model?",
            a: "We charge fixed project fees so there are no surprises. Small builds typically start at $2.5k, while robust applications start at $8k."
        }
    ];

    return (
        <section className="py-24 bg-muted/20 overflow-hidden">
            <Reveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        <div className="lg:w-1/3 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                Ready to transform?
                            </h2>
                            {/* <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="relative overflow-hidden inline-flex items-center justify-center gap-4 bg-[#1e1e1e] text-neutral-200 font-semibold rounded-[40px] pl-6 pr-2 py-2 transition-transform duration-300 group w-fit hover:-translate-y-1 shadow-lg hover:shadow-xl border border-[#333]">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Start your journey</span>
                                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                                    <div className="absolute inset-0 bg-white/10 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[50] group-hover:bg-[#333]"></div>
                                    <ArrowRight className="w-5 h-5 text-neutral-300 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-45 group-hover:text-white" />
                                </div>
                            </Link>

                            <Link href="/contact" className="relative overflow-hidden inline-flex items-center justify-center gap-4 bg-transparent text-foreground font-semibold rounded-[40px] pl-6 pr-2 py-2 transition-transform duration-300 group w-fit hover:-translate-y-1 hover:bg-muted border border-border">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">Book a call</span>
                                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                                    <div className="absolute inset-0 bg-muted rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[50] group-hover:bg-muted-foreground/10"></div>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-45 group-hover:text-foreground" />
                                </div>
                            </Link>
                        </div> */}
                        </div>

                        <div className="lg:w-2/3 space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div key={index} className="flex flex-col gap-2 relative">
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className={cn(
                                                "w-full flex items-center justify-between text-left p-4 rounded-2xl transition-all duration-300",
                                                isOpen ? "bg-background border border-border shadow-sm" : "bg-muted/50 hover:bg-muted border border-transparent"
                                            )}
                                        >
                                            <span className="font-medium text-foreground">{faq.q}</span>
                                            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 bg-background text-muted-foreground">
                                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                            </div>
                                        </button>

                                        {isOpen && (
                                            <div className="ml-0 sm:ml-8 mt-2 mr-8 p-6 bg-accent rounded-3xl rounded-tl-sm text-accent-foreground text-sm leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300 relative">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </Reveal>
        </section>
    );
}
