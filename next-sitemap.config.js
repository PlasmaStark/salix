const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.leonardoerrati.com',
  generateRobotsTxt: true,

  transform: async (config, urlPath) => {
    if (urlPath.includes('/tags/')) urlPath = urlPath.split('/tags/')[0];

    if (urlPath.startsWith('/starxive')) return null;
    if (urlPath.startsWith('/cryptopedia')) return null;

    const mapUrlToFile = (url) => {
      if (url === '/') return 'src/app/page.tsx';
      if (url === '/about') return 'src/app/about/page.tsx';
      if (url.startsWith('/about/')) {
        const slug = url.replace('/about/', '');
        return `src/app/about/${slug}/page.tsx`;
      }
      if (url === '/chronicles') return 'src/app/chronicles/page.tsx';
      if (url.startsWith('/chronicles/')) {
        const slug = url.replace('/chronicles/', '');
        return `src/contents/blog/${slug}.md`;
      }
      if (url === '/primetales') return 'src/app/primetales/page.tsx';
      if (url.startsWith('/primetales/')) {
        const slug = url.replace('/primetales/', '');
        return `src/contents/articles/${slug}.md`;
      }
      if (url === '/talks') return 'src/app/talks/page.tsx';
      if (url.startsWith('/talks/')) {
        const slug = url.replace('/talks/', '');
        return `src/contents/talks/${slug}.md`;
      }
      return null;
    };

    const filePath = mapUrlToFile(urlPath);

    if (!filePath) {
      throw new Error(
        `[next-sitemap] Unable to resolve a file path for "${urlPath}". Check mapUrlToFile().`
      );
    }

    const fullPath = path.join(process.cwd(), filePath);

    if (!fs.existsSync(fullPath)) {
      throw new Error(
        `[next-sitemap] No file found for "${urlPath}". Expected: "${filePath}". Check if slug or filename is wrong.`
      );
    }

    const stats = fs.statSync(fullPath);
    const lastmod = stats.mtime.toISOString();

    return {
      loc: urlPath,
      changefreq: config.changefreq ?? 'daily',
      priority: config.priority ?? 0.7,
      lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};