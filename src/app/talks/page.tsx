import { getContentList, getAllTags } from '@/lib/getPosts';
import { TALKS_DIR } from '@/config';
import Breadcrumb from '@components/breadcrumb';
import ContentList from '@/lib/ContentList';

export async function generateStaticParams() {
  const tags = await getAllTags(TALKS_DIR);
  return tags.map((tag: string) => ({
    tag,
  }));
}

export default async function TalksPage() {
  const posts = await getContentList(TALKS_DIR);

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Talks</h1>
      <p className="text-lg text-center mb-10">
        Public <b>talks</b> for diffusion or future fruition.
      </p>
      <ContentList
        contents={posts}
        baseRoute="talks"
        variant="textual"
      />
    </main>
  );
}
