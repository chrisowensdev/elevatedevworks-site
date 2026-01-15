// components/sections/WebDesignHub.tsx
"use client";

import * as React from "react";
import Link from "next/link";

import PageHero from "@/components/sections/PageHero";
import SectionCTA from "@/components/layout/SectionCTA";
import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";

export type WebDesignHubLocation = {
	slug: string; // "richmond-va"
	city: string; // "Richmond"
	state: string; // "VA"
	regionLabel?: string; // "Richmond Metro"
	nearby?: string[]; // ["Henrico", "Chesterfield"]
	industries?: string[]; // ["Contractors", "Med Spas"]
	introBlurb?: string; // short 1–2 sentence blurb (optional)
	priority?: "high" | "normal";
	index?: boolean; // if false, hide from hub by default
};

type Props = {
	locations: WebDesignHubLocation[];
	basePath?: string; // default "/web-design"
	title?: string;
	subtitle?: string;
	ctaHref?: string; // default "/contact"
	ctaLabel?: string; // default "Discuss your project"
	showSearch?: boolean;
	showFilters?: boolean;
	showOnlyIndexed?: boolean; // default true
};

export default function WebDesignHub({
	locations,
	basePath = "/web-design",
	title = "Web design for small businesses",
	subtitle = "Fast, SEO-ready websites with a calm, organized process. Explore local pages for details—then reach out when you’re ready.",
	ctaHref = "/contact",
	ctaLabel = "Discuss your project",
	showSearch = true,
	showFilters = true,
	showOnlyIndexed = true,
}: Props) {
	const [query, setQuery] = React.useState("");
	const [stateFilter, setStateFilter] = React.useState<string>("All");

	const states = React.useMemo(() => {
		const set = new Set(locations.map((l) => l.state).filter(Boolean));
		return ["All", ...Array.from(set).sort()];
	}, [locations]);

	const visibleLocations = React.useMemo(() => {
		const q = query.trim().toLowerCase();

		return locations
			.filter((l) => (showOnlyIndexed ? l.index !== false : true))
			.filter((l) =>
				stateFilter === "All" ? true : l.state === stateFilter
			)
			.filter((l) => {
				if (!q) return true;
				const haystack = [
					l.city,
					l.state,
					l.regionLabel,
					l.slug,
					...(l.nearby ?? []),
					...(l.industries ?? []),
				]
					.filter(Boolean)
					.join(" ")
					.toLowerCase();
				return haystack.includes(q);
			})
			.sort((a, b) => {
				// High-priority first, then alphabetical
				const ap = a.priority === "high" ? 0 : 1;
				const bp = b.priority === "high" ? 0 : 1;
				if (ap !== bp) return ap - bp;
				return a.city.localeCompare(b.city);
			});
	}, [locations, query, stateFilter, showOnlyIndexed]);

	return (
		<>
			<PageHero
				eyebrow="Web Design"
				title={title}
				description={subtitle}
				primaryCta={{ label: ctaLabel, href: ctaHref }}
				secondaryCta={{ label: "How we work", href: "/process" }}
			/>

			<Container className="py-16 md:py-24 z-10">
				<SectionHeader
					eyebrow="What We Do"
					title="Local pages (built to be genuinely helpful)"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					Each location page includes practical details—what you get,
					how projects run, and common questions—so you can decide
					without pressure.
				</p>
				{(showSearch || showFilters) && (
					<div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
						{showSearch && (
							<div className="w-full md:max-w-md">
								<label
									className="sr-only"
									htmlFor="location-search"
								>
									Search locations
								</label>
								<input
									id="location-search"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									placeholder="Search by city, county, or industry…"
									className="w-full rounded-xl border bg-background px-4 py-2 text-sm outline-none transition focus:ring-2"
								/>
							</div>
						)}

						{showFilters && states.length > 2 && (
							<div className="w-full md:w-auto">
								<label
									className="sr-only"
									htmlFor="state-filter"
								>
									Filter by state
								</label>
								<select
									id="state-filter"
									value={stateFilter}
									onChange={(e) =>
										setStateFilter(e.target.value)
									}
									className="w-full rounded-xl border bg-background px-4 py-2 text-sm outline-none transition focus:ring-2 md:w-[180px]"
								>
									{states.map((s) => (
										<option key={s} value={s}>
											{s === "All" ? "All states" : s}
										</option>
									))}
								</select>
							</div>
						)}
					</div>
				)}

				{visibleLocations.length === 0 ? (
					<div className="rounded-2xl border p-6">
						<p className="text-sm text-muted-foreground">
							No matches. Try a different search or clear filters.
						</p>
					</div>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{visibleLocations.map((loc) => (
							<LocationCard
								key={loc.slug}
								loc={loc}
								href={`${basePath}/${loc.slug}`}
							/>
						))}
					</div>
				)}

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					<MiniValue
						title="Fast by default"
						text="Built for performance and clarity—so your site loads quickly and reads cleanly on mobile."
					/>
					<MiniValue
						title="SEO foundations included"
						text="Technical setup, page structure, and metadata best practices baked into the build."
					/>
					<MiniValue
						title="Calm, organized process"
						text="Simple steps, clear scope, and predictable timelines—no agency pressure."
					/>
				</div>
			</Container>

			<Container>
				<SectionHeader
					eyebrow="What We Do"
					title="Not seeing your exact area?"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					That’s okay. If you’re nearby (or even remote), we can still
					build the right site—these pages are just a helpful starting
					point.
				</p>
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
					<Link
						href={ctaHref}
						className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
					>
						{ctaLabel}
					</Link>
					<Link
						href="/work"
						className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
					>
						View recent work →
					</Link>
				</div>
			</Container>
			{/* 
			<CTASection
				title="A website that feels calm, professional, and ready for customers"
				description="If you want a fast, SEO-ready site without the salesy agency experience, let’s talk through what you need."
				cta={{ label: ctaLabel, href: ctaHref }}
			/> */}
		</>
	);
}

