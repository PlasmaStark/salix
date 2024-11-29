"use client";

import { useState } from "react";
import { NavbarContainer, MenuButton, Sidebar } from "./style";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavbarContainer>
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Menu button for mobile */}
        <MenuButton
          isOpen={isSidebarOpen}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />

        {/* Menu items for desktop */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="text-white-600 hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="block text-white-600 hover:text-gray-400">
            About
          </a>
          <a href="/contacts" className="block text-white-600 hover:text-gray-400">
            Contacts
          </a>
          <a href="/chronicles" className="block text-white-600 hover:text-gray-400">
            Chronicles
          </a>
          <a href="/cryptopedia" className="block text-white-600 hover:text-gray-400">
            Cryptopedia
          </a>
        </nav>
      </div>

      {/* Sidebar for mobile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
        <nav className="space-y-2">
          <a href="/" className="text-white-600 hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="block text-white-600 hover:text-gray-400">
            About
          </a>
          <a href="/contacts" className="block text-white-600 hover:text-gray-400">
            Contacts
          </a>
          <a href="/chronicles" className="block text-white-600 hover:text-gray-400">
            Chronicles
          </a>
          <a href="/cryptopedia" className="block text-white-600 hover:text-gray-400">
            Cryptopedia
          </a>
        </nav>
      </Sidebar>
    </NavbarContainer>
  );
}
