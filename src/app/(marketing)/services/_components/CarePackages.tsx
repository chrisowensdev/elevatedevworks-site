import Link from "next/link";
import PackageCard from "./PackageCard";
import { Container } from "@/components/layout";
import SectionHeader from "@/components/sections/SectionHeader";

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
		<section className="bg-white/70">
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="Ongoing Care"
					title="Keep your site fast, secure, and improving"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					These plans are built for peace of mind and steady growth —
					without needing to “babysit” your website.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{carePackages.map((p) => (
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
