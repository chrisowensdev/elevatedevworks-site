import Hero from "./page/_components/Hero";
import About from "./page/_components/About";
import Main from "@/components/layout/Main";
import CTASection from "@/components/sections/CTASection";
import ServicesOverview from "./services/_components/ServicesOverview";
import WorkSection from "./work/_components/WorkSection";
import FAQSection from "../../components/sections/FAQSection";
import Problem from "./page/_components/Problem";
import Plan from "./page/_components/Plan";

export default function Page() {
	return (
		<Main>
			<Hero />
			<Problem ctaText="Discuss your project" ctaUrl="/Contact" />
			<Plan ctaText="See services" ctaUrl="/services" />
			<ServicesOverview ctaText="View services" ctaUrl="/services" />
			<WorkSection ctaText="View all projects" ctaUrl="/work" />
			<About />
			<FAQSection context="home" />
			<CTASection />
		</Main>
	);
}
