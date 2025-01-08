"use client";

import { useState } from "react";
import { NavbarContainer, MenuButton, Sidebar } from "./style";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavbarContainer>
      <div className="flex items-center text-decoration-line: none; justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-white hover:text-gray-400 no-underline">
          <div className="text-xl font-bold">Leonardo Errati</div>
        </Link>

        {/* Menu button for mobile */}
        <MenuButton
          isOpen={isSidebarOpen}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />

        {/* Menu items for desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="block text-white hover:text-gray-400 no-underline">
            About
          </Link>
          <Link href="/primetales" className="block text-white hover:text-gray-400 no-underline">
            Prime Tales
          </Link>
          <Link href="/chronicles" className="block text-white hover:text-gray-400 no-underline">
            Chronicles
          </Link>
        </nav>
      </div>

      {/* Sidebar for mobile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
        <nav className="space-y-2">
          <Link href="/" className="text-white hover:text-gray-400 no-underline">
            Home
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-400 no-underline">
            About
          </Link>
          <Link href="/contacts" className="block text-white hover:text-gray-400 no-underline">
            Contacts
          </Link>
          <Link href="/chronicles" className="block text-white hover:text-gray-400 no-underline">
            Chronicles
          </Link>
        </nav>
      </Sidebar>
    </NavbarContainer>
  );
}
