import Link from 'next/link';

export type Post = {
    slug: string;
    title: string;
    coverImage: string;
    date: string;
    description: string;
    tags: string[];
};

export default function PostCard({ post }: { post: Post }) {
    return (
        <li key={post.slug}>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform">
                <Link href={`/primetales/${post.slug}`} className="block p-6">
                    {/* Card Image or Cover */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                            src={
                                post.coverImage.startsWith("/")
                                    ? post.coverImage
                                    : `/${post.coverImage}`
                            }
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                    </div>

                    {/* Titolo */}
                    <h2 className="text-2xl font-semibold text-[var(--color-accent2)] mb-2">
                        {post.title}
                    </h2>

                    {/* Data e Descrizione */}
                    <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                    <p className="text-gray-700 text-base">{post.description}</p>
                </Link>
            </div>
            {/* Tags */}
            <ul className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag: string) => (
                    <li key={tag}>
                        <Link
                            href={`/primetales/tags/${tag}`}
                            className="text-sm text-gray-600 bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 transition-colors duration-200"
                        >
                            #{tag}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}
