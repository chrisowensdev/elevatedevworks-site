"use client";

import {
	MessageSquare,
	Search,
	// Settings,
	Smartphone,
	// Sparkles,
	TrendingUp,
} from "lucide-react";

export type LocationImprovementCardProps = {
	title: string;
	description: string;
	icon: React.ElementType;
};

type LocationImprovementsSectionProps = {
	eyebrow?: string;
	title?: string;
	intro?: string;
	items?: LocationImprovementCardProps[];
};

const defaultImprovementItems: LocationImprovementCardProps[] = [
	{
		title: "Clearer messaging",
		description:
			"We structure the page so visitors quickly understand what you do, who you help, and how to take the next step.",
		icon: MessageSquare,
	},
	{
		title: "Better conversion flow",
		description:
			"We make it easier for people to call, request a quote, or reach out without friction.",
		icon: TrendingUp,
	},
	{
		title: "Faster mobile performance",
		description:
			"Your site should load quickly and feel polished on the devices most people use first.",
		icon: Smartphone,
	},
	{
		title: "SEO-ready structure",
		description:
			"We build with clean page structure, metadata, and internal linking in place from the start.",
		icon: Search,
	},
	// {
	// 	title: "Easier long-term updates",
	// 	description:
	// 		"You should be able to maintain and improve the site without everything feeling fragile.",
	// 	icon: Settings,
	// },
	// {
	// 	title: "A more professional first impression",
	// 	description:
	// 		"The site should reflect the quality of your business and help build trust right away.",
	// 	icon: Sparkles,
	// },
];

function LocationImprovementCard({
	title,
	description,
	icon,
}: LocationImprovementCardProps) {
	const Icon = icon;
	return (
		<article
			key={title}
			className="rounded-2xl border bg-white/90 py-6 px-4 shadow-sm"
		>
			<div className="flex gap-3 ">
				{Icon ? (
					<Icon
						className="h-5 w-5 text-emerald-600 mt-1"
						aria-hidden
					/>
				) : null}

				<h3 className="text-lg font-semibold tracking-tight text-gray-900">
					{title}
				</h3>
			</div>

			<p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
				{description}
			</p>
		</article>
	);
}

export function LocationImprovementsSection({
	eyebrow = "How we help",
	title = "What improves with a redesign",
	intro = "A stronger website should do more than look better. It should make your business easier to understand, easier to trust, and easier to contact.",
	items = defaultImprovementItems,
}: LocationImprovementsSectionProps) {
	return (
		<section>
			<div className="mx-auto max-w-5xl px-6 py-14 md:py-20 ">
				<div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
					<div>
						<p className="text-xs font-semibold tracking-wider text-emerald-600">
							{eyebrow}
						</p>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
							{title}
						</h2>{" "}
						<p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg max-w-sm">
							{intro}
						</p>
					</div>

					<div>
						<div className="relative mx-auto max-w-2xl">
							<div className="overflow-hidden rounded-lg md:rounded-3xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] pt-1">
								<div className="bg-neutral-50">
									<img
										src="/work/clearpath-800.webp"
										sizes="(min-width: 768px) 672px, 92vw"
										alt="Responsive small business website design example"
										className="block w-full h-auto [filter:contrast(1.03)_saturate(1.02)]"
										loading="eager"
										fetchPriority="high"
										decoding="async"
										width={1200}
										height={675}
									/>
								</div>
							</div>

							{/* Phone overlay (desktop only) */}
							<div className="hidden sm:block absolute -bottom-10 -right-10 w-[60px] md:w-[130px]">
								<div className="overflow-hidden  border-0 rounded-lg md:rounded-3xl shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
									<img
										src="/clearpath-mobile-mockup-1.png"
										alt="ClearPath mobile preview"
										className="block w-full h-auto"
										loading="lazy"
										decoding="async"
										fetchPriority="low"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{items.map((item) => {
						return (
							<LocationImprovementCard
								key={item.title}
								title={item.title}
								description={item.description}
								icon={item.icon}
							/>
						);
					})}
				</div>
				{/* <Cards
					items={items}
					columns={2}
					cardVariant="primary"
					className=" mt-10"
				/> */}
			</div>
		</section>
	);
}
