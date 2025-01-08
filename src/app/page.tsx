"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
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
      {/* Work in Progress Banner */}
      <section className="bg-accent text-white text-center rounded-lg mb-6 h-10 sm:h-20">
        <div className="flex items-center justify-center space-x-3 h-full px-4">
          <FontAwesomeIcon
            icon={faPersonDigging}
            className="text-xl sm:text-2xl h-6 w-6 sm:h-8 sm:w-8"
          />
          <p className="text-sm sm:text-lg font-semibold">
            Site currently under construction, most content is missing.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-background-100 rounded-lg shadow-md overflow-hidden mb-4">
        <div className="relative h-42 sm:h-96">
          <Image
            src="/salix/background.png"
            alt="Hero background"
            width="1920"
            height="1080"
            layout="fill"
            objectFit="cover"
            style={{
              opacity: 0.7,
            }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
            Welcome, digital traveller
          </h1>
          <div className="bg-black bg-opacity-50 rounded-lg px-4 py-3 mt-6">
            <p className="text-base sm:text-lg font-semibold text-white drop-shadow-lg">
              You are visitor number #{visitorNumber}.
            </p>
            <p className="text-sm sm:text-sm italic text-white drop-shadow-lg">
              disclaimer: visitor counts may be wildly inaccurate
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-accent rounded-lg p-2">
          <Link className="text-sm sm:text-lg italic text-white drop-shadow-lg font-semibold no-underline" href="/primetales/2023-primespiral">
            What is this image?
          </Link>
        </div>
      </section>


      {/* Categories Section */}
      <section id="categories" className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Me Card */}
          <Link href="/about" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-transparent transition-all hover:border-accent">
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-white mb-6">
                Do I know what I do and why? Find it out.
              </p>
            </div>
          </Link>

          {/* Prime Tales Card */}
          <Link href="/primetales" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-transparent transition-all hover:border-accent">
              <h3 className="text-xl font-bold mb-4">Prime Tales</h3>
              <p className="text-white mb-6">
                Scientific tales and algebraic anecdotes.
              </p>
            </div>
          </Link>

          {/* Chronicles Card */}
          <Link href="/chronicles" className="no-underline">
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-transparent transition-all hover:border-accent">
              <h3 className="text-xl font-bold mb-4">Chronicles</h3>
              <p className="text-white mb-6">
                A curated collection of personal stories.
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
    </main >
  );
}
