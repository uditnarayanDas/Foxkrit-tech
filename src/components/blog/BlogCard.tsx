import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/data/blogs";

export function BlogCard({ blog }: { blog: BlogPost }) {
    return (
        <Link href={`/blog/${blog.slug}`} className="group block h-full">
            <article className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
                <div className="relative h-60 w-full overflow-hidden flex-shrink-0">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/60 text-white backdrop-blur-md border border-white/20">
                            {blog.category}
                        </span>
                    </div>
                </div>
                
                <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                        <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#def249] transition-colors">
                        {blog.title}
                    </h3>
                    
                    <p className="text-neutral-400 line-clamp-3 mb-6 flex-grow">
                        {blog.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-white/20 bg-neutral-800">
                                <img 
                                    src={blog.author.avatar} 
                                    alt={blog.author.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-neutral-300">{blog.author.name}</span>
                        </div>
                        
                        <span className="text-sm font-semibold text-white flex items-center gap-1 group-hover:text-[#def249] transition-colors">
                            Read Article
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
