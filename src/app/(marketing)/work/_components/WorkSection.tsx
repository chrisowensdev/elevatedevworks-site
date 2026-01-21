import { projects } from "@/content/projects";
import WorkGrid from "./WorkGrid";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";

export default function WorkSection({
	actionText,
	actionUrl,
}: {
	actionText?: string;
	actionUrl?: string;
}) {
	return (
		<Section
			id="recent-projects"
			eyebrow="Recent Projects"
			title="Projects that tell our story"
			description="A few examples of how Elevate DevWorks helps small
						businesses and creative professionals turn ideas into
						fast, beautiful, high-performing web experiences."
		>
			<WorkGrid projects={projects} />
			{actionText && actionUrl && (
				<SectionActions
					links={[
						{
							text: actionText,
							href: actionUrl,
						},
					]}
				/>
			)}
		</Section>
	);
}
