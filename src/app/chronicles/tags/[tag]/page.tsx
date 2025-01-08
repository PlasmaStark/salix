import Link from 'next/link';
import Breadcrumb from '@components/breadcrumb';
import { getContentList, ContentItem } from '@lib/getPosts';
import { BLOG_DIR } from '@/config';
import { getAllTags } from '@/lib/getPosts';

export async function generateStaticParams() {
  const tags = await getAllTags(BLOG_DIR);
  return tags.map((tag: string) => ({
    tag,
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = getContentList(BLOG_DIR).filter((post) => post.tags.includes(tag));;

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
            <li className="mb-6" key={post.slug}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/chronicles/${post.slug}`} className="block p-4 no-underline">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-accent2)]">{post.title}</h2>
                  <small className="text-sm text-gray-500 mb-4 block">{post.date}</small>
                  <p className="text-gray-700 text-sm sm:text-base">{post.description}</p>
                </Link>
                <ul className="flex flex-wrap gap-2 mt-4 px-4 pb-4">
                  {post.tags.map((tag: string) => (
                    <li key={tag}>
                      <Link
                        href={`/chronicles/tags/${tag}`}
                        className="text-xs sm:text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 no-underline"
                      >
                        #{tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
