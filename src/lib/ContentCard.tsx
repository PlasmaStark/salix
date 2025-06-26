import Link from "next/link";
import { ContentItem } from "./getPosts";
import Image from 'next/image';

type ContentCardProps = {
  post: ContentItem;
  baseRoute: string;
  variant?: 'default' | 'small' | 'horizontal' | 'textual';
};

export default function ContentCard({
  post,
  baseRoute,
  variant = 'default',
}: ContentCardProps) {
  if (variant === 'small') {
    return (
      <li className="p-2 border rounded shadow hover:shadow-lg transition">
        <Link href={`/${baseRoute}/${post.slug}`} className="flex items-center gap-4 no-underline">
          <div className="w-24 h-16 relative">
            {post.coverImage && (
              <Image
                src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                alt={post.title}
                fill
                className="object-cover rounded"
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </Link>
      </li>
    );
  }

  if (variant === 'textual') {
    return (
      <li className="bg-white rounded-md p-4 flex flex-col">
        <Link href={`/${baseRoute}/${post.slug}`} className="no-underline mb-2">
          <h3 className="text-xl font-semibold text-accent truncate max-w-xl">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="text-normal text-gray-700 truncate max-w-xl">{post.description}</p>
        </Link>
        <ul className="flex flex-wrap gap-2 ml-4">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/${baseRoute}/tags/${tag}`}
                className="text-xs no-underline text-gray-600 bg-gray-200 rounded-full px-2 py-1 hover:bg-gray-300 transition-colors"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }


  if (variant === 'horizontal') {
    return (
      <li className="rounded-lg bg-white p-2">
        <Link href={`/${baseRoute}/${post.slug}`} className="no-underline">
          {post.coverImage && (
            <div className="flex items-start">
              <div className="w-[100px] flex-shrink-0 mr-4">
                <Image
                  src={post.coverImage.startsWith("/") ? post.coverImage : `/${post.coverImage}`}
                  height={480}
                  width={640}
                  alt={post.title}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold text-accent">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="text-normal text-gray-700">{post.description}</p>
              </div>
            </div>
          )}
        </Link>
        <ul className="flex flex-wrap gap-2 ml-1 mt-2 mb-1">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/${baseRoute}/tags/${tag}`}
                className="text-sm no-underline text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 transition-colors"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  // Default variant
  return (
    <li className="bg-white rounded-lg">
      <Link href={`/${baseRoute}/${post.slug}`} className="block px-4 py-2 no-underline">
        <h2 className="text-xl font-bold text-accent">{post.title}</h2>
        <small className="block text-sm text-gray-500 mb-2">{post.date}</small>
        {post.coverImage && (
          <div className="mb-4 rounded-md overflow-hidden">
            <Image
              src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
              width={640}
              height={480}
              alt={post.title}
              className="object-cover w-full h-auto rounded-md"
            />
          </div>
        )}
        <p className="text-normal text-gray-700">{post.description}</p>
      </Link>
      <ul className="flex flex-wrap gap-2 px-4 pb-4">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Link
              href={`/${baseRoute}/tags/${tag}`}
              className="text-xs no-underline text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 transition-colors"
            >
              #{tag}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
