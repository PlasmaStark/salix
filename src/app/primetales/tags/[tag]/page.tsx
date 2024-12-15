import Link from 'next/link';
import { getArticles, Article } from '@lib/getArticles';
import Breadcrumb from '@components/breadcrumb';

export default async function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = await params;
  const articles = getArticles().filter((article) => article.tags.includes(tag));;

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Prime tales</h1>
      <p className="text-lg text-center mb-10">
        This is a test page. It will host <b>Prime Tales</b>.
      </p>
      <ul className="grid grid-cols-1 gap-3">
        {articles
          .sort((a: Article, b: Article) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((article: Article) => (
            <li className="mb-4" key={article.slug}>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <a href={`/primetales/${article.slug}`} className="block p-6">
                    <h2 className="text-2xl font-semibold text-[var(--color-accent2)]">{article.title}</h2>
                    <small className="text-sm text-gray-500 mb-4">{article.date}</small>
                    <p className="text-gray-700">{article.description}</p>
                  </a>
                </div>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {article.tags.map((tag: string) => (
                    <li key={tag}>
                      <Link
                        href={`/primetales/tags/${tag}`}
                        className="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
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
