// components/sections/service-hub/ServiceGoodFitSection.tsx
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

export default function ServiceGoodFitSection({
	eyebrow = "Fit",
	title = "Is this the right kind of build?",
	description = "A quick check to make sure we’re aligned before we talk details.",
}: Props) {
	const items: CardProps[] = [
		{
			title: "Great fit if…",
			description: (
				<ul className="mt-1 space-y-2 text-sm text-gray-700">
					{[
						"You want a calm, guided process with clear steps.",
						"You need a professional site that loads fast and feels trustworthy.",
						"You’re a service business and your site’s job is leads, calls, or bookings.",
						"You care about maintainability and long-term quality.",
					].map((x) => (
						<li key={x} className="flex gap-2">
							<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
							<span className="leading-6">{x}</span>
						</li>
					))}
				</ul>
			),
			variant: "compact",
		},
		{
			title: "Not the best fit if…",
			description: (
				<ul className="mt-1 space-y-2 text-sm text-gray-700">
					{[
						"You need a site live in 48 hours with no time for structure/content.",
						"You want heavy animations or trends over clarity and speed.",
						"You’re looking for endless revisions without a defined scope.",
						"You want “SEO hacks” instead of steady fundamentals.",
					].map((x) => (
						<li key={x} className="flex gap-2">
							<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/60" />
							<span className="leading-6">{x}</span>
						</li>
					))}
				</ul>
			),
			variant: "compact",
		},
	];

	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<Cards items={items} columns={2} cardVariant="compact" />
		</Section>
	);
}
