"use client";

import { Container } from "@/components/layout";

import WorkGrid from "../../work/_components/WorkGrid";
import { projects } from "@/content/projects";

export default function Work() {
	const featured = projects.filter((project) => project.featured);
	return (
		<section id="work" style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
			<Container className="py-16 md:pb-24">
				<div className="flex items-end justify-between gap-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						Projects
					</h2>
				</div>
				<p className="mt-2 text-neutral-600">Industries we serve</p>
				<WorkGrid projects={featured} />
			</Container>
		</section>
	);
}
