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
import HealthAdvisorPackagesSection from "./_components/HeathAdvisorPackages";

export const metadata: Metadata = {
	title: "Health Advisor Website | Elevate DevWorks",
	description:
		"Productized website launch for Health Advisors, Medicare agents, and ACA brokers. Trustworthy, senior-friendly design with clear conversion paths—starting at $750.",
	alternates: { canonical: "/services/health-advisor-website/" },
	openGraph: {
		title: "Health Advisor Website | Elevate DevWorks",
		description:
			"Productized website launch for Health Advisors, Medicare agents, and ACA brokers—starting at $750.",
		url: "/services/health-advisor-website/",
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

	// const includedCards: CardProps[] = p.included.map((x) => ({
	// 	title: x.title,
	// 	description: x.summary,
	// 	variant: "compact",
	// }));

	const withImages = p.included.filter((x) => !!x.imageSrc);
	const noImages = p.included.filter((x) => !x.imageSrc);

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
				description={`${p.description}`}
				primaryCta={p.primaryCta}
				// secondaryCta={{
				// 	label: p.secondaryCta.label,
				// 	href: p.secondaryCta.href,
				// }}
			/>

			<HealthAdvisorPackagesSection />

			<Section
				eyebrow="Demo"
				title="See the demo experience"
				description={
					<>
						<p>
							Want to see the flow and structure of the Growth
							package? <br />
							View the demo site.
						</p>
						<p className="mt-2 text-sm text-gray-500">
							{p.demoNotice}
						</p>
					</>
				}
			>
				<div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
					{/* Left: actions + quick bullets */}
					<div className="p-6">
						<div className="text-sm font-semibold text-gray-900">
							Explore the full experience
						</div>
						<p className="mt-2 text-sm text-gray-700 leading-6">
							The demo shows the structure, CTA flow, and
							senior-friendly layout style.
						</p>

						<ul className="mt-5 space-y-2 text-sm text-gray-700">
							{[
								"Conversion-first homepage layout",
								"Coverage review CTA flow",
								"FAQ + Resources structure",
							].map((x) => (
								<li key={x} className="flex gap-2">
									<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/80" />
									<span className="leading-6">{x}</span>
								</li>
							))}
						</ul>

						<div className="mt-4 flex flex-wrap gap-3">
							<Link
								href={p.secondaryCta.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
							>
								View live demo{" "}
								<span aria-hidden className="ml-1">
									↗
								</span>
							</Link>
						</div>
					</div>

					{/* Right: screenshot */}
					<Link
						href={p.secondaryCta.href}
						target="_blank"
						rel="noopener noreferrer"
						className="group block overflow-hidden rounded-2xl border bg-neutral-50"
						aria-label="Open live demo in a new tab"
					>
						<div className="aspect-[16/10]">
							<img
								src="/images/demos/health-advisor/home.webp"
								alt="Health Advisor website demo preview"
								className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
								loading="lazy"
							/>
						</div>
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
				eyebrow="What's included in Growth (Recommended)"
				title="Health Advisor Website - Growth"
				description={
					<>
						<p className="text-lg text-gray-600">
							This is the full multi-page website (matching the
							demo screenshots). Built for clarity, trust, and
							steady lead-flow, without over-complicating your
							tech stack.
						</p>
					</>
				}
			>
				{/* <Cards
					items={includedCards}
					columns={2}
					cardVariant="compact"
				/> */}
				{/* Expanded proof rows (with images) */}
				<div className="mt-12 space-y-10">
					{withImages.map((item) => (
						<div
							key={item.key}
							className="grid gap-6 md:grid-cols-2 md:items-start"
						>
							<div className="md:pt-2">
								<h3 className="text-lg font-semibold tracking-tight text-gray-900">
									{item.title}
								</h3>
								<p className="mt-2 text-sm leading-6 text-gray-700">
									{item.summary}
								</p>

								{item.details?.length ? (
									<ul className="mt-4 space-y-2 text-sm text-gray-700">
										{item.details.map((d) => (
											<li key={d} className="flex gap-2">
												<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/80" />
												<span className="leading-6">
													{d}
												</span>
											</li>
										))}
									</ul>
								) : null}
							</div>

							<div className="overflow-hidden rounded-2xl border bg-neutral-50">
								<div className="aspect-[16/10]">
									<img
										src={item.imageSrc!}
										alt={item.imageAlt ?? ""}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Text-only items in 2 columns on desktop */}
				{noImages.length ? (
					<div className="mt-12">
						<div className="grid gap-6 md:grid-cols-2">
							{noImages.map((item) => (
								<div
									key={item.key}
									className="rounded-2xl border bg-white/60 p-6"
								>
									<h3 className="text-base font-semibold tracking-tight text-gray-900">
										{item.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-gray-700">
										{item.summary}
									</p>

									{item.details?.length ? (
										<ul className="mt-4 space-y-2 text-sm text-gray-700">
											{item.details.map((d) => (
												<li
													key={d}
													className="flex gap-2"
												>
													<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/80" />
													<span className="leading-6">
														{d}
													</span>
												</li>
											))}
										</ul>
									) : null}
								</div>
							))}
						</div>
					</div>
				) : null}

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
