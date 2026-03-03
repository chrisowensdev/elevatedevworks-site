import Link from "next/link";

export function SectionActions({
	links,
}: {
	links: { text: string; href: string }[];
}) {
	return (
		<div className="mt-10 flex items-center justify-between">
			<div className=" flex gap-10">
				{links.map((l) => (
					<Link
						key={l.href}
						href={l.href}
						className="inline-flex items-center text-base text-emerald-600 transition hover:text-emerald-800 font-extrabold"
					>
						{l.text}{" "}
						<span aria-hidden className="ml-1">
							→
						</span>
					</Link>
				))}
			</div>
			{/* <span
				className="h-px w-75 bg-gradient-to-l from-emerald-600/40 to-emerald-600/0 hidden sm:block"
				aria-hidden
			/> */}
		</div>
	);
}
