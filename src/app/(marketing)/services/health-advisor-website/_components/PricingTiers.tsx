// PricingTiers.tsx
import Link from "next/link";

type Tier = {
	id: "starter" | "growth" | "authority";
	name: string;
	price: string;
	tagline: string;
	bullets: string[];
	recommended?: boolean;
};

const tiers: Tier[] = [
	{
		id: "starter",
		name: "Starter",
		price: "$750",
		tagline: "Single-page scroll site to start booking calls fast.",
		bullets: [
			"One-page scroll layout (hero, services snapshot, FAQ preview, contact)",
			"Trust/compliance messaging + “don’t submit sensitive info” guidance",
			"Privacy Policy + Medicare Disclaimer pages",
			"Basic SEO (titles/meta), mobile optimization, deployment + domain connection",
			"1 revision round",
		],
	},
	{
		id: "growth",
		name: "Growth",
		price: "$1,250",
		tagline: "Full multi-page website + resources hub (best value).",
		recommended: true,
		bullets: [
			"Home, Services/Plans, About (photo spot), FAQs (10–12), Contact",
			"Resources hub + 3 starter articles (markdown-based)",
			"Sitemap + robots + SEO basics across pages",
			"Privacy Policy + Medicare Disclaimer pages",
			"1 revision round",
		],
	},
	{
		id: "authority",
		name: "Authority",
		price: "$2,250",
		tagline: "Growth + scheduling, campaign landing page, and GBP tune-up.",
		bullets: [
			"Everything in Growth",
			"Scheduling integration (Calendly or Google Appointment Schedule)",
			"1 campaign landing page (Turning 65 / AEP / SEP)",
			"Google Business Profile tune-up",
			"Lightweight analytics setup",
			"1 revision round",
		],
	},
];

function TierBadge({ text }: { text: string }) {
	return (
		<span className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-200/10 px-2 py-0.5 text-xs font-medium text-amber-100">
			{text}
		</span>
	);
}

export function PricingTiers() {
	return (
		<section aria-labelledby="pricing" className="py-12">
			<div className="mx-auto max-w-6xl px-4">
				<div className="flex flex-col gap-2">
					<h2
						id="pricing"
						className="text-2xl font-semibold text-charcoal"
					>
						Simple, productized pricing for health advisors
					</h2>
					<p className="max-w-2xl text-sm text-charcoal/70">
						Choose the scope you need now. Upgrade later as your
						marketing grows.
					</p>
				</div>

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{tiers.map((t) => (
						<a
							key={t.id}
							href={`#${t.id}`}
							className={[
								"group rounded-2xl border p-6 shadow-sm transition",
								"border-white/10 bg-white/5 hover:bg-white/7",
								t.recommended ? "ring-1 ring-amber-300/30" : "",
							].join(" ")}
						>
							<div className="flex items-start justify-between gap-3">
								<div>
									<div className="flex items-center gap-2">
										<h3 className="text-lg font-semibold text-charcoal">
											{t.name}
										</h3>
										{t.recommended ? (
											<TierBadge text="Recommended" />
										) : null}
									</div>
									<p className="mt-1 text-sm text-charcoal/70">
										{t.tagline}
									</p>
								</div>
								<div className="text-right">
									<div className="text-2xl font-semibold text-charcoal">
										{t.price}
									</div>
									<div className="text-xs text-charcoal/60">
										one-time
									</div>
								</div>
							</div>

							<ul className="mt-4 space-y-2 text-sm text-charcoal/75">
								{t.bullets.slice(0, 4).map((b) => (
									<li key={b} className="flex gap-2">
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
										<span>{b}</span>
									</li>
								))}
							</ul>

							<div className="mt-5 flex items-center justify-between">
								<span className="text-sm font-medium text-charcoal">
									View details
									<span className="ml-1 inline-block transition group-hover:translate-x-0.5">
										→
									</span>
								</span>

								<Link
									href="/contact"
									className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-white/90"
								>
									Book Your Free Coverage Review
								</Link>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
