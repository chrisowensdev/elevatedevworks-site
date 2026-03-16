import CTASections from "@/components/sections/CTASection";
import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import type { Metadata } from "next";

import HowWeWork from "./_components/HowWeWork";
import Values from "./_components/Values";
import HowItStarted from "./_components/HowItStarted";
import OurMission from "./_components/OurMission";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Elevate DevWorks - a friendly, modern web design and development studio helping small businesses and professionals build fast, SEO-ready websites.",
	alternates: { canonical: "/about/" },
	openGraph: {
		title: "About Elevate DevWorks | Web Development for Small Businesses & Designers",
		description:
			"Discover our story, mission, and values. See how we help small businesses and web designers bring their ideas to life online.",
		url: "https://elevatedevworks.com/about/",
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
				title="Building better digital experiences, together."
				description="Elevate DevWorks helps small businesses and creative teams turn ideas into fast, modern websites and custom software — built with clean code, clear communication, and long-term maintainability."
				primaryCta={{ href: "/contact/", label: "Get a free quote" }}
				secondaryCta={{ href: "/work/", label: "View projects" }}
				tone="white"
				align="left"
				headingLevel="h1"
			/>
			<HowItStarted />
			<OurMission />

			<section className="mt-12">
				<div className="relative mx-auto max-w-xl px-5">
					<div className="overflow-hidden rounded-lg md:rounded-3xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
						<div className="bg-neutral-50">
							<img
								src="/images/about/chris_working.webp"
								sizes="(min-width: 768px) 672px, 92vw"
								alt="Building and developing websites at the office"
								className="block w-full h-auto"
								loading="eager"
								fetchPriority="high"
								decoding="async"
								width={600}
								height={800}
							/>
						</div>
					</div>
					{/* <p className="mt-3 text-sm text-neutral-500 text-center">
						Chris Owens - Founder, Elevate DevWorks
					</p> */}
				</div>
			</section>

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
