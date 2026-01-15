import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";

const addOns = [
	{
		title: "Logo + Brand Kit",
		price: "$400 - $600",
		description:
			"A professional brand increases credibility, makes your business memorable, and strengthens trust immediately.",
	},
	{
		title: "SEO Audit",
		price: "$350",
		description:
			"A deep analysis that identifies ranking issues, visibility gaps, missed opportunities, plus a clear roadmap to fix them.",
	},
	{
		title: "Landing Page Funnel",
		price: "$600",
		description:
			"A dedicated conversion page engineered for maximum responses. Ideal for ad campaigns, promotions, or lead magnets.",
	},
	{
		title: "Google Business Boost",
		price: "$250",
		description:
			"Improve your ranking in local search and Google Maps, helping new customers find you faster.",
	},
	{
		title: "Email Automation Setup",
		price: "$300 - $600",
		description:
			"Automated email follow-ups that nurture leads and increase conversions without ongoing effort.",
	},
	{
		title: "AI Chatbot Integration",
		price: "$400 - $700",
		description:
			"An AI assistant that responds instantly, reduces lost leads, and improves customer engagement.",
	},
	{
		title: "Hosting & Domain Transfer",
		price: "$150",
		description:
			"A smooth and reliable migration that prevents downtime and protects your online presence.",
	},
];

export default function AddOns() {
	return (
		<section className="border-y ">
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="Add-Ons"
					title="Upgrade what matters most"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					These plans are built for peace of mind and steady growth —
					without needing to “babysit” your website.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{addOns.map((p) => (
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
