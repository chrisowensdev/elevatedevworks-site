export type ProductFAQ = { q: string; a: string };

export type IncludedItem = {
	key: string;
	title: string;
	summary: string; // short for cards
	details?: string[]; // longer bullets for expanded section
	imageSrc?: string; // screenshot (optional)
	imageAlt?: string;
};

export const healthAdvisorWebsite = {
	slug: "health-advisor-websites",
	title: "Health Advisor Website Launch",
	subtitle:
		"A modern website built to help health advisors earn more qualified calls",
	description:
		"Productized website packages for licensed health advisors — from a clean 1-page launch to a full multi-page site with resources.",
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
		{
			key: "homepage",
			title: "Conversion-focused homepage",
			summary:
				"Clear trust signals, simple structure, and a primary CTA that drives coverage review requests.",
			details: [
				"Senior-friendly hierarchy and readable type",
				"Trust elements (credentials, service area, clear contact paths)",
				"Primary CTA placement tuned for calls and form submissions",
			],
			imageSrc: "/images/demos/health-advisor/home.webp",
			imageAlt: "Homepage demo screenshot",
		},
		{
			key: "plans",
			title: "Plans / Services page",
			summary:
				"A structured page that explains what you help with without overwhelming visitors.",
			details: [
				"Clear categories (Medicare, ACA, supplemental)",
				"Plain-language copy structure",
				"Strong CTAs at natural decision points",
			],
			imageSrc: "/images/demos/health-advisor/plans.webp",
			imageAlt: "Services page demo screenshot",
		},
		{
			key: "about",
			title: "About page (with advisor photo section)",
			summary:
				"A credibility page that makes the business feel real and trustworthy.",
			details: [
				"Advisor photo + short bio layout",
				"Licensing/experience/approach highlights",
				"Reinforced CTA for coverage review",
			],
			imageSrc: "/images/demos/health-advisor/about.webp",
			imageAlt: "About page demo screenshot",
		},
		{
			key: "faqs",
			title: "FAQs page (product + process FAQs)",
			summary:
				"Answer common questions upfront to reduce friction and increase inquiries.",
			details: [
				"What you help with + what to expect",
				"Boundaries and disclaimers where appropriate",
				"CTA after key answers",
			],
			imageSrc: "/images/demos/health-advisor/faq.webp",
			imageAlt: "FAQ page demo screenshot",
		},
		{
			key: "resources",
			title: "Resources / Articles (lightweight publishing)",
			summary:
				"Simple educational posts to build trust and support SEO over time.",
			details: [
				"Markdown-based posts (fast + maintainable)",
				"Clean article layout (readable on mobile)",
				"Optional monthly post support via care plan",
			],
			imageSrc: "/images/demos/health-advisor/resources.webp",
			imageAlt: "Resources page demo screenshot",
		},
		{
			key: "contact",
			title: "Contact page + CTA flow",
			summary:
				"A contact experience designed for calls, quick questions, and coverage reviews.",
			details: [
				"Tap-to-call and clear next steps",
				"Form messaging to avoid sensitive info",
				"Multiple CTA placements without feeling pushy",
			],
			imageSrc: "/images/demos/health-advisor/contact.webp",
			imageAlt: "Contact page demo screenshot",
		},
		{
			key: "policy",
			title: "Privacy policy + Medicare disclaimer pages",
			summary:
				"Compliance-aware basics and trust-friendly policies included.",
			details: [
				"Privacy policy page included",
				"Medicare disclaimer page included",
				"Form guidance (don't submit sensitive info)",
			],
		},
		{
			key: "seo",
			title: "Basic SEO foundations",
			summary:
				"Titles/meta, clean URLs, sitemap + robots—set up for indexing and clarity.",
			details: [
				"Metadata and page structure",
				"Sitemap + robots.txt",
				"Clean internal linking setup",
			],
		},
		{
			key: "performance",
			title: "Mobile optimization + performance pass",
			summary:
				"Fast-loading pages with clean assets and mobile-first behavior.",
			details: [
				"Image optimization + sane layout shifts",
				"Mobile typography and spacing checks",
				"Performance-minded build defaults",
			],
		},
		{
			key: "revision",
			title: "1 revision round",
			summary: "A focused refinement pass after your initial review.",
			details: [
				"Copy/layout tweaks within scope",
				"CTA placement adjustments",
				"Small visual refinements",
			],
		},
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
