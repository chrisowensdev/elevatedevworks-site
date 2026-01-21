import Link from "next/link";

export type CTAButtonsProps = {
	secondaryCTA?: boolean;
};

export default function CTAButtons({ secondaryCTA }: CTAButtonsProps) {
	return (
		<div>
			<div className="w-full pt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
				<Link
					href="/contact"
					className="inline-flex items-center border justify-center rounded-xl bg-brand-accent px-6 py-3 text-white font-medium hover:bg-emerald-700 shadow-sm"
				>
					Discuss your project
				</Link>
				{secondaryCTA ? (
					<Link
						href="/work"
						className={
							"inline-flex items-center justify-center rounded-xl border px-5 py-3 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm"
						}
					>
						View Our Work
					</Link>
				) : null}
			</div>
			<p className="mt-5 text-xs text-gray-600">
				A quick message is all it takes, I'll follow up personally.
			</p>
		</div>
	);
}
