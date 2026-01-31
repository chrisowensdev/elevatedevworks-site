"use client";

import Image from "next/image";
import { about } from "@/content/about";
import { Container } from "@/components/layout";
import { SectionActions } from "@/components/sections/SectionActions";

export default function About() {
	return (
		<>
			<section id="about">
				<Container className="py-16 md:py-24">
					<div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-center">
						<div>
							<div className="text-xs font-semibold tracking-wider text-brand-accent">
								About
							</div>

							<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
								Thoughtful websites built with clarity and care.
							</h2>

							<p className="mt-4 leading-relaxed text-gray-600 text-base sm:text-lg">
								{about.blurb}
							</p>
						</div>

						<div>
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
						</div>
					</div>
					<SectionActions
						links={[
							{
								text: "Learn more about Elevate DevWorks",
								href: "/about/",
							},
						]}
					/>
				</Container>
			</section>
		</>
	);
}
