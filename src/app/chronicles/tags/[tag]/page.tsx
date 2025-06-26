import { getContentList, getAllTags } from '@/lib/getPosts';
import { BLOG_DIR } from '@/config';
import Breadcrumb from '@components/breadcrumb';
import ContentList from '@/lib/ContentList';

export async function generateStaticParams() {
  const tags = await getAllTags(BLOG_DIR);
  return tags.map((tag) => ({ tag }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = await params;
  const allPosts = await getContentList(BLOG_DIR);
  const posts = allPosts.filter(post => post.tags.includes(tag));

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-4xl font-bold text-center mb-6">Chronicles: <b>{tag}</b></h1>
      <p className="text-lg text-center mb-10">
        <b>Chronicles</b> is a curated collection of personal tales: some amusing, others cautionary.
      </p>
      <ContentList
        contents={posts}
        baseRoute="chronicles"
        variant="horizontal"
      />
    </main>
  );
}
