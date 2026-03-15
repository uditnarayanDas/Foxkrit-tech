import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogs } from '@/data/blogs';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return { title: 'Not Found' };
    }

    return {
        title: `${blog.title} | Foxkrit AI Consulting`,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: 'article',
            publishedTime: new Date(blog.date).toISOString(),
            authors: [blog.author.name],
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    // Determine related articles based on category (excluding current)
    const relatedBlogs = blogs
        .filter((b) => b.category === blog.category && b.slug !== slug)
        .slice(0, 3);

    return (
        <article className="bg-[#0a0a0a] min-h-screen text-white pt-24 md:pt-32 pb-12">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                
                {/* Back Link */}
                <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-10 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to all insights
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-white/10 text-white backdrop-blur-md border border-white/20 mb-8">
                        {blog.category}
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
                        {blog.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-neutral-400 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/20 bg-neutral-800">
                                <img 
                                    src={blog.author.avatar} 
                                    alt={blog.author.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">{blog.author.name}</p>
                                <p className="text-xs">{blog.author.role}</p>
                            </div>
                        </div>
                        
                        <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                        
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Article Content */}
                <div 
                    className="blog-editorial max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags / Share */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-neutral-400 font-medium">Explore more in <Link href="/blog" className="text-white hover:text-[#def249] transition-colors">{blog.category}</Link></p>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-neutral-400">Share this article:</span>
                        {/* Placeholder sharing buttons, ideally linked to dynamic URLs */}
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Articles & CTA */}
            <div className="mt-24 border-t border-white/10 pt-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
                {relatedBlogs.length > 0 && (
                    <div className="container mx-auto px-6 lg:px-12 mb-20">
                        <h2 className="text-3xl font-bold text-white mb-10">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedBlogs.map(relatedBlog => (
                                <Link href={`/blog/${relatedBlog.slug}`} key={relatedBlog.slug} className="group block">
                                    <article className="flex flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition-all duration-300 hover:bg-white/10">
                                        <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                                            <Image 
                                                src={relatedBlog.image} 
                                                alt={relatedBlog.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-xs text-[#def249] mb-2">{relatedBlog.category}</div>
                                            <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-white/80 transition-colors">
                                                {relatedBlog.title}
                                            </h3>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
