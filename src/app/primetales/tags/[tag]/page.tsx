import { getContentList, getAllTags } from '@/lib/getPosts';
import { ARTICLE_DIR } from '@/config';
import Breadcrumb from '@components/breadcrumb';
import ContentList from '@/lib/ContentList';

export async function generateStaticParams() {
  const tags = await getAllTags(ARTICLE_DIR);
  return tags.map((tag: string) => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const allArticles = await getContentList(ARTICLE_DIR);
  const articles = allArticles.filter(article => article.tags.includes(tag));

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">
        Prime Tales: <b>{tag}</b>
      </h1>
      <p className="text-lg text-center mb-10">
        <b>Prime Tales</b> is a sequence of scientific tales and algebraic
        anecdotes.
      </p>
      <ContentList
        contents={articles}
        baseRoute="primetales"
        variant="default"
      />
    </main>
  );
}