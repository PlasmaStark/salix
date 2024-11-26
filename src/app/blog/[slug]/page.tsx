import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { CONTENT_DIR } from '@config';

interface BlogPostParams {
    slug: string;
  }

export async function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR);

  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }: { params: BlogPostParams }) {
    const { slug } = params;

  // Lettura file Markdown
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <main>
      <h1>{data.title}</h1>
      <small>{data.date}</small>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </main>
  );
}
