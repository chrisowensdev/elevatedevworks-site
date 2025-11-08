"use client";

import Image from "next/image";
import { about } from "@/data/about";
import { MapPin, Mail } from "lucide-react";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";

export default function About() {
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
						<h2
							className="mt-4 text-3xl md:text-4xl font-semibold leading-tight"
							style={{ color: "#ffffff" }}
						>
							About Elevate DevWorks: Innovative Solutions
							Provider
						</h2>

						<p
							className="mt-4 leading-relaxed"
							style={{ color: "rgba(255,255,255,0.9)" }}
						>
							{about.blurb}
						</p>

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

							{/* <div
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
							</div> */}
						</div>
					</FadeIn>
				</div>
			</Container>
		</section>
	);
}
