"use client";

import { useState } from "react";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactSection() {
    const [countryCode, setCountryCode] = useState("+39");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Basic Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
    });

    // Validation Errors
    const [errors, setErrors] = useState<Partial<typeof formData>>({});

    const validateForm = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.interest) newErrors.interest = "Please select an interest";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after success
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on changed field
        if (errors[name as keyof typeof formData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section className="py-16 md:py-24 lg:py-20 bg-[#09090b] relative overflow-hidden flex justify-center w-full items-center">
            <Reveal>
                <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                .brand-serif { font-family: 'Playfair Display', Georgia, serif; }
                .brand-sans { font-family: 'Inter', system-ui, sans-serif; }
                
                select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                
                /* Premium Scrollbar for textarea */
                textarea::-webkit-scrollbar { width: 6px; }
                textarea::-webkit-scrollbar-track { background: transparent; }
                textarea::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
                textarea::-webkit-scrollbar-thumb:hover { background: #52525b; }
            `}</style>


                <div className="max-w-[800px] lg:max-w-[650px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center">

                    <div className="text-center mb-10 md:mb-16 max-w-[640px]">
                        {/* Compact Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                            Typically replies within 24 hours
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 brand-serif font-medium tracking-tight leading-[1.1]">
                            Contact us
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed brand-sans max-w-[540px] mx-auto font-light">
                            Get in touch and ask us anything. From project timelines and budget scoping, to strategic partnerships — we answer it all.
                        </p>
                    </div>

                    {/* Glassmorphism Form Card */}
                    <div className="w-full relative group">
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-white/5 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                        <form
                            className="relative w-full p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0f0f12]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl space-y-6 brand-sans text-sm sm:text-base transition-all duration-300 hover:border-white/10"
                            onSubmit={handleSubmit}
                            noValidate
                        >

                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-zinc-300 text-sm font-medium sr-only">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name *"
                                        className={`w-full h-12 px-4 rounded-xl border bg-white/[0.03] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light ${errors.name ? 'border-red-500/50' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'}`}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                    />
                                    {errors.name && <p id="name-error" className="text-xs text-red-400 pl-1 animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-zinc-300 text-sm font-medium sr-only">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email address *"
                                        className={`w-full h-12 px-4 rounded-xl border bg-white/[0.03] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light ${errors.email ? 'border-red-500/50' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'}`}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                    />
                                    {errors.email && <p id="email-error" className="text-xs text-red-400 pl-1 animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Row 2: Phone & Interest */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Phone Input with Code Selector */}
                                <div className="space-y-1.5">
                                    <label htmlFor="phone" className="text-zinc-300 text-sm font-medium sr-only">Phone Number</label>
                                    <div className="flex h-12 rounded-xl border border-white/10 bg-white/[0.03] focus-within:border-white/20 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all hover:bg-white/[0.05] group/phone">
                                        <div className="relative flex items-center pl-4 pr-1 border-r border-white/10 text-white min-w-[70px] cursor-pointer">
                                            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2 pointer-events-none group-hover/phone:text-zinc-300 transition-colors" />
                                            <select
                                                className="absolute inset-0 opacity-0 cursor-pointer w-full text-base"
                                                aria-label="Select Country Code"
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                            >
                                                <option value="+39" className="text-black">+39</option>
                                                <option value="+1" className="text-black">+1</option>
                                                <option value="+44" className="text-black">+44</option>
                                                <option value="+91" className="text-black">+91</option>
                                                <option value="+61" className="text-black">+61</option>
                                            </select>
                                            <span className="text-sm font-medium tracking-wide pr-5">{countryCode}</span>
                                        </div>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone number"
                                            className="w-full h-full px-3 bg-transparent text-white focus:outline-none font-light placeholder-zinc-500 text-sm sm:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Interest Select */}
                                <div className="space-y-1.5">
                                    <label htmlFor="interest" className="text-zinc-300 text-sm font-medium sr-only">Interested in</label>
                                    <div className="relative h-12">
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className={`w-full h-full px-4 pr-10 rounded-xl border bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light cursor-pointer ${!formData.interest ? 'text-zinc-500' : 'text-white'} ${errors.interest ? 'border-red-500/50' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'}`}
                                            aria-invalid={!!errors.interest}
                                            aria-describedby={errors.interest ? "interest-error" : undefined}
                                        >
                                            <option value="" disabled hidden>Interested in *</option>
                                            <option value="web" className="text-black">Web Development</option>
                                            <option value="mobile" className="text-black">Mobile App</option>
                                            <option value="consulting" className="text-black">IT Consulting</option>
                                            <option value="other" className="text-black">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-0 bottom-0 flex items-center pointer-events-none text-zinc-500">
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                    {errors.interest && <p id="interest-error" className="text-xs text-red-400 pl-1 animate-in fade-in slide-in-from-top-1">{errors.interest}</p>}
                                </div>
                            </div>

                            {/* Row 3: Message Textarea */}
                            <div className="space-y-1.5 pt-2">
                                <label htmlFor="message" className="text-zinc-300 text-sm font-medium sr-only">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help? *"
                                    rows={4}
                                    className={`w-full p-4 rounded-xl border bg-white/[0.03] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none font-light leading-relaxed ${errors.message ? 'border-red-500/50' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'}`}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                ></textarea>
                                {errors.message && <p id="message-error" className="text-xs text-red-400 pl-1 animate-in fade-in slide-in-from-top-1">{errors.message}</p>}
                            </div>

                            {/* Submit Row & Terms */}
                            <div className="flex flex-col items-center pt-6 pb-2">

                                {/* Success State */}
                                {isSuccess ? (
                                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-8 py-3.5 rounded-full ring-1 ring-emerald-400/30 animate-in fade-in zoom-in duration-300">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="font-medium text-sm sm:text-base">Message sent successfully</span>
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative flex items-center justify-center gap-2 bg-[#1e1e1e] text-neutral-200 font-medium px-8 sm:px-10 py-3.5 rounded-full text-[15px] sm:text-[16px] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 border border-[#333] hover:bg-[#2a2a2a] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
                                    >
                                        <span className={`relative z-10 transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                            Send message
                                        </span>
                                        <Send className={`relative z-10 w-4 h-4 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1'}`} />

                                        {/* Loading Spinner */}
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                )}

                                <p className="text-zinc-500 text-[11px] sm:text-xs mt-6 text-center max-w-[340px] leading-relaxed font-light">
                                    By clicking, you agree to our <a href="#" className="underline decoration-zinc-700 hover:text-zinc-300 hover:decoration-zinc-400 transition-colors underline-offset-4">Terms & Conditions</a>, <br className="hidden sm:block" />
                                    <a href="#" className="underline decoration-zinc-700 hover:text-zinc-300 hover:decoration-zinc-400 transition-colors underline-offset-4">Privacy and Data Protection Policy</a>
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
