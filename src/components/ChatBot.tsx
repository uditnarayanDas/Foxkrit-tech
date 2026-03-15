"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, User, Bot, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ChatBot() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadSubmitted, setLeadSubmitted] = useState(false);
    const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, showLeadForm]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Lock body scroll when chat is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Add welcome message on first open
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    role: "assistant",
                    content: "Hey there! 👋 I'm the Foxkrit AI assistant. I can help you with questions about our services, technology consulting, web development, and more. How can I help you today?",
                },
            ]);
        }
    }, [isOpen, messages.length]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input.trim() };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: updatedMessages.map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            const data = await res.json();

            if (data.error) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: "Sorry, something went wrong. Please try again." },
                ]);
            } else {
                let reply = data.reply as string;
                const hasLeadCapture = reply.includes("[LEAD_CAPTURE]");
                reply = reply.replace("[LEAD_CAPTURE]", "").trim();

                setMessages((prev) => [...prev, { role: "assistant", content: reply }]);

                if (hasLeadCapture && !leadSubmitted) {
                    setTimeout(() => setShowLeadForm(true), 800);
                }
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLeadSubmit = async () => {
        if (!leadData.name || !leadData.email) return;

        const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

        if (GOOGLE_SHEET_URL) {
            const queryParams = new URLSearchParams({
                name: leadData.name,
                email: leadData.email,
                phone: leadData.phone,
                source: "chatbot",
            }).toString();

            try {
                await fetch(`${GOOGLE_SHEET_URL}?${queryParams}`, {
                    method: "GET",
                    mode: "no-cors",
                });
            } catch {
                // Silently fail for no-cors
            }
        }

        setShowLeadForm(false);
        setLeadSubmitted(true);
        setMessages((prev) => [
            ...prev,
            {
                role: "assistant",
                content: `Thanks ${leadData.name}! 🎉 Our team will reach out to you shortly at ${leadData.email}. Looking forward to working with you!`,
            },
        ]);
    };

    // Only render on the home page
    if (pathname !== "/") {
        return null;
    }

    return (
        <>
            {/* Floating Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-[99999] w-14 h-14 rounded-full bg-gradient-to-br from-[#def249] to-[#89c240] text-black flex items-center justify-center shadow-[0_0_25px_rgba(222,242,73,0.3)] hover:shadow-[0_0_35px_rgba(222,242,73,0.5)] transition-shadow"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-6 right-6 z-[99999] w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl border border-white/10 bg-[#0c0c0f]/95 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02] shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#def249] to-[#89c240] flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">Foxkrit AI</p>
                                    <p className="text-neutral-500 text-xs">Always online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                                >
                                    <div
                                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                            msg.role === "user"
                                                ? "bg-white/10"
                                                : "bg-gradient-to-br from-[#def249]/20 to-[#89c240]/20"
                                        }`}
                                    >
                                        {msg.role === "user" ? (
                                            <User className="w-3.5 h-3.5 text-neutral-400" />
                                        ) : (
                                            <Bot className="w-3.5 h-3.5 text-[#def249]" />
                                        )}
                                    </div>
                                    <div
                                        className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                                            msg.role === "user"
                                                ? "bg-[#def249] text-black rounded-tr-md"
                                                : "bg-white/[0.06] text-neutral-300 border border-white/[0.06] rounded-tl-md"
                                        }`}
                                    >
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-2.5"
                                >
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#def249]/20 to-[#89c240]/20 flex items-center justify-center shrink-0">
                                        <Bot className="w-3.5 h-3.5 text-[#def249]" />
                                    </div>
                                    <div className="bg-white/[0.06] border border-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 flex gap-1.5">
                                        <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:0ms]"></span>
                                        <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
                                        <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
                                    </div>
                                </motion.div>
                            )}

                            {/* Lead Capture Form */}
                            <AnimatePresence>
                                {showLeadForm && !leadSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="bg-white/[0.04] border border-[#def249]/20 rounded-2xl p-4 space-y-3"
                                    >
                                        <p className="text-sm font-semibold text-white">📋 Let us connect with you!</p>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            value={leadData.name}
                                            onChange={(e) => setLeadData((p) => ({ ...p, name: e.target.value }))}
                                            className="w-full px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#def249]/50"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            value={leadData.email}
                                            onChange={(e) => setLeadData((p) => ({ ...p, email: e.target.value }))}
                                            className="w-full px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#def249]/50"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone number (optional)"
                                            value={leadData.phone}
                                            onChange={(e) => setLeadData((p) => ({ ...p, phone: e.target.value }))}
                                            className="w-full px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#def249]/50"
                                        />
                                        <button
                                            onClick={handleLeadSubmit}
                                            disabled={!leadData.name || !leadData.email}
                                            className="w-full py-2.5 rounded-lg bg-[#def249] text-black text-sm font-semibold hover:bg-[#c8dc3e] transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            Get in Touch <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="px-4 py-3 border-t border-white/10 bg-white/[0.02] shrink-0">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage();
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about our services..."
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#def249]/30"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="w-10 h-10 rounded-xl bg-[#def249] text-black flex items-center justify-center hover:bg-[#c8dc3e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Send className="w-4 h-4" />
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
