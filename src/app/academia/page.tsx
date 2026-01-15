import Breadcrumb from "../components/navigation/breadcrumb";
import publications from "../../contents/academia/publications.json";
import contributions from "../../contents/academia/contributions.json";
import theses from "../../contents/academia/theses.json";
import software from "../../contents/academia/software.json";
import organisation from "../../contents/academia/organisation.json";
import teaching from "../../contents/academia/teaching.json";
import { Metadata } from "next";
import TimelineList from "../components/navigation/timelineList/timelineList";
import AcademiaCategories from "../components/navigation/navcards/AcademiaCards";

export const metadata: Metadata = {
  title: "Academia",
  description: "Academic content",
};

export default function AcademiaPage() {
  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Academia</h1>
        <p>Cryptography PhD student at Politechnic of Turin</p>
        {/* Categories Section */}
        <AcademiaCategories />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Publications
        </h2>
        <TimelineList items={publications} borderColor="border-accent" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Invited Talks & Contributions
        </h2>
        <TimelineList items={contributions} borderColor="border-accent4" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Teaching
        </h2>
        <TimelineList
          items={teaching}
          borderColor="border-accent"
          emptyLink="link unavailable"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Theses
        </h2>
        <TimelineList items={theses} borderColor="border-accent4" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Software & Tools
        </h2>
        <TimelineList items={software} borderColor="border-accent" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Organisation
        </h2>
        <TimelineList items={organisation} borderColor="border-accent4" />
      </section>
    </main>
  );
}
