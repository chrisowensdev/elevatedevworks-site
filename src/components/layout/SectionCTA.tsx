// components/layout/SectionCTA.tsx
import Link from "next/link";

type CTA = {
	text: string;
	href: string;
};

export default function SectionCTA({
	primary,
	secondary,
	className,
}: {
	primary?: CTA;
	secondary?: CTA;
	className?: string;
}) {
	if (!primary && !secondary) return null;

	return (
		<div
			className={["mt-8 flex flex-wrap items-center gap-4", className]
				.filter(Boolean)
				.join(" ")}
		>
			{primary ? (
				<Link
					href={primary.href}
					className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-2 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50 hover:border-emerald-300"
				>
					{primary.text}
				</Link>
			) : null}

			{secondary ? (
				<Link
					href={secondary.href}
					className="inline-flex items-center text-sm font-normal text-emerald-600 hover:text-emerald-700"
				>
					{secondary.text}{" "}
					<span aria-hidden className="ml-1">
						→
					</span>
				</Link>
			) : null}
		</div>
	);
}
