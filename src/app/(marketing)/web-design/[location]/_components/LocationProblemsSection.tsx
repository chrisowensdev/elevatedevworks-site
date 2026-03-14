import { CircleDot } from "lucide-react";

type ProblemItem = {
	title: string;
	description: string;
};

type LocationProblemsSectionProps = {
	title?: string;
	intro?: string;
	items?: ProblemItem[];
};

const defaultItems: ProblemItem[] = [
	{
		title: "The site looks outdated",
		description:
			"A website that once worked well now feels generic or behind the quality of the business.",
	},
	{
		title: "The message isn’t clear",
		description:
			"Visitors land on the site but still struggle to quickly understand what the business actually offers.",
	},
	{
		title: "It’s not generating enough inquiries",
		description:
			"The site may get traffic, but it isn’t helping turn visitors into calls, quote requests, or conversations.",
	},
	{
		title: "Updating the site feels frustrating",
		description:
			"Even simple updates feel complicated or risky, so the site slowly becomes outdated.",
	},
];

export function LocationProblemsSection({
	title = "Why Richmond businesses start looking for a new website",
	intro = "Most projects start when a business realizes their website isn’t clearly representing the quality of their work.",
	items = defaultItems,
}: LocationProblemsSectionProps) {
	return (
		<section className="bg-white">
			<div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
				<div className="max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
						{title}
					</h2>
					<p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
						{intro}
					</p>
				</div>

				<div className="mt-10 max-w-4xl space-y-6">
					{items.map((item) => (
						<div
							key={item.title}
							className="flex gap-4 rounded-2xl border bg-gray-50 p-5 "
						>
							<div className="pt-1 text-emerald-600">
								<CircleDot className="h-5 w-5" />
							</div>

							<div>
								<h3 className="text-base font-semibold text-gray-900 sm:text-lg">
									{item.title}
								</h3>
								<p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
