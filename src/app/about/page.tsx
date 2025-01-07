import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";

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
          My interests include reading, learning, and scientific communication.
        </p>

        {/* Profile picture */}
        <div className="flex justify-center mt-6">
          <img
            src="/profile-image.jpg"
            alt="Leonardo's profile"
            className="rounded-full w-64 h-64 shadow-md border-4 border-accent"
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
          <h3 className="text-2xl font-semibold mb-2">
            Shaping the Future
          </h3>
          <p className="text-lg leading-relaxed">
            What brought us Homo sapiens to where we stand today?
            <br />
            A lion might have defeated one of us, but it would soon have to face fifty angry,
            rock-throwing, cooperating monkeys. I believe that working together is where the 
            power to shape (and fix) the future truly lies. 
            It's one of the best tools at our disposal.
          </p>
        </div>

        {/* Thought 2 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">One (tiny) step at a time</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Memory reminds us that politics and science have often been at odds. Yet,
            I believe that the effort to build a strong and unified community of
            researchers is worthwhile and essential. Such a
            community could shape future discussions and advocate effectively to
            ensure their voices are truly heard. This is extremely hard, and its key
            lies in fostering genuine dialogue and collaboration.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Some projects</h2>
        <p className="text-lg text-gray-700 mb-6">
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
      <hr className="border-gray-300 my-8" />

      {/* Contacts Section */}
      <section>
        <h2 className="text-4xl font-bold text-accent mb-6">Contacts</h2>
        <p className="text-lg text-gray-700 mb-4">
          Feel free to reach out to me for collaborations or questions.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
