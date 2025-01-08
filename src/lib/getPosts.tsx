import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
};

export function getContentList(directory: string): ContentItem[] {
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const filePath = path.join(directory, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      slug: file.replace('.md', ''),
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      coverImage: data.coverImage || null,
    };
  });
}

export function getAllTags(directory: string): string[] {
  const contentList = getContentList(directory);
  const tags = contentList.flatMap((content) => content.tags);
  return Array.from(new Set(tags));
}