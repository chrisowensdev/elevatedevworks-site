import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import ContactHome from "@/app/(marketing)/page/_components/ContactHome";
import WorkSection from "./_components/WorkSection";

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
			<ContactHome />
		</Main>
	);
}
