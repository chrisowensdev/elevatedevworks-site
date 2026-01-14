// components/sections/Plan.tsx
"use client";

import { MessageSquare, LayoutTemplate, Rocket } from "lucide-react";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionCTA from "@/components/layout/SectionCTA";

const steps = [
	{
		kicker: "Step 1",
		title: "Send a quick message",
		body: "Share what you do and what you want. We’ll clarify goals and the best next step.",
		icon: MessageSquare,
	},
	{
		kicker: "Step 2",
		title: "Get a clear homepage plan",
		body: "We map structure, messaging, and CTAs so visitors understand and act quickly.",
		icon: LayoutTemplate,
	},
	{
		kicker: "Step 3",
		title: "Build, launch, and support",
		body: "We design, build, launch, and keep your site fast, secure, and improving.",
		icon: Rocket,
	},
];

export default function Plan({
	className,
	ctaText,
	ctaUrl,
}: {
	className?: string;
	ctaText?: string;
	ctaUrl?: string;
}) {
	return (
		<section aria-labelledby="plan-heading" className={className}>
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="The Plan"
					title="A simple process that keeps things moving"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					No confusion, no long meetings — just a clear path from idea
					to launch.
				</p>

				<div className="mt-10">
					<div className="grid gap-6 md:grid-cols-3">
						{steps.map((s, i) => {
							const Icon = s.icon;
							return (
								<FadeIn key={s.title} delay={i * 0.05}>
									<div className="relative rounded-2xl border bg-white/90 p-6 shadow-sm">
										{/* top accent */}
										<div className="rounded-tl-full  absolute left-[3px] top-0 h-1 w-full bg-gradient-to-r from-emerald-600/60 to-emerald-600/0" />

										<div className="flex items-center justify-between">
											<div className="text-[11px] font-semibold tracking-wide text-gray-500">
												{s.kicker}
											</div>
											<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
												<Icon
													className="h-5 w-5 text-emerald-600"
													aria-hidden
												/>
											</span>
										</div>

										<h3 className="mt-3 text-lg font-semibold text-gray-900">
											{s.title}
										</h3>
										<p className="mt-2 text-sm text-gray-600">
											{s.body}
										</p>

										{/* connector (desktop only) */}
										{i < steps.length - 1 && (
											<div className="hidden md:block absolute -right-3 top-1/2 h-px w-6 bg-gray-200" />
										)}
									</div>
								</FadeIn>
							);
						})}
					</div>
				</div>

				{ctaText && ctaUrl && (
					<SectionCTA ctaText={ctaText} ctaUrl={ctaUrl} />
				)}
			</Container>
		</section>
	);
}
