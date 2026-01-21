import Link from "next/link";
import Container from "../layout/Container";
import { FadeIn } from "../media";

type CTASectionProps = {
	bgColor?: "clear" | "bgWhite";
	title?: string;
	description?: string;
};

export default function CTASection({
	bgColor = "bgWhite",
	title = "Read to start your project?",
	description = "Let's talk about your goals and see if Elevate DevWorks is the right fit.",
}: CTASectionProps) {
	const bgColors = {
		clear: "",
		bgWhite: "bg-white/70",
	};

	return (
		<section className={`border-t ${bgColors[bgColor]}`}>
			<Container size="default" className="py-16 text-center">
				<FadeIn>
					<h2 className="text-2xl font-semibold text-gray-900">
						{title}
					</h2>
					<p className="mt-3 max-w-xl mx-auto text-gray-600">
						{description}
					</p>
					<div className="mt-8">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium hover:opacity-90 shadow-[0_3px_15px_rgba(0,0,0,0.30)] "
						>
							Discuss your project
						</Link>
					</div>
					<p className="mt-5 text-sm text-gray-600">
						A quick message is all it takes, I'll follow up
						personally.
					</p>
				</FadeIn>
			</Container>
		</section>
	);
}
