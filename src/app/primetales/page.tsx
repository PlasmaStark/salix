import { getAllTags, getContentList } from '@lib/getPosts';
import { PRIME_TALES_DIR} from '@/config';
import ContentList from '@/lib/ContentList';
import Breadcrumb from '../components/navigation/breadcrumb';

export async function generateStaticParams() {
  const tags = await getAllTags(PRIME_TALES_DIR);
  return tags.map((tag) => ({ tag }));
}

export default async function PrimeTales() {
  const articles = await getContentList(PRIME_TALES_DIR);

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Prime Tales</h1>
      <p className="text-lg text-center mb-10">
        <b>Prime Tales</b> is a sequence of scientific tales and algebraic anecdotes.
      </p>
      <ContentList 
        contents={articles} 
        baseRoute="primetales" 
        variant="default"/>
    </main>
  );
}
