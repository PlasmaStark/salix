import type { ContentItem } from '@/lib/getPosts';
import ContentCard from '@/lib/ContentCard';

type ContentListProps = {
  contents: ContentItem[];
  baseRoute: string;
  className?: string;
  variant?: 'default' | 'small' | 'horizontal' | 'textual';
};
const defaultClassByVariant: Record<string, string> = {
  textual: 'flex flex-col divide-y divide-gray-100',
  horizontal: 'space-y-6',
  default: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
};

export default function ContentList({
  contents,
  baseRoute,
  variant = 'default',
}: ContentListProps) {
console.log("Rendering ContentList with", contents.length, "items");
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
