import CTASections from "@/components/sections/CTASection";
import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import type { Metadata } from "next";

import ContentSection from "../../../components/sections/ContentSection";

import HowWeWork from "./_components/HowWeWork";
import Values from "./_components/Values";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Elevate DevWorks - a friendly, modern web design and development studio helping small businesses and creative professionals build fast, SEO-ready websites.",
	openGraph: {
		title: "About Elevate DevWorks | Web Development for Small Businesses & Designers",
		description:
			"Discover our story, mission, and values — and see how we help small businesses and web designers bring their ideas to life online.",
		url: "https://elevatedevworks.com/about",
		images: ["/elevate_devworks_seo_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "About | Elevate DevWorks",
		description:
			"Friendly, reliable web development for small businesses and designers.",
		images: ["https://elevatedevworks.com/elevate_devworks_seo_image.png"],
	},
};

export default function AboutPage() {
	return (
		<Main>
			{/* Hero */}
			<PageHero
				eyebrow="About Elevate DevWorks"
				title="Building better digital experiences — together."
				description="Elevate DevWorks helps small businesses and creative professionals turn ideas into fast, modern, beautifully built websites."
				primaryCta={{ href: "/contact", label: "Get a free quote" }}
				secondaryCta={{ href: "/work", label: "View projects" }}
				tone="white"
				align="left"
				headingLevel="h1"
			/>

			{/* Our Story */}
			<ContentSection
				eyebrow="Our Story"
				title="How It Started"
				className="py-16 md:py-24"
				bgColor="bg-white"
			>
				<>
					<p>
						Elevate DevWorks began as a small passion project by{" "}
						<strong>Chris Owens</strong>, a developer who saw how
						often great designs were held back by unreliable or
						overly complex development. After years of working with
						enterprise systems, Chris set out to bring that same
						level of precision and quality to smaller teams, without
						the layers of red tape.
					</p>
					<p className="mt-4">
						What started as weekend projects soon grew into a
						development studio focused on{" "}
						<strong>partnership, craftsmanship, and trust</strong>.
						Today, we collaborate with business owners and designers
						who want reliable, modern websites that actually deliver
						results.
					</p>
				</>
			</ContentSection>

			{/* Mission */}
			<ContentSection
				eyebrow="Our Mission"
				title="Why We Exist"
				className="py-16 md:py-24"
			>
				<>
					<p>
						Our mission is simple: to{" "}
						<strong>
							empower small businesses and creative professionals
						</strong>{" "}
						with clean, scalable web solutions that elevate their
						online presence and help them grow confidently.
					</p>
					<p className="mt-4">
						We believe great websites come from collaboration — not
						confusion. That’s why we focus on clear communication,
						transparency, and helping our clients understand what’s
						being built every step of the way.
					</p>
				</>
			</ContentSection>

			<Values />
			<HowWeWork />
			<CTASections />

			{/* Optional structured data for Organization */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Elevate DevWorks",
						url: "https://elevatedevworks.com",
						logo: "https://elevatedevworks.com/assets/logo.png",
						description:
							"Elevate DevWorks builds modern, SEO-ready websites for small businesses and creative professionals.",
						founder: { "@type": "Person", name: "Chris Owens" },
						sameAs: [
							"https://x.com/elevatedevworks",
							"https://www.facebook.com/elevatedevworks",
							"https://www.linkedin.com/company/elevatedevworks",
						],
					}),
				}}
			/>
		</Main>
	);
}
