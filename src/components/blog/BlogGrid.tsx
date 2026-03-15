"use client";

import { motion, Variants } from "framer-motion";
import { BlogCard } from "./BlogCard";
import { type BlogPost } from "@/data/blogs";

interface BlogGridProps {
    blogs: BlogPost[];
}

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function BlogGrid({ blogs }: BlogGridProps) {
    if (blogs.length === 0) {
        return (
            <div className="text-center py-20 text-neutral-400">
                <p>No articles found for this category.</p>
            </div>
        );
    }

    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {blogs.map((blog) => (
                <motion.div key={blog.slug} variants={item} className="h-full">
                    <BlogCard blog={blog} />
                </motion.div>
            ))}
        </motion.div>
    );
}
