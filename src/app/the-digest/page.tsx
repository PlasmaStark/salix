import type { Metadata } from "next";
import Breadcrumb from "../components/navigation/breadcrumb";
import {
  FaMicrophoneAlt,
  FaHourglassHalf,
} from "react-icons/fa";
import TimelineList from "../components/navigation/timelineList/timelineList";
import digestEpisodes from "../../contents/the-digest/archive.json";
import upcomingEpisodes from "../../contents/the-digest/upcoming.json";

export const metadata: Metadata = {
  title: "The Digest",
  description:
    "Monthly meeting presenting a paper, topic, or concept in 20 minutes.",
};

export default function TheDigestPage() {
  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />

      <section className="mb-12 relative w-full h-36 overflow-hidden rounded-lg shadow-2xl">
        <div className="absolute inset-0 bg-accent2 flex flex-col justify-center items-center p-4 z-10">
          <h1 className="text-5xl font-extrabold text-white tracking-wider uppercase mb-2 drop-shadow-lg">
            THE DIGEST
          </h1>
          <p className="text-normal text-white italic drop-shadow-md text-center">
            Hashing complex topics into short blocks. Zero-knowledge required.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <p>
          <b>The Digest</b> is a monthly summary of advanced research concepts. Here you can find the handouts of all upcoming and past episodes.
        </p>
      </section>

      {/* Upcoming */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaHourglassHalf className="text-white" aria-hidden="true" />
          Upcoming
        </h2>
        <TimelineList
          items={upcomingEpisodes}
          borderColor="border-accent"
          emptyLink="handout TBA"
        />
      </section>

      {/* Archive */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaMicrophoneAlt className="text-white" aria-hidden="true" />
          Archive of Episodes
        </h2>

        <TimelineList
          items={digestEpisodes}
          borderColor="border-accent"
          emptyLink="(Handout TBA)"
        />
      </section>
    </main>
  );
}
