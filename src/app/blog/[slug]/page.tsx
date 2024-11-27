import { getPostContent } from '@lib_post';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { metadata, content } = getPostContent(params.slug);

  return (
    <article>
      <h1 className="text-4xl font-bold">{metadata.title}</h1>
      <p className="text-sm text-gray-500">{metadata.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
