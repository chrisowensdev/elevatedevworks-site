import { Container } from "@/components/layout";

const packs = [
	{
		name: "Launch",
		blurb: "One-time website build to get you live fast.",
		price: "from $1,000",
		items: [
			"Sitemap & wireframes",
			"Responsive build",
			"SEO basics",
			"Launch checklist",
		],
	},
	{
		name: "Care",
		blurb: "Hosting, updates, and support every month.",
		price: "$99/mo",
		items: [
			"Managed hosting & SSL",
			"Backups & updates",
			"Uptime/security monitoring",
			"Monthly report",
		],
	},
	{
		name: "Grow",
		blurb: "Ongoing SEO + content + performance care.",
		price: "custom",
		items: [
			"Keyword plan",
			"On-page SEO",
			"Content roadmap",
			"Quarterly reviews",
		],
	},
];

export default function Packages() {
	return (
		<section
			id="packages"
			aria-labelledby="packages-heading"
			className="border-b bg-white/70"
		>
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<h2
					id="packages-heading"
					className="text-2xl md:text-3xl font-semibold"
				>
					Packages
				</h2>
				<div className="mt-8 grid gap-6 md:grid-cols-3">
					{packs.map((p) => (
						<article
							key={p.name}
							className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
						>
							<div className="flex items-baseline justify-between">
								<h3 className="text-lg font-semibold">
									{p.name}
								</h3>
								<div className="text-sm font-medium text-emerald-700">
									{p.price}
								</div>
							</div>
							<p className="mt-1 text-sm text-neutral-700">
								{p.blurb}
							</p>
							<ul className="mt-4 space-y-1 text-sm text-neutral-600">
								{p.items.map((it) => (
									<li key={it}>• {it}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
