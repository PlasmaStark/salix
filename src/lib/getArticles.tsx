import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ARTICLE_DIR } from '@config';

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export function getArticles(): Article[] {
  const files = fs.readdirSync(ARTICLE_DIR);

  return files.map((file) => {
    const filePath = path.join(ARTICLE_DIR, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      slug: file.replace('.md', ''),
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
    };
  });
}
