// src/app/(marketing)/seo/page.tsx
import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import CTASection from "@/components/sections/CTASection";
import { SectionActions } from "@/components/sections/SectionActions";

export const metadata: Metadata = {
	title: "SEO for Small Businesses | Elevate DevWorks",
	description:
		"Practical SEO foundations and steady improvements that help your site get found and understood. Typically included as part of ongoing care packages.",
	alternates: { canonical: "/seo/" },
	openGraph: {
		title: "SEO for Small Businesses | Elevate DevWorks",
		description:
			"Practical SEO foundations and steady improvements that help your site get found and understood. Typically included as part of ongoing care packages.",
		url: "/seo/",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "SEO for Small Businesses | Elevate DevWorks",
		description:
			"Practical SEO foundations and steady improvements that help your site get found and understood. Typically included as part of ongoing care packages.",
	},
};

export default function SEOPage() {
	const ctaHref = "/contact/";
	const careHref = "/care/";
	const carePackagesHref = "/services/#ongoing-care";
	const quickWinsHref = "/services/#quick-wins";

	const cards: CardProps[] = [
		{
			title: "Technical foundations",
			description:
				"Clean structure, metadata, and indexability so search engines can understand your site.",
			variant: "compact",
		},
		{
			title: "On-page improvements",
			description:
				"Page clarity, headings, internal linking, and content structure that helps pages perform.",
			variant: "compact",
		},
		{
			title: "Measurement",
			description:
				"Analytics + Search Console so you can see what’s working and where to improve.",
			variant: "compact",
		},
		{
			title: "Steady iteration",
			description:
				"SEO is rarely one-and-done. Small improvements compound over time when done consistently.",
			variant: "compact",
		},
	];

	return (
		<>
			<PageHero
				eyebrow="SEO"
				title="Practical SEO that improves over time"
				description="SEO is usually part of ongoing care. If you want a one-time audit or fix, Quick Wins may be a better fit."
				primaryCta={{ label: "Discuss your project", href: ctaHref }}
				secondaryCta={{
					label: "Learn about ongoing care",
					href: careHref,
				}}
			/>

			<Section
				eyebrow="What it includes"
				title="A steady, foundation-first approach"
				description="No gimmicks—just the work that helps your site be found, understood, and improved."
			>
				<Cards items={cards} columns={2} cardVariant="compact" />
				<SectionActions
					links={[
						{ text: "View care packages", href: carePackagesHref },
						{
							text: "Need a one-time fix? Quick Wins",
							href: quickWinsHref,
						},
					]}
				/>
			</Section>

			<CTASection
				title="Want a clear next step?"
				description="Tell me what you’re trying to improve and I’ll recommend the simplest path."
			/>
		</>
	);
}
