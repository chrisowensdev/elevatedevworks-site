import { Container } from "@/components/layout";
import ContentEyebrow from "@/components/ui/ContentEyebrow";
import { packages } from "@/content/services";

export default function Packages() {
	return (
		<section className="border-b">
			<Container className="py-16 md:py-24">
				<ContentEyebrow>Website Packages</ContentEyebrow>
				<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
					Choose the build that fits your stage
				</h2>
				<div className="prose prose-gray mt-4 max-w-none text-gray-700">
					Each package is designed to create trust, improve clarity,
					and make it easy for customers to contact you. Pricing
					ranges reflect scope, number of pages, and integrations.
				</div>
				<div className="mt-8 grid gap-6 md:grid-cols-3">
					{packages.map((p) => (
						<article
							key={p.name}
							className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
						>
							<div className="items-baseline justify-between">
								<h3 className="text-lg font-semibold">
									{p.name}
								</h3>
								<div className="text-sm font-medium text-emerald-700">
									{p.price}
								</div>
							</div>
							<p className="mt-1 text-sm text-neutral-700">
								{p.blurb}
							</p>
							<p>{p.description}</p>
							<ul className="mt-4 space-y-1 text-sm text-neutral-600">
								{p.items.map((it) => (
									<li key={it}>• {it}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
