import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BLOG_DIR } from '@config';

export function getPostContent(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    metadata: data, 
    content: marked(content), 
  };
}

export function getAllPosts() {
  const dirPath = BLOG_DIR;
  const filenames = fs.readdirSync(dirPath);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const { metadata } = getPostContent(slug);

    return {
      slug,
      ...metadata,
    };
  });
}
