import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, TALKS_DIR } from '../../../../config';
import { getContentList } from '@/lib/getPosts';
import path from 'path';
import fs from 'fs';

export async function generateStaticParams() {
  const posts = getContentList(TALKS_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content } = await getContent(slug, TALKS_DIR, BIBLIOGRAPHY_DIR);
  const filePath = path.join(process.cwd(), "src/contents/talks", `${slug}.md`);
  const stats = fs.statSync(filePath);
  const lastMod = stats.mtime.toISOString();

  return (
    <article className="max-w-3xl mx-auto px-2 py-2">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
      />
      {/* Titolo */}
      <header className="mb-6">
        <Breadcrumb />
        <h1 className="text-4xl font-bold text-white-800">{metadata.title}</h1>
        <p className="text-normal text-gray-500 mt-2">
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
                href={`/talks/tags/${tag}`}
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
