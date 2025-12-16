import Hero from "./page/_components/Hero";
import About from "./page/_components/About";
import Services from "./page/_components/Services";
import Process from "./page/_components/Process";
import Work from "./page/_components/Work";
import FAQ from "./page/_components/FAQ";
import Main from "@/components/layout/Main";
import CTASection from "@/components/sections/CTASection";
import ServicesOverview from "./services/_components/ServicesOverview";

export default function Page() {
	return (
		<Main>
			<Hero />
			<About />
			<ServicesOverview className="bg-white/70" />
			<Process />
			<Work />
			<FAQ />
			<CTASection />
		</Main>
	);
}
