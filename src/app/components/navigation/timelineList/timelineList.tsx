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

// Separator component for clarity
const Separator = () => (
    <span className="inline-block text-gray-400 font-medium mx-1 select-none">
        &bull;
    </span>
);
// I used a middle dot (•) instead of a comma (,) as it often looks cleaner
// and avoids the need for a trailing space, but you can change it back to
// ", " if you prefer a comma and a space.

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

        // Define the sequence of visible metadata items to apply separators correctly
        const metadataItems = [
          // 1. Date (rimosso whitespace-nowrap)
          <span
            key="date"
            className="flex items-center gap-1 text-gray-400 font-medium"
          >
            <MdOutlineDateRange className={`${linkColor}`} />
            {new Date(item.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
            })}
          </span>,

          // 2. Type (Badge - lasciato com'era)
          item.type && (
            <span
              key="type"
              className={`text-[10px] font-bold px-1.5 rounded-sm uppercase tracking-wider ${badgeBg} text-black whitespace-nowrap`}
            >
              {item.type}
            </span>
          ),

          // 3. Link (rimosso whitespace-nowrap)
          item.link ? (
            <a
              key="link"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              className={`flex items-center gap-1 hover:text-white transition-colors no-underline duration-200 group`}
              title="View Resource"
            >
              <span className={`${linkColor} opacity-80`}>link</span>
            </a>
          ) : (
            <span key="empty-link" className="text-gray-400 flex items-center gap-1">
              {emptyLink}
            </span>
          ),

          // 4. Event (rimosso whitespace-nowrap)
          !isCompactMode && item.event && (
            <span key="event" className="text-gray-400 italic">
              {item.event}
            </span>
          ),

          // 5. Authors (rimosso whitespace-nowrap)
          !isCompactMode && item.authors && (
            <span key="authors">
              {item.authors}
            </span>
          ),

          // 6. Description (Only in compact mode)
          isCompactMode && item.description && (
            <span key="compact-description" className="text-gray-400">
              {item.description}
            </span>
          ),
        ].filter(Boolean) as React.ReactElement[];

        return (
          <li key={idx} className={`relative pl-6 border-l-4 ${borderColor}`}>
            {/* RIGA 1: TITOLO */}
            <h3 className="text-lg font-bold text-white leading-tight mb-1">
              {item.title}
            </h3>

            {/* RIGA 2: METADATI - Use flex-wrap and map with separator */}
            <div className="text-sm text-gray-400 flex flex-wrap items-center">
              {metadataItems.map((component, componentIdx) => (
                <div key={component!.key} className="flex items-center">
                  {component}
                  {/* Insert Separator only if it's NOT the last item */}
                  {componentIdx < metadataItems.length - 1 && <Separator />}
                </div>
              ))}
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