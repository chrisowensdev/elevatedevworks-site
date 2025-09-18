// /components/AboutMe.tsx
"use client";

import Image from "next/image";
import { about } from "@/data/about";
import { MapPin, Mail, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import Container from "./Container";

export default function AboutMe() {
	return (
		<section
			id="about"
			// Brand blue background with high-contrast foreground
			style={{ backgroundColor: "#2175a2" }}
		>
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-start">
					{/* LEFT: copy */}
					<FadeIn>
						{/* Pill heading */}
						<div
							className="inline-block rounded-full px-3 py-1 text-xs font-medium"
							style={{
								background: "rgba(255,255,255,0.15)",
								color: "#ffffff",
							}}
						>
							About Me
						</div>

						<h2
							className="mt-4 text-3xl md:text-4xl font-semibold leading-tight"
							style={{ color: "#ffffff" }}
						>
							Hi, I’m{" "}
							<span style={{ color: "#ffffff" }}>
								Chris Owens
							</span>
							. I build fast, modern websites that help small
							businesses grow.
						</h2>

						<p
							className="mt-4 leading-relaxed"
							style={{ color: "rgba(255,255,255,0.9)" }}
						>
							{about.blurb}
						</p>

						{/* Highlights as white cards for strong contrast */}
						<ul className="mt-6 grid gap-3 sm:grid-cols-2">
							{about.highlights.map((h) => (
								<li
									key={h}
									className="rounded-xl border bg-white px-4 py-3 text-sm"
									style={{
										borderColor: "rgba(33,163,124,0.4)",
										color: "#0f172a",
									}}
								>
									• {h}
								</li>
							))}
						</ul>

						{/* Specialty badges inverted for dark bg */}
						<div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
							{about.specialties.map((s) => (
								<span
									key={s}
									className="rounded-full px-3 py-1"
									style={{
										border: "1px solid rgba(255,255,255,0.65)",
										color: "#ffffff",
									}}
								>
									{s}
								</span>
							))}
						</div>

						{/* contact row */}
						<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
							<div
								className="flex items-center gap-2"
								style={{ color: "rgba(255,255,255,0.9)" }}
							>
								<MapPin
									size={16}
									style={{ color: "#ffffff" }}
								/>
								<span>{about.location}</span>
							</div>
							<div className="flex items-center gap-2">
								<Mail size={16} style={{ color: "#ffffff" }} />
								<a
									href={`mailto:${about.email}`}
									className="underline underline-offset-4"
									style={{ color: "#ffffff" }}
								>
									{about.email}
								</a>
							</div>
						</div>

						{/* CTAs */}
						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href={about.cta.primaryHref}
								className="rounded-xl px-5 py-3 text-white font-medium"
								style={{ background: "#21a37c" }}
							>
								{about.cta.primaryText}
							</a>
							<a
								href={about.cta.secondaryHref}
								className="rounded-xl px-5 py-3 font-medium"
								style={{
									background: "transparent",
									border: "1px solid rgba(255,255,255,0.7)",
									color: "#ffffff",
								}}
							>
								{about.cta.secondaryText}
							</a>
						</div>
					</FadeIn>

					{/* RIGHT: photo + wins card */}
					<FadeIn delay={0.5}>
						<div className="grid gap-5">
							<div
								className="relative rounded-3xl overflow-hidden"
								style={{ borderColor: "rgba(0,0,0,0.08)" }}
							>
								<div
									className="relative"
									style={{ aspectRatio: "4 / 4" }}
								>
									<Image
										src={about.headshot}
										alt={`Photo of ${about.name}`}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 40vw"
										priority
									/>
								</div>
							</div>

							<div
								className="rounded-2xl border bg-white p-5 shadow-sm"
								style={{
									borderTop: "4px solid #21a37c",
									borderColor: "rgba(0,0,0,0.08)",
								}}
							>
								<div className="flex items-center gap-2">
									<Sparkles
										size={16}
										style={{ color: "#2175a2" }}
									/>
									<p
										className="text-sm font-semibold"
										style={{ color: "#0f172a" }}
									>
										A few quick wins I focus on
									</p>
								</div>
								<ul
									className="mt-3 space-y-2 text-sm"
									style={{ color: "#334155" }}
								>
									<li>
										• Solid sitemap & content flow for
										clarity
									</li>
									<li>
										• Core Web Vitals & performance tuning
									</li>
									<li>
										• On-page SEO & schema for visibility
									</li>
									<li>• Clean, maintainable components</li>
								</ul>
							</div>
						</div>
					</FadeIn>
				</div>
			</Container>
		</section>
	);
}
