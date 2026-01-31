export type ProductFAQ = { q: string; a: string };

export const healthAdvisorWebsite = {
	slug: "health-advisor-websites",
	title: "Health Advisor Website Launch",
	subtitle:
		"A modern website built to help health advisors earn more qualified calls",
	description:
		"Trustworthy, compliance-aware, senior-friendly design with clear conversion paths—built fast and maintained easily.",
	startingPrice: 750,
	monthlyCarePrice: 149,
	primaryCta: { label: "Request pricing", href: "/contact/" },
	secondaryCta: {
		label: "View live demo",
		href: "https://clearpath.elevatedevworks.com",
	},
	demoNotice: "Demo site for portfolio purposes.",
	whoItsFor: [
		"Licensed Health Advisors",
		"Medicare agents",
		"ACA marketplace brokers",
		"Independent agents and small agencies",
	],
	outcomes: [
		"Look established and trustworthy online",
		"Convert interest into scheduled coverage reviews",
		"Explain plans clearly without jargon-heavy copy",
		"Improve visibility with clean SEO structure",
		"Mobile-first and fast-loading (performance-minded build)",
	],
	included: [
		"Conversion-focused homepage",
		"Plans / Services page",
		"About page (with advisor photo section)",
		"FAQs page (product + process FAQs)",
		"Resources / Articles (lightweight markdown-based publishing)",
		"Contact page + CTA flow",
		"Privacy policy + Medicare disclaimer pages",
		"Basic SEO: titles/meta, clean URLs, sitemap + robots",
		"Mobile optimization + performance pass",
		"1 revision round",
	],
	carePlan: {
		title: "Ongoing Care Plan (peace of mind)",
		highlights: [
			"Hosting management + uptime checks",
			"Security + SSL monitoring",
			"Monthly small updates (text/images/CTA changes)",
			"Help adding/updating 1 resource post/month OR one small change request",
			"Quarterly SEO/performance check",
		],
		boundaries: [
			"Up to ~30 minutes of updates per month",
			"Does not include major redesigns or new complex features",
			"Not a HIPAA system; forms should not collect sensitive info",
		],
	},
	process: [
		{
			step: "01",
			title: "Discovery",
			description:
				"A quick call to understand your audience, services, and what a successful website needs to do.",
		},
		{
			step: "02",
			title: "Customize",
			description:
				"We tailor messaging, layout, and CTAs for Medicare/ACA audiences—clear, compliant-aware, and senior-friendly.",
		},
		{
			step: "03",
			title: "Launch",
			description:
				"Final checks, SEO basics, and a smooth go-live so it's ready for real traffic and calls.",
		},
		{
			step: "04",
			title: "Support",
			description:
				"Optional ongoing care for updates and improvements without constant back-and-forth.",
		},
	],
	faqs: [
		{
			q: "Do I need hosting?",
			a: "No—EDW can manage hosting as part of the care plan, or we can deploy to your preferred provider. We'll recommend the simplest setup for your situation.",
		},
		{
			q: "Can I edit content?",
			a: "Yes. You can request updates through EDW (care plan), or we can set up a simple workflow depending on how often you plan to change content.",
		},
		{
			q: "Is this HIPAA compliant?",
			a: "This website is not a HIPAA system and should not collect PHI. Forms can include guidance not to submit sensitive information.",
		},
		{
			q: "How fast can it go live?",
			a: "Because this is productized, turnaround is typically faster than fully custom builds. Timing depends mostly on content readiness.",
		},
		{
			q: "Can you connect my domain?",
			a: "Yes. We can connect your domain and ensure everything routes correctly on launch.",
		},
	] satisfies ProductFAQ[],
};
