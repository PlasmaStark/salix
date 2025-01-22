import Link from 'next/link';
import Breadcrumb from '@components/breadcrumb';
import { getContentList, ContentItem } from '@lib/getPosts';
import { TALKS_DIR } from '@/config';
import { getAllTags } from '@/lib/getPosts';

export async function generateStaticParams() {
  const tags = await getAllTags(TALKS_DIR);
  return tags.map((tag: string) => ({
    tag,
  }));
}

export default async function TalksPage() {
  const posts: ContentItem[] = await getContentList(TALKS_DIR);

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Talks</h1>
      <p className="text-lg text-center mb-10">
        This page contains public <b>talks</b> for diffusion or future fruition, regularly updated each time they are given. With time, these will become transcripts of most of my talks for <b>professionals</b> or <b>amateurs</b>. 
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts
          .sort((a: ContentItem, b: ContentItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post: ContentItem) => (
            <li key={post.slug} className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Link href={`/talks/${post.slug}`} className="block p-2 m-3 mb-0 no-underline">
                <h2 className="text-2xl font-bold text-accent">
                  {post.title}
                </h2>
                <small className="block text-sm text-gray-500 mb-2">first made: {post.date}</small>
                <p className="text-base text-gray-700">{post.description}</p>
              </Link>
              <ul className="flex flex-wrap gap-2 px-6 pb-4">
                {post.tags.map((tag: string) => (
                  <li key={tag}>
                    <Link
                      href={`/talks/tags/${tag}`}
                      className="text-xs  no-underline text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 transition-colors"
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
