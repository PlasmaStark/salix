import Link from "next/link";
import { ContentItem } from "./getPosts";
import Image from "next/image";

type ContentCardProps = {
  post: ContentItem;
  baseRoute: string;
  variant?:
    | "default"
    | "small"
    | "horizontal"
    | "textual"
    | "newspaper-featured"
    | "newspaper-secondary"
    | "conference";
};

export default function ContentCard({
  post,
  baseRoute,
  variant = "default",
}: ContentCardProps) {
  if (variant === "small") {
    return (
      <li className="p-2 border rounded shadow hover:shadow-lg transition">
        <Link
          href={`/${baseRoute}/${post.slug}`}
          className="flex items-center gap-4 no-underline"
        >
          <div className="w-24 h-16 relative">
            {post.coverImage && (
              <Image
                src={
                  post.coverImage.startsWith("/")
                    ? post.coverImage
                    : `/${post.coverImage}`
                }
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

  if (variant === "textual") {
    return (
      <li className="bg-gray-800 rounded-md p-4 flex flex-col">
        <Link href={`/${baseRoute}/${post.slug}`} className="no-underline mb-2">
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
            <span className="font-semibold text-white bg-accent2 px-2 py-0.5 rounded">
              {post.target}
            </span>
            <span className="text-gray-400">• {post.date}</span>
          </p>
          <h3 className="text-xl font-semibold text-accent truncate max-w-xl">
            {post.title}
          </h3>
          <p className="text-normal text-gray-700 truncate max-w-xl">
            {post.description}
          </p>
        </Link>
        <ul className="flex flex-wrap gap-2 mb-1">
          {post.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </li>
    );
  }

  if (variant === "horizontal") {
    return (
      <li className="bg-gray-800 flex flex-col m-2">
        <Link
          href={`/${baseRoute}/${post.slug}`}
          className="no-underline block"
        >
          <div className="flex flex-col items-center">
            {post.coverImage && (
              <div className="w-full overflow-hidden aspect-video ">
                <Image
                  src={
                    post.coverImage.startsWith("/")
                      ? post.coverImage
                      : `/${post.coverImage}`
                  }
                  height={400}
                  width={400}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="flex flex-col flex-grow w-full p-2">
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold text-foreground leading-tight mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 italic font-serif">
                "{post.description}"
              </p>
            </div>
          </div>
        </Link>
        <div className="mt-auto p-2 pt-0">
          <ul className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

if (variant === "newspaper-featured") {
  return (
    <li className="list-none border-b-2 border-gray-600 pb-6 mb-2">
      <Link href={`/${baseRoute}/${post.slug}`} className="no-underline group block">
        {post.coverImage && (
          <div className="w-full overflow-hidden mb-4" style={{ height: "280px" }}>
            <Image
              src={post.coverImage.startsWith("/") ? post.coverImage : `/${post.coverImage}`}
              alt={post.title}
              width={800}
              height={280}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent mb-2">
            {post.date} · {post.tags[0] ?? ""}
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-snug text-foreground mb-3 group-hover:text-accent transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            {post.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

  if (variant === "newspaper-secondary") {
    return (
      <li className="list-none border-b border-dashed border-gray-700 py-2">
        <Link
          href={`/${baseRoute}/${post.slug}`}
          className="no-underline group flex gap-3"
        >
          {post.coverImage && (
            <div className="w-48 shrink-0 overflow-hidden" style={{ height: "180px" }}>
              <Image
                src={
                  post.coverImage.startsWith("/")
                    ? post.coverImage
                    : `/${post.coverImage}`
                }
                alt={post.title}
                width={192}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-accent mb-0.5">
              {post.date} · {post.tags[0] ?? ""}
            </p>
            <h3 className="font-serif text-lg font-semibold leading-snug text-foreground line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5 leading-tight line-clamp-2">
              {post.description}
            </p>
          </div>
        </Link>
      </li>
    );
  }

  if (variant === "conference") {
    return (
      <li>
        <Link
          href={`/${baseRoute}/${post.slug}`}
          className="bg-gray-800 rounded-md p-4 no-underline group block"
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0">
            <span className="font-mono text-xs text-white-500">{post.date}</span>
            {post.target && (
              <span
                className={`text-xs uppercase tracking-widest ml-1 px-1.5 rounded-sm ${
                  post.target === "Beginner"
                    ? "text-green-400"
                    : post.target === "Intermediate"
                      ? "text-accent"
                      : post.target === "Advanced"
                        ? "text-red-400"
                        : "text-gray-400"
                }`}
              >
                {post.target}
              </span>
            )}
          </div>
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors leading-snug mb-1">
            {post.title}
          </h3>
          <p className="text-normal text-gray-400 leading-tight">
            {post.description}
          </p>
        </Link>
      </li>
    );
  }

  // Default variant
  return (
    <li className="bg-white rounded-lg">
      <Link
        href={`/${baseRoute}/${post.slug}`}
        className="block px-4 py-2 no-underline"
      >
        <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
          {post.date}
        </p>
        <h2 className="text-xl font-bold text-accent">{post.title}</h2>
        {post.coverImage && (
          <div className="mb-4 mt-2 rounded-md overflow-hidden">
            <Image
              src={
                post.coverImage.startsWith("/")
                  ? post.coverImage
                  : `/${post.coverImage}`
              }
              width={640}
              height={480}
              alt={post.title}
              className="object-cover w-full h-auto rounded-md"
            />
          </div>
        )}
        <p className="text-normal text-gray-700">{post.description}</p>
      </Link>
      <ul className="flex flex-wrap gap-2 px-4 mb-4">
        {post.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </li>
  );
}
