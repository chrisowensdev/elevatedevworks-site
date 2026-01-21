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

export default function ServiceScopeSection({
	eyebrow = "Scope",
	title = "What’s included (and what’s optional)",
	description = "Everything starts with a strong foundation. From there, we add the pieces that match your goals.",
	actions,
}: Props) {
	const items: CardProps[] = [
		{
			title: "Included in every build",
			description: (
				<ul className="mt-1 space-y-2 text-sm text-gray-700">
					{[
						"Discovery call + structure planning",
						"Mobile-first design and clean build",
						"On-page SEO foundations (metadata + structure)",
						"Conversion paths (contact, booking, tap-to-call)",
						"Performance-minded implementation",
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
			title: "Common add-ons (when useful)",
			description: (
				<ul className="mt-1 space-y-2 text-sm text-gray-700">
					{[
						"Copywriting support or page rewrites",
						"Blog / publishing setup",
						"Integrations (CRM, forms, automations)",
						"Advanced SEO support",
						"Photography / content support (coordination)",
					].map((x) => (
						<li key={x} className="flex gap-2">
							<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/70" />
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
			{actions?.length ? <SectionActions links={actions} /> : null}
		</Section>
	);
}
