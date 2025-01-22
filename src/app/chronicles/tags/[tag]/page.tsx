import Link from 'next/link';
import Breadcrumb from '@components/breadcrumb';
import { getContentList, ContentItem } from '@lib/getPosts';
import { BLOG_DIR } from '@/config';
import { getAllTags } from '@/lib/getPosts';
import Image from 'next/image';

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
      <ul className="grid grid-cols-1 gap-2 px-1 lg:mx-20">
        {posts
          .sort((a: ContentItem, b: ContentItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post: ContentItem) => (
            <li key={post.slug} className='hover:scale-105 transition-transform duration-300 ease-in-out'>
              <Link href={`/chronicles/${post.slug}`} className="no-underline">
                <div className="flex rounded-lg bg-white items-start p-4">
                  <div className="w-[100px] flex-shrink-0 mr-4">
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
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-accent">{post.title}</h2>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <p className="text-lg text-gray-700">{post.description}</p>
                  </div>
                </div>
              </Link>

              <ul className="flex flex-wrap gap-2 mt-1 pb-4">
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
