export type ProductFAQ = { q: string; a: string };

export type IncludedItem = {
	key: string;
	title: string;
	summary: string;
	details?: string[];
	imageSrc?: string;
	imageAlt?: string;
};

export const bookkeeperWebsite = {
	slug: "bookkeeper-websites",
	title: "Bookkeeper Website Design",
	subtitle:
		"A modern website built to help bookkeepers look established and attract better clients",
	description:
		"Productized website packages for bookkeepers — from a focused landing page to a full multi-page site designed to build trust and generate inquiries.",
	startingPrice: 750,
	monthlyCarePrice: 149,

	primaryCta: { label: "Request pricing", href: "/contact/" },

	secondaryCta: {
		label: "View live demo",
		href: "https://stoneledger.elevatedevworks.com",
	},

	demoNotice: "Demo site for portfolio purposes.",

	whoItsFor: [
		"Independent bookkeepers",
		"Virtual bookkeeping services",
		"Small bookkeeping firms",
		"Accountants offering bookkeeping support",
	],

	outcomes: [
		"Look professional and established online",
		"Turn website visitors into qualified inquiries",
		"Clearly explain bookkeeping services without confusing jargon",
		"Build trust with small business owners",
		"Mobile-first and fast-loading (performance-minded build)",
	],

	included: [
		{
			key: "homepage",
			title: "Conversion-focused homepage",
			summary:
				"A clean, structured homepage that builds trust and encourages inquiries.",
			details: [
				"Clear explanation of services and who you help",
				"Trust elements (experience, approach, service areas)",
				"Strategic CTA placement for consultations and inquiries",
			],
			imageSrc: "/images/demos/bookkeeper/home.webp",
			imageAlt: "Bookkeeper homepage demo screenshot",
		},

		{
			key: "services",
			title: "Services / Capabilities page",
			summary:
				"A structured page explaining your bookkeeping services clearly.",
			details: [
				"Monthly bookkeeping service explanation",
				"Catch-up and clean-up support sections",
				"CTA placement aligned with decision points",
			],
			imageSrc: "/images/demos/bookkeeper/capabilities.webp",
			imageAlt: "Bookkeeping services page demo screenshot",
		},

		{
			key: "process",
			title: "How it works page",
			summary:
				"A clear step-by-step explanation of your bookkeeping process.",
			details: [
				"Simple onboarding explanation",
				"Monthly bookkeeping workflow overview",
				"Sets expectations for communication and reporting",
			],
			imageSrc: "/images/demos/bookkeeper/howitworks.webp",
			imageAlt: "How it works page demo screenshot",
		},

		{
			key: "about",
			title: "About page",
			summary:
				"A credibility page that introduces the bookkeeper and approach.",
			details: [
				"Professional bio layout",
				"Approach to bookkeeping and communication",
				"Reinforced CTA for consultations",
			],
			imageSrc: "/images/demos/bookkeeper/about.webp",
			imageAlt: "About page demo screenshot",
		},

		{
			key: "faqs",
			title: "FAQs page",
			summary:
				"Answer common bookkeeping questions to reduce friction and increase inquiries.",
			details: [
				"What bookkeeping includes",
				"How catch-up work is handled",
				"What clients should expect monthly",
			],
			imageSrc: "/images/demos/bookkeeper/faq.webp",
			imageAlt: "FAQ page demo screenshot",
		},

		{
			key: "contact",
			title: "Contact page + inquiry flow",
			summary:
				"A contact experience designed to make it easy for business owners to reach out.",
			details: [
				"Clear next steps for inquiries",
				"Consultation request form",
				"Multiple CTA placements throughout the page",
			],
			imageSrc: "/images/demos/bookkeeper/contact.webp",
			imageAlt: "Contact page demo screenshot",
		},

		{
			key: "policy",
			title: "Privacy policy page",
			summary:
				"Basic website policies included to build trust and professionalism.",
			details: [
				"Privacy policy page included",
				"Contact form guidance",
				"Professional footer structure",
			],
		},

		{
			key: "seo",
			title: "Basic SEO foundations",
			summary:
				"Clean site structure and metadata so your website can be indexed properly.",
			details: [
				"Page titles and metadata",
				"Sitemap + robots.txt",
				"Clean URL structure and internal linking",
			],
		},

		{
			key: "performance",
			title: "Mobile optimization + performance pass",
			summary:
				"Fast-loading pages designed to work smoothly on phones and tablets.",
			details: [
				"Image optimization",
				"Mobile-first layout adjustments",
				"Performance-minded build defaults",
			],
		},

		{
			key: "revision",
			title: "1 revision round",
			summary: "A focused refinement pass after your initial review.",
			details: [
				"Copy or layout tweaks within scope",
				"CTA placement adjustments",
				"Small visual refinements",
			],
		},
	],

	carePlan: {
		title: "Ongoing Care Plan (peace of mind)",

		highlights: [
			"Hosting management + uptime checks",
			"Security monitoring + SSL management",
			"Monthly small updates (text/images/CTA changes)",
			"Help updating pages or adding small content updates",
			"Quarterly SEO/performance check",
		],

		boundaries: [
			"Up to ~30 minutes of updates per month",
			"Does not include major redesigns or new complex features",
			"Content updates should not include sensitive financial information",
		],
	},

	process: [
		{
			step: "01",
			title: "Discovery",
			description:
				"A short call to understand your services, clients, and how your website should present your business.",
		},

		{
			step: "02",
			title: "Customize",
			description:
				"We tailor the layout, messaging, and service explanations to match your bookkeeping business.",
		},

		{
			step: "03",
			title: "Launch",
			description:
				"Final checks, SEO setup, and deployment so your website is ready for real inquiries.",
		},

		{
			step: "04",
			title: "Support",
			description:
				"Optional ongoing care for updates, improvements, and peace of mind.",
		},
	],

	faqs: [
		{
			q: "Do I need hosting?",
			a: "No. EDW can manage hosting as part of the care plan, or we can deploy the site to your preferred provider.",
		},

		{
			q: "Can I update the content later?",
			a: "Yes. Updates can be handled through the care plan or we can provide guidance on updating simple content changes.",
		},

		{
			q: "How long does the build take?",
			a: "Because this is a productized website, it can typically launch faster than a custom build. Timing mostly depends on content readiness.",
		},

		{
			q: "Can you connect my domain?",
			a: "Yes. We can connect your domain and ensure everything routes properly when the site launches.",
		},

		{
			q: "Will the site work on mobile?",
			a: "Yes. All websites are built mobile-first and tested across common devices to ensure a smooth experience.",
		},
	] satisfies ProductFAQ[],
	packages: [
		{
			title: "Starter",
			price: "$750",
			description:
				"Single-page website designed to help bookkeepers look professional and start collecting inquiries quickly.",
			perfectFor:
				"new bookkeepers, referral-based businesses, or anyone who needs a clean web presence fast.",
			features: [
				"One-page scroll layout (hero, services overview, FAQ preview, contact)",
				"Professional trust-focused messaging tailored for bookkeeping services",
				"Privacy Policy page included",
				"Basic SEO (titles/meta), mobile optimization, deployment + domain connection",
				"1 revision round",
			],
		},
		{
			title: "Growth",
			price: "$1,250",
			description:
				"Full multi-page website with the core pages most bookkeepers need to build trust and convert inquiries.",
			perfectFor:
				"independent bookkeepers and small firms who want a polished site without a large custom build.",
			features: [
				"Home, Capabilities, How It Works, About, FAQ, Contact",
				"Clear service positioning and process-focused page structure",
				"Sitemap + robots + SEO basics across pages",
				"Privacy Policy page included",
				"1 revision round",
			],
			badge: "Recommended",
			salePrice: "$750",
			saleText: "New Product · first 3 clients",
		},
		{
			title: "Authority",
			price: "$2,500",
			description:
				"Growth + advanced conversion and expansion pages for bookkeepers ready to market more seriously.",
			perfectFor:
				"established bookkeepers who want stronger lead generation, niche targeting, or a more complete online presence.",
			features: [
				"Everything in Growth",
				"1 lead magnet or campaign landing page",
				"2 niche or industry-specific pages",
				"Google Business Profile tune-up",
				"Lightweight analytics setup",
				"1 revision round",
			],
		},
	],
};
