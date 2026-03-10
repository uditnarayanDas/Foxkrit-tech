import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-[32px] bg-white border border-black/5 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.25)]",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };