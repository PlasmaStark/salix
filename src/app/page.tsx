"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

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
            href="/chronicles/2023-primespiral"
            className="mt-4 text-sm sm:text-base bg-accent2 text-white font-semibold px-4 py-2 rounded-lg shadow-md no-underline"
          >
            What is this image?
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-6 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-white">About me</h2>
        <div>
          <p>
            I am <b>Leonardo</b>, apprentice researcher in cryptography.
          </p>
          <p className="mt-1">
            I received a B.Sc. in mathematics and a M.Sc. in cryptography at
            University of Trento, and am now pursuing a PhD in mathematics at
            Politecnico di Torino. You can view my CV <a href="/pdfs/cv_eng.pdf" target="_blank">here</a>.
            My main research areas are cryptography,
            complexity theory, number theory. I am currently working on{" "}
            <b>cryptographic group actions</b> and <b>digital signatures</b>. 
            
          </p>
          <p className="mt-1">
            My hobbies include maths and scientific communication. I enjoy
            reading a bit too much, and love learning new things.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div /> {/* spacer */}
        <div className="relative bg-background-100 px-6 py-4 border-l-4 border-accent rounded-lg shadow-inner self-start">
          <span className="absolute top-1 left-6 text-accent text-5xl leading-none opacity-20 select-none">
            "
          </span>
          <div className="relative">
            <blockquote className="font-serif italic text-white text-base leading-relaxed pl-6 pr-4">
              "Well then! Let's take the shot," I told myself, "and stay. The
              game is hard to win, but so much fun to play! And the stakes are
              worth it."
            </blockquote>
            <span className="absolute bottom-0 right-0 text-accent text-5xl leading-none opacity-20 select-none translate-y-6">
              "
            </span>
          </div>
          <figcaption className="mt-2 text-sm text-accent font-semibold tracking-wide pl-6">
            - Arsène Lupin, <span className="italic">Gentleman Thief</span>
          </figcaption>
        </div>
      </section>

      {/* Bookshelf Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Bookshelf</h2>
        <div className="mb-4">
          <p className="text-normal leading-relaxed">
            A selection of funny, clever or interesting books I found
            noteworthy; <i>la crème de la crème</i>, from fiction to biography.
            Had I used an LLM to write this, it would have called them
            "thought-provoking". Worth a read if you find yourself bored.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
            <Image
              src="/images/books/feynman_joking.webp"
              alt="Surely You're Joking, Mr. Feynman!"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
              <p className="text-white font-bold text-sm leading-tight">
                Surely You're Joking, Mr. Feynman!
              </p>
              <p className="text-accent text-xs mt-1">
                Richard D. Feynman, Ralph Leighton
              </p>
            </div>
          </div>
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
            <Image
              src="/images/books/lewis_evolution.webp"
              alt="The evolution man"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
              <p className="text-white font-bold text-sm leading-tight">
                The evolution man
              </p>
              <p className="text-accent text-xs mt-1">Roy Lewis</p>
            </div>
          </div>
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
            <Image
              src="/images/books/wells_moon.webp"
              alt="The First Men In The Moon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
              <p className="text-white font-bold text-sm leading-tight">
                The First Men In The Moon
              </p>
              <p className="text-accent text-xs mt-1">Herbert G. Wells</p>
            </div>
          </div>
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
            <Image
              src="/images/books/leblanc_813.webp"
              alt="813: The Double Life of Arsene Lupin"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
              <p className="text-white font-bold text-sm leading-tight">
                813: The Double Life of Arsene Lupin
              </p>
              <p className="text-accent text-xs mt-1">Maurice Leblanc</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
