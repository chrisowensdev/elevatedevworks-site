// components/sections/CareHub.tsx
"use client";

import * as React from "react";
import Link from "next/link";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";

import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import CTASection from "./CTASection";

type Props = {
	ctaHref?: string; // default "/contact"
	ctaLabel?: string; // default "Discuss your project"
	packagesHref?: string; // default "/services#ongoing-care"
	packagesLabel?: string; // default "View care packages →"
};

export default function CareHub({
	ctaHref = "/contact",
	ctaLabel = "Discuss your project",
	packagesHref = "/services#ongoing-care",
	packagesLabel = "View care packages →",
}: Props) {
	const whatItIsCards: CardProps[] = [
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
				"Search visibility comes from steady foundations and iteration. We help you track what’s working and improve.",
			variant: "compact",
		},
	];

	const whatsIncludedCards: CardProps[] = [
		{
			title: "Hosting, SSL, backups",
			description:
				"Reliable hosting setup, secure connections, and backups so you’re protected if anything breaks.",
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
			title: "SEO basics + iteration",
			description:
				"On-page checks, content guidance, and small improvements that compound—no gimmicks, no fluff.",
			variant: "compact",
		},
		{
			title: "Analytics + Search Console",
			description:
				"Measurement and visibility into what people are doing, what pages matter, and where leads come from.",
			variant: "compact",
		},
		{
			title: "Small fixes + support",
			description:
				"A simple way to request small changes and fixes without opening a new project every time.",
			variant: "compact",
		},
	];

	const processCards: CardProps[] = [
		{
			eyebrow: "01",
			title: "Baseline",
			description:
				"We confirm what’s in scope, check the site’s current health, and set a clear starting point.",
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
			title: "Reporting",
			description:
				"Simple, readable updates on what changed and what we recommend next—no dashboards overload.",
			variant: "mini",
		},
	];

	return (
		<>
			<PageHero
				eyebrow="Ongoing Care"
				title="Keep your website fast, secure, and improving"
				description="Care packages combine maintenance, performance, and practical SEO so your site stays healthy after launch—without constant oversight."
				primaryCta={{ label: ctaLabel, href: ctaHref }}
				secondaryCta={{ label: packagesLabel, href: packagesHref }}
			/>

			<Section
				eyebrow="Overview"
				title="Ongoing care, without the agency pressure"
				description="Most small business sites don't fail because of one big problem—they slip over time. Care keeps things stable and moving in the right direction."
			>
				<Cards
					items={whatItIsCards}
					columns={3}
					cardVariant="compact"
				/>
			</Section>

			<Section
				eyebrow="What's included"
				title="The essentials that keep your site healthy"
				description="A practical mix of maintenance and growth support, designed to be steady, predictable, and genuinely helpful."
			>
				<Cards
					items={whatsIncludedCards}
					columns={3}
					cardVariant="compact"
				/>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
					<Link
						href={packagesHref}
						className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
					>
						View care packages
					</Link>
					<Link
						href="/services#quick-wins"
						className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
					>
						Need a one-time fix? Quick Wins →
					</Link>
				</div>
			</Section>

			<Section
				eyebrow="How it works"
				title="A calm monthly rhythm"
				description="Clear expectations, simple communication, and steady progress—so your site stays in good shape."
			>
				<Cards items={processCards} columns={4} cardVariant="mini" />
			</Section>

			<Section
				eyebrow="Good fit"
				title="Who ongoing care is for"
				description="If any of these are true, a care plan is usually worth it."
			>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="rounded-2xl border bg-white/90 p-6">
						<h3 className="text-base font-semibold tracking-tight text-gray-900">
							Great fit if…
						</h3>
						<ul className="mt-4 space-y-2 text-sm text-gray-700">
							{[
								"You want your site handled without micromanaging.",
								"You rely on your website for leads or bookings.",
								"You want consistent SEO improvements over time.",
								"You’d like small updates without starting a new project.",
							].map((x) => (
								<li key={x} className="flex gap-2">
									<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
									<span className="leading-6">{x}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-2xl border bg-white/90 p-6">
						<h3 className="text-base font-semibold tracking-tight text-gray-900">
							Not sure yet?
						</h3>
						<p className="mt-3 text-sm text-gray-600">
							Totally normal. If you’re not ready for ongoing
							care, start with a one-time Quick Win and we can
							revisit a care plan later once the foundation is
							solid.
						</p>

						<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Link
								href={packagesHref}
								className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
							>
								View care packages
							</Link>
							<Link
								href={ctaHref}
								className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
							>
								Discuss your project →
							</Link>
						</div>
					</div>
				</div>
			</Section>

			<CTASection
				title="Want your website handled month to month?"
				description="If you want stability, speed, and steady improvement without the salesy agency experience, let’s talk."
				// cta={{ label: ctaLabel, href: ctaHref }}
			/>
		</>
	);
}
