"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging, faUser, faBook, faPenNib, faComments } from "@fortawesome/free-solid-svg-icons";
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
    <main className="container mx-auto px-4 py-8">
      {/*  
      <section className="bg-accent text-white text-center rounded-lg mb-6 h-10 sm:h-16">
        <div className="flex items-center justify-center space-x-3 h-full px-4">
          <FontAwesomeIcon
            icon={faPersonDigging}
            style={{ height: "1.5rem", width: "1.5rem" }}
            className="text-lg sm:text-xl"
          />
          <p className="text-sm font-medium">
            Site currently under construction, most content is missing.
          </p>
        </div>
      </section>
      */}
      {/* Hero Section */}
      <section className="relative bg-background-100 rounded-lg shadow-md overflow-hidden mb-4">
        {/* Background Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full">
          <Image
            src="/background.png"
            alt="Hero background"
            fill
            sizes="(max-width: 840px) 100vw, (max-width: 1224px) 100vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-start lg:justify-center text-center text-white px-6 sm:px-4 pt-6 sm:pt-4">
          <div className="bg-black bg-opacity-60 rounded-lg px-4 py-3 max-w-md lg:max-w-sm">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-snug py-1">
              Welcome, traveller
            </h1>
            <p className="text-lg sm:text-xl lg:text-base font-semibold drop-shadow-lg">
              You are visitor #{visitorNumber}.
            </p>
            <p className="text-sm lg:text-xs italic drop-shadow-lg">
              disclaimer: counter may be randomised
            </p>
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-5 right-4">
            <Link
              href="/primetales/2023-primespiral"
              className="text-sm sm:text-base bg-accent text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-accent-dark transition-all duration-300 no-underline"
            >
              What is this image?
            </Link>
          </div>
        </div>
      </section>


      {/* Categories Section */}
      <section id="categories" className="mb-16 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Me Card */}
          <Link href="/about" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-4 text-center border-2 border-transparent transition-all hover:border-accent hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ height: "2.5rem", width: "2.5rem" }}
                  className="text-accent transition-transform group-hover:rotate-12"
                />
              </div>
              <h3 className="text-xl text-accent font-bold mb-2">About Me</h3>
              <p className="text-white text-sm sm:text-base">
                Do I know what I do and why? Find it out.
              </p>
            </div>
          </Link>

          {/* Prime Tales Card */}
          <Link href="/primetales" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-4 text-center border-2 border-transparent transition-all hover:border-accent hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={faBook}
                  style={{ height: "2.5rem", width: "2.5rem" }}
                  className="text-accent transition-transform group-hover:rotate-12"
                />
              </div>
              <h3 className="text-xl text-accent font-bold mb-2">Prime Tales</h3>
              <p className="text-white text-sm sm:text-base">
                Scientific tales and algebraic anecdotes.
              </p>
            </div>
          </Link>

          {/* Chronicles Card */}
          <Link href="/chronicles" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-4 text-center border-2 border-transparent transition-all hover:border-accent hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={faPenNib}
                  style={{ height: "2.5rem", width: "2.5rem" }}
                  className="text-accent transition-transform group-hover:rotate-12"
                />
              </div>
              <h3 className="text-xl text-accent font-bold mb-2">Chronicles</h3>
              <p className="text-white text-sm sm:text-base">
                A curated collection of personal stories.
              </p>
            </div>
          </Link>

          {/* Talks Card */}
          <Link href="/talks" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-4 text-center border-2 border-transparent transition-all hover:border-accent hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={faComments}
                  style={{ height: "2.5rem", width: "2.5rem" }}
                  className="text-accent transition-transform group-hover:rotate-12"
                />
              </div>
              <h3 className="text-xl text-accent font-bold mb-2">Talks</h3>
              <p className="text-white text-sm sm:text-base">
                A set of materials for some of my talks.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Leonardo Errati.
        </p>
      </footer>
    </main>
  );
}
