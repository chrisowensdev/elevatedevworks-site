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
		let priority = 0.7;
		if (path.startsWith("/work/")) priority = 0.4; // Lower priority for case studies
		if (path === "/") priority = 1.0;
		if (path === "/services") priority = 0.9;
		if (path === "/privacy" || path === "/terms") priority = 0.1;

		return {
			loc: path,
			changefreq: "monthly",
			priority,
			lastmod: new Date().toISOString(),
		};
	},
};
