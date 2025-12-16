import Link from "next/link";
import PackageCard from "./PackageCard";
import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";

const packages = [
	{
		title: "Starter Website",
		price: "$1,200–$1,800",
		description:
			"A clean, modern website that builds instant trust and helps customers contact you quickly.",
		perfectFor:
			"new businesses, simple service providers, or a polished presence without complexity",
		features: [
			"1–5 professionally designed pages",
			"Mobile-responsive layouts",
			"On-page SEO setup",
			"Contact form + Google Maps integration",
			"Domain, SSL, and hosting configuration",
		],
	},
	{
		title: "Professional Presence",
		price: "$2,500–$3,500",
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
		price: "$4,500–$6,500",
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
		<section className="border-y ">
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="Website Packages"
					title="Choose the build that fits your stage"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					Clear options depending on where you are today — starter,
					professional, or growth-focused.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{packages.map((p) => (
						<PackageCard key={p.title} {...p} />
					))}
				</div>
				<div className="mt-10 mx-auto text-center">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium hover:opacity-90"
					>
						Discuss your project
					</Link>
				</div>
				<p className="mt-3 text-sm text-gray-600 mx-auto text-center">
					A quick message is all it takes — I’ll follow up personally.
				</p>
			</Container>
		</section>
	);
}
