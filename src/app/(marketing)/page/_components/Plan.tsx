"use client";

import { MessageSquare, LayoutTemplate, Rocket } from "lucide-react";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import { SectionActions } from "@/components/sections/SectionActions";

const stepCards: CardProps[] = [
	{
		eyebrow: "Step 1",
		title: "Send a quick message",
		description:
			"Share what you do and what you want. We'll clarify goals and the best next step.",
		icon: MessageSquare,
	},
	{
		eyebrow: "Step 2",
		title: "Get a clear homepage plan",
		description:
			"We map structure, messaging, and CTAs so visitors understand and act quickly.",
		icon: LayoutTemplate,
	},
	{
		eyebrow: "Step 3",
		title: "Build, launch, and support",
		description:
			"We design, build, launch, and keep your site fast, secure, and improving.",
		icon: Rocket,
	},
];

export default function Plan({
	actionText,
	actionUrl,
}: {
	actionText?: string;
	actionUrl?: string;
}) {
	return (
		<Section
			eyebrow="The Plan"
			title="A simple process that keeps things moving"
			description="No confusion, no long meetings, just a clear path from idea to launch."
		>
			<Cards items={stepCards} columns={3} accent />

			{actionText && actionUrl && (
				<SectionActions
					links={[
						{
							text: actionText,
							href: actionUrl,
						},
					]}
				/>
			)}
		</Section>
	);
}
