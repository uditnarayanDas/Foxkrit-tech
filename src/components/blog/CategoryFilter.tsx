"use client";

import { motion } from "framer-motion";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
                onClick={() => onSelectCategory(null)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === null
                        ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
            >
                All Articles
            </button>
            
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                            ? "bg-[#def249] text-black shadow-[0_0_15px_rgba(222,242,73,0.3)]"
                            : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
