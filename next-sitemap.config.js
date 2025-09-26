// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://elevatedevworks.com", // non-www canonical
	generateRobotsTxt: false, // also creates robots.txt
	outDir: "out", // <- write into the export folder
	changefreq: "weekly",
	priority: 0.7,
	sitemapSize: 7000,
	exclude: ["/api/*"],

	robotsTxtOptions: {
		// Broad allow; add disallows if you have private routes
		policies: [{ userAgent: "*", allow: "/" }],
		// If you have extra sitemaps (e.g., blog on another subdomain), add them here:
		// additionalSitemaps: ["https://blog.elevatedevworks.com/sitemap.xml"],
	},

	// Optional: tweak priorities per route
	transform: async (config, path) => {
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
