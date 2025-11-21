import { FaPaperclip, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

interface Item {
  title: string;
  date: string;
  authors?: string;
  event?: string;
  description?: string;
  link?: string;
  type?: string;
}

const badgeBgClasses: Record<
  | "border-accent"
  | "border-accent2"
  | "border-accent3"
  | "border-accent4"
  | "border-accent5"
  | "border-accent6",
  string
> = {
  "border-accent": "bg-accent",
  "border-accent2": "bg-accent2",
  "border-accent3": "bg-accent3",
  "border-accent4": "bg-accent4",
  "border-accent5": "bg-accent5",
  "border-accent6": "bg-accent6",
};
const linkTextClasses: Record<keyof typeof badgeBgClasses, string> = {
  "border-accent": "text-[var(--color-accent)]",
  "border-accent2": "text-[var(--color-accent2)]",
  "border-accent3": "text-[var(--color-accent3)]",
  "border-accent4": "text-[var(--color-accent4)]",
  "border-accent5": "text-[var(--color-accent5)]",
  "border-accent6": "text-[var(--color-accent6)]",
};

interface TimelineListProps {
  items: Item[];
  borderColor?: string;
  emptyLink?: string;
}

export default function TimelineList({
  items,
  borderColor = "border-accent",
  emptyLink = "link TBA",
}: TimelineListProps) {
  const key = borderColor as keyof typeof badgeBgClasses;
  const badgeBg = badgeBgClasses[key] ?? "bg-accent";
  const linkColor = linkTextClasses[key] ?? "text-[var(--color-accent)]";

  return (
    <ul className="space-y-0.5">
      {items.map((item, idx) => {
        const isCompactMode = !item.event && !item.authors;

        return (
          <li key={idx} className={`relative pl-6 border-l-4 ${borderColor}`}>
            {/* RIGA 1: TITOLO */}
            <h3 className="text-lg font-bold text-white leading-tight mb-1">
              {item.title}
            </h3>

            {/* RIGA 2: METADATI (Badge | Data | Link | Evento | Autori ... | Descrizione ) */}
            <div className="text-sm text-gray-400 flex flex-wrap items-center gap-x-1">
              <span className="flex items-center gap-1 text-gray-400 font-medium">
                <MdOutlineDateRange className={`${linkColor}`} />
                {new Date(item.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
              {item.type && (
                <>
                <span className="text-gray-400 opacity-50">|</span>
                <span
                  className={`text-[10px] font-bold px-1.5 rounded-sm uppercase tracking-wider ${badgeBg} text-black`}
                >
                  {item.type}
                </span>
                </>
              )}
              {item.link ? (
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`flex items-center gap-1 hover:text-white transition-colors no-underline duration-200 group`}
                  title="View Resource"
                >
                  <span className="text-gray-400 opacity-50">|</span>
                  <span className={`${linkColor} opacity-80`}>
                    link
                  </span>
                </a>
              ) : (
                <span className="text-gray-400 flex items-center gap-1">
                  <span className="text-gray-400 opacity-50 text-sm">|</span>
                  {emptyLink}
                </span>
              )}
              {!isCompactMode && (
                <>
                  {item.event && (
                    <span className="flex items-center gap-2">
                      <span className="text-gray-400 opacity-50">|</span>
                      <span className="text-gray-400 italic">{item.event}</span>
                    </span>
                  )}
                  {item.authors && (
                    <span className="flex items-center gap-2">
                      <span className="text-gray-400 opacity-50">|</span>
                      <span>{item.authors}</span>
                    </span>
                  )}
                </>
              )}
              {isCompactMode && item.description && (
                <span className="flex items-center gap-2 text-gray-400">
                  <span className="text-gray-400 opacity-50">|</span>
                  <span>{item.description}</span>
                </span>
              )}
            </div>

            {/* RIGA 3: Descrizione a capo (Solo mode Complessa) */}
            {!isCompactMode && item.description && (
              <p className="text-sm text-gray-400 leading-relaxed w-fit pr-4">
                {item.description}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}