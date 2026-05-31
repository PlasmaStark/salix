import type { ContentItem } from "@/lib/getPosts";
import ContentCard from "@/lib/ContentCard";

type ContentListProps = {
  contents: ContentItem[];
  baseRoute: string;
  className?: string;
  variant?:
    | "default"
    | "small"
    | "horizontal"
    | "textual"
    | "newspaper"
    | "conference";
};

const defaultClassByVariant: Record<string, string> = {
  textual: "grid grid-cols-1 sm:grid-cols-2 gap-2",
  horizontal: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  conference: "flex flex-col gap-3",
  default: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
};

function NewspaperLayout({
  contents,
  baseRoute,
}: {
  contents: ContentItem[];
  baseRoute: string;
}) {
  const sorted = [...contents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [featured, ...rest] = sorted;
  return (
  <div>
    <ul className="flex flex-col gap-4">
      {featured && (
        <ContentCard post={featured} baseRoute={baseRoute} variant="newspaper-featured" />
      )}
    </ul>
    {rest.length > 0 && (
      <p className="text-normal uppercase tracking-widest text-gray-600 mt-2 mb-8">
        More chronicles
      </p>
    )}
    <ul className="flex flex-col gap-4">
      {rest.map((post) => (
        <ContentCard key={post.slug} post={post} baseRoute={baseRoute} variant="newspaper-secondary" />
      ))}
    </ul>
  </div>
);
}

export default function ContentList({
  contents,
  baseRoute,
  variant = "default",
}: ContentListProps) {
  if (variant === "newspaper") {
    return <NewspaperLayout contents={contents} baseRoute={baseRoute} />;
  }

  return (
    <ul className={defaultClassByVariant[variant]}>
      {contents
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <ContentCard
            key={post.slug}
            post={post}
            baseRoute={baseRoute}
            variant={variant}
          />
        ))}
    </ul>
  );
}
