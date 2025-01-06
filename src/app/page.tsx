"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [visitorNumber, setVisitorNumber] = useState(0);

  useEffect(() => {
    const randomVisitorNumber = Math.floor(Math.random() * 10000) + 1;
    setVisitorNumber(randomVisitorNumber);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Work in Progress Banner */}
      <section className="bg-accent text-white py-4 text-center rounded-lg mb-6">
        <div className="flex items-center justify-center space-x-3">
          <FontAwesomeIcon icon={faPersonDigging} className="text-xl sm:text-2xl" />
          <p className="text-md sm:text-lg font-semibold">
            Site currently under construction.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-background-100 rounded-lg shadow-md overflow-hidden mb-4">
        <div className="relative h-64 sm:h-96">
          <Image
            src="/background.jpg"
            alt="Hero background"
            fill
            style={{
              objectFit: "cover",
              opacity: 0.7,
            }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">
            Welcome, digital traveller
          </h1>
          <div className="bg-black bg-opacity-50 rounded-lg px-4 py-3 mt-6">
            <p className="text-lg sm:text-xl font-semibold text-white drop-shadow-lg">
              You are visitor number #{visitorNumber}.
            </p>
            <p className="text-lg italic sm:text-sm text-white drop-shadow-lg">
              disclaimer: visitor counts may be wildly inaccurate
            </p>
          </div>
        </div>
      </section>
      <div className="bg-black text-white rounded-lg p-4 mb-10">
        <h4 className="text-xl font-bold mb-4">What is this image?</h4>
        <p>
          This is <b>Ulam's prime spiral</b>, a representation of prime numbers.
          Squinting my eyes, I noticed it looks like a galaxy and rendered it accordingly with Python.
          The frequency of some star classes is compared to the frequency of some prime number classes:
          <ul className="md:text-base">
            <li>
              <i>Twin primes</i> are <span className="text-yellow-400">yellow</span> (class-G stars, like the Sun),
            </li>
            <li>
              <i>Primordial primes</i> are <span className="text-blue-400">blue</span> (class-B stars, blue giants),
            </li>
            <li>
              <i>Sophie-Germaine primes</i> are <span className="text-cyan-400">azure</span> (class-F stars),
            </li>
            <li>
              <i>Mersenne primes</i> are <span className="text-red-400">red</span> (class-M stars, red dwarves).
            </li>
          </ul>
        </p>
      </div>

      {/* Categories Section */}
      <section id="categories" className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Me Card */}
          <a href="/about" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-transparent transition-all hover:border-accent">
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-white mb-6">
                Do I know what I do and why? Find it out.
              </p>
            </div>
          </a>

          {/* Prime Tales Card */}
          <a href="/primetales" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-transparent transition-all hover:border-accent">
              <h3 className="text-xl font-bold mb-4">Prime Tales</h3>
              <p className="text-white mb-6">
                Scientific tales and algebraic anecdotes.
              </p>
            </div>
          </a>

          {/* Chronicles Card */}
          <a href="/chronicles" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-transparent transition-all hover:border-accent">
              <h3 className="text-xl font-bold mb-4">Chronicles</h3>
              <p className="text-white mb-6">
                A curated collection of personal stories.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Leonardo Errati.
        </p>
      </footer>
    </main >
  );
}
