import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import CTASection from "@/components/sections/CTASection";
import { LocationContextSection } from "@/components/sections/service-hub/Locations/LocationContextSection";
import { LocationImprovementsSection } from "@/components/sections/service-hub/Locations/LocationImprovementsSection";
import { LocationGoodFitSection } from "@/components/sections/service-hub/Locations/LocationGoodFit";
import { LocationProblemsSection } from "@/components/sections/service-hub/Locations/LocationProblemsSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { seoLocations } from "@/content/locations.seo";

type Props = { params: Promise<{ location: string }> };

function getLocation(slug: string) {
	return seoLocations.find((l) => l.slug === slug);
}

export function generateStaticParams() {
	return seoLocations.map((l) => ({ location: l.slug }));
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
	const hubHref = "/seo/";
	const packagesHref = "/services/#website-packages";

	return (
		<>
			<PageHero
				eyebrow={`SEO in ${loc.city}`}
				title={`SEO for ${loc.city} small businesses`}
				description={
					loc.introBlurb ??
					`Elevate DevWorks helps ${loc.city} businesses improve search visibility with clear site structure, stronger service pages, local relevance, and technical foundations that support long-term growth.`
				}
				primaryCta={{ label: "Discuss your project", href: ctaHref }}
				secondaryCta={{ label: "More About SEO", href: hubHref }}
			/>

			<LocationProblemsSection
				title={`Why ${loc.city} businesses start looking for SEO help`}
				intro="Most SEO projects start when a business realizes their website is not showing up consistently, not attracting the right visitors, or not turning search traffic into real inquiries."
				items={[
					{
						title: "The site is hard to find in search",
						description:
							"Your business may offer solid services, but if the site is not showing up when people search locally, it becomes much harder to earn consistent traffic and leads.",
					},
					{
						title: "Service pages are too thin or unclear",
						description:
							"When pages do not clearly explain what you offer, who you help, or where you work, search engines and potential customers both have a harder time understanding your business.",
					},
					{
						title: "Competitors are showing up first",
						description:
							"Even strong businesses can get overlooked when nearby competitors have better page structure, more targeted service content, or a site that sends clearer local signals.",
					},
					{
						title: "Traffic is not turning into leads",
						description:
							"Getting found is only part of the job. If visitors land on the site and still do not know what to do next, search traffic will not turn into calls, quote requests, or real conversations.",
					},
				]}
			/>
			<LocationImprovementsSection
				eyebrow="How we help"
				title="What we improve with local SEO and on-site optimization"
				intro="Strong SEO is not just about rankings. It helps your business show up for the right searches, explain your services more clearly, and create a stronger path from search result to inquiry."
				desktopImgSrc="/images/demos/hvac/peak-performance-1200.webp"
				desktopImgAlt="Responsive small business website design example"
				mobileImgSrc="/images/demos/hvac/peakperformance-mobile.webp"
				mobileImgAlt="ClearPath mobile preview"
				items={[
					{
						title: "Stronger local relevance",
						description: `Build pages that connect your services to ${loc.city} and nearby areas more clearly.`,
						iconKey: "MapPin",
					},
					{
						title: "Clearer service page targeting",
						description:
							"Align headings and on-page content with what customers are actually searching for.",
						iconKey: "Search",
					},
					{
						title: "Better technical foundation",
						description:
							"Improve metadata, internal linking, crawlability, and mobile performance.",
						iconKey: "Wrench",
					},
					{
						title: "Content built for real searches",
						description:
							"Create content around real customer questions and local service intent.",
						iconKey: "FileText",
					},
				]}
			/>
			<LocationContextSection
				eyebrow="Local experience"
				title={`Working with businesses in ${loc.city} and nearby areas`}
				description="We work with businesses in Richmond, Henrico, Chesterfield, and nearby areas that want to improve how they appear in search without relying on bloated SEO packages or unclear reporting. The goal is to create a stronger foundation so your website supports visibility, trust, and lead generation over time."
				points={[
					"SEO improvements tied to real business goals",
					"Clean site structure built around services and locations",
					"Support that keeps visibility efforts practical and sustainable",
				]}
			/>
			<LocationGoodFitSection
				eyebrow="Good fit"
				title="A good fit for businesses that want to"
				intro="SEO is often a good fit for businesses that do strong work but are not getting enough visibility online. The goal is to make the website easier to find, easier to understand, and better at turning search traffic into real inquiries."
				items={[
					"Improve visibility for local service searches",
					"Build stronger service and location pages",
					"Fix weak page structure and unclear targeting",
					"Support long-term traffic growth",
					"Attract better-qualified leads",
					"Strengthen the foundation before investing more in marketing",
				]}
			/>

			<Section
				eyebrow="FAQ"
				title={`SEO in ${loc.city}: common questions`}
				description="A few quick answers. If you want the simplest next step, reach out."
			>
				<FAQAccordion
					items={[
						{
							q: `Do you only help businesses in ${loc.city}?`,
							a: "No. We can help remotely, but this page is focused on Richmond-area businesses because local relevance matters when building service pages and SEO structure. We also work with nearby areas like Henrico, Chesterfield, Mechanicsville, and Short Pump.",
						},
						{
							q: "How long does SEO take to show results?",
							a: "SEO usually takes time. Some improvements can help quickly, especially when technical issues or weak page structure are holding a site back, but meaningful growth often happens over months rather than days. The goal is to build a stronger foundation that compounds over time.",
						},
						{
							q: "Do I need ongoing SEO every month?",
							a: "Not always. Some businesses need a one-time foundational improvement, while others benefit from ongoing content, optimization, and maintenance. It depends on your market, competition, and how aggressively you want to grow.",
						},
						{
							q: "Can you help if my website already exists?",
							a: "Yes. In many cases, the best starting point is improving the current site's structure, content, internal linking, metadata, and technical setup before considering a full rebuild.",
						},
						{
							q: "Is SEO separate from web design?",
							a: "They overlap. A well-built website gives SEO a much stronger foundation. Clear messaging, page structure, mobile performance, and internal linking all support better search visibility.",
						},
					]}
				/>
			</Section>

			<CTASection
				title={`Ready to improve your website in ${loc.city}?`}
				description="If you want better visibility, clearer service targeting, and a stronger SEO foundation, let's talk through what your site needs."
			/>
		</>
	);
}
