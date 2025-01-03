import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, BLOG_DIR } from '@/config';

export default async function BlogPost({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content, bibliography } = await getContent(slug, BLOG_DIR, BIBLIOGRAPHY_DIR);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Titolo */}
      <header className="mb-6">
        <Breadcrumb />
        <h1 className="text-4xl font-bold text-white-800">{metadata.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{metadata.date}</p>
        <ul className="flex flex-wrap gap-2 mt-1">
          {metadata.tags.map((tag: string) => (
            <li key={tag}>
              <Link
                href={`/chronicles/tags/${tag}`}
                className="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 no-underline"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {/* Contenuto */}
      <div
        className="prose prose-lg prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
