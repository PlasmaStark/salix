import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chronicles",
    description: "A collection of personal chronicles",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Il Blog</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2024 Il mio blog</footer>
    </div>
  );
}
