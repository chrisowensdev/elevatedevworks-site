// components/sections/service-hub/ServiceTimelineSection.tsx
"use client";

import * as React from "react";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";

type Props = {
	eyebrow?: string;
	title?: string;
	description?: React.ReactNode;
};

export default function ServiceTimelineSection({
	eyebrow = "Timeline",
	title = "What a typical build looks like",
	description = "Most projects move smoothly when content is ready. We’ll confirm timing after a quick walkthrough.",
}: Props) {
	const items: CardProps[] = [
		{
			eyebrow: "Week 1",
			title: "Structure + content",
			description:
				"We align on pages, collect essentials, and map the site so everything has a clear purpose.",
			variant: "mini",
		},
		{
			eyebrow: "Weeks 2–3",
			title: "Design + build",
			description:
				"We design and implement the system, then build pages with performance and clarity in mind.",
			variant: "mini",
		},
		{
			eyebrow: "Week 4",
			title: "Review + launch",
			description:
				"Polish, QA, final SEO checks, and a smooth go-live. Then we plan what’s next (if anything).",
			variant: "mini",
		},
		{
			eyebrow: "Optional",
			title: "Ongoing care",
			description:
				"If you want the site handled month-to-month, care keeps it fast, secure, and improving.",
			variant: "mini",
		},
	];

	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<Cards items={items} columns={4} cardVariant="mini" />
		</Section>
	);
}
