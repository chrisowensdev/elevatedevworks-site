import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";
import ContentEyebrow from "@/components/ui/ContentEyebrow";
import ValueCard from "@/components/ui/ValueCard";

export default function Values() {
	return (
		<section className="bg-white">
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="Our Values"
					title="What We Stand Form"
				/>
				<ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					<ValueCard title="Clarity over complexity" emoji="✨">
						We keep things simple and purposeful — no unnecessary
						plugins or bloated frameworks.
					</ValueCard>
					<ValueCard title="Partnership first" emoji="🤝">
						We listen, collaborate, and build around your goals —
						not ours.
					</ValueCard>
					<ValueCard title="Craft and care" emoji="🛠️">
						We treat every project like it’s our own brand on the
						line.
					</ValueCard>
					<ValueCard title="Sustainability" emoji="🌱">
						We build for the long term — your site should grow with
						you, not hold you back.
					</ValueCard>
				</ul>
			</Container>
		</section>
	);
}
