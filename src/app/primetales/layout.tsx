import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeTales",
  description: "",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>{children}</main>
  );
}
