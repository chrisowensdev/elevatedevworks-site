// components/sections/service-hub/ServiceDeliverablesSection.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";

type Props = {
	eyebrow?: string;
	title: string;
	description?: React.ReactNode;
	items: CardProps[];
	ctaHref?: string;
	ctaLabel?: string;
	secondaryHref?: string;
	secondaryLabel?: string;
};

export default function ServiceDeliverablesSection({
	eyebrow = "Deliverables",
	title,
	description,
	items,
	ctaHref,
	ctaLabel = "Discuss your project",
	secondaryHref = "/services#website-packages",
	secondaryLabel = "View website packages →",
}: Props) {
	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<Cards items={items} columns={2} cardVariant="compact" />

			{ctaHref ? (
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
					<Link
						href={ctaHref}
						className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
					>
						{ctaLabel}
					</Link>
					<Link
						href={secondaryHref}
						className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
					>
						{secondaryLabel}
					</Link>
				</div>
			) : null}
		</Section>
	);
}
