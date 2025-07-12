import {
  FaBookOpen,
  FaFileAlt,
  FaMicrophoneAlt,
  FaTools,
} from "react-icons/fa";
import Breadcrumb from "../components/navigation/breadcrumb";
import { MdScience } from "react-icons/md";
import publications from '../../contents/academia/publications.json';
import contributions from '../../contents/academia/contributions.json';
import theses from '../../contents/academia/theses.json';
import software from '../../contents/academia/software.json';
import { Metadata } from "next";

const highlights = [
  {
    icon: <MdScience className="text-purple-400" />,
    text: "group actions, code-based cryptography, digital signatures",
  },
];

export const metadata: Metadata = {
  title: "Academia",
  description: "Academic content",
};

export default function AcademiaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Academia</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Research in cryptography, number theory, and protocols. Passionate
          about communicating advanced ideas with clarity.
        </p>
        <ul className="mt-6 text-sm text-left max-w-md mx-auto space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>{item.icon}</span> <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaFileAlt className="text-white" aria-hidden="true" />
          Publications
        </h2>
        <ul className="space-y-4">
          {publications.map((pub, idx) => (
            <li key={idx} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-bold">{pub.title}</h3>
              <p className="text-sm text-muted-foreground">
                {pub.venue}, {pub.date}
              </p>
              {pub.award && (
                <span className="text-accent text-sm">🎖 {pub.award}</span>
              )}
              <p className="text-sm mt-1 italic">{pub.authors}</p>
              {pub.link ? (
                <a
                  href={pub.link}
                  className="text-sm text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Paper
                </a>
              ) : (
                <p className="text-sm text-gray-500 italic">View Paper (TBA)</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaMicrophoneAlt className="text-white" aria-hidden="true" />
          Invited Talks & Contributions
        </h2>
        <ul className="space-y-4">
          {contributions.map((item, idx) => (
            <li key={idx} className="border-l-4 border-accent4 pl-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex items-center gap-2">
                {/* Type Badge */}
                <span className="bg-accent4 text-xs text-black font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.type}
                </span>
                <p className="text-sm text-muted-foreground">
                  {item.event}, {item.date}
                </p>
              </div>
              {item.authors && (
                <p className="text-sm italic text-muted-foreground">
                  {item.authors}
                </p>
              )}

              {item.description && (
                <p className="text-sm mb-1">{item.description}</p>
              )}

              {item.link && (
                <a
                  href={item.link}
                  className="text-sm text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaBookOpen className="text-white" aria-hidden="true" />
          Theses
        </h2>
        <ul className="space-y-4">
          {theses.map((thesis, idx) => (
            <li key={idx} className="border-l-4 border-accent2 pl-4">
              <h3 className="text-lg font-semibold">{thesis.title}</h3>
              <p className="text-sm text-muted-foreground">
                {thesis.type}, {thesis.date}
              </p>
              <p className="text-sm mb-1">{thesis.description}</p>
              <a
                href={thesis.pdf}
                className="text-sm text-blue-400 hover:underline"
                target="_blank"
              >
                Download PDF
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaTools className="text-white" aria-hidden="true" />
          Software & Tools
        </h2>
        <ul className="space-y-4">
          {software.map((tool, idx) => (
            <li key={idx} className="border-l-4 border-accent5 pl-4">
              <h3 className="text-lg font-semibold">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.date}</p>
              <p className="text-sm mb-1">{tool.description}</p>
              {tool.link && (
                <a
                  href={tool.link}
                  className="text-sm text-blue-400 hover:underline"
                  target="_blank"
                >
                  View Project
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
