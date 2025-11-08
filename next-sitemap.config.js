module.exports = {
	siteUrl: "https://elevatedevworks.com",
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	outDir: "out",
	changefreq: "weekly",
	priority: 0.7,
	sitemapSize: 50000,
	trailingSlash: true,
	exclude: ["/api/*", "/404", "/500"],
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
	},

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
