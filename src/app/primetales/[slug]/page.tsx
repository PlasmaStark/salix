import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { ARTICLE_DIR, BIBLIOGRAPHY_DIR } from '@/config';
import Image from 'next/image'
import { getContentList } from '@/lib/getPosts';

export async function generateStaticParams() {
  const posts = getContentList(ARTICLE_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Article({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content, bibliography } = await getContent(slug, ARTICLE_DIR, BIBLIOGRAPHY_DIR);

  if (!metadata) {
    return <p>Articolo non trovato</p>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Titolo */}
      <header className="mb-6">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
        <Breadcrumb />
        <h1 className="text-4xl font-bold text-white-800">{metadata.title}</h1>
        <p className="text-base italic text-white-400">{metadata.description}</p>
        <p className="text-sm text-gray-500 mt-2">{metadata.date}</p>
        <ul className="flex flex-wrap gap-2 mt-4">
          {metadata.tags.map((tag: string) => (
            <li key={tag}>
              <Link
                href={`/primetales/tags/${tag}`}
                className="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 no-underline"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {/* Contenuto */}
      <div className="mb-4 rounded-lg overflow-hidden h-48">
        <Image
          src={
            metadata.coverImage.startsWith("/")
              ? `${metadata.coverImage}`
              : `/${metadata.coverImage}`
          }
          height="1000"
          width="4000"
          alt={metadata.title}
          className="w-full h-48 object-cover mb-6"
        />
      </div>
      <div
        className="prose prose-lg prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <footer className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Bibliography</h2>
        <div dangerouslySetInnerHTML={{ __html: bibliography }} />
      </footer>
    </article>
  );
}
