"use client";

import { useState } from "react";
import { X, Calendar, Clock, Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";

export function BookingModal() {
    const { isOpen, closeModal } = useBookingModal();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // Form state
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        email: "",
        phone: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErrorMsg("");
    };

    // Get today's date in YYYY-MM-DD format for the min date attribute
    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.date || !formData.time || !formData.email || !formData.phone) {
            setErrorMsg("Please fill out all fields.");
            return;
        }

        setIsSubmitting(true);
        setErrorMsg("");

        try {
            // NOTE TO USER: Replace this URL with your Google Apps Script Web App URL
            // See the instructions provided to link this to your Google Sheet!
            const GOOGLE_SHEET_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

            if (!GOOGLE_SHEET_SCRIPT_URL) {
                // Simulate an API call if no URL is provided yet
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                // Using a GET request with query parameters is the ONLY 100% reliable 
                // way to completely avoid Google's 302 redirect dropping the POST body.
                const queryParams = new URLSearchParams({
                    date: formData.date,
                    time: formData.time,
                    email: formData.email,
                    phone: formData.phone
                }).toString();

                await fetch(`${GOOGLE_SHEET_SCRIPT_URL}?${queryParams}`, {
                    method: 'GET',
                    mode: 'no-cors' // Required for Google Apps Script to not block the request
                });
            }

            setIsSubmitting(false);
            setIsSuccess(true);

            // Auto close after 3 seconds
            setTimeout(() => {
                closeModal();
                setTimeout(() => {
                    setIsSuccess(false);
                    setFormData({ date: "", time: "", email: "", phone: "" });
                }, 500); // Wait for exit animation
            }, 3000);

        } catch (error) {
            console.error(error);
            setErrorMsg("Something went wrong. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-md bg-[#0f0f12] border border-white/10 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.2 }}
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                                    <p className="text-zinc-400 max-w-[250px]">
                                        Your consultation has been scheduled successfully. We will reach out to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-white mb-2">Book a Call</h2>
                                        <p className="text-zinc-400 text-sm">Select a date and time for our strategy session.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">

                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Date Picker */}
                                            <div className="space-y-1.5">
                                                <label className="text-zinc-300 text-xs font-medium pl-1">Date</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500">
                                                        <Calendar className="w-4 h-4" />
                                                    </div>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        min={today}
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/10 bg-white/[0.03] text-white focus:outline-none focus:ring-2 focus:ring-[#89c240]/50 transition-all font-light text-sm hover:bg-white/[0.05]"
                                                    />
                                                </div>
                                            </div>

                                            {/* Time Picker */}
                                            <div className="space-y-1.5">
                                                <label className="text-zinc-300 text-xs font-medium pl-1">Time</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500">
                                                        <Clock className="w-4 h-4" />
                                                    </div>
                                                    <input
                                                        type="time"
                                                        name="time"
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                        className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/10 bg-white/[0.03] text-white focus:outline-none focus:ring-2 focus:ring-[#89c240]/50 transition-all font-light text-sm hover:bg-white/[0.05]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-1.5">
                                            <label className="text-zinc-300 text-xs font-medium pl-1">Phone Number</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#89c240]/50 transition-all font-light text-sm hover:bg-white/[0.05]"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-zinc-300 text-xs font-medium pl-1">Email Address</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="you@company.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#89c240]/50 transition-all font-light text-sm hover:bg-white/[0.05]"
                                                />
                                            </div>
                                        </div>

                                        {errorMsg && (
                                            <p className="text-red-400 text-xs pl-1">{errorMsg}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-12 mt-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin text-zinc-500" />
                                            ) : (
                                                "Confirm Booking"
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
