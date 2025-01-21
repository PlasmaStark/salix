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
      <ul className="grid grid-cols-1 gap-6">
        {posts
          .sort((a: ContentItem, b: ContentItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post: ContentItem) => (
            <li
              key={post.slug}
              className="hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Link che avvolge la card */}
              <Link href={`/chronicles/${post.slug}`} className="bg-white rounded-lg shadow-lg no-underline flex flex-col sm:flex-row">
                {/* Contenitore immagine con bordo bianco */}
                {post.coverImage && (
                  <div className="w-full sm:w-1/3 max-w-[150px] mx-auto sm:mx-0 flex-shrink-0 p-2 bg-white rounded-lg">
                    <Image
                      src={
                        post.coverImage.startsWith("/")
                          ? `${post.coverImage}`
                          : `/${post.coverImage}`
                      }
                      height="480"
                      width="640"
                      alt={post.title}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>
                )}

                {/* Contenuto */}
                <div className="p-6 sm:w-2/3">
                  {/* Titolo */}
                  <h2 className="text-2xl font-semibold text-[var(--color-accent2)] mb-2">
                    {post.title}
                  </h2>
                  {/* Data */}
                  <small className="block text-sm text-gray-500 mb-2">{post.date}</small>
                  {/* Descrizione */}
                  <p className="text-base text-gray-700">{post.description}</p>
                </div>
              </Link>

              {/* Tags sotto la card */}
              <ul className="flex flex-wrap gap-2 mt-2 pb-4">
                {post.tags.map((tag: string) => (
                  <li key={tag}>
                    <Link
                      href={`/chronicles/tags/${tag}`}
                      className="text-sm no-underline text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 transition-colors"
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
