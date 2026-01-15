"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Changelog from "./components/changelog/ChangelogPanel";
import changelog from "../contents/changelog.json";
import HomeCategories from "./components/navigation/navcards/HomeCards";

export default function Home() {
  const [visitorNumber, setVisitorNumber] = useState(0);

  useEffect(() => {
    const randomVisitorNumber = Math.floor(Math.random() * 10000) + 1;
    setVisitorNumber(randomVisitorNumber);
  }, []);

  return (
    <main className="container mx-auto px-4 py-6 sm:py-1">
      <section className="relative w-full h-64 overflow-hidden rounded-lg shadow-2xl">
        {/* Background Image */}
        <div className="relative h-64 sm:h-64 w-full">
          <Image
            src="/images/primespiral.webp"
            alt="Galaxy background"
            fill
            sizes="(max-width: 840px) 100vw, (max-width: 1224px) 100vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black40 flex flex-col justify-center items-center p-4 z-10">
          <h1 className="sm:text-5xl text-3xl font-extrabold text-white tracking-wider text-center mb-2 drop-shadow-lg">
            Welcome, traveller
          </h1>
          <p className="text-lg text-white font-semibold italic drop-shadow-md text-center">
            You are visitor #{visitorNumber}.
          </p>
          <p className="text-sm text-white italic drop-shadow-md text-center">
            counter may be randomised :)
          </p>
          <Link
            href="/primetales/2023-primespiral"
            className="mt-4 text-sm sm:text-base bg-accent2 text-white font-semibold px-4 py-2 rounded-lg shadow-md no-underline"
          >
            What is this image?
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <HomeCategories />

      {/* Quote & changelog */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="relative bg-background-100 p-6 border-l-4 border-accent rounded-lg shadow-inner self-start">
          <span className="absolute top-2 left-6 text-accent text-5xl leading-none opacity-20 select-none">
            “
          </span>
          <div className="relative">
            <blockquote className="font-serif italic text-white text-base leading-relaxed pl-6 pr-6">
              “Well then! Let’s take the shot,” I told myself, “and stay. The
              game is hard to win, but so much fun to play! And the stakes are
              worth it.”
            </blockquote>
            <span className="absolute bottom-0 right-1 text-accent text-5xl leading-none opacity-20 select-none translate-y-8">
              ”
            </span>
          </div>
          <figcaption className="mt-3 text-sm text-accent font-semibold tracking-wide pl-6">
            — Arsène Lupin, <span className="italic">Gentleman Thief</span>
          </figcaption>
        </div>
        <Changelog entries={changelog} />
      </section>
    </main>
  );
}
