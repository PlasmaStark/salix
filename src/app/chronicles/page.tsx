import Breadcrumb from '@components/breadcrumb';
import { getContentList } from '@lib/getPosts';
import { BLOG_DIR } from '../../../config';
import { getAllTags } from '@/lib/getPosts';
import ContentList from '@/lib/ContentList';

export async function generateStaticParams() {
  const tags = await getAllTags(BLOG_DIR);
  return tags.map((tag: string) => ({
    tag,
  }));
}

export default async function ChroniclesPage() {
  const posts = await getContentList(BLOG_DIR);

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Chronicles</h1>
      <p className="text-lg text-center mb-10">
        <b>Chronicles</b> is a curated collection of personal tales: some
        amusing, others cautionary.
      </p>
      <ContentList
        contents={posts}
        baseRoute="chronicles"
        variant="horizontal"
      />
    </main>
  );
}
