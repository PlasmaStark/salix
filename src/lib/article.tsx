import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ARTICLE_DIR } from '@config';

export function getArticleContent(slug: string) {
  const filePath = path.join(ARTICLE_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content: marked(content),
  };
}

export function getAllArticles() {
  const dirPath = ARTICLE_DIR;
  const filenames = fs.readdirSync(dirPath);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const { metadata } = getArticleContent(slug);

    return {
      slug,
      ...metadata,
    };
  });
}
