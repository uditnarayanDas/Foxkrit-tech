"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    // Auto-open modal after 12 seconds
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 12000);
        // Cleanup the timer if the component unmounts early
        return () => clearTimeout(timer);
    }, []);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </BookingModalContext.Provider>
    );
}

export function useBookingModal() {
    const context = useContext(BookingModalContext);
    if (!context) {
        throw new Error("useBookingModal must be used within a BookingModalProvider");
    }
    return context;
}
