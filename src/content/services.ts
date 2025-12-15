// data/services.ts
export type Service = {
	title: string;
	body: string;
	points?: string[];
	icon: "web" | "hosting" | "seo" | "design" | "care" | "analytics";
};

export const services: Service[] = [
	{
		title: "Custom Websites",
		icon: "web",
		body: "Custom-built on Next.js or WordPress with accessibility-first, conversion-focused design. Includes sitemap, content migration, and a launch checklist.",
		points: [
			"Discovery workshop & sitemap",
			"Wireframes → polished UI",
			"Responsive, mobile-first build",
			"Accessibility (WCAG) & performance",
			"Content migration & redirects",
		],
	},
	{
		title: "Hosting & Maintenance",
		icon: "hosting",
		body: "Managed hosting with SSL/CDN, automated backups, and proactive updates. Includes uptime & security monitoring plus a monthly health report.",
		points: [
			"Managed hosting (SSL/CDN/backups)",
			"Core/theme/plugin updates",
			"Uptime & security monitoring",
			"Bug fixes & small tweaks",
			"Monthly report (traffic & SEO)",
		],
	},
	{
		title: "SEO & Growth",
		icon: "seo",
		body: "Search visibility and measurement done right—keyword mapping, on-page SEO, Core Web Vitals tuning, and analytics/goals so you know what’s working.",
		points: [
			"Keyword research & page mapping",
			"On-page SEO (titles, meta, schema)",
			"Core Web Vitals & performance",
			"Analytics & goals setup",
			"Quarterly strategy check-in",
		],
	},
];
