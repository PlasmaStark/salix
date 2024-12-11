import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { CONTENT_DIR } from '@config';
import { getPosts, Post } from '@lib/getPosts';

  export default function TagPage({ params }: { params: { tag: string } }) {
    const { tag } = params;
    const posts = getPosts().filter((post) => post.tags.includes(tag));;
  
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Chronicles</h1>
        <p className="text-lg text-center mb-10">
          A collection of personal tales.
        </p>
        <ul className="grid grid-cols-1 gap-3">
          {posts
            .sort((a : Post, b : Post) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post : Post) => (
              <li className = "mb-4">
                <div>
                  <div key={post.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <a href={`/chronicles/${post.slug}`} className="block p-6">
                      <h2 className="text-xl font-semibold text-[var(--color-accent2)]">{post.title}</h2>
                      <small className="text-sm text-gray-500 mb-5">{post.date}</small>
                      <p className="text-gray-700">{post.description}</p>
                    </a>
                  </div>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag: string) => (
                      <li key={tag}>
                        <Link
                          href={`/chronicles/tags/${tag}`}
                          className="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
                        >
                          #{tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
        </ul>
      </main>
    );
  }
  