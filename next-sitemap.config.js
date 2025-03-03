/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.leonardoerrati.com',
  generateRobotsTxt: true,

  transform: async (config, path) => {
    if (path.startsWith('/starxive')) {
      return null; 
    }

    return {
      loc: path, 
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
