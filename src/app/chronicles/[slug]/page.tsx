import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, BLOG_DIR } from '../../../../config';
import { getContentList } from '@/lib/getPosts';
import Image from 'next/image'
import path from 'path';
import fs from 'fs';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getContentList(BLOG_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
    title: "Chronicles",
    description: "A collection of personal chronicles",
};

export default async function BlogPost({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content, bibliography, toc } = await getContent(slug, BLOG_DIR, BIBLIOGRAPHY_DIR);
  const filePath = path.join(process.cwd(), 'src/contents/chronicles', `${slug}.md`);
  const stats = fs.statSync(filePath);
  const lastMod = stats.mtime.toISOString();

  return (
    <article className="container max-w-3xl mx-auto px-2 py-2">
      {/* Titolo */}
      <header className="mb-6">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        />
        <Breadcrumb />
        <h1 className="text-4xl font-bold text-white-800">{metadata.title}</h1>
        <p className="text-normal italic text-white-400">{metadata.description}</p>
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
<div className="w-fill mb-4 flex items-center justify-center">
      {/* Contenuto */}
<div className="w-[40%] overflow-hidden aspect-square">
  <Image
    src={metadata.coverImage.startsWith("/") ? metadata.coverImage : `/${metadata.coverImage}`}
    height={400}
    width={400}
    alt={metadata.title}
    className="object-cover w-full h-full" 
  />
</div>
</div>

      {/* TOC */}
      {toc.length > 0 && (
        <nav className="mb-8 mt-6 max-w-xl mx-auto text-sm text-left bg-[#1a1a1a] p-4 rounded-lg shadow-inner border border-gray-700">
          <p className="text-lg font-bold text-white mb-2">Contents:</p>
          <ul className="space-y-1">
            {toc
              .filter((item: { level: number }) => item.level === 2)
              .map((item: { text: string; id: string; level: number }) => (
                <li key={item.id} className={`ml-6`}>
                  -{" "}
                  <a
                    href={`#${item.id}`}
                    style={{ color: "white" }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      )}

      {/* Contenuto */}
      <div
        className="prose prose-invert max-w-full"
        style={{ overflowWrap: "break-word" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {bibliography &&
        bibliography.trim() !== '<ol class="bibliography"></ol>' && (
          <footer className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Bibliography</h2>
            <div dangerouslySetInnerHTML={{ __html: bibliography }} />
          </footer>
        )}
    </article>
  );
}
