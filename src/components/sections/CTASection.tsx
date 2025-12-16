import Link from "next/link";
import Container from "../layout/Container";

type CTASectionProps = {
	bgColor?: "clear" | "bgWhite";
};

export default function CTASection({ bgColor = "bgWhite" }: CTASectionProps) {
	const bgColors = {
		clear: "",
		bgWhite: "bg-white/70",
	};

	return (
		<section className={`border-t ${bgColors[bgColor]}`}>
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
						className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium hover:opacity-90"
					>
						Discuss your project
					</Link>
				</div>
				<p className="mt-3 text-sm text-gray-600">
					A quick message is all it takes — I’ll follow up personally.
				</p>
			</Container>
		</section>
	);
}
