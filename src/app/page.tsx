// app/page.tsx
"use client";

import FixedBackground from "../components/FixedBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Work from "@/components/Work";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<main className="min-h-screen text-neutral-900">
			<FixedBackground />
			<div className="relative z-10">
				<Header />
				<Hero />
				<AboutMe />
				<Services />
				<Work />
				{/* <Testimonials /> */}
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
