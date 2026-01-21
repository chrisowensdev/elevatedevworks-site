import * as React from "react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import CTASection from "@/components/sections/CTASection";
import { SectionActions } from "@/components/sections/SectionActions";
import ServiceAreaSection from "@/components/sections/service-hub/ServiceAreaSection";
import { webDesignLocations } from "@/content/locations.web-design";
import type { Metadata } from "next";

// type WebDesignHubLocation = ServiceHubLocation;

// type WorkTeaserItem = {
// 	title: string;
// 	description?: string;
// 	href: string;
// };

// type Props = {
// 	locations?: WebDesignHubLocation[];
// 	basePath?: string; // default "/web-design"

// 	ctaHref?: string; // default "/contact"
// 	ctaLabel?: string; // default "Discuss your project"

// 	packagesHref?: string; // default "/services#website-packages"
// 	workHref?: string; // default "/work"
// 	careHref?: string; // default "/care"

// 	// Optional: if you have real items to show, pass them in.
// 	// If omitted, the section still renders with a single action to /work.
// 	workTeasers?: WorkTeaserItem[];
// 	showLocations?: boolean; // default true
// };

export const metadata: Metadata = {
	title: "Web Design for Small Businesses | Elevate DevWorks",
	description:
		"Fast, calm, SEO-ready websites for small businesses. Thoughtful design, performance-first builds, and a clear process—without the salesy agency experience.",
	alternates: {
		canonical: "/web-design",
	},
	openGraph: {
		title: "Web Design for Small Businesses | Elevate DevWorks",
		description:
			"Fast, calm, SEO-ready websites for small businesses. Thoughtful design, performance-first builds, and a clear process—without the salesy agency experience.",
		url: "/web-design",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Web Design for Small Businesses | Elevate DevWorks",
		description:
			"Fast, calm, SEO-ready websites for small businesses. Thoughtful design, performance-first builds, and a clear process—without the salesy agency experience.",
	},
};

