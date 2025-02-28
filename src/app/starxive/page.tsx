'use client'

import { useEffect, useState } from "react";
import Breadcrumb from "../components/navigation/breadcrumb";
import Link from "next/link";

interface Entry {
    ID: string;
    AUTHORS: string;
    TITLE: string;
    DATE: number;
    CLASS: string;
    TAGS: string;
    URL?: string;
    DESCRIPTION: string;
    COMMENT: string;
}

const tagColors: Record<string, string> = {
    security: "border-red-500",
    cryptography: "border-blue-500",
    mathematics: "border-green-500",
    algorithms: "border-yellow-500",
    default: "border-gray-400"
};

const StarXivePage = () => {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        fetch("starxive/articles.json")
            .then((res) => res.json())
            .then(setEntries);
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="text-4xl font-bold text-center mb-6">
                Star<span className="text-red-500">X</span>ive
            </h1>
            <p className="text-lg text-center mb-10">
                Welcome to Leonardo's omnium archive.
            </p>
            <h2 className="text-2xl text-accent font-bold mb-6">Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {entries.map((entry) => {
                    const firstTag = entry.TAGS.split(",")[0].trim(); 
                    const borderColor = tagColors[firstTag] || tagColors.default;

                    return (
                        <Link
                            key={entry.ID}
                            href={entry.URL || "#"}
                            target={entry.URL ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`no-underline p-3 rounded-lg shadow-sm border-4 transition-all ${borderColor} ${entry.URL ? "bg-white hover:scale-105 hover:shadow-md" : "bg-gray-200 cursor-default"
                                }`}
                        >
                            <h2 className="font-medium text-sm text-accent">
                                [{entry.ID}] {entry.TITLE}
                            </h2>
                            <p className="text-xs text-gray-500">
                                {entry.AUTHORS} • {entry.DATE}
                            </p>
                            <p className="text-xs mt-1 text-gray-700 line-clamp-3">
                                {entry.DESCRIPTION}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1">
                                {entry.TAGS.split(",").map((tag) => (
                                    <span key={tag} className="bg-blue-100 text-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">
                                        #{tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    );
                })}
            </div>
            <h2 className="text-2xl text-accent font-bold mb-6">Books</h2>
            <h2 className="text-2xl text-accent font-bold mb-6">Conferences & Talks</h2>
        </div>
    );
};

export default StarXivePage
