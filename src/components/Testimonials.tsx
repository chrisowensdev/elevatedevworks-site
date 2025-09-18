// components/Testimonials.tsx
"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Testimonials() {
	const testimonials = [
		{
			quote: "We replaced our old theme with a fast, mobile-first site and the quote form funnel Chris built is a machine—lead requests up 52% in 60 days and calls from Google are way up. Page loads are ~2s now, even on 4G.",
			name: "Sarah Bennett",
			role: "Operations Manager",
			company: "RiverCity HVAC",
			location: "Richmond, VA",
		},
		{
			quote: "Chris redesigned our site around trust and clarity—practice areas, social proof, and a clean intake flow. In the first quarter we saw +41% consultation requests and a 29% drop in bounce rate. Night-and-day difference.",
			name: "Michael Reyes",
			role: "Managing Partner",
			company: "Reyes & Carter Law",
			location: "",
		},
		{
			quote: "With InvoiceWays, I send estimates on-site, get approvals, and take payments the same day. My admin time dropped 6–8 hours/week and invoices get paid 2× faster. Game changer for a small crew.",
			name: "Jasmine Cole",
			role: "Owner",
			company: "Cole Renovations",
			location: "",
		},
	];
	return (
		<section
			className="border-y"
			style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
		>
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<h2 className="text-2xl md:text-3xl font-semibold">
					Testimonials
				</h2>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{testimonials.map((t, i) => (
						<FadeIn key={t.name} delay={i * 0.05}>
							<figure className="rounded-2xl border bg-white p-6 shadow-sm">
								<blockquote className="text-neutral-800">
									“{t.quote}”
								</blockquote>
								<figcaption className="mt-3 text-sm text-neutral-600">
									{t.name}
									{t.role ? `, ${t.role}` : ""} • {t.company}
									{t.location ? ` — ${t.location}` : ""}
								</figcaption>
							</figure>
						</FadeIn>
					))}
				</div>
			</Container>
		</section>
	);
}
