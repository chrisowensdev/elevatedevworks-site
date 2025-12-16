import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import WorkSection from "./_components/WorkSection";
import { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import ContentSection from "@/components/sections/ContentSection";

export const metadata: Metadata = {
	title: "Portfolio & Recent Projects | Elevate DevWorks",
	description:
		"Learn about Elevate DevWorks — a friendly, modern web development studio helping small businesses and creative professionals build fast, SEO-ready websites with care.",
	openGraph: {
		title: "Our Work | Web Development for Small Businesses & Designers",
		description:
			"Discover our story, mission, and values — and see how we help small businesses and web designers bring their ideas to life online.",
		url: "https://elevatedevworks.com/work",
		images: ["/elevate_devworks_seo_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Work | Elevate DevWorks",
		description:
			"Friendly, reliable web development for small businesses and designers.",
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
			<ContentSection
				eyebrow="Selected Projects"
				title="A few examples of how we approach client work"
				className="py-16 md:py-24"
				bgColor="bg-white"
			>
				<p>
					These projects highlight how we think about structure,
					performance, and clarity — not just visual design. Some are
					client engagements, others are carefully crafted demos that
					represent the kinds of problems we solve.
				</p>
			</ContentSection>
			<WorkSection />
			<CTASection />
		</Main>
	);
}
