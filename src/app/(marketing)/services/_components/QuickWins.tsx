import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";
import Link from "next/link";

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
		<section className="border-y bg-white/70">
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="Quick Wins"
					title="Fast Improvements with clear outcomes"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					These plans are built for peace of mind and steady growth —
					without needing to “babysit” your website.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{quickWins.map((p) => (
						<article
							className={[
								"group relative flex h-full flex-col rounded-2xl border bg-white/90 p-6 shadow-sm",
								"transition hover:shadow-md",
								"ring-4 ring-transparent hover:ring-emerald-500/10",
							].join(" ")}
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

								{/* <div className="mt-5">
					<Link
						href={ctaHref}
						className="inline-flex w-full items-center justify-center rounded-xl border-2 border-brand-accent px-5 py-3 text-sm font-medium text-brand-accent shadow-sm transition hover:bg-brand-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
					>
						{ctaLabel}
					</Link>
				</div> */}
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
