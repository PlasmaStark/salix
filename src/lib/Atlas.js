const fs = require('fs');
const path = require('path');

/**
 * URL sito -> path 
 * @param {string} urlPath
 * @returns {string|null}
 */
function mapUrlToFile(urlPath) {
  if (urlPath.includes('/tags/')) {
    urlPath = urlPath.split('/tags/')[0];
  }

  if (urlPath.startsWith('/starxive')) return null;
  if (urlPath.startsWith('/cryptopedia')) return null;

  if (urlPath === '/') return 'src/app/page.tsx';

  if (urlPath === '/about') return 'src/app/about/page.tsx';
  if (urlPath.startsWith('/about/')) {
    const slug = urlPath.replace('/about/', '');
    return `src/app/about/${slug}/page.tsx`;
  }

  if (urlPath === '/chronicles') return 'src/app/chronicles/page.tsx';
  if (urlPath.startsWith('/chronicles/')) {
    const slug = urlPath.replace('/chronicles/', '');
    return `src/contents/blog/${slug}.md`;
  }

  if (urlPath === '/primetales') return 'src/app/primetales/page.tsx';
  if (urlPath.startsWith('/primetales/')) {
    const slug = urlPath.replace('/primetales/', '');
    return `src/contents/articles/${slug}.md`;
  }

  if (urlPath === '/talks') return 'src/app/talks/page.tsx';
  if (urlPath.startsWith('/talks/')) {
    const slug = urlPath.replace('/talks/', '');
    return `src/contents/talks/${slug}.md`;
  }

  return null;
}

/**
 * Ritorna la data di ultima modifica di un file.
 * @param {string} urlPath
 * @returns {string|null}
 */
function getLastModForUrl(urlPath) {
  const filePath = mapUrlToFile(urlPath);
  if (!filePath) return null;

  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) return null;

  const stats = fs.statSync(fullPath);
  return stats.mtime.toISOString();
}

module.exports = {
  mapUrlToFile,
  getLastModForUrl,
};
