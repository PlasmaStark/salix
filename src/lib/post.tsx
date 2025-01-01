import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const Cite = require('citation-js');

type ContentOptions = {
  bibliographyPath?: string;
};

export async function getContent(
  slug: string,
  directory: string,
  options: ContentOptions = {}
) {
  const filePath = path.join(directory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Gestione di LaTeX
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify);

  const processedContent = await processor.process(content);

  // Gestione delle citazioni BibTeX
  let bibliographyHtml = '';
  let htmlContent = processedContent.toString();

  if (options.bibliographyPath) {
    const bibliography = loadBibliography(options.bibliographyPath);
    const citationProcessing = processCitations(htmlContent, bibliography);
    htmlContent = citationProcessing.htmlContent;
    bibliographyHtml = citationProcessing.bibliographyHtml;
  }

  return {
    metadata: data,
    content: htmlContent,
    bibliography: bibliographyHtml,
  };
}

function loadBibliography(bibFilePath: string) {
  const bibContent = fs.readFileSync(bibFilePath, 'utf-8');
  return new Cite(bibContent);
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
    const reference = bibliography.data.find((entry: any) => entry.id === citationKey);
    const title = reference?.title || 'Unknown title';

    return `<span class="citation">"${title}" [${citationNumber}]</span>`;
  });

  const bibliographyHtml = generateBibliographyHtml(citationOrder, bibliography);

  return { htmlContent, bibliographyHtml };
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
