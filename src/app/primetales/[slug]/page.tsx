import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { ARTICLE_DIR, BIBLIOGRAPHY_DIR } from '@/config';
import Image from 'next/image'
import { getContentList } from '@/lib/getPosts';
import path from 'path';
import fs from 'fs';

export async function generateStaticParams() {
  const posts = getContentList(ARTICLE_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Article({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content, bibliography, toc } = await getContent(slug, ARTICLE_DIR, BIBLIOGRAPHY_DIR);
  const filePath = path.join(process.cwd(), 'src/contents/articles', `${slug}.md`);
  const stats = fs.statSync(filePath);
  const lastMod = stats.mtime.toISOString();

  if (!metadata) {
    return <p>Article not found...</p>;
  }

  return (
    <article className="max-w-3xl mx-auto px-2 py-2">
      {/* Titolo */}
      <header className="mb-6">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        />
        <Breadcrumb />
        <h1 className="text-4xl font-bold text-white-800">{metadata.title}</h1>
        <p className="text-xl italic text-white-400">{metadata.description}</p>
        <p className="text-normal text-gray-500">
          first made{" "}
          {new Date(metadata.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          , last modified{" "}
          {new Date(lastMod).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
        </p>
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

      {/* TOC */}
      {toc.length > 0 && (
        <nav className="mb-10 max-w-2xl ml-0 text-sm">
          <p className="text-lg font-bold text-white mb-2">Contents:</p>
          <ul className="space-y-1">
            {toc
              .filter((item: { level: number }) => item.level === 2)
              .map((item: { text: string; id: string; level: number }) => (
                <li key={item.id} className={`ml-6`}>
                  <a
                    href={`#${item.id}`}
                    className="text-lg"
                    style={{ color: "white" }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      )}
      
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
