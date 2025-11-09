import { Container } from "@/components/layout";

export default function ServicesHero() {
	return (
		<section
			id="services-top"
			aria-labelledby="services-heading"
			className="border-b"
		>
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<p className="text-sm font-semibold tracking-wider text-emerald-600">
					What we do
				</p>
				<h1
					id="services-heading"
					className="mt-2 text-3xl font-bold tracking-tight md:text-5xl"
				>
					Services built to ship fast and scale
				</h1>
				<p className="mt-4 max-w-2xl text-neutral-700">
					From small-business websites to designer handoffs and
					ongoing care—our focus is clean code, performance, and
					measurable results.
				</p>
			</Container>
		</section>
	);
}
