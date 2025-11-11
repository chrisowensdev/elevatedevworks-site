import Main from "@/components/layout/Main";
import ContactHome from "@/app/(marketing)/page/_components/ContactHome";
import ServicesGrid from "./_components/ServicesGrid";
import Packages from "./_components/Packages";
import PageHero from "@/components/sections/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services| Web Development for Small Businesses & Designers",
	description:
		"Learn about Elevate DevWorks — a friendly, modern web development studio helping small businesses and creative professionals build fast, SEO-ready websites with care.",
	openGraph: {
		title: "Services | Web Development for Small Businesses & Designers",
		description:
			"Discover our services that we offer for Small Business for Web Development",
		url: "https://elevatedevworks.com/work",
		images: ["/elevate_devworks_seo_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Work | Elevate DevWorks",
		description:
			"Discover our services that we offer for Small Business for Web Development.",
		images: ["https://elevatedevworks.com/elevate_devworks_seo_image.png"],
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
			<ServicesGrid />
			<Packages />
			<ContactHome />
		</Main>
	);
}
