"use client";

import * as React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";

export type ServiceHubLocation = {
	slug: string;
	city: string;
	state: string;
	regionLabel?: string;
	nearby?: string[];
	priority?: "high" | "normal";
	index?: boolean;
};

type Props = {
	eyebrow?: string;
	title?: string;
	description?: React.ReactNode;

	locations: ServiceHubLocation[];
	basePath?: string; // e.g. "/web-design"
	ctaHref?: string; // e.g. "/contact"
	max?: number;
};

export default function ServiceAreaSection({
	eyebrow = "Service area",
	title = "Local pages",
	description = "Local pages include practical details and FAQs. If you don’t see your area, you can still reach out.",
	locations,
	basePath = "/web-design",
	ctaHref = "/contact",
	max = 9,
}: Props) {
	const featured = React.useMemo(() => {
		return locations
			.filter((l) => l.index !== false)
			.sort((a, b) => {
				const ap = a.priority === "high" ? 0 : 1;
				const bp = b.priority === "high" ? 0 : 1;
				if (ap !== bp) return ap - bp;
				return a.city.localeCompare(b.city);
			})
			.slice(0, max);
	}, [locations, max]);

	if (featured.length === 0) return null;

	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{featured.map((l) => (
					<Link
						key={l.slug}
						href={`${basePath}/${l.slug}`}
						className="rounded-2xl border bg-white/90 p-5 text-sm transition hover:bg-muted/40 focus:outline-none focus:ring-2"
					>
						<div className="font-medium text-gray-900">
							{l.city}, {l.state}
						</div>
						<div className="mt-1 text-muted-foreground">
							{l.regionLabel ??
								(l.nearby?.length
									? `Near ${l.nearby[0]}`
									: "View local details")}
						</div>
						<div className="mt-4 text-sm font-medium">
							<span className="text-muted-foreground transition hover:text-foreground">
								Explore page →
							</span>
						</div>
					</Link>
				))}
			</div>

			<div className="mt-6 text-sm text-muted-foreground">
				Prefer not to browse location pages? Totally fine — just{" "}
				<Link href={ctaHref} className="underline underline-offset-4">
					discuss your project
				</Link>{" "}
				and we’ll point you to the best starting place.
			</div>
		</Section>
	);
}
