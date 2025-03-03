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
  id?: string;
  authors?: string;
  url?: string;
  type?: string;
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
      id: data.id || null,
      authors: data.authors || null,
      url: data.url || null,
      coverImage: data.coverImage || null,
    };
  });
}

export function getContentListFromJson(filepath: string): ContentItem[] {
  const fileContents = fs.readFileSync(filepath, 'utf-8');
  const data = JSON.parse(fileContents);
  return data.map((item: any) => ({
    slug: item.date + item.id,
    title: item.title,
    description: item.description,
    date: item.date,
    tags: item.tags || [],
    id: item.id || null,
    authors: item.authors || null,
    url: item.url || null,
    coverImage: item.coverImage || null,
    type: item.type,
  }));
}

export function getAllTags(directory: string): string[] {
  const contentList = getContentList(directory);
  const tags = contentList.flatMap((content) => content.tags);
  return Array.from(new Set(tags));
}

export function getAllTagsFromContent(contentItems: ContentItem[]): string[] {
  const allTags = contentItems.flatMap((item) => item.tags);
  return Array.from(new Set(allTags));
}
