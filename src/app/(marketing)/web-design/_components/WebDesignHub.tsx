// components/sections/WebDesignHub.tsx
"use client";

import * as React from "react";
import PageHero from "@/components/sections/PageHero";

import type { CardProps } from "@/components/layout/Card";
import ServiceApproachSection from "@/components/sections/service-hub/ServiceApproachSection";
import ServiceDeliverablesSection from "@/components/sections/service-hub/ServiceDeliverablesSection";
import ServiceProcessSection from "@/components/sections/service-hub/ServiceProcessSection";
import ServiceAreaSection, {
	type ServiceHubLocation,
} from "@/components/sections/service-hub/ServiceAreaSection";
import CTASection from "@/components/sections/CTASection";

export type WebDesignHubLocation = ServiceHubLocation;

type Props = {
	locations?: WebDesignHubLocation[];
	basePath?: string; // default "/web-design"
	ctaHref?: string; // default "/contact"
	ctaLabel?: string; // default "Discuss your project"
	showLocations?: boolean; // default true
};

export default function WebDesignHub({
	locations = [],
	basePath = "/web-design",
	ctaHref = "/contact",
	ctaLabel = "Discuss your project",
	showLocations = true,
}: Props) {
	const approachCards: CardProps[] = [
		{
			title: "Clarity-first design",
			description:
				"Simple layouts, strong hierarchy, and messaging that helps visitors quickly understand what you do.",
			variant: "compact",
		},
		{
			title: "Performance baked in",
			description:
				"Mobile-first builds with clean code and optimized assets—so your site feels fast and dependable.",
			variant: "compact",
		},
		{
			title: "SEO foundations included",
			description:
				"Technical basics and page structure that help Google understand your site (and help people find you).",
			variant: "compact",
		},
		{
			title: "Conversion-focused flow",
			description:
				"Clear calls-to-action and page paths that guide visitors toward contacting you—without pressure.",
			variant: "compact",
		},
		{
			title: "Easy to maintain",
			description:
				"A clean, reusable component system so updates are straightforward as your business grows.",
			variant: "compact",
		},
		{
			title: "Accessibility-aware",
			description:
				"Better readability and usability across devices—with fewer barriers for real customers.",
			variant: "compact",
		},
	];

	const deliverableCards: CardProps[] = [
		{
			title: "A structured site map",
			description:
				"A clear page plan based on what customers actually look for—so the site is organized and easy to navigate.",
			variant: "compact",
		},
		{
			title: "Mobile-first design + build",
			description:
				"Layouts that feel clean on phones and polished on desktop—with thoughtful spacing and readable type.",
			variant: "compact",
		},
		{
			title: "Core SEO setup",
			description:
				"Metadata and page structure basics that support indexing and make the site easier to understand.",
			variant: "compact",
		},
		{
			title: "Contact-ready conversion paths",
			description:
				"Buttons, forms, and tap-to-call where they make sense—so it’s easy to take the next step.",
			variant: "compact",
		},
	];

	const processCards: CardProps[] = [
		{
			eyebrow: "01",
			title: "Walkthrough",
			description:
				"A quick call to understand your business, goals, and what a good outcome looks like.",
			variant: "mini",
		},
		{
			eyebrow: "02",
			title: "Structure",
			description:
				"A simple plan for pages + content so everything has a purpose and nothing feels cluttered.",
			variant: "mini",
		},
		{
			eyebrow: "03",
			title: "Design + build",
			description:
				"Clean UI built with reusable components—designed for speed, clarity, and maintainability.",
			variant: "mini",
		},
		{
			eyebrow: "04",
			title: "Launch",
			description:
				"Final checks, SEO basics, and a smooth go-live—so your site is ready for real traffic.",
			variant: "mini",
		},
	];

	return (
		<>
			<PageHero
				eyebrow="Web Design"
				title="Fast, SEO-ready websites for small businesses"
				description="We design and build calm, professional sites that load fast, communicate clearly, and make it easy for customers to reach you—without the salesy agency experience."
				primaryCta={{ label: ctaLabel, href: ctaHref }}
				secondaryCta={{ label: "View work", href: "/work" }}
			/>

			<ServiceApproachSection
				title="What “custom web design” means at Elevate DevWorks"
				description="A modern website isn’t just a pretty homepage. It’s structure, clarity, performance, and trust—working together."
				items={approachCards}
			/>

			<ServiceDeliverablesSection
				title="What you’ll leave with"
				description="A finished site that looks professional, loads quickly, and is ready to bring in leads."
				items={deliverableCards}
				ctaHref={ctaHref}
				ctaLabel={ctaLabel}
				secondaryHref="/process"
				secondaryLabel="See the process →"
			/>

			<ServiceProcessSection
				title="A calm, organized build"
				description="No ambiguity, no pressure—just clear steps and steady progress from kickoff to launch."
				items={processCards}
			/>

			{showLocations ? (
				<ServiceAreaSection
					locations={locations}
					basePath={basePath}
					ctaHref={ctaHref}
				/>
			) : null}

			<CTASection
				title="Ready for a website that feels professional and runs fast?"
				description="If you want clarity, speed, and a calm build process, let’s talk through what you need."
			/>
		</>
	);
}
