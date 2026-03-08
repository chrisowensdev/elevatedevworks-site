import { FadeIn } from "@/components/media";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";
import PackageCard from "./PackageCard";

type PackageProps = {
	title: string;
	price: string;
	description: string;
	perfectFor: string;
	features: string[];
};

type PackagesSectionProps = {
	eyebrow?: string;
	title?: string;
	description?: string;
	packages: PackageProps[];
};

export default function ProductPackagesSection({
	eyebrow = "Value Packages",
	title = "Simple, productized pricing",
	description = "Choose the scope you need now.  Upgrade later as your marketing grows.",
	packages,
}: PackagesSectionProps) {
	return (
		<Section
			eyebrow={eyebrow}
			// title="Simple, productized pricing for health advisors"
			title={title}
			description={description}
			id="pricing"
		>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{packages.map((p, i) => (
					<FadeIn key={p.title} delay={i * 0.05}>
						<PackageCard {...p} />
					</FadeIn>
				))}
			</div>
			<SectionActions
				links={[{ text: "Discuss your project", href: "/contact/" }]}
			/>
		</Section>
	);
}
