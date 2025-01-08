import React from "react";

export const NavbarContainer = ({ children }: { children: React.ReactNode }) => (
    <header className="fixed top-0 left-0 w-full bg-[var(--color-primary)] text-white shadow-lg z-50">
        {children}
    </header>
);

// Pulsante per aprire/chiudere la Sidebar
export const MenuButton = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className="md:hidden p-2 text-white hover:text-[var(--color-accent)] focus:outline-none z-50 transition-colors duration-300"
    >
        {isOpen ? (
            // Icona "X" (chiusura)
            <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth={3}  
                stroke="var(--color-accent)"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ) : (
            // Icona "hamburger" (menu)
            <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth={3}
                stroke="var(--color-accent)" 
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        )}
    </button>
);

// Sidebar per la vista mobile
export const Sidebar = ({
    isOpen,
    children,
    onClose,
}: {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay scuro */}
            <div
                className="fixed inset-0 bg-[var(--background)] bg-opacity-40 z-40"
                onClick={onClose}
            ></div>

            {/* Contenuto della Sidebar */}
            <aside className="fixed top-0 left-0 w-64 h-full bg-[var(--color-primary)] text-white shadow-lg z-50 p-6">
                <nav className="space-y-4">{children}</nav>
            </aside>
        </>
    );
};
