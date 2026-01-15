"use client";

import Image from "next/image";
import { about } from "@/content/about";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import SectionCTA from "@/components/layout/SectionCTA";

export default function About() {
	return (
		<section id="about">
			<Container className="py-16 md:py-24">
				<div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-center">
					{/* LEFT: copy */}
					<FadeIn>
						<p className="text-sm font-semibold tracking-wider text-emerald-600">
							About
						</p>

						<h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
							Thoughtful websites built with clarity and care.
						</h2>

						<p className="mt-4 leading-relaxed text-gray-600 text-base sm:text-lg">
							{about.blurb}
						</p>

						<SectionCTA
							ctaText="Learn more about Elevate DevWorks"
							ctaUrl="/about"
						/>
					</FadeIn>

					{/* RIGHT: photo */}
					<FadeIn delay={0.2}>
						<div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
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
					</FadeIn>
				</div>
			</Container>
		</section>
	);
}
