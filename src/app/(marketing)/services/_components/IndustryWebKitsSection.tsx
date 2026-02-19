// src/app/(marketing)/services/_components/IndustryWebKitsSection.tsx
"use client";

import Link from "next/link";
import { FadeIn } from "@/components/media";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";

type Kit = {
	title: string;
	price: string;
	description: string;
	perfectFor: string;
	highlights: string[];
	href: string;
	badge?: string;
	imageSrc?: string;
	imageAlt?: string;
};

const kits: Kit[] = [
	{
		title: "Health Advisor Website Kit",
		price: "Starting at $750",
		description:
			"A compliance-aware, senior-friendly site designed to earn more qualified calls and coverage review requests.",
		perfectFor:
			"Medicare agents, ACA brokers, and independent advisors who want a trustworthy web presence",
		highlights: [
			"Conversion-first CTA: “Book a Free Coverage Review”",
			"Core pages + FAQ + resources/articles",
			"Fast, modern build (Next.js) + SEO basics included",
			"Optional ongoing care ($149/mo)",
		],
		href: "/services/health-advisor-website",
		badge: "New",
		imageSrc: "/work/clearpath-400.webp",
		imageAlt: "Health Advisor website demo preview",
	},
];

function KitCard({
	title,
	price,
	description,
	perfectFor,
	highlights,
	href,
	badge,
	imageSrc,
	imageAlt,
}: Kit) {
	return (
		<article className="relative rounded-2xl border bg-white/90 p-6">
			<div className="absolute left-[3px] top-0 h-1 w-full rounded-tl-full bg-gradient-to-r from-emerald-600/60 to-emerald-600/0 mb-10" />

			{imageSrc ? (
				<Link
					href={href}
					className="mt-3 block overflow-hidden rounded-xl border bg-neutral-50 mb-10"
				>
					<div className="aspect-[16/10]">
						<img
							src={imageSrc}
							alt={imageAlt ?? ""}
							className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
							loading="lazy"
						/>
					</div>
				</Link>
			) : null}
			<div className="flex items-start justify-between gap-3">
				<div>
					<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
						Industry Web Kit
					</div>

					<h3 className="mt-2 text-lg font-semibold tracking-tight text-gray-900">
						{title}
					</h3>

					<div className="mt-2 text-sm font-semibold text-gray-900">
						{price}
					</div>
				</div>

				{badge ? (
					<span className="rounded-full border bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700">
						{badge}
					</span>
				) : null}
			</div>

			<p className="mt-3 text-sm text-gray-600">{description}</p>

			<div className="mt-4 text-sm text-gray-700">
				<span className="font-semibold text-gray-900">
					Perfect for:{" "}
				</span>
				<span className="leading-6">{perfectFor}</span>
			</div>

			<ul className="mt-4 space-y-2 text-sm text-gray-700">
				{highlights.map((x) => (
					<li key={x} className="flex gap-2">
						<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/80" />
						<span className="leading-6">{x}</span>
					</li>
				))}
			</ul>

			<div className="mt-5">
				<Link
					href={href}
					className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
				>
					View {title} details{" "}
					<span aria-hidden className="ml-1">
						→
					</span>
				</Link>
			</div>
		</article>
	);
}

export default function IndustryWebKitsSection() {
	return (
		<Section
			eyebrow="Industry Web Kits"
			title="Niche-specific website launches with a clear scope"
			description="Productized website kits built for specific industries—clear outcomes, a clean scope, and a straightforward starting price."
			id="industry-web-kits"
		>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{kits.map((k, i) => (
					<FadeIn key={k.title} delay={i * 0.05}>
						<KitCard {...k} />
					</FadeIn>
				))}
			</div>

			<SectionActions
				links={[{ text: "Discuss your project", href: "/contact" }]}
			/>
		</Section>
	);
}
