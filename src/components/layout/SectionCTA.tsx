import Link from "next/link";

export default function SectionCTA({
	ctaText,
	ctaUrl,
}: {
	ctaText: string;
	ctaUrl: string;
}) {
	return (
		<div className="mt-8 flex flex-wrap gap-3">
			<Link
				href={ctaUrl}
				className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
			>
				{`${ctaText} `} →
			</Link>
		</div>
	);
}
