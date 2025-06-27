import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkImages from './plugins/remark-images';

const Cite = require('citation-js');

const contentCache = new Map();
let bibliographyCache: any = null;

async function loadBibliographyOnce(bibFilePath: string) {
  if (!bibliographyCache) {
    const bibContent = await fs.readFile(bibFilePath, 'utf-8');
    bibliographyCache = new Cite(bibContent);
  }
  return bibliographyCache;
}

function createProcessor() {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkImages)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify);
  return processor;
}

export async function getContent(
  slug: string,
  directory: string,
  bibliographyFile: string
) {
  const cacheKey = `${slug}-${directory}-${bibliographyFile}`;
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey);
  }

  const filePath = path.join(directory, `${slug}.md`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const processor = createProcessor();
    const processedContent = await processor.process(content);

    const bibliography = await loadBibliographyOnce(bibliographyFile);
    const citationProcessing = processCitations(processedContent.toString(), bibliography);

    const result = {
      metadata: data,
      content: citationProcessing.htmlContent,
      bibliography: citationProcessing.bibliographyHtml,
    };

    contentCache.set(cacheKey, result);
    return result;
  } catch (err) {
    throw new Error(`Error processing content for slug "${slug}": ${err}`);
  }
}

function processCitations(content: string, bibliography: any) {
  const citationMap = new Map<string, number>();
  const citationOrder: string[] = [];
  let citationCounter = 1;

  const htmlContent = content.replace(/\[@(.*?)\]/g, (_, citationKey) => {
    if (!citationMap.has(citationKey)) {
      citationMap.set(citationKey, citationCounter);
      citationOrder.push(citationKey);
      citationCounter++;
    }
    const citationNumber = citationMap.get(citationKey);
    /*const reference = bibliography.data.find((entry: any) => entry.id === citationKey);
    const title = reference?.title || 'Unknown title';*/

    return `<span class="citation">[${citationNumber}]</span>`;
  });

  const bibliographyHtml = generateBibliographyHtml(citationOrder, bibliography);
  return { htmlContent, bibliographyHtml };
}

function generateBibliographyHtml(citationOrder: string[], bibliography: any): string {
  const bibliographyEntries = citationOrder.map((citationKey, index) => {
    const rawEntry = bibliography.get({ selector: citationKey, type: 'json' })[0];
    const formattedEntry = bibliography.format('bibliography', {
      type: 'html',
      entry: citationKey,
    });

    const url = rawEntry?.URL || rawEntry?.url || rawEntry?.note;
    const cleanedEntry = formattedEntry.replace(/https?:\/\/[^\s<]+/g, '');

    const wrappedEntry = url
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${cleanedEntry}</a>`
      : formattedEntry;

    return `<li id="ref-${index + 1}">${wrappedEntry}</li>`;
  });

  return `<ol class="bibliography">${bibliographyEntries.join('')}</ol>`;
}



