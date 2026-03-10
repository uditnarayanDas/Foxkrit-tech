"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { BackToHomeButton } from "./BackToHomeButton";

export function NavigationWrapper() {
    const pathname = usePathname();

    // List of routes where the navbar should be hidden
    const hideNavbarRoutes = ["/services", "/work", "/about", "/contact"];

    // Check if the current pathname exactly matches one of the hidden routes
    const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

    if (shouldHideNavbar) {
        return <BackToHomeButton />;
    }

    return <Navbar />;
}
