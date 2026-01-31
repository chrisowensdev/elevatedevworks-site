// src/content/locations.web-design.ts
export type WebDesignLocation = {
	slug: string; // "richmond-va"
	city: string; // "Richmond"
	state: string; // "VA"
	regionLabel?: string; // "Richmond Metro"
	nearby?: string[]; // ["Henrico", "Chesterfield", "Short Pump"]
	industries?: string[]; // ["Contractors", "Med Spas", "Professional Services"]
	introBlurb: string; // 2-3 sentence human intro (unique)
	whyThisLocation: string[]; // bullets unique to the location
	faqs: { q: string; a: string }[];
	priority?: "high" | "normal";
	index?: boolean; // allow you to noindex thinner/experimental pages
};

export const webDesignLocations: WebDesignLocation[] = [
	{
		slug: "richmond-va",
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
			"Elevate DevWorks builds fast, SEO-ready websites for Richmond small businesses—clear messaging, clean design, and a calm process that doesn't feel salesy.",
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
