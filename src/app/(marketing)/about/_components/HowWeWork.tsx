import type { CardProps } from "@/components/layout/Card";
import Cards from "@/components/layout/Cards";
import Section from "@/components/layout/Section";

const generalApproachCards: CardProps[] = [
	{
		eyebrow: "01",
		title: "Discover your goals",
		description:
			"We start by understanding your vision, audience, and success metrics.",
	},
	{
		eyebrow: "02",
		title: "Design the roadmap",
		description:
			"A plan that fits your timeline and budget, no surprises, just clarity.",
	},
	{
		eyebrow: "03",
		title: "Build & launch",
		description:
			"Fast, responsive, and SEO-optimized sites with clean, maintainable code.",
	},
	{
		eyebrow: "04",
		title: "Support & grow",
		description:
			"We stick around with updates, hosting advice, and analytics guidance.",
	},
];

export default function HowWeWork() {
	return (
		<Section
			eyebrow="The Elevate Approach"
			title="How We Work"
			className="bg-white"
			id="how-we-work"
		>
			<Cards items={generalApproachCards} columns={4} accent />
		</Section>
	);
}
