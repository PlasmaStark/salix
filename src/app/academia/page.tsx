import Breadcrumb from "../components/navigation/breadcrumb";
import positions from "../../contents/academia/positions.json";
import publications from "../../contents/academia/publications.json";
import contributions from "../../contents/academia/contributions.json";
import talks from "../../contents/academia/talks.json";
import theses from "../../contents/academia/theses.json";
import supervised_theses from "../../contents/academia/supervised_theses.json";
import software from "../../contents/academia/software.json";
import organisation from "../../contents/academia/organisation.json";
import teaching from "../../contents/academia/teaching.json";
import { Metadata } from "next";
import TimelineList from "../components/navigation/timelineList/timelineList";

export const metadata: Metadata = {
  title: "Academia",
  description: "Academic content",
};

const sections: {
  group: string | null;
  items: {
    label: string;
    data: any[];
    color: string;
    emptyLink?: string;
  }[];
}[] = [
  {
    group: "Education",
    items: [
      { label: "Positions", data: positions, color: "border-accent4" },
      { label: "Theses", data: theses, color: "border-accent4" },
    ],
  },
  {
    group: "Research",
    items: [
      {
        label: "Conference Papers",
        data: publications,
        color: "border-accent",
      },
      {
        label: "Invited Talks",
        data: talks,
        color: "border-accent",
      },
      {
        label: "Contributions",
        data: contributions,
        color: "border-accent",
      },
    ],
  },
  {
    group: "Teaching & Supervision",
    items: [
      {
        label: "Lectures",
        data: teaching,
        color: "border-accent4",
        emptyLink: "link unavailable",
      },
      { label: "Supervised Theses", data: supervised_theses, color: "border-accent4" },
    ],
  },
  {
    group: "Service",
    items: [
      { label: "Organisation", data: organisation, color: "border-accent" },
      { label: "Software & Tools", data: software, color: "border-accent" },
    ],
  },
];

export default function AcademiaPage() {
  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />

      <header className="mb-10">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-center">
          Academia
        </h1>
      </header>

      {sections.map(({ group, items }) => (
        <section key={group ?? "positions"} className="mb-12">
          {group && (
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4 border-b border-gray-700 pb-2">
              {group}
            </h2>
          )}
          <div className={`space-y-4 ${group ? "pl-4" : ""}`}>
            {items.map(({ label, data, color, emptyLink }) => (
              <div key={label}>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {label}
                </h3>
                <TimelineList
                  items={data as any}
                  borderColor={color}
                  emptyLink={emptyLink}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
