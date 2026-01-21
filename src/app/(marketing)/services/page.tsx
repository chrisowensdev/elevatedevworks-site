import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import WebsitePackagesSection from "./_components/WebsitePackages";
import CarePackagesSection from "./_components/CarePackages";
import AddOns from "./_components/AddOns";
import QuickWins from "./_components/QuickWins";
import ServicesOverview from "./_components/ServicesOverview";
import FAQSection from "../../../components/sections/FAQSection";
import Section from "@/components/layout/Section";

export const metadata: Metadata = {
	title: "Website Design, SEO & Hosting Services for Small Businesses",
	description:
		"Website design, development, SEO, and ongoing care for small businesses. Elevate DevWorks builds fast, reliable, SEO-ready websites that support real growth.",
	openGraph: {
		title: "Website Design, SEO & Hosting Services | Elevate DevWorks",
		description:
			"Explore website design, development, SEO, hosting, and ongoing care services built for small businesses that need performance, clarity, and reliability.",
		url: "https://elevatedevworks.com/services",
		images: ["/elevate_devworks_seo_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Services | Elevate DevWorks",
		description:
			"Website design, SEO, hosting, and ongoing care for small businesses.",
		images: ["https://elevateddevworks.com/elevate_devworks_seo_image.png"],
	},
};

export default function ServicesPage() {
	return (
		<Main>
			<PageHero
				eyebrow="What we do"
				title="Services built to ship fast and scale"
				description="From small-business websites to designer handoffs and ongoing care—clean code, performance, measurable results."
				primaryCta={{ href: "/contact", label: "Start a project" }}
				tone="muted"
				align="left"
				headingLevel="h1"
			/>

			<ServicesOverview className="bg-white/70" />
			<WebsitePackagesSection />
			<CarePackagesSection />
			<AddOns />
			<QuickWins />
			<Section
				eyebrow="For Designers"
				title="Development support for designers and studios"
				description="If you handle branding and UI, I can partner with you to
					build production-ready Next.js or WordPress implementations.
					Clean code, fast delivery, and calm communication.
					White-label friendly."
			/>

			<FAQSection
				context="services"
				title="Questions about services, pricing, and timelines"
				description="If you're not sure what package fits, send a quick note and I'll recommend the simplest option that meets your goals."
			/>

			<CTASection />
		</Main>
	);
}
