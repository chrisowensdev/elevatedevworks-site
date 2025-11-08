import Contact from "@/components/Contact";
import FixedBackground from "@/components/FixedBackground";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata = {
	title: "Services",
	description: "Design & development, hosting, and SEO.",
	alternates: { canonical: "https://elevatedevwoks.com/services" },
};

export default function ServicesPage() {
	return (
		<main className="min-h-screen text-neutral-900">
			<FixedBackground />
			<div className="relative z-10">
				<Services />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
