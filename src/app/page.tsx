// app/page.tsx
"use client";

import FixedBackground from "../components/FixedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
// import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Page() {
	return (
		<main className="min-h-screen text-neutral-900">
			<FixedBackground />
			<div className="relative z-10">
				<Hero />
				<About />
				<Services />
				<Process />
				<Work />
				{/* <Testimonials /> */}
				<FAQ />
				<Contact />
			</div>
		</main>
	);
}
