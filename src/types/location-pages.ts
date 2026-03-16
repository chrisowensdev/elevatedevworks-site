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
	| "FileText";

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
