import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import CTASection from "@/components/sections/CTASection";

import { SectionActions } from "@/components/sections/SectionActions";
import { healthAdvisorWebsite } from "@/content/products/health-advisor-website";
import FAQAccordion from "@/components/ui/FAQAccordian";

export const metadata: Metadata = {
	title: "Health Advisor Website | Elevate DevWorks",
	description:
		"Productized website launch for Health Advisors, Medicare agents, and ACA brokers. Trustworthy, senior-friendly design with clear conversion paths—starting at $750.",
	alternates: { canonical: "/services/health-advisor-websites" },
	openGraph: {
		title: "Health Advisor Website | Elevate DevWorks",
		description:
			"Productized website launch for Health Advisors, Medicare agents, and ACA brokers—starting at $750.",
		url: "/services/health-advisor-websites",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Health Advisor Website | Elevate DevWorks",
		description:
			"Productized website launch for Health Advisors, Medicare agents, and ACA brokers—starting at $750.",
	},
};

export default function HealthAdvisorWebsitePage() {
	const p = healthAdvisorWebsite;

	const whoCards: CardProps[] = p.whoItsFor.map((x) => ({
		title: x,
		description:
			"A professional online presence built for trust and calls.",
		variant: "compact",
	}));

	const outcomeCards: CardProps[] = p.outcomes.map((x) => ({
		title: x,
		description: "Built into the structure and flow—not bolted on later.",
		variant: "compact",
	}));

	const includedCards: CardProps[] = p.included.map((x) => ({
		title: x,
		description: "",
		variant: "compact",
	}));

	const processCards: CardProps[] = p.process.map((s) => ({
		eyebrow: s.step,
		title: s.title,
		description: s.description,
		variant: "mini",
	}));

	const careCards: CardProps[] = p.carePlan.highlights.map((x) => ({
		title: x,
		description: "",
		variant: "compact",
	}));

	return (
		<>
			<PageHero
				eyebrow="Productized Offering"
				title={p.subtitle}
				description={`${p.description} Starting at $${p.startingPrice}.`}
				primaryCta={p.primaryCta}
				secondaryCta={{
					label: p.secondaryCta.label,
					href: p.secondaryCta.href,
				}}
			/>

			<Section
				eyebrow="Demo"
				title="See the demo experience"
				description={
					<>
						<p>
							Want to see the flow and structure? View the demo
							site.
						</p>
						<p className="mt-2 text-sm text-gray-500">
							{p.demoNotice}
						</p>
					</>
				}
			>
				<SectionActions
					links={[
						{ text: "Request pricing", href: p.primaryCta.href },
					]}
				/>
				<div className="mt-4">
					<Link
						href={p.secondaryCta.href}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
					>
						{p.secondaryCta.label}{" "}
						<span className="ml-1" aria-hidden>
							↗
						</span>
					</Link>
				</div>
			</Section>

			<Section
				eyebrow="Who it's for"
				title="Built for independent health advisors"
				description="Designed to build trust quickly and make it easy for people to request a coverage review."
			>
				<Cards items={whoCards} columns={2} cardVariant="compact" />
			</Section>

			<Section
				eyebrow="Outcomes"
				title="What this website is designed to do"
				description="Clear conversion paths and senior-friendly presentation—without hype or pressure."
			>
				<Cards items={outcomeCards} columns={3} cardVariant="compact" />
				<SectionActions
					links={[
						{ text: "Request pricing", href: p.primaryCta.href },
					]}
				/>
			</Section>

			<Section
				eyebrow="What's included"
				title="Health Advisor Website Launch"
				description={
					<>
						<p className="text-sm text-gray-600">
							One-time setup starting at{" "}
							<span className="font-semibold text-gray-900">
								${p.startingPrice}
							</span>
							. Productized scope, built quickly, tailored to your
							niche.
						</p>
					</>
				}
			>
				<Cards
					items={includedCards}
					columns={2}
					cardVariant="compact"
				/>
				<SectionActions
					links={[
						{
							text: "Discuss your project",
							href: p.primaryCta.href,
						},
					]}
				/>
			</Section>

			<Section
				eyebrow="Process"
				title="A calm, done-for-you launch"
				description="Discovery → customize → launch → optional ongoing support."
			>
				<Cards items={processCards} columns={4} cardVariant="mini" />
			</Section>

			<Section
				eyebrow="Ongoing care"
				title={`Peace of mind after launch — $${p.monthlyCarePrice}/mo`}
				description="For advisors who want hosting, updates, and steady improvements handled without constant oversight."
			>
				<Cards items={careCards} columns={3} cardVariant="compact" />

				<div className="mt-8 rounded-2xl border bg-white/70 p-5">
					<div className="text-sm font-semibold text-gray-900">
						Clear boundaries
					</div>
					<ul className="mt-3 space-y-2 text-sm text-gray-700">
						{p.carePlan.boundaries.map((x) => (
							<li key={x} className="flex gap-2">
								<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/70" />
								<span className="leading-6">{x}</span>
							</li>
						))}
					</ul>
				</div>

				<SectionActions
					links={[
						{ text: "Request pricing", href: p.primaryCta.href },
					]}
				/>
			</Section>

			<Section
				eyebrow="FAQ"
				title="Common questions"
				description="Simple answers to keep the process clear."
			>
				<FAQAccordion items={p.faqs} />
			</Section>

			<CTASection
				title="No pressure — get a quick quote and see if it's a fit."
				description="Tell me what you're offering and where you want leads to go (calls, bookings, coverage reviews). I'll recommend the simplest path."
			/>
		</>
	);
}