const fitCards: CardProps[] = [
	{
		title: "Great fit if…",
		description: (
			<ul className="mt-1 space-y-2 text-sm text-gray-700">
				{[
					"You want a calm, guided process with clear steps.",
					"You need a professional site that loads fast and feels trustworthy.",
					"Your site’s job is leads, calls, or bookings.",
					"You care about maintainability and long-term quality.",
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
		title: "Not the best fit if…",
		description: (
			<ul className="mt-1 space-y-2 text-sm text-gray-700">
				{[
					"You want a template turned around in a day with no structure/content.",
					"You want trendy motion over clarity and speed.",
					"You want unlimited revisions without a defined scope.",
					"You want “SEO hacks” instead of steady fundamentals.",
				].map((x) => (
					<li key={x} className="flex gap-2">
						<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/70" />
						<span className="leading-6">{x}</span>
					</li>
				))}
			</ul>
		),
		variant: "compact",
	},
];

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

const scopeCards: CardProps[] = [
	{
		title: "Included in every build",
		description: (
			<ul className="mt-1 space-y-2 text-sm text-gray-700">
				{[
					"Discovery + structure planning",
					"Mobile-first design and clean build",
					"On-page SEO foundations (metadata + structure)",
					"Conversion paths (contact, booking, tap-to-call)",
					"Performance-minded implementation",
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
		title: "Common add-ons (when useful)",
		description: (
			<ul className="mt-1 space-y-2 text-sm text-gray-700">
				{[
					"Copywriting support or page rewrites",
					"Blog / publishing setup",
					"Integrations (CRM, forms, automations)",
					"Advanced SEO support",
					"Content/photo coordination (if needed)",
				].map((x) => (
					<li key={x} className="flex gap-2">
						<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/70" />
						<span className="leading-6">{x}</span>
					</li>
				))}
			</ul>
		),
		variant: "compact",
	},
];

const timelineCards: CardProps[] = [
	{
		eyebrow: "Week 1",
		title: "Structure + content",
		description:
			"We align on pages, gather essentials, and map the site so everything has a clear purpose.",
		variant: "mini",
	},
	{
		eyebrow: "Weeks 2–3",
		title: "Design + build",
		description:
			"We design and implement the system, then build pages with performance and clarity in mind.",
		variant: "mini",
	},
	{
		eyebrow: "Week 4",
		title: "Review + launch",
		description:
			"Polish, QA, final checks, and a smooth go-live—then we plan next steps if needed.",
		variant: "mini",
	},
	{
		eyebrow: "Optional",
		title: "Ongoing care",
		description:
			"If you want the site handled month-to-month, care keeps it fast, secure, and improving.",
		variant: "mini",
	},
];

const afterLaunchCards: CardProps[] = [
	{
		title: "Maintenance + updates",
		description:
			"Small fixes, monitoring, and updates handled consistently so issues don’t pile up.",
		variant: "compact",
	},
	{
		title: "Performance checks",
		description:
			"Periodic reviews to keep load time and Core Web Vitals healthy as content evolves.",
		variant: "compact",
	},
	{
		title: "Practical SEO iteration",
		description:
			"Steady improvements that compound—no gimmicks, just clarity and consistency.",
		variant: "compact",
	},
];

// const workCards: CardProps[] =
// 	workTeasers.length > 0
// 		? workTeasers.slice(0, 3).map((w) => ({
// 				title: w.title,
// 				description: w.description ?? "View details →",
// 				href: w.href,
// 				variant: "compact",
// 			}))
// 		: [
// 				{
// 					title: "See recent work",
// 					description:
// 						"A few examples of recent builds focused on clarity, speed, and trust.",
// 					href: workHref,
// 					variant: "compact",
// 				},
// 			];

export default function WebDesignHub() {
	const basePath = "/web-design",
		ctaHref = "/contact",
		ctaLabel = "Discuss your project",
		packagesHref = "/services#website-packages",
		// workHref = "/work",
		careHref = "/care",
		// workTeasers = [],
		showLocations = true;
	return (
		<>
			<PageHero
				eyebrow="Web Design"
				title="Fast, SEO-ready websites for small businesses"
				description="We design and build calm, professional sites that load fast, communicate clearly, and make it easy for customers to reach you—without the salesy agency experience."
				primaryCta={{ label: ctaLabel, href: ctaHref }}
				secondaryCta={{
					label: "View website packages",
					href: packagesHref,
				}}
			/>

			{/* Fit */}
			<Section
				eyebrow="Fit"
				title="Is this the right kind of build?"
				description="A quick check to make sure we’re aligned before we talk details."
			>
				<Cards items={fitCards} columns={2} cardVariant="compact" />
			</Section>

			{/* Approach */}
			<Section
				eyebrow="Approach"
				title="What “custom web design” means at Elevate DevWorks"
				description="A modern website isn’t just a pretty homepage. It’s structure, clarity, performance, and trust—working together."
			>
				<Cards
					items={approachCards}
					columns={3}
					cardVariant="compact"
				/>
			</Section>

			{/* Deliverables */}
			<Section
				eyebrow="Deliverables"
				title="What you’ll leave with"
				description="A finished site that looks professional, loads quickly, and is ready to bring in leads."
			>
				<Cards
					items={deliverableCards}
					columns={2}
					cardVariant="compact"
				/>
				<SectionActions
					links={[
						{ text: "View website packages", href: packagesHref },
					]}
				/>
			</Section>

			{/* Scope */}
			<Section
				eyebrow="Scope"
				title="What’s included (and what’s optional)"
				description="Everything starts with a strong foundation. From there, we add the pieces that match your goals."
			>
				<Cards items={scopeCards} columns={2} cardVariant="compact" />
				<SectionActions
					links={[
						{
							text: "See add-ons and quick wins",
							href: "/services#add-ons",
						},
					]}
				/>
			</Section>

			{/* Timeline */}
			<Section
				eyebrow="Timeline"
				title="What a typical build looks like"
				description="Most projects move smoothly when content is ready. We’ll confirm timing after a quick walkthrough."
			>
				<Cards items={timelineCards} columns={4} cardVariant="mini" />
			</Section>

			{/* After launch */}
			<Section
				eyebrow="After launch"
				title="Keep it healthy after it goes live"
				description="Websites don’t break all at once—they drift over time. Ongoing care keeps performance, security, and visibility moving in the right direction."
			>
				<Cards
					items={afterLaunchCards}
					columns={3}
					cardVariant="compact"
				/>
				<SectionActions
					links={[
						{ text: "Learn about ongoing care", href: careHref },
					]}
				/>
			</Section>

			{/* Proof */}
			{/* <Section
				eyebrow="Work"
				title="A few recent builds"
				description="A small sample of recent projects—focused on clarity, speed, and trust."
			>
				<Cards items={workCards} columns={3} cardVariant="compact" />
				<SectionActions
					links={[{ text: "View all work", href: workHref }]}
				/>
			</Section> */}

			{/* Locations (supporting) */}
			{showLocations ? (
				<ServiceAreaSection
					locations={webDesignLocations}
					basePath={basePath}
					actions={[
						{ text: "View website packages", href: packagesHref },
					]}
				/>
			) : null}

			<CTASection
				title="Ready for a website that feels professional and runs fast?"
				description="If you want clarity, speed, and a calm build process, let’s talk through what you need."
			/>
		</>
	);
}
