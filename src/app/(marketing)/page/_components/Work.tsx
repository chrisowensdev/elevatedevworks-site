"use client";

import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";

import WorkCard from "../../work/_components/WorkCard";

import { highlightedItems } from "@/data/work";

export default function Work() {
	return (
		<section id="work">
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="flex items-end justify-between gap-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						Projects
					</h2>
				</div>
				<p className="mt-2 text-neutral-600">Industries we serve</p>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{highlightedItems.map((card, i) => (
						<FadeIn key={card.title} delay={i * 0.05}>
							<WorkCard
								title={card.title}
								href={card.href}
								imgBase={card.img}
								alt={card.title}
								blurb={card.desc}
							/>
						</FadeIn>
					))}
				</div>
			</Container>
		</section>
	);
}