function LocationCard({
	loc,
	href,
}: {
	loc: WebDesignHubLocation;
	href: string;
}) {
	return (
		<Link
			href={href}
			className="group rounded-2xl border p-5 transition hover:bg-muted/40 focus:outline-none focus:ring-2"
		>
			<div className="flex items-start justify-between gap-3">
				<div>
					<h3 className="text-base font-semibold tracking-tight">
						{loc.city}, {loc.state}
					</h3>
					<p className="mt-1 text-sm text-muted-foreground">
						{loc.regionLabel ??
							(loc.nearby?.length
								? `Near ${loc.nearby[0]}`
								: "Local service details")}
					</p>
				</div>

				{loc.priority === "high" && (
					<span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
						Popular
					</span>
				)}
			</div>

			{loc.industries?.length ? (
				<div className="mt-4 flex flex-wrap gap-2">
					{loc.industries.slice(0, 3).map((x) => (
						<span
							key={x}
							className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
						>
							{x}
						</span>
					))}
					{loc.industries.length > 3 && (
						<span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
							+{loc.industries.length - 3} more
						</span>
					)}
				</div>
			) : null}

			{loc.introBlurb ? (
				<p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
					{loc.introBlurb}
				</p>
			) : (
				<p className="mt-4 text-sm text-muted-foreground">
					Practical info, FAQs, and what a clean web build looks like
					for local businesses.
				</p>
			)}

			<div className="mt-5 text-sm font-medium">
				<span className="text-muted-foreground transition group-hover:text-foreground">
					Explore page →
				</span>
			</div>
		</Link>
	);
}

function MiniValue({ title, text }: { title: string; text: string }) {
	return (
		<div className="rounded-2xl border p-5">
			<h4 className="text-sm font-semibold">{title}</h4>
			<p className="mt-2 text-sm text-muted-foreground">{text}</p>
		</div>
	);
}
