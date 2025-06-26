import type { ContentItem } from '@/lib/getPosts';
import ContentCard from '@/lib/contentCard';

type ContentListProps = {
  contents: ContentItem[];
  baseRoute: string;
  variant?: 'default' | 'small' | 'horizontal';
  columns?: number;
  gap?: string;
};

export default function ContentList({
  contents,
  baseRoute,
  variant = 'default',
  columns = 3,
  gap = 'gap-6',
}: ContentListProps) {
  const gridClass = variant === 'horizontal' ? '' : `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} ${gap}`;

  return (
    <ul className={gridClass}>
      {contents
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <ContentCard key={post.slug} post={post} baseRoute={baseRoute} variant={variant} />
        ))}
    </ul>
  );
}
