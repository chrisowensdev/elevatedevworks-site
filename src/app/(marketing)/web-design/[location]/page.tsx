import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { webDesignLocations } from "@/content/locations.web-design";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
// import Cards from "@/components/layout/Cards";
// import type { CardProps } from "@/components/layout/Card";
import CTASection from "@/components/sections/CTASection";
import { SectionActions } from "@/components/sections/SectionActions";
import { LocationContextSection } from "./_components/LocationContextSection";
import { LocationImprovementsSection } from "./_components/LocationImprovementsSection";
import { GoodFitSection } from "./_components/GoodFit";
import { LocationProblemsSection } from "./_components/LocationProblemsSection";

type Props = { params: Promise<{ location: string }> };

function getLocation(slug: string) {
	return webDesignLocations.find((l) => l.slug === slug);
}

export function generateStaticParams() {
	return webDesignLocations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { location } = await params;
	const loc = getLocation(location);
	if (!loc) return {};

	const title = `Web Design in ${loc.city}, ${loc.state} | Elevate DevWorks`;
	const description = `Professional web design for ${loc.city} small businesses. Fast, modern websites build for clarity, performance, and more customer inquires.`;

	const robots =
		loc.index === false
			? { index: false, follow: false }
			: { index: true, follow: true };

	return {
		title,
		description,
		robots,
		alternates: { canonical: `/web-design/${loc.slug}/` },
		openGraph: {
			title,
			description,
			url: `/web-design/${loc.slug}/`,
			type: "website",
			images: [
				{
					url: "/elevate_devworks_seo_image.png",
					width: 1200,
					height: 630,
					alt: "Elevate DevWorks",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}

export default async function WebDesignLocationPage({ params }: Props) {
	const { location } = await params;
	const loc = getLocation(location);
	if (!loc) notFound();

	const ctaHref = "/contact/";
	const hubHref = "/web-design/";
	const packagesHref = "/services/#website-packages";

	// const whatYouGetCards: CardProps[] = [
	// 	{
	// 		title: "The site looks outdated",
	// 		description:
	// 			"A website that once worked well now feels dated or generic compared to competitors.",
	// 		variant: "compact",
	// 	},
	// 	{
	// 		title: "The message isn't clear",
	// 		description:
	// 			"Visitors struggle to understand what the business actually offers.",
	// 		variant: "compact",
	// 	},
	// 	{
	// 		title: "Calm, organized process",
	// 		description:
	// 			"Clear steps, steady progress, and a professional experience without the agency pressure.",
	// 		variant: "compact",
	// 	},
	// 	{
	// 		title: "Calm, organized process",
	// 		description:
	// 			"Clear steps, steady progress, and a professional experience without the agency pressure.",
	// 		variant: "compact",
	// 	},
	// ];

	// const fitCards: CardProps[] = [
	// 	{
	// 		title: "Great fit for",
	// 		description: (
	// 			<ul className="mt-1 space-y-2 text-sm text-gray-700">
	// 				{[
	// 					"Service businesses that need more calls, leads, or bookings",
	// 					"Small teams that want clarity and maintainability",
	// 					"Owners who want a website that feels trustworthy and fast",
	// 				].map((x) => (
	// 					<li key={x} className="flex gap-2">
	// 						<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
	// 						<span className="leading-6">{x}</span>
	// 					</li>
	// 				))}
	// 			</ul>
	// 		),
	// 		variant: "compact",
	// 	},
	// 	{
	// 		title: "If you only need a quick fix",
	// 		description: (
	// 			<p className="text-sm text-gray-700 leading-6">
	// 				A Quick Win may be the simplest option. If you’re not sure,
	// 				we’ll recommend the most straightforward next step.
	// 			</p>
	// 		),
	// 		variant: "compact",
	// 	},
	// ];

	return (
		<>
			<PageHero
				eyebrow={`Web Design in ${loc.city}`}
				title={`Web design for ${loc.city} small businesses`}
				description={
					loc.introBlurb ??
					`Calm, professional websites built for speed, clarity, and conversion.`
				}
				primaryCta={{ label: "Discuss your project", href: ctaHref }}
				secondaryCta={{ label: "More About Web Design", href: hubHref }}
				// tone="brand"
			/>

			{/* <Section
				title={`Why ${loc.city} businesses reach out for a new website`}
				description="Most projects start when a business realizes their website isn't clearly representing the quality of their work."
			>
				<Cards
					items={whatYouGetCards}
					columns={4}
					cardVariant="compact"
				/>
				<SectionActions
					links={[
						{ text: "View website packages", href: packagesHref },
					]}
				/>
			</Section> */}
			<LocationProblemsSection />

			<LocationImprovementsSection />

			<LocationContextSection />

			{/* <Section
				eyebrow="Local"
				title={`Serving ${loc.city} and nearby areas`}
				description={
					loc.nearby?.length
						? `Commonly supporting businesses in ${loc.nearby.join(
								", ",
							)} and the surrounding area.`
						: "Supporting local businesses with calm, performance-first web design."
				}
			>
				<ul className="grid gap-3 md:grid-cols-2">
					{loc.whyThisLocation.map((point) => (
						<li
							key={point}
							className="flex gap-2 text-sm text-gray-700"
						>
							<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/70" />
							<span className="leading-6">{point}</span>
						</li>
					))}
				</ul>

				<SectionActions
					links={[
						{ text: "View the main Web Design hub", href: hubHref },
					]}
				/>
			</Section> */}

			<GoodFitSection />

			{/* {loc.industries?.length ? (
				<Section
					eyebrow="Good fit"
					title={`Common projects around ${loc.city}`}
					description="A few types of businesses we often support with web design and rebuilds."
				>
					<div className="flex flex-wrap gap-2">
						{loc.industries.map((x) => (
							<span
								key={x}
								className="rounded-full border bg-white/60 px-3 py-1 text-sm text-gray-800"
							>
								{x}
							</span>
						))}
					</div>
				</Section>
			) : null} */}

			<Section
				eyebrow="FAQ"
				title={`Web design in ${loc.city}: common questions`}
				description="A few quick answers. If you want the simplest next step, reach out."
			>
				<div className="space-y-6">
					{loc.faqs.map((f) => (
						<div
							key={f.q}
							className="rounded-2xl border bg-white/60 p-5"
						>
							<h3 className="text-base font-semibold tracking-tight text-gray-900">
								{f.q}
							</h3>
							<p className="mt-2 text-sm text-gray-700 leading-6">
								{f.a}
							</p>
						</div>
					))}
				</div>

				<SectionActions
					links={[
						{ text: "View website packages", href: packagesHref },
					]}
				/>
			</Section>

			<CTASection
				title={`Ready to improve your website in ${loc.city}?`}
				description="If you want clarity, speed, and a calm build process, let’s talk through what you need."
			/>
		</>
	);
}
