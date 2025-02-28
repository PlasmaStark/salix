import Link from 'next/link';
import { getContentList, ContentItem } from '@lib/getPosts';
import Breadcrumb from '@components/breadcrumb';
import { ARTICLE_DIR } from '@/config';
import Image from 'next/image'
import { getAllTags } from '@/lib/getPosts';

export async function generateStaticParams() {
  const tags = await getAllTags(ARTICLE_DIR);
  return tags.map((tag: string) => ({
    tag,
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const articles = getContentList(ARTICLE_DIR).filter((article) => article.tags.includes(tag));;

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Prime Tales</h1>
      <p className="text-lg text-center mb-10">
        <b>Prime Tales</b> is a sequence of scientific tales and algebraic anecdotes.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles
          .sort((a: ContentItem, b: ContentItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((article: ContentItem) => (
            <li key={article.slug}>
              <div className="bg-white rounded-lg">
                <Link href={`/primetales/${article.slug}`} className="block p-6 no-underline">
                  {/* Card Image or Cover */}
                  <div className="mb-4 rounded-lg overflow-hidden h-48">
                    <Image
                      src={
                        article.coverImage.startsWith("/")
                          ? `${article.coverImage}`
                          : `/${article.coverImage}`
                      }
                      height="800"
                      width="800"
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-accent">{article.title}</h2>
                  <div className="text-xs text-right text-gray-500 mb-2">{article.date}</div>
                  <p className="text-gray-700 text-base">{article.description}</p>
                </Link>
              </div>
              {/* Tags */}
              <ul className="flex flex-wrap gap-2 mt-3">
                {article.tags.map((tag: string) => (
                  <li key={tag}>
                    <Link
                      href={`/primetales/tags/${tag}`}
                      className="text-sm text-gray-600 bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 transition-colors duration-200 no-underline"
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
