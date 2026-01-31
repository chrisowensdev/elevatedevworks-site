// src/app/(marketing)/maintenance/page.tsx
import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import CTASection from "@/components/sections/CTASection";
import { SectionActions } from "@/components/sections/SectionActions";

export const metadata: Metadata = {
	title: "Website Maintenance | Elevate DevWorks",
	description:
		"Website maintenance that keeps your site secure, stable, and running smoothly. Typically included as part of ongoing care packages.",
	alternates: { canonical: "/maintenance/" },
	openGraph: {
		title: "Website Maintenance | Elevate DevWorks",
		description:
			"Website maintenance that keeps your site secure, stable, and running smoothly. Typically included as part of ongoing care packages.",
		url: "/maintenance/",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Website Maintenance | Elevate DevWorks",
		description:
			"Website maintenance that keeps your site secure, stable, and running smoothly. Typically included as part of ongoing care packages.",
	},
};

export default function MaintenancePage() {
	const ctaHref = "/contact/";
	const careHref = "/care/";
	const carePackagesHref = "/services/#ongoing-care";
	const quickWinsHref = "/services/#quick-wins";

	const cards: CardProps[] = [
		{
			title: "Security + updates",
			description:
				"Routine updates and monitoring to reduce risk and prevent avoidable issues.",
			variant: "compact",
		},
		{
			title: "Backups + recovery",
			description:
				"Backups and a clear recovery path so you're covered if something goes wrong.",
			variant: "compact",
		},
		{
			title: "Small fixes",
			description:
				"Minor changes and fixes handled without starting a new project every time.",
			variant: "compact",
		},
		{
			title: "Performance hygiene",
			description:
				"Keeping the site responsive and stable as content and needs change.",
			variant: "compact",
		},
	];

	return (
		<>
			<PageHero
				eyebrow="Maintenance"
				title="Keep your website secure and running smoothly"
				description="Maintenance is usually part of ongoing care. If you only need a one-time fix, Quick Wins may be a better fit."
				primaryCta={{ label: "Discuss your project", href: ctaHref }}
				secondaryCta={{
					label: "Learn about ongoing care",
					href: careHref,
				}}
			/>

			<Section
				eyebrow="What it covers"
				title="The practical essentials"
				description="A simple approach that keeps things stable and avoids surprises."
			>
				<Cards items={cards} columns={2} cardVariant="compact" />
				<SectionActions
					links={[
						{ text: "View care packages", href: carePackagesHref },
						{
							text: "Need a one-time fix? Quick Wins",
							href: quickWinsHref,
						},
					]}
				/>
			</Section>

			<CTASection
				title="Not sure what you need?"
				description="Tell me what's going on and I'll recommend the simplest next step."
			/>
		</>
	);
}
