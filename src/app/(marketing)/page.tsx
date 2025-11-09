import Hero from "./page/_components/Hero";
import About from "./page/_components/About";
import Services from "./page/_components/Services";
import Process from "./page/_components/Process";
import Work from "./page/_components/Work";
import FAQ from "./page/_components/FAQ";
import ContactHome from "./page/_components/ContactHome";
import Main from "@/components/layout/Main";

export default function Page() {
	return (
		<Main>
			<Hero />
			<About />
			<Services />
			<Process />
			<Work />
			<FAQ />
			<ContactHome />
		</Main>
	);
}
