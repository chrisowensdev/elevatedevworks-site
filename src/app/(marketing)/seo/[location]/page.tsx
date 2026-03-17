import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import CTASection from "@/components/sections/CTASection";
import { LocationContextSection } from "@/components/sections/service-hub/Locations/LocationContextSection";
import { LocationImprovementsSection } from "@/components/sections/service-hub/Locations/LocationImprovementsSection";
import { LocationGoodFitSection } from "@/components/sections/service-hub/Locations/LocationGoodFit";
import { LocationProblemsSection } from "@/components/sections/service-hub/Locations/LocationProblemsSection";
import { seoLocations } from "@/content/locations.seo";
import { RelatedServicesSection } from "@/components/sections/service-hub/Locations/RelatedServicesSection";
import { mergeFaqs } from "@/lib/utils";
import LocationFAQs from "@/components/sections/service-hub/Locations/LocationFAQs";

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

	const title = loc.meta.title;
	const description = loc.meta.description;

	const robots =
		loc.index === false
			? { index: false, follow: false }
			: { index: true, follow: true };

	return {
		title,
		description,
		robots,
		alternates: { canonical: `/seo/${loc.slug}/` },
		openGraph: {
			title,
			description,
			url: `/seo/${loc.slug}/`,
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

export default async function SEOLocationPage({ params }: Props) {
	const { location } = await params;
	const loc = getLocation(location);
	if (!loc) notFound();

	const ctaHref = "/contact/";
	const hubHref = "/seo/";

	const relatedServices = [
		{
			title: "Web Design",
			description: `Build a clearer, more professional website for your ${loc.city} business.`,
			href: `/web-design/${loc.slug}`,
			ctaLabel: `View web design in ${loc.city} →`,
			graphic: "webDesign" as const,
		},
		{
			title: "Website Maintenance",
			description:
				"Keep your website updated, supported, and running smoothly over time.",
			href: `/maintenance/${loc.slug}`,
			ctaLabel: `View website maintenance in ${loc.city} →`,
			graphic: "maintenance" as const,
		},
	];

	const faqDefaults = [
		{
			id: "service-areas",
			question: `Do you only help businesses in ${loc.city}?`,
			answer: "No. We can help remotely, but this page is focused on area businesses because local relevance matters when building service pages and SEO structure. We also work with nearby areas.",
		},
		{
			id: "timeline",
			question: "How long does SEO take to show results?",
			answer: "SEO usually takes time. Some improvements can help quickly, especially when technical issues or weak page structure are holding a site back, but meaningful growth often happens over months rather than days. The goal is to build a stronger foundation that compounds over time.",
		},
		{
			id: "monthly",
			question: "Do I need ongoing SEO every month?",
			answer: "Not always. Some businesses need a one-time foundational improvement, while others benefit from ongoing content, optimization, and maintenance. It depends on your market, competition, and how aggressively you want to grow.",
		},
		{
			id: "existing-site",
			question: "Can you help if my website already exists?",
			answer: "Yes. In many cases, the best starting point is improving the current site's structure, content, internal linking, metadata, and technical setup before considering a full rebuild.",
		},
		{
			id: "webdesign",
			question: "Is SEO separate from web design?",
			answer: "They overlap. A well-built website gives SEO a much stronger foundation. Clear messaging, page structure, mobile performance, and internal linking all support better search visibility.",
		},
	];

	return (
		<>
			<PageHero
				eyebrow={`SEO in ${loc.city}`}
				title={loc.hero.headline}
				description={loc.hero.subtext}
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
				title={loc.localSection.headline}
				description={loc.localSection.body}
				points={loc.localSection.bullets}
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
				<LocationFAQs
					items={mergeFaqs(faqDefaults, loc.faqOverrides)}
				/>
			</Section>

			<RelatedServicesSection
				headline={`Explore other website services in ${loc.city}`}
				intro="SEO is one part of building a stronger online presence. Depending on your goals, web design or ongoing website maintenance may also be part of the right next step."
				services={relatedServices}
			/>

			<CTASection
				title={`Ready to improve your website in ${loc.city}?`}
				description="If you want better visibility, clearer service targeting, and a stronger SEO foundation, let's talk through what your site needs."
			/>
		</>
	);
}
