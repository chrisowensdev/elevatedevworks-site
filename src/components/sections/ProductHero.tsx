// src/components/sections/PageHero.tsx
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // your className merge helper
import { Container } from "@/components/layout";
import { FadeIn } from "../media";

type CTA = { href: string; label: string };

export type ProductHeroProps = {
	eyebrow?: string;
	/** Use a string or JSX if you need inline <em> or line-breaks */
	title: React.ReactNode;
	description?: React.ReactNode;

	/** Controls text alignment/layout */
	align?: "left" | "center";

	/** Background treatment */
	tone?: "white" | "muted" | "brand"; // brand = blue bg, white text

	/** Heading level (keep h1 for primary page title) */
	headingLevel?: "h1" | "h2";

	/** Calls-to-action */
	primaryCta?: CTA;
	secondaryCta?: CTA;

	/** Extra classes for outer <section> or inner wrapper */
	className?: string;
	innerClassName?: string;

	/** Optional: slot to render custom actions instead of CTAs */
	actionsSlot?: React.ReactNode;
};

export default function ProductHero({
	eyebrow,
	title,
	description,
	align = "left",
	tone = "white",
	headingLevel = "h1",
	primaryCta,
	secondaryCta,
	className,
	innerClassName,
	actionsSlot,
}: ProductHeroProps) {
	const Heading = headingLevel;

	const alignClasses =
		align === "center"
			? "text-center items-center"
			: "text-left items-start";

	return (
		<section className={cn("relative isolate ", className)}>
			<Container size="wide">
				<FadeIn>
					<div
						className={cn(
							"mx-auto max-w-6xl pt-16 pb-10 sm:pt-24 sm:pb-16 flex flex-col",
							alignClasses,
							innerClassName,
						)}
					>
						{eyebrow ? (
							<p className="text-sm font-semibold tracking-wider text-emerald-600">
								{eyebrow}
							</p>
						) : null}

						<Heading
							className={cn(
								"mt-3 text-3xl font-bold tracking-tight sm:text-5xl",
								tone === "brand"
									? "text-white"
									: "text-gray-900",
							)}
						>
							{title}
						</Heading>

						{description ? (
							<p
								className={cn(
									"mt-4 max-w-2xl text-base sm:text-lg",
									tone === "brand"
										? "text-white/90"
										: "text-gray-600",
									align === "center" && "mx-auto",
								)}
							>
								{description}
							</p>
						) : null}

						{/* Actions */}
						{actionsSlot ? (
							<div
								className={cn(
									"mt-8",
									align === "center" && "flex justify-center",
								)}
							>
								{actionsSlot}
							</div>
						) : primaryCta || secondaryCta ? (
							<div
								className={cn(
									"w-full mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 ",
									align === "center" && "justify-center",
								)}
							>
								{primaryCta ? (
									<Link
										href={primaryCta.href}
										className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-[0_3px_10px_rgba(0,0,0,0.30)]"
									>
										{primaryCta.label}
									</Link>
								) : null}

								{secondaryCta ? (
									<Link
										href={secondaryCta.href}
										className={cn(
											"inline-flex items-center justify-center rounded-xl border px-5 py-3 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-[0_3px_10px_rgba(0,0,0,0.30)]",
											tone === "brand"
												? "border-white/60 text-white hover:bg-white/10"
												: "border-gray-300 text-gray-900 hover:bg-gray-50",
										)}
									>
										{secondaryCta.label}
									</Link>
								) : null}
							</div>
						) : null}
					</div>
				</FadeIn>
			</Container>
			<div className="mt-7">
				<div className="relative mx-auto max-w-2xl">
					<div className="overflow-hidden rounded-lg md:rounded-3xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] pt-1">
						<div className="bg-neutral-50">
							<img
								src="/work/clearpath-800.webp"
								// 	srcSet="
								// 		/work/clearpath-400.webp 400w,
								// 		/work/clearpath-800.webp 800w,
								// 		/work/clearpath-1200.webp 1200w
								// "
								sizes="(min-width: 768px) 672px, 92vw"
								alt="ClearPath desktop website preview"
								className="block w-full h-auto [filter:contrast(1.03)_saturate(1.02)]"
								loading="eager"
								fetchPriority="high"
								decoding="async"
								width={1200}
								height={675}
							/>
						</div>
					</div>

					{/* Phone overlay (desktop only) */}
					<div className="hidden sm:block absolute -bottom-5 right-6 w-[60px] md:w-[130px]">
						<div className="overflow-hidden  border-0 rounded-lg md:rounded-3xl shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
							<img
								src="/clearpath-mobile-mockup-1.png"
								alt="ClearPath mobile preview"
								className="block w-full h-auto"
								loading="lazy"
								decoding="async"
								fetchPriority="low"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
