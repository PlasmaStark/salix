"use client";

import { useState } from "react";
import { NavbarContainer, MenuButton, Sidebar } from "./style";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavbarContainer>
      <div className="flex items-center text-decoration-line: none; justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="/" className="text-white hover:text-gray-400 no-underline">
          <div className="text-xl font-bold">my site</div>
        </a>

        {/* Menu button for mobile */}
        <MenuButton
          isOpen={isSidebarOpen}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />

        {/* Menu items for desktop */}
        <nav className="hidden md:flex space-x-4">
          <a href="/about" className="block text-white hover:text-gray-400 no-underline">
            About
          </a>
          <a href="/primetales" className="block text-white hover:text-gray-400 no-underline">
            Prime Tales
          </a>
          <a href="/chronicles" className="block text-white hover:text-gray-400 no-underline">
            Chronicles
          </a>
        </nav>
      </div>

      {/* Sidebar for mobile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
        <nav className="space-y-2">
          <a href="/" className="text-white hover:text-gray-400 no-underline">
            Home
          </a>
          <a href="/about" className="block text-white hover:text-gray-400 no-underline">
            About
          </a>
          <a href="/contacts" className="block text-white hover:text-gray-400 no-underline">
            Contacts
          </a>
          <a href="/chronicles" className="block text-white hover:text-gray-400 no-underline">
            Chronicles
          </a>
        </nav>
      </Sidebar>
    </NavbarContainer>
  );
}
