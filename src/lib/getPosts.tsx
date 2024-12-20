import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BLOG_DIR } from '@config';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export function getPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
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
