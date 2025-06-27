import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";
import Image from 'next/image'
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
            src="/profile-image.jpg"
            alt="Leonardo's profile"
            width="256"
            height="256"
            className="rounded-full border-4 mb-4 border-accent object-cover"
          />
        </div>

        <p className="text-normal">
          I am <b>Leonardo</b>, apprentice researcher in cryptography.
          <br />
          My interests include maths and <a href="#communication">scientific communication</a>.
          I enjoy reading a bit too much, and love learning new things.
          <br />
          I believe in the power of a <a href="#community">strong community</a> of researchers and am working to make it happen.
        </p>

        {/* CV Button */}
        <div className="mt-6">
          <Link
            href="https://drive.google.com/file/d/1QWRnP8H8_RhVB8BWxjG5aE5LmfFYxPs0"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            View my CV
          </Link>
        </div>
      </section>
      
      {/* Research Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Research</h2>

        <div className="mb-10">
          <p className="text-normalleading-relaxed">
            My main research areas are cryptography, complexity theory, number theory, and in my spare time I read about the history of mathematics.
            <br />
            I am currently working on <b>cryptographic group actions</b> and <b>digital signatures</b>.
          </p>
        </div>
      </section>

      {/* Some Thoughts Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Some thoughts</h2>

        {/* Thought 1 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2" id="community">
            Community - shaping the future together
          </h3>
          <p className="text-normalleading-relaxed">
            What brought Homo Sapiens to where it stands today?
            <br />
            A lion might have defeated one of us, but it would soon have to face fifty angry,
            rock-throwing, cooperating monkeys. Collaboration has always been one of our greatest
            strengths, and it is probably the key to shaping - and fixing - the future.
            As people of science this means coming together, providing our perspective to the public
            and putting our abilities to use for society. We are the same.
          </p>
        </div>

        {/* Thought 2 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2" id="communication">
            Communication - one (tiny) step at a time
          </h3>
          <p className="text-normalleading-relaxed">
            Our ability to communicate effectively has always been
            a key strength. Thousands of years ago, teaching others how to craft obsidian
            tools without losing fingers surely gave us an edge (pun intended!).
            <br />
            I believe in the power of scientific communication: step by step
            it shares knowledge, enables informed decisions, and shapes our technical future.
            That is real power.
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

    </main>
  );
}
