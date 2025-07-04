const { mapUrlToFile, getLastModForUrl } = require('./src/lib/Atlas');

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.leonardoerrati.com",
  generateRobotsTxt: true,

  transform: async (config, urlPath) => {
    const lastmod = getLastModForUrl(urlPath);

    if (!mapUrlToFile(urlPath)) return null;

    return {
      loc: urlPath,
      changefreq: config.changefreq ?? "daily",
      priority: config.priority ?? 0.7,
      lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
