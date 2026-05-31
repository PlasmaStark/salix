import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, TALKS_DIR } from '../../../../config';
import { getContentList } from '@/lib/getPosts';
import path from 'path';
import fs from 'fs';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getContentList(TALKS_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  title: "Talks",
  description: "Some public talks",
};

const targetStyle: Record<string, string> = {
  Beginner:     "bg-green-900 text-green-400",
  Intermediate: "bg-orange-900 text-accent",
  Advanced:     "bg-red-900 text-red-400",
};

export default async function TalkPost({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content } = await getContent(slug, TALKS_DIR, BIBLIOGRAPHY_DIR);
  const filePath = path.join(process.cwd(), "src/contents/talks", `${slug}.md`);
  const stats = fs.statSync(filePath);
  
  return (
    <article className="container max-w-3xl mx-auto px-2 py-2">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />

      <Breadcrumb />

      <header className="mb-8 border-b border-dashed border-gray-700 pb-6">
        {/* Livello + data */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {metadata.target && (
            <span className={`text-xs uppercase tracking-widest px-2 py-0.5 rounded-sm ${targetStyle[metadata.target] ?? "bg-gray-800 text-gray-400"}`}>
              {metadata.target}
            </span>
          )}
          <span className="font-mono text-xs text-gray-500">
            {new Date(metadata.date).toLocaleDateString("en-GB", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </span>
        </div>

        {/* Titolo */}
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight mb-3">
          {metadata.title}
        </h1>

        {/* Tag */}
        <ul className="flex flex-wrap gap-2">
          {metadata.tags.map((tag: string) => (
            <li key={tag}>
              <Link
                href={`/talks/tags/${tag}`}
                className="text-xs no-underline uppercase tracking-widest text-gray-500 border border-gray-700 px-2 py-0.5 rounded-sm hover:text-accent hover:border-accent transition-colors"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {/* Contenuto */}
      <div
        className="prose prose-invert max-w-full"
        style={{ overflowWrap: "break-word" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}