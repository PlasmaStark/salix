import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, BLOG_DIR } from '../../../../config';
import { getContentList } from '@/lib/getPosts';
import Image from 'next/image';
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

  const coverSrc = metadata.coverImage
    ? (metadata.coverImage.startsWith('/') ? metadata.coverImage : `/${metadata.coverImage}`)
    : null;

  return (
    <article className="container max-w-3xl mx-auto px-2 py-2">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />

      <Breadcrumb />

      {/* Hero magazinistico */}
      {coverSrc && (
        <div className="relative w-full overflow-hidden rounded-lg mb-6" style={{ maxHeight: '420px' }}>
          <Image
            src={coverSrc}
            width={900}
            height={420}
            alt={metadata.title}
            className="object-cover w-full"
            style={{ maxHeight: '420px' }}
            priority
          />
          {/* Overlay con titolo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
            <ul className="flex flex-wrap gap-2 mb-3">
              {metadata.tags.map((tag: string) => (
                <li key={tag} className="text-xs no-underline uppercase tracking-widest text-white px-0.5 py-0.5">
                    {tag}
                </li>
              ))}
            </ul>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight mb-2">
              {metadata.title}
            </h1>
            <p className="text-base italic text-gray-200 leading-snug">
              {metadata.description}
            </p>
          </div>
        </div>
      )}

      {/* Se non c'è immagine, header testuale */}
      {!coverSrc && (
        <header className="mb-8 border-b border-gray-700 pb-6">
          <ul className="flex flex-wrap gap-2 mb-3">
            {metadata.tags.map((tag: string) => (
              <li key={tag}>
                <Link
                  href={`/chronicles/tags/${tag}`}
                  className="text-xs no-underline uppercase tracking-widest text-accent border border-accent/40 px-2 py-0.5 rounded-sm hover:bg-accent/10 transition-colors"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight mb-2">
            {metadata.title}
          </h1>
          <p className="text-base italic text-gray-400 leading-snug">
            {metadata.description}
          </p>
        </header>
      )}

      {/* Meta riga */}
      <p className="text-xs font-mono text-gray-500 mb-8">
        {new Date(metadata.date).toLocaleDateString("en-GB", {
          day: "numeric", month: "long", year: "numeric",
        })}
        {" · last modified "}
        {new Date(lastMod).toLocaleDateString("en-GB", {
          day: "numeric", month: "long", year: "numeric",
        })}
      </p>

      {/* TOC */}
      {toc.length > 0 && (
        <nav className="mb-8 max-w-xl text-sm bg-[#1a1a1a] p-4 rounded-lg border border-gray-700">
          <p className="text-sm font-semibold text-white mb-2 uppercase tracking-widest">Contents</p>
          <ul className="space-y-1">
            {toc
              .filter((item: { level: number }) => item.level === 2)
              .map((item: { text: string; id: string; level: number }) => (
                <li key={item.id} className="ml-2">
                  <a href={`#${item.id}`} className="text-gray-400 hover:text-accent transition-colors no-underline">
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

      {bibliography && bibliography.trim() !== '<ol class="bibliography"></ol>' && (
        <footer className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-xl font-semibold mb-4 uppercase tracking-widest text-gray-400">Bibliography</h2>
          <div dangerouslySetInnerHTML={{ __html: bibliography }} />
        </footer>
      )}
    </article>
  );
}