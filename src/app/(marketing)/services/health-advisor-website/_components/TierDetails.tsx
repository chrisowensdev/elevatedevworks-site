// TierDetails.tsx
import Link from "next/link";

function TierSection({
	id,
	title,
	price,
	summary,
	bullets,
}: {
	id: string;
	title: string;
	price: string;
	summary: string;
	bullets: string[];
}) {
	return (
		<section id={id} className="scroll-mt-24 py-10">
			<div className="mx-auto max-w-6xl px-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
					<div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
						<div>
							<h3 className="text-xl font-semibold text-charcoal">
								{title}
							</h3>
							<p className="mt-1 text-sm text-charcoal/70">
								{summary}
							</p>
						</div>
						<div className="mt-3 md:mt-0 md:text-right">
							<div className="text-2xl font-semibold text-charcoal">
								{price}
							</div>
							<div className="text-xs text-charcoal/60">
								one-time
							</div>
							<Link
								href="/contact"
								className="mt-3 inline-flex rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-white/90"
							>
								Book Your Free Coverage Review
							</Link>
						</div>
					</div>

					<ul className="mt-5 grid gap-2 text-sm text-charcoal/75 md:grid-cols-2">
						{bullets.map((b) => (
							<li key={b} className="flex gap-2">
								<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
								<span>{b}</span>
							</li>
						))}
					</ul>

					<div className="mt-6 text-xs text-charcoal/60">
						Includes Privacy Policy + Medicare Disclaimer pages.
						Demo-safe forms. No PHI collection.
					</div>
				</div>
			</div>
		</section>
	);
}

export function TierDetails() {
	return (
		<>
			<TierSection
				id="starter"
				title="Starter"
				price="$750"
				summary="A single-page site that looks professional and gets people to call or book."
				bullets={[
					"Single-page scroll layout (fast to launch)",
					"Services snapshot + “why choose me” trust section",
					"FAQ preview + contact section",
					"Compliance-forward messaging (no PHI; don’t submit sensitive info)",
					"Basic SEO (titles/meta), mobile optimization",
					"Deployment + domain connection",
					"1 revision round",
				]}
			/>

			<TierSection
				id="growth"
				title="Growth (Recommended)"
				price="$1,250"
				summary="The full multi-page website shown in the demo. Best for long-term trust + SEO."
				bullets={[
					"Home, Services/Plans, About, FAQs (10–12), Contact",
					"Resources hub + 3 starter articles (markdown)",
					"Sitemap + robots + SEO basics across pages",
					"Clear CTAs + conversion-focused layout",
					"Deployment + domain connection",
					"1 revision round",
				]}
			/>

			<TierSection
				id="authority"
				title="Authority"
				price="$2,250"
				summary="Growth + scheduling + a campaign landing page + local presence improvements."
				bullets={[
					"Scheduling integration (Calendly or Google Appointment Schedule)",
					"1 campaign landing page (Turning 65 / AEP / SEP)",
					"Google Business Profile tune-up",
					"Lightweight analytics setup",
					"1 revision round",
				]}
			/>
		</>
	);
}
