export type LocationPageEntry = {
	slug: string;
	city: string;
	state: string;
	meta: {
		title: string;
		description: string;
	};
	hero: {
		headline: string;
		subtext: string;
	};
	localSection: {
		headline: string;
		body: string;
		bullets: string[];
	};
	finalCta: {
		headline: string;
		subtext: string;
	};
	faqOverrides?: {
		id: string;
		question: string;
		answer: string;
	}[];
	priority?: "high" | "normal";
	index: boolean;
};

//LocationProblemsSection.tsx
type ProblemItem = {
	title: string;
	description: string;
};

export type LocationProblemsSectionProps = {
	title: string;
	intro: string;
	items: ProblemItem[];
};

//LocationImprovementsSection.tsx
export type IconKey =
	| "MessageSquare"
	| "TrendingUp"
	| "Smartphone"
	| "Search"
	| "MapPin"
	| "Wrench"
	| "FileText"
	| "RefreshCw"
	| "ShieldCheck"
	| "LifeBuoy";

export type LocationImprovementCardProps = {
	title: string;
	description: string;
	iconKey: IconKey;
	// icon: React.ElementType;
};

export type LocationImprovementsSectionProps = {
	eyebrow?: string;
	title: string;
	intro: string;
	desktopImgSrc?: string;
	desktopImgAlt?: string;
	mobileImgSrc?: string;
	mobileImgAlt?: string;
	items: LocationImprovementCardProps[];
	maintenanceGraphic?: boolean;
};

//LocationContextSection.tsx
export type LocationContextSectionProps = {
	eyebrow?: string;
	title: string;
	description: string;
	points: string[];
};

//LocationGoodFit.tsx

export type LocationGoodFitSectionProps = {
	eyebrow: string;
	title: string;
	intro: string;
	items: string[];
};
