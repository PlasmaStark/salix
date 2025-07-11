"use client";

import { faUser, faBook, faPenNib, faComments } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavCard from "./components/navigation/navcards/NavCard";
import Changelog from "./components/changelog/ChangelogPanel";

type ChangeLogEntry = {
  date: string;
  message: string;
};

export default function Home() {
  const [visitorNumber, setVisitorNumber] = useState(0);
  const [changelog, setChangelog] = useState<ChangeLogEntry[]>([]);

  useEffect(() => {
    fetch("/changelog.txt")
      .then((res) => res.text())
      .then((text) => {
        const entries = text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0)
          .map((line) => {
            const [date, message] = line.split("|");
            return { date, message };
          });
        setChangelog(entries);
      });
  }, []);

  useEffect(() => {
    const randomVisitorNumber = Math.floor(Math.random() * 10000) + 1;
    setVisitorNumber(randomVisitorNumber);
  }, []);

  return (
    <main className="container mx-auto px-4 py-6 sm:py-1">
      <section className="relative bg-background-100 rounded-lg shadow-md overflow-hidden mb-6 sm:mb-2">
        {/* Background Image */}
        <div className="relative h-64 sm:h-50 w-full">
          <Image
            src="/images/primespiral.webp"
            alt="Hero background"
            fill
            sizes="(max-width: 840px) 100vw, (max-width: 1224px) 100vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white px-6 sm:px-4 pt-6 sm:pt-4">
          <div className="bg-black bg-opacity-60 rounded-lg px-4 py-3 max-w-md lg:max-w-sm">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-snug py-1">
              Welcome, traveller
            </h1>
            <p className="text-lg sm:text-xl lg:text-base font-semibold drop-shadow-lg">
              You are visitor #{visitorNumber}.
            </p>
            <p className="text-sm italic drop-shadow-lg">
              (counter may be randomised)
            </p>
          </div>
        </div>

        {/* CTA Button — Outside content overlay, still within section */}
        <div className="absolute bottom-4 right-4 z-10">
          <Link
            href="/primetales/2023-primespiral"
            className="text-sm sm:text-base bg-accent text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-accent-dark transition-all duration-300 no-underline"
          >
            What is this image?
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mb-16 mt-2 sm:mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-3">
          <NavCard
            href="/about"
            icon={faUser}
            title="About Me"
            description="Do I know what I do and why? Find it out."
          />
          <NavCard
            href="/primetales"
            icon={faBook}
            title="Prime Tales"
            description="Scientific tales and algebraic anecdotes."
          />
          <NavCard
            href="/chronicles"
            icon={faPenNib}
            title="Chronicles"
            description="A curated collection of personal stories."
          />
          <NavCard
            href="/talks"
            icon={faComments}
            title="Talks"
            description="A set of materials for some of my talks."
          />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Left Panel */}
        <div className="relative bg-background-100 p-6 border-l-4 border-accent rounded-lg shadow-inner">
          <span className="absolute top-2 left-6 text-accent text-5xl leading-none opacity-20 select-none">
            “
          </span>
          <div className="relative">
            <blockquote className="font-serif italic text-white text-base leading-relaxed pl-6 pr-6">
              “Well then! Let’s take the shot,” I told myself, “and stay. The
              game is hard to win, but so much fun to play! And the stakes are
              worth it.”
            </blockquote>
            <span className="absolute bottom-0 right-4 text-accent text-5xl leading-none opacity-20 select-none translate-y-8">
              ”
            </span>
          </div>
          <figcaption className="mt-3 text-sm text-accent font-semibold tracking-wide pl-6">
            — Arsène Lupin, <span className="italic">Gentleman Thief</span>
          </figcaption>
        </div>

        {/* Right Panel (Changelog) */}
        <Changelog entries={changelog} />
      </section>
    </main>
  );
}

    