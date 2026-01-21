import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import WorkSection from "./_components/WorkSection";
import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
	title: "Client Work & Case Studies",
	description:
		"Explore recent projects and case studies from Elevate DevWorks, showcasing fast, SEO-ready websites built for small businesses and service professionals.",
	openGraph: {
		title: "Client Work & Case Studies | Elevate DevWorks",
		description:
			"See real examples of websites designed and developed for small businesses, including performance-focused builds, SEO foundations, and conversion-driven layouts.",
		url: "https://elevatedevworks.com/work",
		images: ["/elevate_devworks_seo_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Client Work | Elevate DevWorks",
		description:
			"Real website projects built for small businesses with a focus on performance, clarity, and SEO.",
		images: ["https://elevatedevworks.com/elevate_devworks_seo_image.png"],
	},
};

export default function WorkPage() {
	return (
		<Main>
			<PageHero
				eyebrow="Our Work"
				title="Web experiences built for performance and trust"
				description="From startups to local businesses, we deliver high-quality websites that balance design, performance, and conversion."
				primaryCta={{ href: "/contact", label: "Start your project" }}
				tone="white"
				align="left"
			/>
			<WorkSection />
			<CTASection />
		</Main>
	);
}
