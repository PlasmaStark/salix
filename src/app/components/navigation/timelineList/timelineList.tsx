import { FaPaperclip } from "react-icons/fa";

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

interface TimelineListProps {
  items: Item[];
  borderColor?: string;
}

const Separator = () => (
  <span className="inline-block text-gray-600 mx-1 select-none">&bull;</span>
);

export default function TimelineList({
  items,
  borderColor = "border-accent",
}: TimelineListProps) {
  return (
    <ul className="space-y-1">
      {items.map((item, idx) => {
        const isCompactMode = !item.event && !item.authors;

        const metadataItems = [
          // Date
          <span key="date" className="text-gray-500 font-medium">
            {new Date(item.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
            })}
            {item.dateEnd && (
              <>
                {" / "}
                {item.dateEnd === "present"
                  ? "Present"
                  : new Date(item.dateEnd).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                    })}
              </>
            )}
          </span>,

          // Type
          item.type && (
            <span key="type" className="text-gray-400">
              {item.type}
            </span>
          ),

          // Event
          !isCompactMode && item.event && (
            <span key="event" className="text-gray-500 italic">
              {item.event}
            </span>
          ),

          // Authors
          !isCompactMode && item.authors && (
            <span key="authors">{item.authors}</span>
          ),

          // Description in compact mode
          isCompactMode && item.description && (
            <span key="compact-description" className="text-gray-500">
              {item.description}
            </span>
          ),
        ].filter(Boolean) as React.ReactElement[];

        return (
          <li key={idx} className={`relative pl-3 border-l-2 ${borderColor}`}>
            <h3 className="text-small font-semibold text-white leading-snug">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white no-underline"
                >
                  {item.title}
<span className="ml-1 inline-block">
  <FaPaperclip size={11} style={{ color: "white", opacity: 0.5 }} />
</span>
                </a>
              ) : (
                item.title
              )}
            </h3>

            {/* Metadata */}
            {metadataItems.length > 0 && (
              <div className="text-xs text-gray-500 flex flex-wrap items-center mt-0.5">
                {metadataItems.map((component, componentIdx) => (
                  <div key={component!.key} className="flex items-center">
                    {component}
                    {componentIdx < metadataItems.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            {!isCompactMode && item.description && (
              <p className="text-sm text-gray-500 leading-relaxed pr-2">
                {item.description}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
