import type { LocationGoodFitSectionProps } from "@/types/location-pages";

export function LocationGoodFitSection({
	eyebrow,
	title,
	intro,
	items,
}: LocationGoodFitSectionProps) {
	return (
		<section className="bg-slate-50">
			<div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
				<div className="max-w-3xl">
					<p className="text-xs font-semibold tracking-wider text-emerald-600">
						{eyebrow}
					</p>
					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
						{title}
					</h2>
					<p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
						{intro}
					</p>
				</div>

				<div className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
					{items.map((item) => (
						<div key={item} className="flex gap-3">
							<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
							<p className="text-sm leading-6 text-gray-700 sm:text-base">
								{item}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
