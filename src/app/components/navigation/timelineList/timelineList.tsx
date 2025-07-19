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

interface TimelineListProps {
  items: Item[];
  borderColor?: string;
  linkLabel?: string;
  noLinkLabel?: string;
}

export default function TimelineList({
  items,
  borderColor = "border-accent",
  linkLabel = "Read more",
  noLinkLabel = "TBA",
}: TimelineListProps) {
const key = borderColor as keyof typeof badgeBgClasses;
const badgeBg = badgeBgClasses[key] ?? "bg-accent";
  return (
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className={`relative pl-4 border-l-4 ${borderColor}`}>
          {/* Titolo */}
          <h3 className="text-lg font-semibold">{item.title}</h3>

          {/* Meta info */}
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            {/* Badge tipo */}
            {item.type && (
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase ${badgeBg} text-black`}
              >
                {item.type}
              </span>
            )}
            <span>
              {item.event ? item.event + ", " : ""}
              {new Date(item.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
              })}
              {item.authors ? ` - ${item.authors}` : ""}
            </span>
          </p>

          {/* Descrizione */}
          {item.description && <p className="text-sm">{item.description}</p>}

          {/* Link */}
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              {linkLabel}
            </a>
          ) : (
            <p className="text-sm text-gray-400 italic">{noLinkLabel}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
