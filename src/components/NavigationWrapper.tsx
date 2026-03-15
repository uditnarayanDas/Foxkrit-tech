"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { FloatingMenu } from "./FloatingMenu";

export function NavigationWrapper() {
    const pathname = usePathname();

    // List of routes where the navbar should be hidden
    const hideNavbarRoutes = ["/services", "/work", "/about", "/contact", "/blog"];

    // Check if the current pathname exactly matches one of the hidden routes or starts with /blog/
    const shouldHideNavbar = hideNavbarRoutes.includes(pathname) || pathname.startsWith("/blog/");

    if (shouldHideNavbar) {
        return <FloatingMenu />;
    }

    return <Navbar />;
}
