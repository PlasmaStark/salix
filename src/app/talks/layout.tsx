import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Talks",
    description: "Some public talks",
};

export default function TalksLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
