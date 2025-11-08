import { Container } from "@/components/layout";
import { faqs } from "@/data/faq";

export default function FAQ() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a,
			},
		})),
	};

	return (
		<section aria-labelledby="faq-heading">
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<h2
					id="faq-heading"
					className="text-2xl md:text-3xl font-semibold"
				>
					Frequently Asked Questions
				</h2>
				<p className="mt-3 text-neutral-700 max-w-3xl">
					Quick answers to common questions about process, timelines,
					pricing, and SEO.
				</p>
				<div className="mt-8 grid gap-4">
					{faqs.map((item) => (
						<details
							key={item.q}
							className="rounded-xl border bg-white p-4"
						>
							<summary className="cursor-pointer text-base font-medium">
								{item.q}
							</summary>
							<p className="mt-2 text-neutral-700">{item.a}</p>
						</details>
					))}
				</div>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Container>
		</section>
	);
}
