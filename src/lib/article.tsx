import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import { ARTICLE_DIR, BIBLIOGRAPHY_DIR } from '@config';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

const Cite = require('citation-js');

export async function getArticleContent(slug: string) {
  const filePath = path.join(ARTICLE_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  if (!data || !content) {
    throw new Error(`Metadata or content missing in file: ${slug}.md`);
  }

  // Elabora il contenuto Markdown
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  // Elabora il contenuto BibTeX
  const bibFilePath = path.join(BIBLIOGRAPHY_DIR, 'references.bib');
  const bibliography = loadBibliography(bibFilePath);

  const citationMap = new Map<string, number>(); // Mappa: chiave citazione -> numero
  const citationOrder: string[] = [];
  let citationCounter = 1;

  const htmlContent = processedContent.toString().replace(/\[@(.*?)\]/g, (_, citationKey) => {
    if (!citationMap.has(citationKey)) {
      citationMap.set(citationKey, citationCounter);
      citationOrder.push(citationKey);
      citationCounter++;
    }
    const citationNumber = citationMap.get(citationKey);
    const reference = bibliography.data.find((entry: any) => entry.id === citationKey);
    const title = reference?.title || "Unknown title";

    return `<span class="citation">"${title}" [${citationNumber}]</span>`;
  });

  const bibliographyHtml = generateBibliographyHtml(citationOrder, bibliography);

  return {
    metadata: data,
    content: String(htmlContent),
    bibliography: bibliographyHtml,
  };
}

function loadBibliography(bibFilePath: string) {
  const bibContent = fs.readFileSync(bibFilePath, 'utf-8');
  return new Cite(bibContent);
}

function generateBibliographyHtml(citationOrder: string[], bibliography: any): string {
  const bibliographyEntries = citationOrder.map((citationKey, index) => {
    const formattedEntry = bibliography.format('bibliography', {
      type: 'html',
      entry: citationKey,
    });

    return formattedEntry
      ? `<li id="ref-${index + 1}">${formattedEntry}</li>`
      : `<li id="ref-${index + 1}" class="citation-missing">[${citationKey}] Citazione non trovata</li>`;
  });

  return `<ol class="bibliography">${bibliographyEntries.join('')}</ol>`;
}
