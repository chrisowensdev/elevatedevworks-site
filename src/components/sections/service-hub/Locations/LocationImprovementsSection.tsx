"use client";

import type { LocationImprovementsSectionProps } from "@/types/location-pages";
import LocationImprovementCard from "./LocationImprovementCard";
import { MaintenanceSolutionsGraphic } from "./MaintenanceSolutionsGraphic";

export function LocationImprovementsSection({
	eyebrow,
	title,
	intro,
	desktopImgSrc,
	desktopImgAlt,
	mobileImgSrc,
	mobileImgAlt,
	items,
	maintenanceGraphic,
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
					{maintenanceGraphic ? (
						<div>
							<MaintenanceSolutionsGraphic className="max-w-2xl" />
						</div>
					) : null}
					{desktopImgSrc ? (
						<div>
							<div className="relative mx-auto max-w-2xl">
								<div className="overflow-hidden rounded-lg md:rounded-3xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] pt-1">
									<div className="bg-neutral-50">
										<img
											src={desktopImgSrc}
											sizes="(min-width: 768px) 672px, 92vw"
											alt={desktopImgAlt}
											className="block w-full h-auto [filter:contrast(1.03)_saturate(1.02)]"
											loading="eager"
											fetchPriority="high"
											decoding="async"
											width={1200}
											height={675}
										/>
									</div>
								</div>

								{mobileImgSrc ? (
									<div className="hidden sm:block absolute -bottom-10 -right-10 w-[60px] md:w-[130px]">
										<div className="overflow-hidden  border-0 rounded-lg md:rounded-3xl shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
											<img
												src={mobileImgSrc}
												alt={mobileImgAlt}
												className="block w-full h-auto"
												loading="lazy"
												decoding="async"
												fetchPriority="low"
											/>
										</div>
									</div>
								) : null}
							</div>
						</div>
					) : null}
				</div>

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{items.map((item) => {
						return (
							<LocationImprovementCard
								key={item.title}
								title={item.title}
								description={item.description}
								iconKey={item.iconKey}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
