import { MdOutlineDateRange } from "react-icons/md";

interface Item {
  title: string;
  date: string;
  dateEnd?: string; 
  logo?: string;
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

export default function TimelineList({
  items,
  borderColor = "border-accent",
  emptyLink = "link TBA",
}: TimelineListProps) {
  const key = borderColor as keyof typeof badgeBgClasses;
  const badgeBg = badgeBgClasses[key] ?? "bg-accent";
  const linkColor = linkTextClasses[key] ?? "text-[var(--color-accent)]";

  return (
    <ul className="space-y-1">
      {items.map((item, idx) => {
        const isCompactMode = !item.event && !item.authors;

        const metadataItems = [
          // 1. Date range
<span
  key="date"
  className="flex items-center gap-1 text-gray-400 font-medium"
>
  <MdOutlineDateRange className={`${linkColor}`} />
  {new Date(item.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  })}
  {item.dateEnd && (
    <>
      {" → "}
      {item.dateEnd === "present"
        ? "Present"
        : new Date(item.dateEnd).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
          })}
    </>
  )}
</span>,

          // 2. Type 
          item.type && (
            <span
              key="type"
              className={`text-[10px] font-bold px-1.5 rounded-sm uppercase tracking-wider ${badgeBg} text-black whitespace-nowrap`}
            >
              {item.type}
            </span>
          ),

          // 3. Link
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

          // 4. Event
          !isCompactMode && item.event && (
            <span key="event" className="text-gray-400 italic">
              {item.event}
            </span>
          ),

          // 5. Authors
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
            <h3 className="text-lg font-bold text-white leading-tight mb-1 flex items-center gap-2">
              {item.logo && (
                <img
                  src={item.logo}
                  alt=""
                  width={20}
                  height={20}
                  className="rounded-sm object-contain"
                />
              )}
              {item.title}
            </h3>

            {/* RIGA 2: METADATI */}
            <div className="text-sm text-gray-400 flex flex-wrap items-center">
              {metadataItems.map((component, componentIdx) => (
                <div key={component!.key} className="flex items-center">
                  {component}
                  {componentIdx < metadataItems.length - 1 && <Separator />}
                </div>
              ))}
            </div>

            {/* RIGA 3: Descrizione a capo */}
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