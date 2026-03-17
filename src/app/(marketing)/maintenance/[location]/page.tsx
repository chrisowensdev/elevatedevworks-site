import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import CTASection from "@/components/sections/CTASection";
import { LocationContextSection } from "@/components/sections/service-hub/Locations/LocationContextSection";
import { LocationImprovementsSection } from "@/components/sections/service-hub/Locations/LocationImprovementsSection";
import { LocationGoodFitSection } from "@/components/sections/service-hub/Locations/LocationGoodFit";
import { LocationProblemsSection } from "@/components/sections/service-hub/Locations/LocationProblemsSection";
import { RelatedServicesSection } from "@/components/sections/service-hub/Locations/RelatedServicesSection";
import { maintenanceLocations } from "@/content/locations.maintenance";
import LocationFAQs from "@/components/sections/service-hub/Locations/LocationFAQs";
import { mergeFaqs } from "@/lib/utils";

type Props = { params: Promise<{ location: string }> };

function getLocation(slug: string) {
	return maintenanceLocations.find((l) => l.slug === slug);
}

export function generateStaticParams() {
	return maintenanceLocations.map((l) => ({ location: l.slug }));
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
		alternates: { canonical: `/maintenance/${loc.slug}/` },
		openGraph: {
			title,
			description,
			url: `/maintenance/${loc.slug}/`,
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
	const hubHref = "/maintenance/";

	const relatedServices = [
		{
			title: "Web Design",
			description: `Build a clearer, more professional website for your ${loc.city} business.`,
			href: `/web-design/${loc.slug}`,
			ctaLabel: `View web design in ${loc.city} →`,
			graphic: "webDesign" as const,
		},
		{
			title: "SEO",
			description: `Improve visibility for ${loc.city}-area searches with stronger local targeting and technical foundations.`,
			href: `/seo/${loc.slug}`,
			ctaLabel: `View SEO in ${loc.city} →`,
			graphic: "seo" as const,
		},
	];

	const faqDefaults = [
		{
			id: "service-area",
			question: `Do you only help businesses in ${loc.city}?`,
			answer: "No. We can help remotely, but this page is focused on Richmond-area businesses and nearby locations where local service visibility matters. We also work with businesses in surrounding areas like Henrico, Chesterfield, Mechanicsville, and Short Pump",
		},
		{
			id: "maintenance",
			question: "What counts as website maintenance?",
			answer: "Website maintenance can include content updates, small page edits, technical fixes, performance checks, plugin or platform updates when relevant, and general support to keep the site working as expected.",
		},
		{
			id: "monthly",
			question: "Do I need monthly maintenance?",
			answer: "Not always. Some businesses need occasional help, while others benefit from ongoing support. It depends on how often the site changes, how important uptime is, and how much internal bandwidth you have to manage updates yourself.",
		},
		{
			id: "external",
			question: "Can you maintain a site you did not build?",
			answer: "Yes, in many cases. We usually need to review how the site is built first, since some websites are easier to support than others, but existing sites can often still be maintained and improved.",
		},
		{
			id: "redesign",
			question: "How is maintenance different from a redesign?",
			answer: "Maintenance focuses on keeping an existing website updated, supported, and functioning well. A redesign is more appropriate when the structure, messaging, or overall site quality needs a larger rebuild.",
		},
	];

	return (
		<>
			<PageHero
				eyebrow={`Website maintenance in ${loc.city}`}
				title={loc.hero.headline}
				description={loc.hero.subtext}
				primaryCta={{ label: "Discuss your project", href: ctaHref }}
				secondaryCta={{
					label: "More About Website Maintenance",
					href: hubHref,
				}}
			/>

			<LocationProblemsSection
				title={`Why ${loc.city} businesses start looking for website maintenance help`}
				intro="Most maintenance projects start when a business has a website that is live, but keeping it updated, secure, and reliable has become harder than it should be"
				items={[
					{
						title: "Updates keep getting pushed off",
						description:
							"Small website tasks often get delayed when no clear process is in place, which can leave important content, offers, and business details outdated.",
					},
					{
						title: "The site feels fragile to change",
						description:
							"Some sites are difficult to update without worrying that something might break, especially when the build is messy or no longer well supported.",
					},
					{
						title: "Issues get noticed too late",
						description:
							"Broken forms, outdated plugins, and performance problems often go unnoticed until they start affecting leads, trust, or day-to-day operations.",
					},
					{
						title: "There is no clear support after launch",
						description:
							"Many businesses end up with a website but no reliable help for routine updates, technical fixes, or ongoing improvements over time.",
					},
				]}
			/>
			<LocationImprovementsSection
				eyebrow="How we help"
				title="What we improve with ongoing website maintenance"
				intro="Good maintenance is not just about fixing problems. It helps keep your website current, functional, and easier to manage so it continues supporting your business after launch."
				maintenanceGraphic
				items={[
					{
						title: "More reliable updates",
						description: `Handle routine edits, content changes, and small improvements with a clearer process so the site stays current without unnecessary friction.`,
						iconKey: "RefreshCw",
					},
					{
						title: "Better site stability",
						description:
							"Reduce the risk of avoidable issues by keeping the website better maintained and easier to support over time.",
						iconKey: "ShieldCheck",
					},
					{
						title: "Faster issue response",
						description:
							"Catch and address common website problems before they create a bigger headache for your business or your customers.",
						iconKey: "LifeBuoy",
					},
					{
						title: "A simpler long-term support path",
						description:
							"Create a more practical way to manage ongoing website needs without letting updates pile up.",
						iconKey: "Wrench",
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
				intro="Website maintenance is a strong fit for businesses that already have a live website but need a more reliable way to handle updates, resolve issues, and keep the site working well over time."
				items={[
					"Keep business information and content up to date",
					"Reduce the risk of avoidable website issues",
					"Get help with edits and technical fixes",
					"Make the website easier to manage long term",
					"Improve reliability after launch",
					"Stop small website tasks from piling up",
				]}
			/>

			<Section
				eyebrow="FAQ"
				title={`Website maintenance in ${loc.city}: common questions`}
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
				title={`Ready for more reliable website support in ${loc.city}?`}
				description="If you want a simpler way to handle updates, fixes, and ongoing website needs, let’s talk through what support makes sense for your business."
			/>
		</>
	);
}
