import Link from "next/link";

export type CTAButtonsProps = {
	secondaryCTA?: boolean;
};

export default function CTAButtons({ secondaryCTA }: CTAButtonsProps) {
	return (
		<div>
			<div className="w-full pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
				<Link
					href="/contact"
					className="inline-flex items-center border justify-center rounded-xl bg-brand-accent px-6 py-3 text-white font-medium hover:bg-emerald-700"
				>
					Discuss your project
				</Link>
				{secondaryCTA && (
					<Link
						href="/work"
						className="inline-flex border border-brand items-center justify-center rounded-xl px-6 py-3 text-brand font-medium hover:bg-brand hover:text-white"
					>
						View Work
					</Link>
				)}
			</div>
			<p className="mt-3 text-sm text-gray-600">
				A quick message is all it takes — I’ll follow up personally.
			</p>
		</div>
	);
}
