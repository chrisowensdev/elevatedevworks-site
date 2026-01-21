import Section from "@/components/layout/Section";
import { FadeIn } from "@/components/media";

const quickWins = [
	{
		title: "Website Fix-Up Day",
		price: "$499",
		description: "Focused improvements to SEO, speed, UX, and design.",
	},
	{
		title: "Local Business Boost",
		price: "$699",
		description:
			"Local SEO + engagement improvements designed to create near-term visibility gains.",
	},
	{
		title: "Launch-Ready Starter Bundle",
		price: "$1,400",
		description:
			"Website + logo + hosting + Google Business setup — everything needed to launch confidently.",
	},
];

export default function QuickWins() {
	return (
		<Section
			eyebrow="Quick Wins"
			title="Fast Improvements with clear outcomes"
			description="Quick Wins are small, high-impact improvements you can make in a short time to boost clarity, trust, and conversions."
			id="quick-wins"
		>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{quickWins.map((p, i) => (
					<FadeIn key={p.title} delay={i * 0.05}>
						<article
							className={[
								"group relative flex h-full flex-col rounded-2xl border bg-white/90 p-6 shadow-sm",
								"transition hover:shadow-md",
								"ring-4 ring-transparent hover:ring-emerald-500/10",
							].join(" ")}
							key={p.title}
						>
							<div>
								<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-900">
									{p.title}
								</h3>

								<p className="mt-3 text-sm text-gray-600 line-clamp-7">
									{p.description}
								</p>
							</div>

							{/* Footer pinned to bottom */}
							<div className="mt-auto pt-6">
								<div className="flex items-baseline justify-between gap-4">
									<p className="text-sm text-gray-600">
										Price:{" "}
									</p>
									<p className="text-lg font-semibold text-brand-accent">
										{p.price}
									</p>
								</div>
							</div>
						</article>
					</FadeIn>
				))}
			</div>
		</Section>
	);
}
