import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, BLOG_DIR } from '../../../../config';
import { getContentList } from '@/lib/getPosts';
import Image from 'next/image'
import path from 'path';
import fs from 'fs';

export async function generateStaticParams() {
  const posts = getContentList(BLOG_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content, bibliography, toc } = await getContent(slug, BLOG_DIR, BIBLIOGRAPHY_DIR);
  const filePath = path.join(process.cwd(), 'src/contents/chronicles', `${slug}.md`);
  const stats = fs.statSync(filePath);
  const lastMod = stats.mtime.toISOString();

  return (
    <article className="container mx-auto px-2 py-2">
      {/* Header */}
      <header className="mb-6">
        <Breadcrumb />
      </header>


      <div className="flex items-start gap-2 mb-1 max-w-2xl mx-auto block sm:hidden">
        <p className="text-normal text-gray-500">
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
          })}
        </p>
      </div>

      <div className="flex rounded-lg bg-white items-start p-4 max-w-2xl mx-auto">
        {/* Immagine */}
        <div className="w-[80px] sm:w-[120px] flex-shrink-0 mr-4">
          <Image
            src={
              metadata.coverImage.startsWith("/")
                ? `${metadata.coverImage}`
                : `/${metadata.coverImage}`
            }
            height="480"
            width="640"
            alt={metadata.title}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-lg sm:text-3xl font-bold text-accent">
            {metadata.title}
          </h1>
          <p className="text-normal sm:text-lg text-gray-700">
            {metadata.description}
          </p>

          {/* visibile solo da sm in su */}
          <p className="text-normal text-gray-500 hidden sm:block">
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
            })}
          </p>
        </div>
      </div>

      <ul className="flex items-start gap-2 mt-1 max-w-2xl mx-auto">
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

      {/* TOC */}
      {toc.length > 0 && (
        <nav className="mb-6 mt-6 max-w-xl mx-auto text-sm text-left bg-[#1a1a1a] p-4 rounded-lg shadow-inner border border-gray-700">
          <p className="text-lg font-bold text-white mb-2">Contents:</p>
          <ul className="space-y-1">
            {toc
              .filter((item: { level: number }) => item.level === 2)
              .map((item: { text: string; id: string; level: number }) => (
                <li key={item.id} className={`ml-6`}>
                  -{" "}
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

      {/* Contenuto */}
      <div
        className="prose prose-lg prose-invert max-w-full"
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
