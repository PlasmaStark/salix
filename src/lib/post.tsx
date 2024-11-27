import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { CONTENT_DIR } from '@config';

// Legge un post dal file Markdown
export function getPostContent(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Usa gray-matter per leggere il frontmatter YAML
  const { data, content } = matter(fileContent);

  return {
    metadata: data, 
    content: marked(content), 
  };
}

// Lista dei post
export function getAllPosts() {
  const dirPath = CONTENT_DIR;
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
