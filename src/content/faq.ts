export type FAQContext = "home" | "services" | "contact";

export type FAQ = {
	q: string;
	a: string;
	showOn: ("home" | "services" | "contact")[];
};

export const faqs: FAQ[] = [
	{
		q: "What kinds of businesses do you work with?",
		a: "We partner with service businesses, professional firms, SaaS, and local companies that need a fast, credible site that generates leads. Strategy, design, and SEO are tailored to your market and goals.",
		showOn: ["home", "services"],
	},
	{
		q: "How long does a website project take?",
		a: "Most small business sites launch in 3–6 weeks depending on scope. Content readiness, number of pages, integrations, and feedback turnaround are the biggest drivers of timeline.",
		showOn: ["home", "services"],
	},
	{
		q: "How much does a website cost?",
		a: "Projects are scoped clearly up front. Starter sites typically begin around $1k+, with more complex builds quoted after discovery. Hosting and maintenance plans are billed monthly.",
		showOn: ["home", "services"],
	},
	{
		q: "Do you offer SEO? What results can I expect?",
		a: "Yes. Every build includes technical and on-page SEO, plus performance tuning for Core Web Vitals. Ongoing SEO can include content, internal linking, and local SEO to grow qualified traffic over time.",
		showOn: ["services"],
	},
	{
		q: "Next.js or WordPress—what’s right for me?",
		a: "It depends on your content needs and workflows. Next.js excels at speed and flexibility; WordPress works well for marketing-heavy sites. We’ll recommend the best fit during discovery.",
		showOn: ["services"],
	},
	{
		q: "Do you provide hosting and maintenance?",
		a: "Yes. Managed hosting includes SSL/CDN, automated backups, updates, uptime and security monitoring, and a monthly report with traffic and SEO highlights.",
		showOn: ["services"],
	},
	{
		q: "Will my site be fast and accessible?",
		a: "Performance and accessibility are core requirements. We build mobile-first, optimize assets, and follow WCAG guidelines so your site is fast and usable for everyone.",
		showOn: ["services"],
	},
	{
		q: "Do you migrate content and set up redirects?",
		a: "Yes. We handle content migration, URL mapping, and 301 redirects to protect SEO during launch. Sitemaps are submitted and indexing is verified in Search Console.",
		showOn: ["services"],
	},
];
