// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://elevatedevworks.com",
	generateRobotsTxt: true,
	outDir: "./public", // write sitemap & robots.txt into /public for static export
	changefreq: "weekly",
	priority: 0.7,
	sitemapSize: 7000,
	exclude: ["/api/*"],

	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
		additionalSitemaps: ["https://elevatedevworks.com/sitemap.xml"],
	},

	transform: async (config, path) => {
		// Fine-tune priorities if you’d like
		const prioMap = {
			"/": 1.0,
			"/services": 0.9,
			"/work": 0.8,
			"/about": 0.8,
			"/contact": 0.8,
		};
		return {
			loc: path,
			changefreq: "weekly",
			priority: prioMap[path] ?? 0.7,
			lastmod: new Date().toISOString(),
		};
	},
};
