type GoodFitSectionProps = {
	eyebrow?: string;
	title?: string;
	intro?: string;
	items?: string[];
};

export function GoodFitSection({
	eyebrow = "Good fit",
	title = "A good fit for businesses that want to",
	intro = "This kind of project usually makes the most sense for businesses that are ready to strengthen how they show up online.",
	items = [
		"Make a stronger first impression",
		"Get more calls or quote requests",
		"Replace an outdated or DIY site",
		"Clearly explain their services",
		"Improve mobile performance and maintainability",
		"Launch with a cleaner, more professional presence",
	],
}: GoodFitSectionProps) {
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
