"use client";
import FadeIn from "./FadeIn";
import Container from "./Container";
import WorkCard from "./WorkCard";

export default function Work() {
	const items = [
		{
			title: "HVAC Demo",
			tag: "Home Services",
			img: "hvac",
			alt: "HVAC website demo",
			desc: "Fast, mobile-first site with a quote-request funnel, service-area pages, and reviews to drive calls.",
			href: "/",
		},
		{
			title: "Law Firm",
			tag: "Professional Services",
			img: "law",
			alt: "Law firm website",
			desc: "Trust-first layout with clear practice areas, intake form, and badges—built to convert consultations and create clients.",
			href: "https://thebulgerfirm.netlify.app",
		},
		{
			title: "Invoice Ways",
			tag: "Mobile App",
			img: "invoiceways",
			alt: "InvoiceWays Landing Page",
			desc: "Cross-platform invoicing app (Web/iOS/Android) with estimates, branded PDFs, and Stripe-powered payments.",
			href: "https://invoiceways.com",
		},
	];
	return (
		<section id="work">
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="flex items-end justify-between gap-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						Projects
					</h2>
				</div>
				<p className="mt-2 text-neutral-600">Industries we serve</p>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{items.map((card, i) => (
						<FadeIn key={card.title} delay={i * 0.05}>
							<WorkCard
								title={card.title}
								href={card.href}
								imgBase={card.img}
								alt={card.title}
								blurb={card.desc}
							/>
						</FadeIn>
					))}
				</div>
			</Container>
		</section>
	);
}
