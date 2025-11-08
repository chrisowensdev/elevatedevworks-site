import Contact from "@/app/(marketing)/page/_components/ContactHome";
import Services from "../page/_components/Services";
import Main from "@/components/layout/Main";

export const metadata = {
	title: "Services",
	description: "Design & development, hosting, and SEO.",
	alternates: { canonical: "https://elevatedevwoks.com/services" },
};

export default function ServicesPage() {
	return (
		<Main>
			<Services />
			<Contact />
		</Main>
	);
}
