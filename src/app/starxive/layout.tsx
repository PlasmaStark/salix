import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "StarXive",
    description: "Leonardo's archive",
};

export default function StarXivePage({ children }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}