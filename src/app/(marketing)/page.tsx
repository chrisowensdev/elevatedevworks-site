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
			<Problem actionText="Discuss your project" actionUrl="/contact/" />
			<Plan actionText="See services" actionUrl="/services/" />
			<ServicesOverview
				actionText="View all services"
				actionUrl="/services/"
			/>
			<WorkSection actionText="View all projects" actionUrl="/work/" />
			<About />
			<FAQSection context="home" />
			<CTASection />
		</Main>
	);
}
