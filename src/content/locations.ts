export type LocationServicePage = {
	slug: string; // "richmond-va"
	city: string; // "Richmond"
	state: string; // "VA"
	serviceLabel?: string; // default: "Web Design"
	hero: {
		eyebrow?: string;
		title: string;
		description: string;
		trustLine?: string; // "Richmond, VA-based • Remote-friendly • No pushy sales"
		primaryCtaText?: string;
		primaryCtaHref?: string; // "/contact?intent=web-design&location=richmond-va"
		secondaryCtaText?: string;
		secondaryCtaHref?: string; // "/work"
		note?: string; // small note under CTAs
	};
	sections: Array<
		| {
				type: "highlights";
				eyebrow?: string;
				title: string;
				description?: string;
				items: { title: string; body: string }[];
		  }
		| {
				type: "who";
				eyebrow?: string;
				title: string;
				goodFit: string[];
				notIdeal?: string[];
		  }
		| {
				type: "process";
				eyebrow?: string;
				title: string;
				steps: { title: string; body: string }[];
		  }
		| {
				type: "faq";
				eyebrow?: string;
				title: string;
				items: { q: string; a: string }[];
		  }
		| {
				type: "cta";
				title: string;
				body: string;
				primaryText: string;
				primaryHref: string;
				secondaryText?: string;
				secondaryHref?: string;
		  }
	>;
	seo: {
		title: string; // full meta title for the location page
		description: string;
		canonicalPath: string; // "/web-design/richmond-va"
	};
};

export const locationPages: LocationServicePage[] = [
	{
		slug: "richmond-va",
		city: "Richmond",
		state: "VA",
		serviceLabel: "Web Design",
		hero: {
			eyebrow: "Web Design",
			title: "Web design for small businesses in Richmond, VA",
			description:
				"Fast, SEO-ready websites that build trust and turn visits into calls. Clear messaging, clean design, and a reliable build process.",
			trustLine: "Richmond, VA-based • Remote-friendly • No pushy sales",
			primaryCtaText: "Discuss your project",
			primaryCtaHref:
				"/contact?intent=web-design&location=richmond-va&subject=Web%20Design%20in%20Richmond%20VA",
			secondaryCtaText: "View recent work",
			secondaryCtaHref: "/work",
			note: "Prefer a low-pressure start? Request a Website Assessment for clear next steps.",
		},
		sections: [
			{
				type: "highlights",
				eyebrow: "What you get",
				title: "A website that looks professional and performs",
				description:
					"Built for clarity, speed, and search visibility—without agency chaos.",
				items: [
					{
						title: "Clear messaging & structure",
						body: "We make it obvious what you do, who it’s for, and what to do next.",
					},
					{
						title: "Mobile-first experience",
						body: "Spacing, typography, and tap targets tuned for real phones—not just desktop.",
					},
					{
						title: "SEO fundamentals baked in",
						body: "Titles/meta, headings, schema basics, and crawlable pages that support growth.",
					},
					{
						title: "Speed & performance",
						body: "Modern build practices, image optimization, and Core Web Vitals awareness.",
					},
					{
						title: "Reliable launch support",
						body: "Redirects, sitemap/robots, analytics/consent, and post-launch checks.",
					},
				],
			},
			{
				type: "who",
				eyebrow: "Best fit",
				title: "Who this is for",
				goodFit: [
					"Local service businesses (contractors, home services, clinics, consultants)",
					"Solo professionals who need a credible online presence",
					"Businesses with an existing site that needs modernization and clarity",
				],
				notIdeal: [
					"Brand-new businesses still figuring out their offer (start with a project discussion)",
				],
			},
			{
				type: "process",
				eyebrow: "How it works",
				title: "Simple steps, clear delivery",
				steps: [
					{
						title: "Discover & plan",
						body: "Goals, audience, pages, and the simplest path to results.",
					},
					{
						title: "Design & copy support",
						body: "Clean layout + messaging that reduces confusion and increases action.",
					},
					{
						title: "Build & QA",
						body: "Fast, accessible implementation with device testing.",
					},
					{
						title: "Launch & measure",
						body: "Sitemap, indexing, analytics/consent, and baseline metrics.",
					},
				],
			},
			{
				type: "faq",
				eyebrow: "FAQ",
				title: "Questions we get in Richmond",
				items: [
					{
						q: "Do you only work with Richmond businesses?",
						a: "Richmond is home base, but we’re remote-friendly and work with businesses across the US.",
					},
					{
						q: "Do you handle hosting and maintenance?",
						a: "Yes—hosting, updates, backups, monitoring, and small changes are available via monthly care plans.",
					},
					{
						q: "How long does a small business site take?",
						a: "Most small sites launch in 3–6 weeks depending on scope and how ready the content is.",
					},
				],
			},
			{
				type: "cta",
				title: "Ready for a stronger website in Richmond?",
				body: "If your site feels outdated, slow, or unclear, let’s map the simplest next step.",
				primaryText: "Discuss your project",
				primaryHref:
					"/contact?intent=web-design&location=richmond-va&subject=Web%20Design%20in%20Richmond%20VA",
				secondaryText: "Request a website assessment",
				secondaryHref: "/website-assessment",
			},
		],
		seo: {
			title: "Web Design Richmond VA | Elevate DevWorks",
			description:
				"Web design for small businesses in Richmond, VA. Fast, SEO-ready websites built for clarity, performance, and lead generation.",
			canonicalPath: "/web-design/richmond-va",
		},
	},
];
