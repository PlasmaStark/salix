import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../components/navigation/breadcrumb";

export const metadata: Metadata = {
  title: "How to reach",
  robots: { index: false },
  description:
    "Directions to office 32 at Politecnico di Torino from Torino Porta Susa and Turin Airport.",
};

const walkingDirections = "https://www.google.com/maps/dir/?api=1&origin=Torino+Porta+Susa,+Torino&destination=Corso+Duca+degli+Abruzzi+24,+Torino&travelmode=walking";

export default function HowToReachPage() {
  return (
    <div className="py-2">
      <Breadcrumb />

      <article className="mx-auto max-w-2xl space-y-8 leading-relaxed">
        <header className="space-y-4">
          <h1 className="font-serif text-4xl font-medium sm:text-5xl">
            How to reach
          </h1>
          <div className="px-5 py-4">
            <p className="text-lg font-semibold">Office 32, Third floor</p>
            <p>Politecnico di Torino, Corso Duca degli Abruzzi 24, 10129 Torino</p>
            <p>Department of Mathematical Sciences (DISMA)</p>
          </div>
          <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="#on-campus">On campus</a>
            <a href="#from-porta-susa">From Porta Susa</a>
            <a href="#from-the-airport">From the airport</a>
          </nav>
        </header>

        <section id="on-campus" className="space-y-3">
          <h2 className="border-b border-gray-700 pb-2 font-serif text-2xl font-medium">
            On campus
          </h2>
          <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-accent">
            <li>
              Enter the campus at Corso Duca degli Abruzzi 24 and
              cross the first courtyard.
            </li>
            <li>
              Go through either of the glass door entrances on the left
              and right sides.
            </li>
            <li>
              Go up the first flight of stairs, then take the
              stairs or lift to the third floor (Piano 3).
            </li>
            <li>
              When you reach the DISMA doors, email me or call my
              office extension. You can find it attached on the door. Once inside, look for office 32.
            </li>
          </ol>
          <p>
            <a href="https://www.polito.it/mappe?bl_id=TO_CEN03&amp;fl_id=XP03&amp;rm_id=H022">
              Third-floor map and north entrance to DISMA
            </a>
          </p>
          <figure>
            <Image
              src="/images/how-to-reach/politecnico-entrance.webp"
              alt="The Politecnico di Torino street frontage on Corso Duca degli Abruzzi"
              width={1120}
              height={840}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm">
              Politecnico di Torino from Corso Duca degli Abruzzi.{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Politecnico_di_Torino_(sede_di_corso_Duca).JPG">
                Wikipedia
              </a>.
            </figcaption>
          </figure>
        </section>

        <section id="from-porta-susa" className="space-y-3">
          <h2 className="border-b border-gray-700 pb-2 font-serif text-2xl font-medium">
            From Torino Porta Susa
          </h2>
          <p>
            On foot, head south along Corso Inghilterra. Cross Corso Vittorio
            Emanuele II and continue along Corso Duca degli Abruzzi to the
            campus entrance at number 24.
          </p>
          <p>
            <a href={walkingDirections}>Walking directions from Porta Susa</a>
          </p>
          <figure>
            <Image
              src="/images/how-to-reach/porta-susa.webp"
              alt="The modern glass facade of Torino Porta Susa with the station name above the entrance"
              width={1120}
              height={840}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm">
              Torino Porta Susa station.{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Arriere-gare-torino-porta-susa.jpg">
                Wikipedia
              </a>.
            </figcaption>
          </figure>
        </section>

        <section id="from-the-airport" className="space-y-3">
          <h2 className="border-b border-gray-700 pb-2 font-serif text-2xl font-medium">
            From Turin Airport (Caselle)
          </h2>
          <p>
            By train. Take a direct train from Torino Aeroporto
            di Caselle to Torino Porta Susa. The journey takes about 30 minutes.{" "}
            <a href="https://www.trenitalia.com/content/trenitalia/en/connections/torino-caselle-airport.html">
              Trenitalia trains and tickets
            </a>.This is my favorite choice.
          </p>
          <p>
            By bus. Take the Arriva airport bus (line 268) from
            the arrivals level towards Torino city centre and get off at Torino
            Porta Susa, on Corso Bolzano.{" "}
            <a href="https://torino.arriva.it/en/airport-line-torino-city-center-torino-airport/">
              Arriva timetables and tickets
            </a>
          </p>
          <p>
            After this, proceed from Porta Susa as above.
          </p>
        </section>
      </article>
    </div>
  );
}
