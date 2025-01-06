import Link from 'next/link';
import { getContentList, ContentItem } from '@lib/getPosts';
import Breadcrumb from '@components/breadcrumb';
import type { Metadata } from "next";
import { ARTICLE_DIR } from '@/config';

export const metadata: Metadata = {
  title: "Prime Tales",
  description: "Mathematical shenanigans",
};

export default async function PrimeTales({ params }: { params: { slug: string } }) {
  const articles: ContentItem[] = await getContentList(ARTICLE_DIR);

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
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform">
                <a href={`/primetales/${article.slug}`} className="block p-6 no-underline">
                  {/* Card Image or Cover */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={
                        article.coverImage.startsWith("/")
                          ? article.coverImage
                          : `/${article.coverImage}`
                      }
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Titolo */}
                  <h2 className="text-2xl font-semibold text-[var(--color-accent2)] mb-2">{article.title}</h2>

                  {/* Data e Descrizione */}
                  <div className="text-sm text-gray-500 mb-4">{article.date}</div>
                  <p className="text-gray-700 text-base">{article.description}</p>
                </a>
              </div>
              {/* Tags */}
              <ul className="flex flex-wrap gap-2 mt-3">
                {article.tags.map((tag: string) => (
                  <li key={tag}>
                    <Link
                      href={`/primetales/tags/${tag}`}
                      className="text-sm text-gray-600 bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 transition-colors duration-200  no-underline"
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
