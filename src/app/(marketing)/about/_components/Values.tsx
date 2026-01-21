import type { CardProps } from "@/components/layout/Card";
import Cards from "@/components/layout/Cards";
import Section from "@/components/layout/Section";

const valueCards: CardProps[] = [
	{
		emoji: "✨",
		title: "Clarity over complexity",
		description:
			"We keep things simple and purposeful, no unnecessary plugins or bloated frameworks.",
		variant: "primary",
	},
	{
		emoji: "🤝",
		title: "Partnership first",
		description:
			"We listen, collaborate, and build around your goals, not ours.",
		variant: "primary",
	},
	{
		emoji: "🛠️",
		title: "Craft and care",
		description:
			"We treat every project like it's our own brand on the line.",
		variant: "primary",
	},
	{
		emoji: "🌱",
		title: "Sustainability",
		description:
			"We build for the long term, your site should grow with you, not hold you back.",
		variant: "primary",
	},
];

export default function Values() {
	return (
		<Section eyebrow="Our Values" title="What We Stand For" id="our-values">
			<Cards items={valueCards} columns={2} accent />
		</Section>
	);
}
