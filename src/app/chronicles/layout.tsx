import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chronicles",
    description: "A collection of personal chronicles",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
      <main>{children}</main>
  );
}
