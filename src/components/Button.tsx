import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "dark-pill";
    size?: "sm" | "md" | "lg";
    withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", withArrow, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        "rounded-full bg-foreground text-background hover:bg-foreground/90": variant === "primary",
                        "rounded-full bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
                        "rounded-full border border-border bg-transparent hover:bg-muted text-foreground": variant === "outline",
                        "rounded-full hover:bg-muted text-foreground": variant === "ghost",

                        // New Dark Pill Variant matching reference image
                        "group rounded-[40px] bg-[#2a2a2a] hover:bg-[#333333] text-neutral-200 border-none shadow-sm": variant === "dark-pill",

                        "h-9 px-4 text-sm": size === "sm" && variant !== "dark-pill",
                        "h-11 px-6 text-base": size === "md" && variant !== "dark-pill",
                        "h-14 px-8 text-lg": size === "lg" && variant !== "dark-pill",

                        // Specific sizing for dark-pill to match proportions
                        "h-[56px] pl-7 pr-2.5 text-[17px] tracking-wide": variant === "dark-pill"
                    },
                    className
                )}
                {...props}
            >
                {/* Content wrapper */}
                <span className={cn("relative z-10", variant === "dark-pill" ? "mr-4" : "")}>
                    {children}
                </span>

                {/* Optional dark-pill specific circular arrow */}
                {withArrow && variant === "dark-pill" && (
                    <div className="w-[42px] h-[42px] shrink-0 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
                        <ArrowRight className="w-5 h-5 text-neutral-300 transition-colors group-hover:text-white" />
                    </div>
                )}
                {/* Fallback for regular withArrow */}
                {withArrow && variant !== "dark-pill" && (
                    <ArrowRight className="ml-2 w-4 h-4" />
                )}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
