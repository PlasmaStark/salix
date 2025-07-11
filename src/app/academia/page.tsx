import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    icon: '🏅',
    text: 'PKC 2025 — Best Paper Award for PRISM',
  },
  {
    icon: '🎙️',
    text: 'Invited speaker @ CrypTO 2025',
  },
  {
    icon: '🧑‍🏫',
    text: 'IT Pedagogical Prize nominee (2025)',
  },
];

const publications = [
  {
    title: 'PRISM: Simple and Compact Identification and Signatures from Large Prime Degree Isogenies',
    venue: 'PKC 2025',
    date: 'March 2025',
    citation:
      'Basso, A. et al. (2025). PRISM: Simple and Compact Identification and Signatures from Large Prime Degree Isogenies. PKC 2025. Springer.',
    doi: 'https://doi.org/10.1007/978-3-031-91826-1_10',
    award: 'Best Paper',
  },
];

const theses = [
  {
    title: 'Cryptographic Group Actions and Digital Signatures',
    type: 'MSc Thesis',
    date: 'October 2023',
    description:
      'With a focus on Code Equivalence Problems and structural group theory.',
    pdf: '/thesis/msc-thesis.pdf',
  },
];

const software = [
  {
    name: 'BeUnitn Beamer Theme',
    description:
      'A custom beamer theme for the Math Department in Università di Trento (unofficial).',
    link: 'https://github.com/example/beunitn-theme',
    date: 'April 2021',
  },
];

export default function AcademiaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <Image
          src="/avatar.png"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4"
          alt="Avatar"
        />
        <h1 className="text-4xl font-bold mb-2">Academia</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Research in cryptography, number theory, and algebraic structures. Passionate about communicating advanced ideas with clarity.
        </p>
        <ul className="mt-6 text-sm text-left max-w-md mx-auto space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span>{item.icon}</span> <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📄 Publications</h2>
        <ul className="space-y-4">
          {publications.map((pub, idx) => (
            <li key={idx} className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-bold">{pub.title}</h3>
              <p className="text-sm text-muted-foreground">{pub.venue}, {pub.date}</p>
              {pub.award && <span className="text-accent text-sm">🎖 {pub.award}</span>}
              <p className="text-sm mt-1 italic">{pub.citation}</p>
              <a
                href={pub.doi}
                className="text-sm text-blue-400 hover:underline"
                target="_blank"
              >
                View Paper
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📚 Theses</h2>
        <ul className="space-y-4">
          {theses.map((thesis, idx) => (
            <li key={idx} className="border-l-4 border-accent2 pl-4">
              <h3 className="text-lg font-semibold">{thesis.title}</h3>
              <p className="text-sm text-muted-foreground">{thesis.type}, {thesis.date}</p>
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
        <h2 className="text-2xl font-semibold mb-4">🛠 Software & Tools</h2>
        <ul className="space-y-4">
          {software.map((tool, idx) => (
            <li key={idx} className="border-l-4 border-gray-600 pl-4">
              <h3 className="text-lg font-semibold">{tool.name}</h3>
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
              <p className="text-xs text-gray-500 mt-1">{tool.date}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-sm text-center text-gray-500 mt-10">
        Last updated July 2025. Find more at <Link href="/about">About</Link> or <Link href="/talks">Talks</Link>.
      </footer>
    </div>
  );
}
