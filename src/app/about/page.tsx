import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBook, faEnvelope, faIdCard, faX } from "@fortawesome/free-solid-svg-icons";


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
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
        <p className="text-lg">
          I am <b>Leonardo</b>, apprentice researcher in mathematics and cryptography.
          <br />
          My interests include reading, learning, and <a href="#communication">scientific communication</a>.
          I believe in the power of a <a href="#community">community</a> of scientists coming together and
          work towards it.
        </p>

        {/* Profile picture */}
        <div className="flex justify-center mt-6">
          <Image
            src="/profile-image.jpg"
            alt="Leonardo's profile"
            width="256"
            height="256"
            className="rounded-full border-4 border-accent object-cover"
          />
        </div>

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
          <p className="text-lg leading-relaxed">
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

      {/* Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Some projects</h2>
        <p className="text-lg leading-relaxed mb-6">
          A selection of past and ongoing projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Contacts */}
      <h2 className="text-4xl font-bold text-accent mb-6">Contacts</h2>
      <section className="text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {/* Goodreads */}
          <Link
            href="https://www.goodreads.com/user/show/155458214-leonardus-iii-emperor-of-taured"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBook}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">GoodReads</p>
            </div>
          </Link>
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/leonardo-errati-76507b213"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">LinkedIn</p>
            </div>
          </Link>
          {/* GitHub */}
          <Link
            href="https://github.com/PlasmaStark"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">GitHub</p>
            </div>
          </Link>
          {/* Email */}
          <Link
            href="mailto:leonardoerrati.lwe@gmail.com"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">Email</p>
            </div>
          </Link>
          {/* Pagina PoliTo */}
          <Link
            href="https://www.polito.it/personale?p=leonardo.errati"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faIdCard}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">PoliTo</p>
            </div>
          </Link>
          {/* Pagina UniTn */}
          <Link
            href="https://webapps.unitn.it/du/it/Persona/PER0208861"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faIdCard}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">UniTn</p>
            </div>
          </Link>
          {/* Pagina X */}
          <Link
            href="https://x.com/PlasmaStark"
            className="flex items-center no-underline px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-accent transition"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faX}
                style={{ height: "1rem", width: "1rem" }}
                className="text-white transition-transform group-hover:rotate-12"
              />
              <p className="ml-3">Twitter/X</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
