import { getContentList, getAllTags } from '@/lib/getPosts';
import { TALKS_DIR } from '../../../../../config';
import Breadcrumb from '@components/breadcrumb';
import ContentList from '@/lib/ContentList';

export async function generateStaticParams() {
  const tags = await getAllTags(TALKS_DIR);
  return tags.map((tag) => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const allTalks = await getContentList(TALKS_DIR);
  const posts = allTalks.filter(post => post.tags.includes(tag));

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">
        Talks: <b>{tag}</b>
      </h1>
      <p className="text-lg text-center mb-10">
        Public <b>talks</b> for diffusion or future fruition.
      </p>
      <ContentList contents={posts} baseRoute="talks" variant="textual" />
    </main>
  );
}
