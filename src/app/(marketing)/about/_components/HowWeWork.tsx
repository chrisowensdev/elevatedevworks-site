import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";

export default function HowWeWork() {
	return (
		<section>
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="The Elevate Approach"
					title="How We Work"
				/>

				<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[
						{
							step: "01",
							title: "Discover your goals",
							text: "We start by understanding your vision, audience, and success metrics.",
						},
						{
							step: "02",
							title: "Design the roadmap",
							text: "A plan that fits your timeline and budget — no surprises, just clarity.",
						},
						{
							step: "03",
							title: "Build & launch",
							text: "Fast, responsive, and SEO-optimized sites with clean, maintainable code.",
						},
						{
							step: "04",
							title: "Support & grow",
							text: "We stick around with updates, hosting advice, and analytics guidance.",
						},
					].map((item) => (
						<div
							key={item.step}
							className="rounded-2xl border border-gray-200 p-6 shadow-sm border-t-4 border-t-brand-accent"
						>
							<div className="text-sm font-semibold text-emerald-600">
								{item.step}
							</div>
							<h3 className="mt-2 text-lg font-semibold text-gray-900">
								{item.title}
							</h3>
							<p className="mt-2 text-gray-600">{item.text}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
