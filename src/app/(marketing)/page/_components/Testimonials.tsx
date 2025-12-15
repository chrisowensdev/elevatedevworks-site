"use client";

import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
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
					{testimonials.map((testimonial, index) => (
						<FadeIn key={testimonial.name} delay={index * 0.05}>
							<figure className="rounded-2xl border bg-white p-6 shadow-sm">
								<blockquote className="text-neutral-800">
									“{testimonial.quote}”
								</blockquote>
								<figcaption className="mt-3 text-sm text-neutral-600">
									{testimonial.name}
									{testimonial.role
										? `, ${testimonial.role}`
										: ""}{" "}
									• {testimonial.company}
									{testimonial.location
										? ` — ${testimonial.location}`
										: ""}
								</figcaption>
							</figure>
						</FadeIn>
					))}
				</div>
			</Container>
		</section>
	);
}
