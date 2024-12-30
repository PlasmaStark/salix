import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import html from 'remark-html';
import markdown from 'remark-parse';
import math from 'remark-math';
import { ARTICLE_DIR } from '@config';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

export async function getArticleContent(slug: string) {
  const filePath = path.join(ARTICLE_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Verifica che data e content non siano undefined
  if (!data || !content) {
    throw new Error(`Metadata or content missing in file: ${slug}.md`);
  }
  console.log(String(content));

  // Elabora il contenuto Markdown
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content)
  console.log(String(processedContent));
  return {
    metadata: data,
    content: String(processedContent),
  };
}
