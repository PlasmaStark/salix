import {
  FaAtom,
  FaBookOpen,
  FaFileAlt,
  FaMicrophoneAlt,
  FaPeopleArrows,
  FaTools,
} from "react-icons/fa";
import Breadcrumb from "../components/navigation/breadcrumb";
import { MdScience } from "react-icons/md";
import publications from '../../contents/academia/publications.json';
import contributions from '../../contents/academia/contributions.json';
import theses from '../../contents/academia/theses.json';
import software from '../../contents/academia/software.json';
import { Metadata } from "next";
import TimelineList from "../components/navigation/timelineList/timelineList";

const highlights = [
  {
    icon: <MdScience className="text-indigo-400" />,
    text: "group actions, codes, digital signatures",
  },
  {
    icon: <FaAtom className="text-emerald-400" />,
    text: "scientific communication & public outreach",
  },
  {
    icon: <FaPeopleArrows className="text-yellow-400" />,
    text: "Erdős number: 5",
  },
];

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
        <ul className="mt-6 text-sm text-center max-w-md mx-auto space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex justify-center items-start gap-2">
              <span className="mt-1">{item.icon}</span>
              <span className="block">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaFileAlt className="text-white" aria-hidden="true" />
          Publications
        </h2>
        <TimelineList
          items={publications}
          borderColor="border-accent4"
          linkLabel="Read more"
          noLinkLabel="TBA"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaMicrophoneAlt className="text-white" aria-hidden="true" />
          Invited Talks & Contributions
        </h2>
        <TimelineList
          items={contributions}
          borderColor="border-accent"
          linkLabel="Read more"
          noLinkLabel="TBA"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaBookOpen className="text-white" aria-hidden="true" />
          Theses
        </h2>
        <TimelineList
          items={theses}
          borderColor="border-accent2"
          linkLabel="Read more"
          noLinkLabel="TBA"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaTools className="text-white" aria-hidden="true" />
          Software & Tools
        </h2>
        <TimelineList
          items={software}
          borderColor="border-accent5"
          linkLabel="View project"
          noLinkLabel="TBA"
        />
      </section>
    </main>
  );
}
