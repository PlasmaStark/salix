import Link from 'next/link';
import Breadcrumb from '@components/breadcrumb';
import { getContentList, ContentItem } from '@lib/getPosts';
import { BLOG_DIR } from '@/config';
import { getAllTags } from '@lib/getPosts';
import Image from 'next/image';

export async function generateStaticParams() {
  const tags = await getAllTags(BLOG_DIR);
  return tags.map((tag: string) => ({
    tag,
  }));
}

export default async function BlogPage() {
  const posts: ContentItem[] = await getContentList(BLOG_DIR);

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Chronicles</h1>
      <p className="text-lg text-center mb-10">
        <b>Chronicles</b> is a curated collection of personal tales: some amusing, others cautionary.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts
          .sort((a: ContentItem, b: ContentItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post: ContentItem) => (
            <li key={post.slug} className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link href={`/chronicles/${post.slug}`} className="block p-6 no-underline">
                {/* Immagine di copertura */}
                {post.coverImage && (
                  <div className="mb-4 rounded-lg overflow-hidden h-48">
                    <Image
                      src={
                        post.coverImage.startsWith("/")
                          ? `${post.coverImage}`
                          : `/${post.coverImage}`
                      }
                      height="800"
                      width="800"
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Titolo */}
                <h2 className="text-2xl font-semibold text-[var(--color-accent2)] mb-2">{post.title}</h2>
                {/* Data e Descrizione */}
                <small className="block text-sm text-gray-500 mb-2">{post.date}</small>
                <p className="text-base text-gray-700">{post.description}</p>
              </Link>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 mt-2 px-6 pb-4">
                {post.tags.map((tag: string) => (
                  <li key={tag}>
                    <Link
                      href={`/chronicles/tags/${tag}`}
                      className="text-xs no-underline text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 transition-colors"
                    >
                      #{tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </main>
  );
}
