"use client";

import Image from "next/image";
import { about } from "@/data/about";
import { MapPin, Mail } from "lucide-react";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import Button from "@/components/ui/button";

export default function About() {
	return (
		<section id="about" className="bg-[#2175a2]">
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-start">
					{/* LEFT: copy */}
					<FadeIn>
						<h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-white">
							About Elevate DevWorks: Innovative Solutions
							Provider
						</h2>

						<p className="mt-4 leading-relaxed text-white/90">
							{about.blurb}
						</p>

						{/* contact row */}
						<address className="mt-6 not-italic text-sm text-white/90">
							<div className="flex flex-col sm:flex-row sm:items-center gap-4">
								<div className="flex items-center gap-2">
									<MapPin size={16} className="text-white" />
									<span>{about.location}</span>
								</div>
								<div className="flex items-center gap-2">
									<Mail size={16} className="text-white" />
									<a
										href={`mailto:${about.email}`}
										className="text-white underline underline-offset-4"
									>
										{about.email}
									</a>
								</div>
							</div>
						</address>

						{/* CTAs */}
						<div className="mt-8 flex flex-wrap gap-3">
							<Button
								asChild
								className="rounded-xl bg-[#21a37c] text-white hover:bg-[#21a37c]/90"
							>
								<a
									href={about.cta.primaryHref}
									aria-label={about.cta.primaryText}
								>
									{about.cta.primaryText}
								</a>
							</Button>
						</div>
					</FadeIn>

					{/* RIGHT: photo + wins card */}
					<FadeIn delay={0.5}>
						<div className="grid gap-5">
							<div className="relative rounded-3xl overflow-hidden">
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
						</div>
					</FadeIn>
				</div>
			</Container>
		</section>
	);
}
