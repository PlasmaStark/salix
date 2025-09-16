import { FaPaperclip } from "react-icons/fa";

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
  "border-accent" | "border-accent2" | "border-accent3" | "border-accent4" | "border-accent5" | "border-accent6",
  string
> = {
  "border-accent": "bg-accent",
  "border-accent2": "bg-accent2",
  "border-accent3": "bg-accent3",
  "border-accent4": "bg-accent4",
  "border-accent5": "bg-accent5",
  "border-accent6": "bg-accent6",
};
const linkTextClasses: Record<
  keyof typeof badgeBgClasses,
  string
> = {
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
  emptyLink = "(TBA)"
}: TimelineListProps) {
const key = borderColor as keyof typeof badgeBgClasses;
const badgeBg = badgeBgClasses[key] ?? "bg-accent";
const linkColor = linkTextClasses[key] ?? "text-[var(--color-accent)]";
  return (
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className={`relative pl-4 border-l-4 ${borderColor}`}>
          <p className="text-normal">
            {/* Link */}
            {item.link ? (
              <a href={item.link} rel="noopener noreferrer">
                <FaPaperclip
                  className={`${linkColor} inline-block opacity-90`}
                />
              </a>
            ) : (
              <span className="text-sm inline-block opacity-90 text-gray-500">
                {item.link ? item.link : emptyLink}
              </span>
            )}

            {/* Badge tipo */}
            {item.type && (
              <span
                className={`text-xs font-semibold px-2 py-0.5 ml-1 rounded-full uppercase ${badgeBg} text-black`}
              >
                {item.type}
              </span>
            )}

            {/* Titolo */}
            <span className="font-semibold"> {item.title}</span>
          </p>

          {/* Meta info */}
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            <span>
              {item.event ? item.event + ", " : ""}
              {new Date(item.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
              })}
              {item.authors ? ` - ${item.authors}.` : ""}
            </span>
          </p>
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            {item.description ? ` ${item.description}` : ""}
          </p>
        </li>
      ))}
    </ul>
  );
}
