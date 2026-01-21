// components/sections/service-hub/ServiceAfterLaunchSection.tsx
"use client";

import * as React from "react";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import { SectionActions } from "../SectionActions";

type Props = {
	eyebrow?: string;
	title?: string;
	description?: React.ReactNode;
	actions?: { text: string; href: string }[];
};

export default function ServiceAfterLaunchSection({
	eyebrow = "After launch",
	title = "Keep it healthy after it goes live",
	description = "Most sites don’t break all at once — they drift over time. Ongoing care keeps performance, security, and visibility moving in the right direction.",
	actions,
}: Props) {
	const items: CardProps[] = [
		{
			title: "Maintenance + updates",
			description:
				"Small fixes, monitoring, and updates handled consistently so issues don’t pile up.",
			variant: "compact",
		},
		{
			title: "Performance checks",
			description:
				"Periodic reviews to keep load time and Core Web Vitals healthy as content evolves.",
			variant: "compact",
		},
		{
			title: "Practical SEO iteration",
			description:
				"Steady improvements that compound — no gimmicks, just clarity and consistency.",
			variant: "compact",
		},
	];

	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<Cards items={items} columns={3} cardVariant="compact" />
			{actions?.length ? <SectionActions links={actions} /> : null}
		</Section>
	);
}
