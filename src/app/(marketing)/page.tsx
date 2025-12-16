import Hero from "./page/_components/Hero";
import About from "./page/_components/About";
import Main from "@/components/layout/Main";
import CTASection from "@/components/sections/CTASection";
import ServicesOverview from "./services/_components/ServicesOverview";
import WorkSection from "./work/_components/WorkSection";
import FAQSection from "../../components/sections/FAQSection";

export default function Page() {
	return (
		<Main>
			<Hero />
			<About />
			<ServicesOverview ctaText="View services" ctaUrl="/services" />
			<WorkSection
				className="bg-white/70"
				ctaText="View all projects"
				ctaUrl="/work"
			/>
			<FAQSection context="home" />
			<CTASection />
		</Main>
	);
}
