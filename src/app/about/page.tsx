import type { Metadata } from "next";
import Breadcrumb from '@components/breadcrumb';

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">About me</h1>
      <p className="text-lg text-left mb-5">
        I am Leonardo, apprentice researcher in mathematics and cryptography.
        <br></br>
        My interests include reading, learning and scientific communication.
      </p>
      <h2 className="text-3xl font-semibold mb-3">Some thoughts</h2>
      <h3 className="text-xl font-semibold">Shaping the Future one (tiny) Step at a Time</h3>
      <p className="text-lg text-left mb-6">
        What has brought Homo sapiens to where we stand today?
        <br />
        A lion might have defeated one of us, but it would soon face fifty angry,
        rock-throwing monkeys. Perhaps what enabled some naked apes to set foot on
        the Moon was our remarkable ability to collaborate and overcome external challenges—well,
        as long as those challenges aren't other Sapiens.
        <br />
        I firmly believe that scientific communication is key to our society: educating thousands
        is where the power to shape the future truly lies. While this doesn't guarantee action,
        it's one of the best tools at our disposal.
      </p>
      <h3 className="text-xl font-semibold">Bridging the Gaps</h3>
      <p className="text-lg text-left mb-6">
        Memory reminds us that politics and science have often been at odds. Yet,
        I believe that the effort to build a strong and unified community of
        researchers is worthwhile and essential. Such a
        community could shape future discussions and advocate effectively to
        ensure their voices are truly heard. This is extremely hard, and its key
        lies in fostering genuine dialogue and collaboration.
      </p>
      <h2 className="text-3xl font-semibold mb-3">Some projects</h2>
      <h2 className="text-3xl font-semibold mb-3">Contacts</h2>
    </main>
  );
}
