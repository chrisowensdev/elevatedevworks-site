import { Container } from "@/components/layout";
import { projects } from "@/content/projects";
import WorkGrid from "./WorkGrid";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionCTA from "@/components/layout/SectionCTA";

export default function WorkSection({
	className,
	ctaText,
	ctaUrl,
}: {
	className?: string;
	ctaText?: string;
	ctaUrl?: string;
}) {
	return (
		<section id="work" aria-labelledby="work-heading" className={className}>
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="Recent Projects"
					title="Projects that tell our story"
				>
					A few examples of how Elevate DevWorks helps small
					businesses and creative professionals turn ideas into fast,
					beautiful, high-performing web experiences.
				</SectionHeader>
				<WorkGrid projects={projects} />
				{ctaText && ctaUrl && (
					<SectionCTA ctaText={ctaText} ctaUrl={ctaUrl} />
				)}
			</Container>
		</section>
	);
}
