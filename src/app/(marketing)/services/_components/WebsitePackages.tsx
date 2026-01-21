import { FadeIn } from "@/components/media";
import PackageCard from "./PackageCard";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";

const packages = [
	{
		title: "Starter Website",
		price: "$1,200-$1,800",
		description:
			"A clean, modern website that builds instant trust and helps customers contact you quickly.",
		perfectFor:
			"new businesses, simple service providers, or a polished presence without complexity",
		features: [
			"1-5 professionally designed pages",
			"Mobile-responsive layouts",
			"On-page SEO setup",
			"Contact form + Google Maps integration",
			"Domain, SSL, and hosting configuration",
		],
	},
	{
		title: "Professional Presence",
		price: "$2,500-$3,500",
		description:
			"A cohesive, professionally branded website that elevates your business and builds authority.",
		perfectFor:
			"businesses that want stronger messaging and a refined brand",
		features: [
			"Custom design system for your brand",
			"Copywriting assistance",
			"CRM & lead integrations",
			"Analytics + Search Console + tracking setup",
		],
		badge: "Most Popular",
	},
	{
		title: "Growth Site / Lead Engine",
		price: "$4,500-$6,500",
		description:
			"An SEO-optimized site built to attract traffic, convert visitors, and support long-term growth.",
		perfectFor: "businesses ready to invest in leads and measurable growth",
		features: [
			"SEO-optimized pages + advanced SEO setup",
			"Blog publishing system",
			"Lead tracking + automation workflows",
			"AI chatbot integration",
		],
	},
];

export default function WebsitePackagesSection() {
	return (
		<Section
			eyebrow="Website Packages"
			title="Choose the build that fits your stage"
			description="Clear options depending on where you are today — starter, professional, or growth-focused."
			id="website-packages"
		>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{packages.map((p, i) => (
					<FadeIn key={p.title} delay={i * 0.05}>
						<PackageCard key={p.title} {...p} />
					</FadeIn>
				))}
			</div>
			<SectionActions
				links={[
					{ text: "Learn about Web Design", href: "/web-design" },
				]}
			/>
		</Section>
	);
}
