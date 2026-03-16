import type { LocationContextSectionProps } from "@/types/location-pages";

export function LocationContextSection({
	eyebrow,
	title,
	description,
	points,
}: LocationContextSectionProps) {
	return (
		<section className="bg-white">
			<div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
				<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
					<div>
						<p className="text-xs font-semibold tracking-wider text-emerald-600">
							{eyebrow}
						</p>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
							{title}
						</h2>
						<p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
							{description}
						</p>
					</div>

					<div className="rounded-2xl p-6">
						<ul className="space-y-4">
							{points.map((point) => (
								<li
									key={point}
									className="text-sm leading-6 text-gray-700 sm:text-base"
								>
									<span className="font-medium text-emerald-700">
										•{" "}
									</span>
									{point}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
