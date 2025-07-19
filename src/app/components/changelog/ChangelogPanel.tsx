import { FaPaperclip } from "react-icons/fa";

export default function Changelog({
  entries,
}: {
  entries: { date: string; message: string; link?: string }[];
}) {
  return (
    <section className="bg-background-100 p-4 rounded-lg shadow-inner max-h-64 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Changelog</h2>
      <div className="space-y-3">
        {entries.map(({ date, message, link }, i) => (
          <div key={i} className="flex items-center gap-0">
            <p className="text-sm text-white min-w-[90px] m-0">{date}</p>
            <p className="text-base text-gray-500 m-0 flex items-center gap-2">
              {link && (
                <a
                  href={link}
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                  aria-label="link"
                >
                  <FaPaperclip className="inline-block" />
                </a>
              )}
              {!link && <span className="ml-4"></span>}
              {message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
