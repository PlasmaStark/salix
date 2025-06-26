"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";
import { HamburgerButton } from "./HamburgerButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faComments, faHome, faPenNib, faUser } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { path: "", label: "Home", icon: faHome },
  { path: "about", label: "About", icon: faUser },
  { path: "primetales", label: "Prime Tales", icon: faBook },
  { path: "chronicles", label: "Chronicles", icon: faPenNib },
  { path: "talks", label: "Talks", icon: faComments },
];

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--color-primary)] text-white shadow-lg z-50">
      <div className="flex items-center justify-between px-4 py-3 mr-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-white hover:text-gray-400 no-underline">
          <div className="text-xl font-bold">Leonardo Errati</div>
        </Link>

        {/* Mobile hamburger */}
        <HamburgerButton
          isOpen={isSidebarOpen}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="relative z-[60]" 
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          {navLinks
            .filter(({ path }) => path !== "") 
            .map(({ path, label }) => (
          <Link
            key={path}
            href={`/${path}`}
            className="relative block text-white no-underline after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </Link>
            ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        {navLinks.map(({ path, label, icon }) => (
          <Link
            key={path}
            href={`/${path}`}
            className="flex items-center space-x-3 text-white no-underline"
            onClick={closeSidebar}
          >
            {icon && <FontAwesomeIcon icon={icon} className="w-5 h-5" />}
            <span>{label}</span>
          </Link>
        ))}
      </MobileSidebar>
    </header>
  );
}