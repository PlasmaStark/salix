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
      <ul className="grid grid-cols-2 gap-4">
        {posts
          .sort((a: ContentItem, b: ContentItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post: ContentItem) => (
            <li className="mb-4" key={post.slug}>
              <div>
                <div className="bg-white rounded-lg">
                  <Link href={`/chronicles/${post.slug}`} className="block p-4 no-underline">
                    <h2 className="text-xl font-semibold text-[var(--color-accent2)]">{post.title}</h2>
                    <small className="text-sm text-gray-500 mb-4">{post.date}</small>
                    <p className="text-sm text-gray-700">{post.description}</p>
                  </Link>
                </div>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {post.tags.map((tag: string) => (
                    <li key={tag}>
                      <Link
                        href={`/chronicles/tags/${tag}`}
                        className="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300  no-underline"
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
