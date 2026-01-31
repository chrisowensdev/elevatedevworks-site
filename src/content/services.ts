// data/services.ts
export type Service = {
	title: string;
	body: string;
	points?: string[];
	icon: "web" | "hosting" | "seo" | "design" | "care" | "analytics";
};

export type Packages = {
	name: string;
	blurb: string;
	description: string;
	price: string;
	itemsHeader: string;
	items: string[];
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
		body: "Search visibility and measurement done right—keyword mapping, on-page SEO, Core Web Vitals tuning, and analytics/goals so you know what's working.",
		points: [
			"Keyword research & page mapping",
			"On-page SEO (titles, meta, schema)",
			"Core Web Vitals & performance",
			"Analytics & goals setup",
			"Quarterly strategy check-in",
		],
	},
];

export const packages: Packages[] = [
	{
		name: "Starter Website",
		blurb: "A clean, modern website that builds trust and makes it easy for customers to reach you.",
		description:
			"Perfect for: new businesses, simple service providers, or anyone who needs a polished presence without complexity.",
		price: "From $1,200",
		itemsHeader: "Includes:",
		items: [
			"1-5 professionally designed pages",
			"Mobile-responsive layouts",
			"On-page SEO setup (titles/meta, indexing basics)",
			"Contact form + Google Maps integration",
			"Domain, SSL, and hosting configuration",
		],
	},
	{
		name: "Professional Presence",
		blurb: "A cohesive, professionally branded website that elevates your business and builds authority.",
		description:
			"Great for businesses that want a site they're proud to share — and messaging that's clearer and more persuasive.",
		price: "From $2,500",
		itemsHeader: "Includes everything in Starter, plus:",
		items: [
			"Custom design system (colors, type, layout styling)",
			"Copywriting assistance (clarity + persuasion)",
			"CRM / lead integrations",
			"Google Analytics + Search Console + conversion tracking setup",
		],
	},
	{
		name: "Growth Site / Lead Engine",
		blurb: "Turn your website into a lead engine that supports growth long-term.",
		description:
			"Built for businesses ready to publish content, rank higher, and measure what's working.",
		price: "From $4,500",
		itemsHeader: "Includes everything in Professional, plus:",
		items: [
			"SEO-optimized pages + advanced SEO setup",
			"Blog publishing system",
			"Lead tracking + automation workflows",
			"AI chatbot integration (optional; scoped to your needs)",
		],
	},
];
