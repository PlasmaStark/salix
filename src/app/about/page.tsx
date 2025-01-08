import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";
import Image from 'next/image'

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text">About Me</h1>
        <p className="text-lg">
          I am <b>Leonardo</b>, apprentice researcher in mathematics and cryptography.
          <br />
          My interests include reading, learning, and <a href="#communication">scientific communication</a>.
          I believe in the creation of a <a href="#community">community</a> of mathematicians.
        </p>

        {/* Profile picture */}
        <div className="flex justify-center mt-6">
          <Image
            src="{basePath}/profile-image.jpg"
            alt="Leonardo's profile"
            width="256"
            height="256"
            className="rounded-full border-4 border-accent object-cover"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Some Thoughts Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Some thoughts</h2>

        {/* Thought 1 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2" id="community">
            Community - shaping the future together
          </h3>
          <p className="text-lg leading-relaxed">
            What brought us Homo sapiens to where we stand today?
            <br />
            A lion might have defeated one of us, but it would soon have to face fifty angry,
            rock-throwing, cooperating monkeys. Collaboration has always been our greatest
            strength, and it is the key to shaping - and fixing - the future.
            As people of science, this means coming together, providing our perspective
            and put to use our abilities for society.
          </p>
        </div>

        {/* Thought 2 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2" id="communication">
            Communication - one (tiny) step at a time
          </h3>
          <p className="text-lg leading-relaxed">
            In the same spirit as above, our ability to communicate has always been
            a key strength. Teaching others how to craft obsidian tools without losing
            fingers surely gave us an edge (pun intended!).
            <br />
            believe in the power of scientific communication: step by step,
            it shares knowledge, enables informed decisions, and shapes our technical future.
            That is real power.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Some projects</h2>
        <p className="text-lg leading-relaxed mb-6">
          A selection of my past and ongoing projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
            <p className="text-gray-600">description</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
            <p className="text-gray-600">description</p>
          </div>
        </div>
      </section>

      {/* Divider */}

      {/* 
      <hr className="border-gray-300 my-8" />

      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Contacts</h2>
        <p className="text-lg text-gray-700 mb-4">
          Feel free to reach out to me for collaborations or questions.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
      Contacts Section */}
    </main>
  );
}
