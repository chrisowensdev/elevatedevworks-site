import { FadeIn } from "@/components/media";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";
import PackageCard from "../../_components/PackageCard";

const packages = [
	{
		title: "Starter",
		price: "$750",
		description: "Single-page scroll site to start booking calls fast.",
		perfectFor:
			'new agents, Facebook-first, "I just need something professional"',
		features: [
			"One-page scroll layout (hero, services snapshot, FAQ preview, contact)",
			"Trust/compliance messaging + “don’t submit sensitive info” guidance",
			"Privacy Policy + Medicare Disclaimer pages",
			"Basic SEO (titles/meta), mobile optimization, deployment + domain connection",
			"1 revision round",
		],
	},
	{
		title: "Growth",
		price: "$1,250",
		description: "Full multi-page website + resources hub (best value).",
		perfectFor:
			"established agents who want credibility pages but not heavy content.",
		features: [
			"Home, Services/Plans, About (photo spot), FAQs (10–12), Contact",
			"Resources hub + 3 starter articles (markdown-based)",
			"Sitemap + robots + SEO basics across pages",
			"Privacy Policy + Medicare Disclaimer pages",
			"1 revision round",
		],
		badge: "Recommended",
		salePrice: "$750",
		saleText: "Founders price · first 3 clients",
	},
	{
		title: "Authority",
		price: "$2,500",
		description:
			"Growth + scheduling, campaign landing page, and GBP tune-up.",
		perfectFor:
			"established agents trying to scale, run ads, or compete in search.",
		features: [
			"Everything in Growth",
			"Scheduling integration (Calendly or Google Appointment Schedule)",
			"1 campaign landing page (Turning 65 / AEP / SEP)",
			"Google Business Profile tune-up",
			"Lightweight analytics setup",
			"1 revision round",
		],
	},
];

export default function HealthAdvisorPackagesSection() {
	return (
		<Section
			eyebrow="Value Packages"
			title="Simple, productized pricing for health advisors"
			description="Choose the scope you need now.  Upgrade later as your marketing grows."
			id="pricing"
		>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{packages.map((p, i) => (
					<FadeIn key={p.title} delay={i * 0.05}>
						<PackageCard key={p.title} {...p} />
					</FadeIn>
				))}
			</div>
			<SectionActions
				links={[{ text: "Discuss your project", href: "/contact/" }]}
			/>
		</Section>
	);
}
