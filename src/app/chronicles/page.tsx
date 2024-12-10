import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CONTENT_DIR } from '@config';

export default function BlogPage() {
  // Legge tutti i file Markdown
  const files = fs.readdirSync(CONTENT_DIR);

  // Metadata file Markdown
  const posts = files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      slug: file.replace('.md', ''),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Chronicles</h1>
      <p className="text-lg text-center mb-10">
        A collection of personal chronicles.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        })
          .map((post) => (
        <li key={post.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <a href={`/chronicles/${post.slug}`} className="block p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
            <small className="text-sm text-gray-500">{post.date}</small>
            <p className="text-gray-700 mt-2">{post.description}</p>
          </a>
        </li>
          ))}
      </ul>
    </main>

  );
}
