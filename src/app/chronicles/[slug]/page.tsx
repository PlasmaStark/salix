import { getContent } from '@lib/post';
import Breadcrumb from '@components/breadcrumb';
import Link from 'next/link';
import { BIBLIOGRAPHY_DIR, BLOG_DIR } from '@/config';
import { getContentList } from '@/lib/getPosts';
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = getContentList(BLOG_DIR);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: any }) {
  const { slug } = await params;
  const { metadata, content } = await getContent(slug, BLOG_DIR, BIBLIOGRAPHY_DIR);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6">
        <Breadcrumb />
      </header>

      {/* Titolo */}
      <div className="flex rounded-lg bg-white items-start p-4">
        {/* Immagine */}
        <div className="w-[120px] flex-shrink-0 mr-4">
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
          <h1 className="text-3xl font-bold text-accent">{metadata.title}</h1>
          <p className="text-sm text-gray-500">{metadata.date}</p>
          <p className="text-lg text-gray-700">{metadata.description}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 mb-6 mt-2">
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


      {/* Contenuto */}
      <div
        className="prose prose-lg prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
