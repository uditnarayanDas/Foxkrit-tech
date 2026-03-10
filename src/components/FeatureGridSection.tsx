import { Card } from "./Card";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function FeatureGridSection() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <Reveal>
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Feature Grid Bento Box */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto md:auto-rows-[260px]">
                        {/* Left Card: Guided Onboarding */}
                        <Card className="col-span-1 md:col-span-2 md:row-span-2 overflow-hidden flex flex-col items-center pt-6 md:pt-10 px-5 md:px-6 relative bg-[#134563] !border-none !shadow-none !rounded-[32px] group cursor-pointer min-h-[260px] sm:min-h-[300px] md:min-h-0">
                            <div className="group-hover:scale-[1.03] transition-transform duration-500 flex flex-col items-center w-full z-10">
                                <h3 className="text-[22px] md:text-[26px] font-semibold text-center mb-3 leading-[1.15] text-white">
                                    Strategic Consulting
                                    <br />
                                    For Modern Businesses
                                </h3>

                                <p className="text-white/80 text-center mb-6 flex-1 text-[12px] md:text-[13px] px-2 font-medium max-w-[280px] md:max-w-none">
                                    Helping organizations solve complex challenges through technology, data, and digital transformation.
                                </p>
                            </div>

                            {/* Phone Mockup (ZOOMS ON HOVER) */}
                            <div className="w-[85%] sm:w-[75%] md:w-[85%] bg-white rounded-t-[32px] border-[8px] md:border-[10px] border-[#1f2127] mt-auto relative overflow-hidden flex flex-col pt-5 md:pt-6 px-4 pb-0 z-10 translate-y-6 md:translate-y-6 h-[180px] sm:h-[220px] md:h-[400px] group-hover:scale-[1.03] transition-transform duration-500 origin-bottom">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[18px] bg-[#1f2127] rounded-b-xl z-20" />

                                <h4 className="text-[20px] md:text-[22px] font-bold text-black mb-3 mt-4 md:mt-5 leading-tight tracking-tight">
                                    Your Strategy
                                    <br />
                                    Blueprint
                                </h4>

                                <p className="text-[11px] md:text-[13px] text-gray-500 mb-6 md:mb-6 leading-snug pr-4">
                                    Our experts analyze your business and design a scalable technology strategy.
                                </p>

                                <div className="flex-1 bg-[#b0d6f2] rounded-t-2xl p-4 relative overflow-hidden flex flex-col mt-2">
                                    <span className="absolute top-4 right-4 text-black/20">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </span>

                                    <h5 className="font-semibold text-black/80 text-sm">
                                        Project
                                        <br />
                                        Alpha
                                    </h5>

                                    <div className="mt-auto flex items-center gap-2 text-[9px] font-mono text-black/40 tracking-[0.2em] pt-8 uppercase font-bold">
                                        <span>PRJ</span>
                                        <span>•</span>
                                        <span>2024</span>
                                        <span>•</span>
                                        <span>LIVE</span>
                                    </div>

                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[0.5px] border-white/30 rounded-full scale-150" />
                                    <div className="absolute bottom-10 right-10 w-40 h-40 border-[0.5px] border-white/30 rounded-full scale-150" />
                                </div>
                            </div>
                        </Card>

                        {/* Top Right Card: Real-time Data */}
                        <Card className="col-span-1 md:col-span-4 overflow-hidden flex flex-col md:flex-row relative p-6 md:p-10 bg-[#cfe2f3] !border-none !shadow-none !rounded-[32px] h-full group cursor-pointer min-h-[220px] sm:min-h-[240px] md:min-h-0">
                            {/* Text Content */}
                            <div className="flex-1 text-left relative z-20 md:pr-4 pt-0 md:pt-4 group-hover:scale-[1.03] transition-transform duration-500 origin-left">
                                <h3 className="text-[22px] md:text-[24px] font-bold mb-2 md:mb-3 text-black tracking-tight max-w-[200px] sm:max-w-[280px]">
                                    Real-time Data
                                </h3>
                                <p className="text-gray-500 text-[12px] md:text-[13px] max-w-[170px] sm:max-w-[200px] lg:max-w-[240px] leading-relaxed">
                                    Monitor metrics, analytics, and team activity instantly
                                </p>
                            </div>

                            {/* Interactive UI Mockup (ZOOMS ON HOVER) */}
                            <div className="w-full md:w-[350px] h-full absolute right-0 top-0 flex items-end md:items-center justify-end md:justify-center z-10 overflow-hidden pr-0 md:pr-12 pointer-events-none">
                                {/* Concentric bg rings */}
                                <div className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 w-[400px] md:w-[550px] h-[400px] md:h-[550px]">
                                    <div className="absolute inset-0 rounded-full border border-[#8cbce3]/40 scale-100" />
                                    <div className="absolute inset-0 rounded-full border border-[#8cbce3]/30 scale-[0.65]" />
                                    <div className="absolute inset-0 rounded-full border border-[#8cbce3]/20 scale-[0.40]" />
                                </div>

                                {/* Center App UI */}
                                <div className="w-[260px] h-[340px] rounded-[24px] md:rounded-[32px] border-[8px] md:border-[10px] border-[#1f2127] relative overflow-hidden flex flex-col mr-[-65px] sm:mr-[-40px] md:mr-8 mb-[-135px] sm:mb-[-110px] md:mb-[-20px] mt-0 md:mt-12 bg-white z-20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:translate-x-4 md:group-hover:translate-x-0 group-hover:translate-y-4 md:group-hover:translate-y-0 group-hover:scale-[0.43] md:group-hover:scale-[0.88] transition-transform duration-500 origin-bottom-right md:origin-right scale-[0.43] sm:scale-[0.55] md:scale-[0.85]">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-3 md:h-4 bg-[#1f2127] rounded-b-lg md:rounded-b-xl z-20" />

                                    <div className="px-5 pt-10 pb-4 flex-1">
                                        <div className="w-full h-9 bg-white border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-full mb-6 px-4 flex items-center text-[11px] text-gray-400">
                                            Search projects...
                                        </div>

                                        <span className="text-[10px] md:text-[11px] font-medium text-gray-400 block mb-0.5 md:mb-1">
                                            Active projects
                                        </span>

                                        <h4 className="text-[18px] md:text-[20px] font-bold text-black mb-4 md:mb-5 tracking-tight truncate pr-2">
                                            24 running
                                        </h4>

                                        <div className="flex gap-2 text-[11px] font-semibold">
                                            <span className="bg-[#a4ccea] text-[#0f3451] px-3.5 py-1.5 rounded-full">
                                                Deploy
                                            </span>
                                            <span className="text-gray-400 px-2 py-1.5">Build</span>
                                            <span className="text-gray-400 px-2 py-1.5">Test</span>
                                        </div>
                                    </div>

                                    <div className="bg-[#171717] w-full p-4 pb-5 rounded-b-[22px]">
                                        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-2.5">
                                            Build status
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 16v-4" />
                                                <path d="M12 8h.01" />
                                            </svg>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-white font-bold text-[15px] tracking-tight">
                                                All passing
                                            </span>

                                            <span className="bg-[#2a4521] text-[#71cf35] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                                <svg
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                100%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Bottom Middle Card: Trusted By Users */}
                        <Card className="col-span-1 md:col-span-2 py-4 px-4 md:p-8 flex flex-col items-center justify-center text-center bg-[#cfe2f3] !border-none !shadow-none !rounded-[32px] relative overflow-hidden group cursor-pointer">
                            <div className="group-hover:scale-[1.04] transition-transform duration-500 flex flex-col items-center w-full">
                                <h3 className="text-[20px] md:text-[24px] font-bold mb-2 text-black leading-tight tracking-tight">
                                    Trusted By
                                    <br />
                                    Leading Businesses
                                </h3>

                                <div className="flex items-center justify-center mt-6 mb-4">
                                    <div className="w-11 h-11 rounded-full overflow-hidden border-[3px] border-[#cfe2f3] -ml-0 relative z-40 bg-gray-200">
                                        <Image
                                            src="https://i.pravatar.cc/100?img=11"
                                            alt="User"
                                            width={44}
                                            height={44}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-11 h-11 rounded-full overflow-hidden border-[3px] border-[#cfe2f3] -ml-3 relative z-30 bg-gray-200">
                                        <Image
                                            src="https://i.pravatar.cc/100?img=5"
                                            alt="User"
                                            width={44}
                                            height={44}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-11 h-11 rounded-full overflow-hidden border-[3px] border-[#cfe2f3] -ml-3 relative z-20 bg-gray-200">
                                        <Image
                                            src="https://i.pravatar.cc/100?img=33"
                                            alt="User"
                                            width={44}
                                            height={44}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-11 h-11 rounded-full overflow-hidden border-[3px] border-[#cfe2f3] -ml-3 relative z-10 bg-gray-200">
                                        <Image
                                            src="https://i.pravatar.cc/100?img=47"
                                            alt="User"
                                            width={44}
                                            height={44}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[13px] bg-[#a4ccea] text-[#0f3451] border-[3px] border-[#cfe2f3] -ml-3 relative z-0">
                                        5+
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-[13px] text-gray-500 font-medium pt-2">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="#656565"
                                        stroke="none"
                                        className="text-gray-600"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>98% Client Satisfaction</span>
                                </div>
                            </div>
                        </Card>

                        {/* Bottom Right Card: Built to Scale */}
                        <Card className="col-span-1 md:col-span-2 py-4 px-4 md:p-8 flex flex-col justify-center gap-2 md:gap-3 bg-[#cfe2f3] !border-none !shadow-none !rounded-[32px] relative overflow-hidden text-[#0f3451] group cursor-pointer">
                            <div className="group-hover:scale-[1.03] transition-transform duration-500 flex flex-col gap-4 w-full h-full justify-center">
                                <div className="mb-1">
                                    <h3 className="text-[20px] md:text-[22px] font-bold mb-1.5 tracking-tight text-black">
                                        Proven Business Impact
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-gray-700 leading-snug">
                                        Delivering consulting excellence to startups, enterprises, and global organizations.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-2.5 md:p-3.5 flex items-center justify-between shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] border border-transparent w-full gap-2 xl:gap-3">
                                    <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                        <span className="text-[16px] md:text-xl shrink-0">🚀</span>
                                        <p className="text-[10px] md:text-[12px] xl:text-[13px] font-bold text-black pt-1 leading-tight whitespace-nowrap">2,598 Deploys</p>
                                    </div>
                                    <div className="text-[10px] md:text-[11px] font-bold text-[#0f3451] pt-1 shrink-0 bg-[#cfe2f3]/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded">+24%</div>
                                </div>

                                <div className="bg-white rounded-xl p-2.5 md:p-3.5 flex items-center justify-between shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] border border-transparent w-full gap-2 xl:gap-3">
                                    <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                        <span className="text-[16px] md:text-xl text-orange-500 shrink-0">⚡</span>
                                        <p className="text-[10px] md:text-[12px] xl:text-[13px] font-bold text-black pt-1 leading-tight whitespace-nowrap">99.9% Uptime</p>
                                    </div>
                                    <div className="text-[10px] md:text-[11px] font-bold text-[#0f3451] pt-1 shrink-0 bg-[#cfe2f3]/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded">+0.2%</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
