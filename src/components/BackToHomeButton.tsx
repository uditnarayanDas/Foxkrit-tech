"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToHomeButton() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] pt-6 px-6 sm:px-8">
            <Link
                href="/"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-black/10 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-neutral-600 hover:text-black"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
            </Link>
        </div>
    );
}
