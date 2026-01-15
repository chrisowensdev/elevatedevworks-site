import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { webDesignLocations } from "@/content/locations.web-design";

import PageHero from "@/components/sections/PageHero";
import SectionCTA from "@/components/layout/SectionCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout";
import Cards from "@/components/ui/Cards";

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
	const description = `Fast, SEO-ready websites for ${loc.city} small businesses. Calm process, clean design, and performance-first builds.`;

	// If you want to control indexing per location
	const robots =
		loc.index === false
			? { index: false, follow: false }
			: { index: true, follow: true };

	return {
		title,
		description,
		robots,
		alternates: {
			canonical: `/web-design/${loc.slug}`,
		},
		openGraph: {
			title,
			description,
			url: `/web-design/${loc.slug}`,
			type: "website",
		},
	};
}

export default async function WebDesignLocationPage({ params }: Props) {
	const { location } = await params;
	const loc = getLocation(location);
	if (!loc) notFound();

	return (
		<>
			<PageHero
				eyebrow="Web Design"
				title={`Web design for ${loc.city} small businesses`}
				description={loc.introBlurb}
				primaryCta={{ label: "Discuss your project", href: "/contact" }}
				secondaryCta={{ label: "See how we work", href: "/process" }}
			/>

			<Container className="z-10">
				<SectionHeader
					eyebrow="What We Do"
					title="What you get with Elevate DevWorks"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					A clean, modern website built for speed, clarity, and
					conversions—without the salesy agency experience.
				</p>
				<Cards
					items={[
						{
							title: "Fast, SEO-ready foundation",
							description:
								"Technical setup, structure, and performance baked in from day one.",
						},
						{
							title: "Clear messaging + page flow",
							description:
								"We shape the story so visitors quickly understand what you do and what to do next.",
						},
						{
							title: "Calm, organized process",
							description:
								"Simple steps, predictable timelines, and zero pressure.",
						},
					]}
				/>
			</Container>

			<Container>
				<SectionHeader
					eyebrow="What We Do"
					title={`Serving ${loc.city} and nearby areas`}
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					{loc.nearby?.length
						? `Commonly supporting businesses in ${loc.nearby.join(
								", "
						  )} and the surrounding area.`
						: undefined}
				</p>
				<ul className="grid gap-2 md:grid-cols-2">
					{loc.whyThisLocation.map((point) => (
						<li
							key={point}
							className="text-sm text-muted-foreground"
						>
							• {point}
						</li>
					))}
				</ul>
			</Container>

			{loc.industries?.length ? (
				<Container>
					<SectionHeader
						eyebrow="What We Do"
						title="A good fit for"
					/>
					<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
						{`Common projects around ${loc.city}:`}
					</p>
					<div className="flex flex-wrap gap-2">
						{loc.industries.map((x) => (
							<span
								key={x}
								className="rounded-full border px-3 py-1 text-sm"
							>
								{x}
							</span>
						))}
					</div>
				</Container>
			) : null}

			<Container>
				<SectionHeader eyebrow="What We Do" title="FAQ" />

				<div className="space-y-6">
					{loc.faqs.map((f) => (
						<div key={f.q}>
							<h3 className="font-medium">{f.q}</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{f.a}
							</p>
						</div>
					))}
				</div>
			</Container>

			<SectionCTA ctaText="Discuss your project" ctaUrl="/contact" />

			{/* Optional: JSON-LD (see next section) */}
			<WebDesignLocationJsonLd
				city={loc.city}
				state={loc.state}
				slug={loc.slug}
			/>
		</>
	);
}

function WebDesignLocationJsonLd({
	city,
	state,
	slug,
}: {
	city: string;
	state: string;
	slug: string;
}) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: "Elevate DevWorks",
		areaServed: {
			"@type": "City",
			name: `${city}, ${state}`,
		},
		url: `https://elevateddevworks.com/web-design/${slug}`,
		serviceType: "Web Design",
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
