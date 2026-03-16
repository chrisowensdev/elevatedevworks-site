export type seoLocation = {
	slug: string;
	metaTitle: string;
	metaDescription: string;
	city: string;
	state: string;
	regionLabel?: string;
	nearby?: string[];
	industries?: string[];
	introBlurb: string;
	whyThisLocation: string[];
	faqs: { q: string; a: string }[];
	priority?: "high" | "normal";
	index?: boolean;
};

export const seoLocations: seoLocation[] = [
	{
		slug: "richmond-va",
		metaTitle: "",
		metaDescription: "",
		city: "Richmond",
		state: "VA",
		regionLabel: "Richmond Metro",
		nearby: ["Henrico", "Chesterfield", "Short Pump", "Mechanicsville"],
		industries: [
			"Contractors",
			"Med Spas",
			"Local services",
			"Small professional firms",
		],
		introBlurb:
			"Elevate DevWorks helps Richmond businesses improve search visibility with stronger service pages, cleaner site structure, local relevance, and technical SEO foundations that support better long-term lead generation.",
		whyThisLocation: [
			"Designed for service businesses that rely on phone calls and quote requests.",
			"Mobile-first layouts that make it easy to tap-to-call, request an estimate, or book a consult.",
			"SEO foundations built in: technical setup, page structure, and performance.",
		],
		faqs: [
			{
				q: "Do you work with Richmond businesses remotely or in person?",
				a: "Both. Most projects run smoothly remote-first, and we can meet locally when it helps kickoff or content review.",
			},
			{
				q: "How long does a typical small business website take?",
				a: "Most sites land in a few weeks depending on content readiness. We'll give you a clear timeline after a quick walkthrough.",
			},
			{
				q: "Can you improve an existing site instead of rebuilding?",
				a: "Yes—if the foundation is workable. Otherwise we'll recommend a rebuild for speed, structure, and SEO.",
			},
		],
		priority: "high",
		index: true,
	},
	// Add more locations gradually with real uniqueness
];
