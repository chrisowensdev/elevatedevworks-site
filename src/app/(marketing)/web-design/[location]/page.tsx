import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { webDesignLocations } from "@/content/locations.web-design";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import CTASection from "@/components/sections/CTASection";
import { SectionActions } from "@/components/sections/SectionActions";
import { LocationContextSection } from "@/components/sections/service-hub/Locations/LocationContextSection";
import { LocationImprovementsSection } from "@/components/sections/service-hub/Locations/LocationImprovementsSection";
import { LocationGoodFitSection } from "@/components/sections/service-hub/Locations/LocationGoodFit";
import { LocationProblemsSection } from "@/components/sections/service-hub/Locations/LocationProblemsSection";
import FAQAccordion from "@/components/ui/FAQAccordion";

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

			<LocationProblemsSection
				title={`Why ${loc.city} businesses start looking for a new website`}
				intro="Most projects start when a business realizes their website isn't clearly representing the quality of their work."
				items={[
					{
						title: "The site looks outdated",
						description:
							"A website that once worked well now feels generic or behind the quality of the business.",
					},
					{
						title: "The message isn't clear",
						description:
							"Visitors land on the site but still struggle to quickly understand what the business actually offers.",
					},
					{
						title: "It's not generating enough inquiries",
						description:
							"The site may get traffic, but it isn't helping turn visitors into calls, quote requests, or conversations.",
					},
					{
						title: "Updating the site feels frustrating",
						description:
							"Even simple updates feel complicated or risky, so the site slowly becomes outdated.",
					},
				]}
			/>
			<LocationImprovementsSection
				eyebrow="How we help"
				title="What improves with a redesign"
				intro="A stronger website should do more than look better. It should make your business easier to understand, easier to trust, and easier to contact."
				desktopImgSrc="/work/clearpath-800.webp"
				desktopImgAlt="Responsive small business website design example"
				mobileImgSrc="/clearpath-mobile-mockup-1.png"
				mobileImgAlt="ClearPath mobile preview"
				items={[
					{
						title: "Clearer messaging",
						description:
							"We structure the page so visitors quickly understand what you do, who you help, and how to take the next step.",
						iconKey: "MessageSquare",
					},
					{
						title: "Better conversion flow",
						description:
							"We make it easier for people to call, request a quote, or reach out without friction.",
						iconKey: "TrendingUp",
					},
					{
						title: "Faster mobile performance",
						description:
							"Your site should load quickly and feel polished on the devices most people use first.",
						iconKey: "Smartphone",
					},
					{
						title: "SEO-ready structure",
						description:
							"We build with clean page structure, metadata, and internal linking in place from the start.",
						iconKey: "Search",
					},
				]}
			/>
			<LocationContextSection
				eyebrow="Local experience"
				title={`Working with businesses in ${loc.city} and nearby areas`}
				description="We work with businesses across Richmond, Henrico, Chesterfield, and nearby areas. Most projects run smoothly remote-first, but local kickoff calls or in-person meetings can happen when helpful."
				points={[
					"Clear communication from kickoff to launch",
					"Fast, modern builds focused on performance",
					"Flexible support for small business owners and lean teams",
				]}
			/>
			<LocationGoodFitSection
				eyebrow="Good fit"
				title="A good fit for businesses that want to"
				intro="This kind of project usually makes the most sense for businesses that are ready to strengthen how they show up online."
				items={[
					"Make a stronger first impression",
					"Get more calls or quote requests",
					"Replace an outdated or DIY site",
					"Clearly explain their services",
					"Improve mobile performance and maintainability",
					"Launch with a cleaner, more professional presence",
				]}
			/>

			<Section
				eyebrow="FAQ"
				title={`Web design in ${loc.city}: common questions`}
				description="A few quick answers. If you want the simplest next step, reach out."
			>
				<FAQAccordion
					items={[
						{
							q: `Do you work with ${loc.city} businesses remotely or in person?`,
							a: "Both. Most projects run smoothly remote-first, and we can meet locally when it helps kickoff or content review.",
						},
						{
							q: "How long does a typical small business website take?",
							a: "Most sites land in a few weeks depending on content readiness. We'll give you a clear timeline after a quick walkthrough.",
						},
						{
							q: "Can you improve an existing site instead of rebuilding?",
							a: "Yes—if the foundation is workable. Otherwise we'll recommend a rebuild for speed, structure, and SEO.",
						},
					]}
				/>
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
