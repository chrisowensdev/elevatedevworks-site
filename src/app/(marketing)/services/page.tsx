import Main from "@/components/layout/Main";
import ContactHome from "@/app/(marketing)/page/_components/ContactHome";
import ServicesHero from "./_components/ServicesHero";
import ServicesGrid from "./_components/ServicesGrid";
import Packages from "./_components/Packages";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
	title: "Services",
	description: "Design & development, hosting, and SEO.",
	alternates: { canonical: "https://elevatedevworks.com/services" },
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
