// components/sections/Problem.tsx
"use client";

import { AlertTriangle, PhoneOff, Wrench, TrendingDown } from "lucide-react";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionCTA from "@/components/layout/SectionCTA";

const problems = [
	{
		title: "Unclear messaging",
		body: "Visitors can’t quickly tell what you do or who it’s for.",
		icon: AlertTriangle,
	},
	{
		title: "Weak conversion flow",
		body: "Calls-to-action are easy to miss and the next step isn’t obvious.",
		icon: PhoneOff,
	},
	{
		title: "Ongoing maintenance friction",
		body: "Slow pages, small bugs, and updates quietly pile up over time.",
		icon: Wrench,
	},
];

export default function Problem({
	className,
	ctaText,
	ctaUrl,
}: {
	className?: string;
	ctaText?: string;
	ctaUrl?: string;
}) {
	return (
		<section aria-labelledby="problem-heading" className={className}>
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="The Problem"
					title="A website can look “fine” and still lose you customers"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					Most issues come down to clarity, trust, and a missing path
					to action. These are the common blockers we fix first.
				</p>

				<div className="mt-10 grid gap-6 lg:grid-cols-12">
					{/* Left: compact list */}
					<div className="lg:col-span-7">
						<div className="space-y-4">
							{problems.map((p, i) => {
								const Icon = p.icon;
								return (
									<FadeIn key={p.title} delay={i * 0.05}>
										<div className="rounded-2xl border bg-white/90 p-5 shadow-sm">
											<div className="flex items-start gap-3">
												<span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
													<Icon
														className="h-5 w-5 text-emerald-600"
														aria-hidden
													/>
												</span>
												<div>
													<div className="text-base font-semibold text-gray-900">
														{p.title}
													</div>
													<p className="mt-1 text-sm text-gray-600">
														{p.body}
													</p>
												</div>
											</div>
										</div>
									</FadeIn>
								);
							})}
						</div>
					</div>

					{/* Right: impact card */}

					<aside className="lg:col-span-5">
						<div className="relative rounded-2xl border bg-white/90 p-6 shadow-sm">
							<div className="rounded-tl-full  absolute left-[3px] top-0 h-1 w-full bg-gradient-to-r from-emerald-600/60 to-emerald-600/0" />
							<div className="flex items-center gap-3">
								<TrendingDown
									className="h-5 w-5 text-emerald-600"
									aria-hidden
								/>
								<h3 className="text-lg font-semibold text-gray-900">
									What it costs you
								</h3>
							</div>
							<p className="mt-3 text-sm text-gray-600">
								When the message is unclear and the next step
								isn’t obvious, you get fewer calls, weaker
								leads, and more time spent “explaining” your
								business.
							</p>
							<ul className="mt-4 space-y-2 text-sm text-gray-700">
								<li className="flex gap-2">
									<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
									<span className="leading-6">
										Fewer quote requests and bookings
									</span>
								</li>
								<li className="flex gap-2">
									<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
									<span className="leading-6">
										Lower trust (even if you’re great)
									</span>
								</li>
								<li className="flex gap-2">
									<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
									<span className="leading-6">
										More back-and-forth to close a lead
									</span>
								</li>
							</ul>
						</div>
					</aside>
				</div>

				{ctaText && ctaUrl && (
					<SectionCTA ctaText={ctaText} ctaUrl={ctaUrl} />
				)}
			</Container>
		</section>
	);
}
