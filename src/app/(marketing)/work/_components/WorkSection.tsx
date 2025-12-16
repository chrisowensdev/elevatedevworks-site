import { Container } from "@/components/layout";
import { projects } from "@/content/projects";
import WorkGrid from "./WorkGrid";

export default function WorkSection() {
	return (
		<section id="work" aria-labelledby="work-heading">
			<Container className="py-16 md:py-24">
				<p className="text-sm font-semibold tracking-wider text-emerald-600">
					Recent Projects
				</p>
				<h2
					id="work-heading"
					className="mt-2 text-2xl font-semi bold tracking-tight text-gray-900 sm:text-3xl"
				>
					Projects that tell our story
				</h2>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					A few examples of how Elevate DevWorks helps small
					businesses and creative professionals turn ideas into fast,
					beautiful, high-performing web experiences.
				</p>
				<WorkGrid projects={projects} />
			</Container>
		</section>
	);
}
