import { getPostContent } from '@lib_post';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { metadata, content } = getPostContent(params.slug);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Titolo */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-white-800">{metadata.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{metadata.date}</p>
      </header>

      {/* Contenuto */}
      <div
        className="prose prose-lg prose-gray"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
