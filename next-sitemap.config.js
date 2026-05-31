const fs = require("fs");
const path = require("path");

const urlToFile = {
  "/":           "src/app/page.tsx",
  "/about":      "src/app/about/page.tsx",
  "/academia":   "src/app/academia/page.tsx",
  "/chronicles": "src/app/chronicles/page.tsx",
  "/talks":      "src/app/talks/page.tsx",
  "/games":      "src/app/games/page.tsx",
};

function getLastMod(urlPath) {
  const rel = urlToFile[urlPath];
  if (!rel) return new Date().toISOString();
  try {
    return fs.statSync(path.join(process.cwd(), rel)).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.leonardoerrati.com",
  generateRobotsTxt: true,
  transform: async (config, urlPath) => {
    if (!urlToFile[urlPath] && !urlPath.match(/^\/(chronicles|talks)\/.+/)) return null;
    return {
      loc: urlPath,
      changefreq: config.changefreq ?? "daily",
      priority: config.priority ?? 0.7,
      lastmod: getLastMod(urlPath),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};