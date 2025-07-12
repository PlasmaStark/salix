import { getAllTags, getContentList } from '@lib/getPosts';
import { ARTICLE_DIR} from '../../../config';
import ContentList from '@/lib/ContentList';
import Breadcrumb from '../components/navigation/breadcrumb';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const tags = await getAllTags(ARTICLE_DIR);
  return tags.map((tag) => ({ tag }));
}

export const metadata: Metadata = {
  title: "PrimeTales",
  description: "",
};

export default async function PrimeTales() {
  const articles = await getContentList(ARTICLE_DIR);

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Prime Tales</h1>
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
