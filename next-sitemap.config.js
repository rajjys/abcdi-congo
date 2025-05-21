/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://abcdi.org',
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 7000, // Splits large sitemaps into multiple files
};
