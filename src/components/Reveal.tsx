"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 40, x: 0 };
            case "down":
                return { y: -40, x: 0 };
            case "left":
                return { x: 40, y: 0 };
            case "right":
                return { x: -40, y: 0 };
            case "none":
                return { x: 0, y: 0 };
            default:
                return { y: 40, x: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <div ref={ref} className={cn("relative w-full", className)}>
            <motion.div
                initial={{
                    opacity: 0,
                    ...offset,
                }}
                animate={
                    isInView
                        ? { opacity: 1, x: 0, y: 0 }
                        : { opacity: 0, ...offset }
                }
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for premium feel
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
