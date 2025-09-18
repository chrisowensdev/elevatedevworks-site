import Image from "next/image";

export default function WorkCard({
	title,
	href, // external URL e.g. "https://invoiceways.app"
	imgBase, // e.g. "/work/invoice-ways/invoice-ways"
	alt,
	blurb,
}: {
	title: string;
	href: string;
	imgBase: string;
	alt: string;
	blurb: string;
}) {
	return (
		<article>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${title} (opens in a new tab)`}
				className="group block overflow-hidden rounded-xl ring-offset-2 focus:outline-none focus-visible:ring-2"
			>
				<div className="relative aspect-video bg-neutral-100">
					<Image
						src={`work/${imgBase}-1200.webp`}
						alt={alt}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
						sizes="(min-width:1280px) calc((100vw - 9rem)/3),
                   (min-width:640px) calc((100vw - 4rem)/2),
                   100vw"
					/>
				</div>

				<div className="p-4">
					<h3 className="text-lg font-semibold flex items-center gap-2">
						{title}
						{/* <span
							aria-hidden
							className="transition-transform group-hover:translate-x-0.5"
						>
							↗
						</span> */}
					</h3>
					<p className="mt-1 text-sm text-neutral-600">{blurb}</p>
					<p className="mt-3 text-[#2175a2] font-medium">
						Visit site <span aria-hidden>↗</span>
						<span className="sr-only"> (opens in a new tab)</span>
					</p>
				</div>
			</a>
		</article>
	);
}
