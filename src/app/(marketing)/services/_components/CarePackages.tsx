import { FadeIn } from "@/components/media";
import PackageCard from "./PackageCard";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";

const carePackages = [
	{
		title: "Basic Care",
		price: "$149/mo",
		description: "",
		perfectFor: "",
		features: ["Hosting", "Automated backups", "Security monitoring"],
	},
	{
		title: "Pro Care + SEO",
		price: "$299/mo",
		description: "",
		perfectFor: "",
		features: [
			"SEO monitoring & tracking",
			"Monthly content updates (1 hour)",
			"Google Business optimization",
			"Monthly reports",
		],
		badge: "Most Popular",
	},
	{
		title: "Elite Growth",
		price: "$599/mo",
		description: "",
		perfectFor: "",
		features: [
			"1 blog or service page per month",
			"Conversion-focused improvements (CRO)",
			"Monthly strategy call",
		],
	},
];

export default function CarePackagesSection() {
	return (
		<Section
			eyebrow="Ongoing Care"
			title="Keep your site fast, secure, and improving"
			description="These plans are build for peace of mind and steady growth so you can focus on your business, not website upkeep."
			id="ongoing-care"
		>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{carePackages.map((p, i) => (
					<FadeIn key={p.title} delay={i * 0.05}>
						<PackageCard key={p.title} {...p} />
					</FadeIn>
				))}
			</div>
			<SectionActions
				links={[{ text: "Learn about Ongoing Care", href: "/care/" }]}
			/>
		</Section>
	);
}
