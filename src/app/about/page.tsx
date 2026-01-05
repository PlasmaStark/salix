import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function About() {
  return (
    <main className="container mx-auto px-2 py-2">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

        {/* Profile picture */}
        <div className="flex justify-center mt-6">
          <Image
            src="/images/profile-image.webp"
            alt="Leonardo's profile"
            width="256"
            height="256"
            className="rounded-full border-4 mb-4 border-accent object-cover"
          />
        </div>

        <p className="text-normal">
          I am <b>Leonardo</b>, apprentice researcher in cryptography.
          <br />
          My interests include maths and{" "}
          <a
            href="#communication"
            className="text-accent hover:underline transition"
          >
            scientific communication
          </a>
          . I enjoy reading a bit too much, and love learning new things.
          <br />I believe in the power of a{" "}
          <a
            href="#community"
            className="text-accent hover:underline transition"
          >
            strong community
          </a>{" "}
          of researchers and am working to make it happen.
        </p>

        {/* CV Button */}
        <div className="mt-6">
          <Link
            href="/pdfs/cv_eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            View my CV
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section className=" mb-10">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
          Research
        </h2>
        <div className="border-l-4 border-accent pl-4 mb-1">
          <p className="text-normalleading-relaxed">
            My main research areas are cryptography, complexity theory, number
            theory.
            <br />I am currently working on <b>
              cryptographic group actions
            </b>{" "}
            and <b>digital signatures</b>. See my <a>Academia</a> webpage.
          </p>
        </div>
        <div className="border-l-4 border-accent pl-4 mb-10">
          <p className="text-normalleading-relaxed">
            In my spare time, I enjoy exploring the{" "}
            <b>history of cryptography</b>. It's our past, and it shows where
            principles or ideas we take for granted really came from. Not to
            mention, it makes for great introductions in talks!
          </p>
        </div>
      </section>

      {/* Some Thoughts Section */}
      <section className=" mb-10">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
          Some thoughts
        </h2>

        <div className="border-l-4 border-accent pl-4 mb-1">
          <h3 className="text-xl font-semibold mb-2" id="community">
            Community
          </h3>
          <p className="text-normalleading-relaxed">
            A lion might have defeated a lonely Homo Sapiens, but it would soon
            have to face fifty angry rock-throwing monkeys. Collaboration is
            probably the key to shaping - and fixing - the future. As people of
            science this means coming together, providing our perspective to the
            public and putting our abilities to use for society.
          </p>
        </div>

        <div className="border-l-4 border-accent pl-4">
          <h3 className="text-xl font-semibold mb-2" id="communication">
            Communication
          </h3>
          <p className="text-normalleading-relaxed">
            Our ability to communicate effectively has always been a key
            strength. Thousands of years ago, teaching others how to craft
            obsidian tools without losing fingers surely gave us an edge (pun
            intended!). I believe this power transfers to scientific
            communication.
          </p>
        </div>
      </section>

      {/* Projects Section 
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Some projects</h2>
        <p className="text-lg leading-relaxed mb-6">
          A selection of the most interesting past and ongoing projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/about/salix" className="no-underline">
            <div className="p-6 bg-white shadow-md rounded-md transition-all hover:scale-105 group">
              <h3 className="text-xl font-semibold text-gray-800">Salix</h3>
              <p className="text-gray-600 text-sm font-semibold">(2025-now)</p>
              <p className="text-gray-600">This website! Programmed with React.</p>
            </div>
          </Link>
          <div className="p-6 bg-gray-300 shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">Project Archimedes</h3>
            <p className="text-gray-600 text-sm font-semibold">(2021-2023)</p>
            <p className="text-gray-600">Table games for scientific communication</p>
          </div>
          <Link href="/about/prometheus" className="no-underline">
            <div className="p-6 bg-white shadow-md rounded-md transition-all hover:scale-105 group">
              <h3 className="text-xl font-semibold text-gray-800">Project Prometheus</h3>
              <p className="text-gray-600 text-sm font-semibold">(2018-2021)</p>
              <p className="text-gray-600">Building lecture notes to rule them all.</p>
            </div>
          </Link>
        </div>
      </section>
      <hr className="border-gray-300 my-8" />
    */}

      {/* Bookshelf Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Bookshelf</h2>
        <div className="border-l-4 border-accent pl-4 mb-4">
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
