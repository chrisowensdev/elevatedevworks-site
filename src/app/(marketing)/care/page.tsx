// src/app/(marketing)/care/page.tsx
import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import CTASection from "@/components/sections/CTASection";
import { SectionActions } from "@/components/sections/SectionActions";

export const metadata: Metadata = {
	title: "Ongoing Website Care | Elevate DevWorks",
	description:
		"Maintenance, performance, and practical SEO—bundled into calm, consistent monthly care so your website stays fast, secure, and improving.",
	alternates: { canonical: "/care" },
	openGraph: {
		title: "Ongoing Website Care | Elevate DevWorks",
		description:
			"Maintenance, performance, and practical SEO—bundled into calm, consistent monthly care so your website stays fast, secure, and improving.",
		url: "/care",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ongoing Website Care | Elevate DevWorks",
		description:
			"Maintenance, performance, and practical SEO—bundled into calm, consistent monthly care so your website stays fast, secure, and improving.",
	},
};

export default function CarePage() {
	const ctaHref = "/contact";
	const packagesHref = "/services#ongoing-care";
	const quickWinsHref = "/services#quick-wins";

	const overviewCards: CardProps[] = [
		{
			title: "Peace of mind after launch",
			description:
				"Your site stays fast, secure, and working properly—without you needing to think about it every week.",
			variant: "compact",
		},
		{
			title: "Small improvements over time",
			description:
				"We handle fixes, updates, and incremental enhancements so your site keeps getting better—not stale.",
			variant: "compact",
		},
		{
			title: "SEO + measurement, consistently",
			description:
				"Search visibility comes from steady fundamentals. We track what matters and improve over time.",
			variant: "compact",
		},
	];

	const includedCards: CardProps[] = [
		{
			title: "Hosting, SSL, backups",
			description:
				"Reliable setup, secure connections, and backups so you’re protected if anything breaks.",
			variant: "compact",
		},
		{
			title: "Updates + maintenance",
			description:
				"Routine updates and monitoring to keep everything stable, secure, and compatible over time.",
			variant: "compact",
		},
		{
			title: "Performance checks",
			description:
				"Periodic reviews to keep load times and Core Web Vitals in a healthy place as content changes.",
			variant: "compact",
		},
		{
			title: "Practical SEO iteration",
			description:
				"On-page improvements and guidance that compound—no gimmicks, no fluff.",
			variant: "compact",
		},
		{
			title: "Analytics + Search Console",
			description:
				"Visibility into what’s working, which pages matter, and where leads come from.",
			variant: "compact",
		},
		{
			title: "Small fixes + support",
			description:
				"A simple way to request small changes without starting a new project every time.",
			variant: "compact",
		},
	];

	const rhythmCards: CardProps[] = [
		{
			eyebrow: "01",
			title: "Baseline",
			description:
				"We confirm what’s in scope, check the site’s health, and set a clear starting point.",
			variant: "mini",
		},
		{
			eyebrow: "02",
			title: "Routine care",
			description:
				"Updates, monitoring, and small fixes—handled consistently so issues don’t pile up.",
			variant: "mini",
		},
		{
			eyebrow: "03",
			title: "Monthly improvements",
			description:
				"A small batch of meaningful enhancements each month, based on priority and impact.",
			variant: "mini",
		},
		{
			eyebrow: "04",
			title: "Simple reporting",
			description:
				"Readable updates on what changed and what we recommend next—no dashboard overload.",
			variant: "mini",
		},
	];

	const fitCards: CardProps[] = [
		{
			title: "Great fit if…",
			description: (
				<ul className="mt-1 space-y-2 text-sm text-gray-700">
					{[
						"You rely on your website for leads or bookings.",
						"You want your site handled without micromanaging.",
						"You want steady SEO improvements over time.",
						"You want small updates without opening a new project.",
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
			title: "If you only need a one-time fix",
			description: (
				<div className="text-sm text-gray-700">
					<p className="leading-6">
						No problem. Start with a Quick Win to handle a specific
						issue, then we can revisit care later if it’s useful.
					</p>
				</div>
			),
			variant: "compact",
		},
	];

	return (
		<>
			<PageHero
				eyebrow="Ongoing Care"
				title="Keep your website fast, secure, and improving"
				description="Care packages combine maintenance, performance, and practical SEO so your site stays healthy after launch—without constant oversight."
				primaryCta={{ label: "Discuss your project", href: ctaHref }}
				secondaryCta={{
					label: "View care packages",
					href: packagesHref,
				}}
			/>

			<Section
				eyebrow="Overview"
				title="Ongoing care, without the agency pressure"
				description="Most small business sites don’t fail because of one big problem—they drift over time. Care keeps things stable and moving in the right direction."
			>
				<Cards
					items={overviewCards}
					columns={3}
					cardVariant="compact"
				/>
			</Section>

			<Section
				eyebrow="What’s included"
				title="The essentials that keep your site healthy"
				description="A practical mix of maintenance and growth support, designed to be steady, predictable, and genuinely helpful."
			>
				<Cards
					items={includedCards}
					columns={3}
					cardVariant="compact"
				/>
				<SectionActions
					links={[
						{ text: "View care packages", href: packagesHref },
						{
							text: "Need a one-time fix? Quick Wins",
							href: quickWinsHref,
						},
					]}
				/>
			</Section>

			<Section
				eyebrow="How it works"
				title="A calm monthly rhythm"
				description="Clear expectations, simple communication, and steady progress—so your site stays in good shape."
			>
				<Cards items={rhythmCards} columns={4} cardVariant="mini" />
			</Section>

			<Section
				eyebrow="Good fit"
				title="Who ongoing care is for"
				description="If any of these are true, a care plan is usually worth it."
			>
				<Cards items={fitCards} columns={2} cardVariant="compact" />
				<SectionActions
					links={[{ text: "Discuss your project", href: ctaHref }]}
				/>
			</Section>

			<CTASection
				title="Want your website handled month to month?"
				description="If you want stability, speed, and steady improvement without the salesy agency experience, let’s talk."
			/>
		</>
	);
}
