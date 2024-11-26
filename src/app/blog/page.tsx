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
    <main>
      <h1>Il Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <small>{post.date}</small>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
