import Link from "next/link";
import Container from "./Container";

export default function CTASection() {
	return (
		<section className="border-t bg-white/70">
			<Container size="default" className="py-16 text-center">
				<h2 className="text-2xl font-semibold text-gray-900">
					Ready to start your project?
				</h2>
				<p className="mt-3 max-w-xl mx-auto text-gray-600">
					Let’s talk about your goals and see if Elevate DevWorks is
					the right fit.
				</p>
				<div className="mt-8">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-white font-medium hover:opacity-90"
					>
						Get in touch
					</Link>
				</div>
			</Container>
		</section>
	);
}
