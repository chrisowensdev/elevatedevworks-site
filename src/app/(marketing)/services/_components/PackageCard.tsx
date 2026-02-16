type PackageCardProps = {
	eyebrow?: string;
	title: string;
	price: string; // e.g. "$1,200–$1,800" or "$149/mo"
	description: string;
	perfectFor?: string;
	features: string[];
	ctaHref?: string;
	ctaLabel?: string;
	badge?: string; // e.g. "Most Popular"
	accent?: "emerald" | "brand";
	salePrice?: string;
	saleText?: string;
	saleEndsText?: string;
};

export default function PackageCard({
	eyebrow,
	title,
	price,
	description,
	perfectFor,
	features,
	badge,
	accent = "emerald",
	salePrice,
	saleText = "SALE",
	saleEndsText,
}: PackageCardProps) {
	const accentClasses =
		accent === "brand"
			? "ring-brand/20 border-brand/20"
			: "ring-emerald-500/20 border-emerald-500/20";

	const badgeClasses =
		accent === "brand"
			? "bg-brand text-white"
			: "bg-emerald-600 text-white";

	return (
		<article
			className={[
				"group relative flex h-full flex-col rounded-2xl border bg-white/90 p-6 shadow-sm",
				"transition hover:shadow-md",
				"ring-4 ring-transparent hover:ring-emerald-500/10",
				accentClasses,
			].join(" ")}
		>
			{/* Optional badge */}
			{badge ? (
				<div className="absolute right-4 -top-4">
					<span
						className={[
							"inline-flex items-center rounded-full px-3 py-2 text-xs font-semibold",
							badgeClasses,
						].join(" ")}
					>
						{badge}
					</span>
				</div>
			) : null}

			{/* Header */}
			<div>
				{eyebrow ? (
					<p className="text-xs font-semibold tracking-wider text-emerald-600">
						{eyebrow}
					</p>
				) : null}

				<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-900">
					{title}
				</h3>

				<p className="mt-3 text-sm text-gray-600 line-clamp-3">
					{description}
				</p>

				{perfectFor ? (
					<p className="mt-4 text-sm text-gray-700">
						<span className="font-semibold">Perfect for:</span>{" "}
						{perfectFor}
					</p>
				) : null}
			</div>

			{/* Features */}
			<ul className="mt-6 space-y-2 text-sm text-gray-700">
				{features.slice(0, 8).map((f) => (
					<li key={f} className="flex gap-2">
						<span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
						<span className="leading-6">{f}</span>
					</li>
				))}
			</ul>

			{/* Footer pinned to bottom */}
			<div className="mt-auto pt-6">
				{salePrice ? (
					<div className="inline-flex w-full flex-wrap justify-end gap-2">
						<span className="rounded-full bg-brand-accent/10 px-2 py-0.5 text-xs font-semibold text-brand-accent">
							{saleText}
						</span>
						{saleEndsText ? (
							<span className="text-xs text-black/50">
								{saleEndsText}
							</span>
						) : null}
					</div>
				) : null}

				<div className="flex items-start justify-between gap-4">
					<p className="pt-1 text-sm text-gray-600">Starting at</p>

					{salePrice ? (
						<div className="text-right space-y-1">
							<div className="flex items-baseline justify-end gap-2">
								<p className="text-2xl font-semibold text-brand-accent">
									{salePrice}
								</p>
								<p className="text-sm font-semibold text-black/30 line-through">
									{price}
								</p>
							</div>
						</div>
					) : (
						<p className="text-lg font-semibold text-brand-accent">
							{price}
						</p>
					)}
				</div>

				{/* <div className="mt-5">
					<Link
						href={ctaHref}
						className="inline-flex w-full items-center justify-center rounded-xl border-2 border-brand-accent px-5 py-3 text-sm font-medium text-brand-accent shadow-sm transition hover:bg-brand-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
					>
						{ctaLabel}
					</Link>
				</div> */}
			</div>
		</article>
	);
}
