import { Card } from "./Card";
import Image from "next/image";
import { MapPin, TrendingUp, ShieldCheck, Cpu, Building2, ShoppingBag, Activity } from "lucide-react";

export function CaseStudiesSection() {
    const projects = [
        {
            title: "OSWAS Platform",
            subtitle: "Govt. of Odisha Administration",
            difficulty: "Enterprise",
            author: "Premium Tech & State Govt.",
            stat1Val: "100%", stat1Lbl: "Paperless",
            stat2Val: "50k+", stat2Lbl: "Users",
            stat3Val: "24/7", stat3Lbl: "Uptime",
            image: "/images/gov_odisha_oswas.png",
            icon: <MapPin className="w-6 h-6 text-blue-500 drop-shadow-md" />
        },
        {
            title: "MoSarkar Connect",
            subtitle: "Citizen Feedback Portal",
            difficulty: "High Scale",
            author: "Premium Tech Civic Team",
            stat1Val: "1M+", stat1Lbl: "Citizens",
            stat2Val: "98%", stat2Lbl: "Resolved",
            stat3Val: "Statewide", stat3Lbl: "Scale",
            image: "/images/gov_odisha_mosarkar.png",
            icon: <MapPin className="w-6 h-6 text-green-500 drop-shadow-md" />
        },
        {
            title: "Predictive Health AI",
            subtitle: "National Hospital Network",
            difficulty: "Complex",
            author: "Premium Tech AI Division",
            stat1Val: "99%", stat1Lbl: "Accuracy",
            stat2Val: "2.5M", stat2Lbl: "Records",
            stat3Val: "Real-time", stat3Lbl: "Inference",
            image: "/images/ai_healthcare.png",
            icon: <Activity className="w-6 h-6 text-indigo-500 drop-shadow-md" />
        },
        {
            title: "Smart Traffic Flow",
            subtitle: "Metro Urban Planning",
            difficulty: "Hard",
            author: "Premium Tech Vision API",
            stat1Val: "-30%", stat1Lbl: "Wait Time",
            stat2Val: "500+", stat2Lbl: "Nodes",
            stat3Val: "20ms", stat3Lbl: "Latency",
            image: "/images/smart_city_ai.png",
            icon: <Cpu className="w-6 h-6 text-violet-500 drop-shadow-md" />
        },
        {
            title: "RetailSight Demand",
            subtitle: "Global Retail Chain",
            difficulty: "Medium",
            author: "Premium Tech Data Eng",
            stat1Val: "+25%", stat1Lbl: "Margins",
            stat2Val: "10k+", stat2Lbl: "Stores",
            stat3Val: "Daily", stat3Lbl: "Syncs",
            image: "/images/retail_ai.png",
            icon: <TrendingUp className="w-6 h-6 text-rose-500 drop-shadow-md" />
        },
        {
            title: "FraudGuard Sentinel",
            subtitle: "Fintech Security Protocol",
            difficulty: "Critical",
            author: "Premium Tech Security",
            stat1Val: "$2M", stat1Lbl: "Saved",
            stat2Val: "0.1%", stat2Lbl: "False Pos",
            stat3Val: "PCI", stat3Lbl: "Compliant",
            image: "/images/fraud_ai.png",
            icon: <ShieldCheck className="w-6 h-6 text-red-500 drop-shadow-md" />
        },
        {
            title: "SupplyChain Optimax",
            subtitle: "Logistics Fleet Mgt.",
            difficulty: "Hard",
            author: "Premium Tech ML Core",
            stat1Val: "-15%", stat1Lbl: "Costs",
            stat2Val: "100k", stat2Lbl: "Routes",
            stat3Val: "Global", stat3Lbl: "Reach",
            image: "/images/supplychain_ai.png",
            icon: <Cpu className="w-6 h-6 text-amber-500 drop-shadow-md" />
        },
        {
            title: "NovaChat LLM Agent",
            subtitle: "SaaS Customer Support",
            difficulty: "Advanced",
            author: "Premium Tech NLP Lab",
            stat1Val: "85%", stat1Lbl: "Automated",
            stat2Val: "<1s", stat2Lbl: "Response",
            stat3Val: "50+", stat3Lbl: "Languages",
            image: "/images/llm_agent.png",
            icon: <Activity className="w-6 h-6 text-fuchsia-500 drop-shadow-md" />
        },
        {
            title: "Lumina Architecture",
            subtitle: "Modern Portfolio Firm",
            difficulty: "Medium",
            author: "Premium Tech Design",
            stat1Val: "0.8s", stat1Lbl: "Load",
            stat2Val: "+120%", stat2Lbl: "Leads",
            stat3Val: "WebGL", stat3Lbl: "Driven",
            image: "/images/client_architect.png",
            icon: <Building2 className="w-6 h-6 text-stone-400 drop-shadow-md" />
        },
        {
            title: "Apex Advisory Group",
            subtitle: "CA Firm Client Portal",
            difficulty: "High Sec",
            author: "Premium Tech Fullstack",
            stat1Val: "E2E", stat1Lbl: "Encrypted",
            stat2Val: "10GB+", stat2Lbl: "Vaults",
            stat3Val: "SOC2", stat3Lbl: "Compliant",
            image: "/images/client_ca_firm.png",
            icon: <ShieldCheck className="w-6 h-6 text-emerald-500 drop-shadow-md" />
        },
        {
            title: "Velvet Couture Hub",
            subtitle: "Boutique E-Commerce",
            difficulty: "Medium",
            author: "Premium Tech Commerce",
            stat1Val: "+45%", stat1Lbl: "Conv. Rate",
            stat2Val: "$1M+", stat2Lbl: "Processed",
            stat3Val: "Global", stat3Lbl: "Shipping",
            image: "/images/client_ecommerce.png",
            icon: <ShoppingBag className="w-6 h-6 text-pink-400 drop-shadow-md" />
        },
        {
            title: "Pulse Fitness Studio",
            subtitle: "Booking & Class App",
            difficulty: "Dynamic",
            author: "Premium Tech Mobile",
            stat1Val: "10k+", stat1Lbl: "Bookings",
            stat2Val: "Live", stat2Lbl: "Scheduling",
            stat3Val: "Stripe", stat3Lbl: "Enabled",
            image: "/images/client_fitness_app.png",
            icon: <Activity className="w-6 h-6 text-cyan-400 drop-shadow-md" />
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-[#0a0a0a]">
            {/* Max width container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {projects.map((project, idx) => (
                        <div key={idx} className="overflow-hidden flex flex-col group bg-[#141414] rounded-2xl md:rounded-[24px] border border-neutral-800 transition-all duration-300">

                            {/* Image Section (Top Half) */}
                            <div className="h-[220px] md:h-[260px] relative w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Bottom Gradient Overlay for Text Visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                {/* Overlay Text */}
                                <div className="absolute bottom-4 left-5 right-5 z-10">
                                    <h3 className="text-[22px] font-bold text-white tracking-tight leading-tight mb-1">{project.title}</h3>
                                    <p className="text-[15px] font-medium text-amber-500/90 tracking-wide">{project.subtitle}</p>
                                </div>
                            </div>

                            {/* Info Section (Middle) */}
                            <div className="pt-5 px-6 pb-2">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-[17px] font-bold text-white mb-1.5">{project.difficulty}</h4>
                                        <p className="text-[14px] text-neutral-400 font-medium">Built by {project.author}</p>
                                    </div>
                                    <div className="shrink-0 pt-0.5">
                                        {project.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section (Bottom Columns) */}
                            <div className="mt-auto px-6 pb-6 w-full">
                                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-neutral-800 w-full text-center sm:text-left">
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-white mb-1">{project.stat1Val}</span>
                                        <span className="text-[13px] text-neutral-500 font-medium">{project.stat1Lbl}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-white mb-1">{project.stat2Val}</span>
                                        <span className="text-[13px] text-neutral-500 font-medium">{project.stat2Lbl}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-white mb-1">{project.stat3Val}</span>
                                        <span className="text-[13px] text-neutral-500 font-medium">{project.stat3Lbl}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
