"use client";

import { useState } from "react";
import { blogs, type BlogPost } from "@/data/blogs";
import { BlogHero } from "@/components/blog/BlogHero";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogGrid } from "@/components/blog/BlogGrid";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Extract unique categories from the blog data
    const categories = Array.from(new Set(blogs.map(blog => blog.category)));

    // Filter blogs based on active category
    const filteredBlogs = activeCategory 
        ? blogs.filter(blog => blog.category === activeCategory)
        : blogs;

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white pt-20">
            <BlogHero />
            
            <section className="container mx-auto px-6 lg:px-12 py-12 md:py-20">
                <CategoryFilter 
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />
                
                <BlogGrid blogs={filteredBlogs} />
            </section>
        </div>
    );
}
