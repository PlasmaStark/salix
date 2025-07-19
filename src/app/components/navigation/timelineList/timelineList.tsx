interface Item {
  title: string;
  date: string;
  authors?: string;
  event?: string;
  description?: string;
  link?: string;
  type?: string;
}

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
  const badgeBg = borderColor.replace("border-", "bg-");

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
                className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeBg} text-black`}
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
