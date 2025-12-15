import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Crumb = { href: string; label: string };

export type CaseStudyHeaderProps = {
	breadcrumbs?: Crumb[];
	eyebrow?: string;
	title: React.ReactNode;
	description?: React.ReactNode;
	meta?: Array<{ label: string; value: string }>;
	tone?: "white" | "muted" | "brand";
	align?: "left" | "center";

	// NEW: foreground image (decorative)
	fgImageSrc?: string;
	fgImageAlt?: string; // leave empty "" if purely decorative
	fgImageWidth?: number; // intrinsic for Next/Image
	fgImageHeight?: number;
	fgImageClassName?: string; // extra styling hooks
	className?: string;
	innerClassName?: string;
};

export default function CaseStudyHeader({
	breadcrumbs,
	eyebrow,
	title,
	description,
	meta,
	tone = "white",
	align = "left",
	fgImageSrc,
	fgImageAlt = "",
	fgImageWidth = 720, // ~3:2
	fgImageHeight = 480,
	fgImageClassName,
	className,
	innerClassName,
}: CaseStudyHeaderProps) {
	const toneClasses =
		tone === "brand"
			? "bg-brand text-white"
			: tone === "muted"
			? "bg-brand-light text-neutral-900"
			: "bg-white text-neutral-900";

	const textAlign =
		align === "center"
			? "text-center items-center"
			: "text-left items-start";

	return (
		<header
			className={cn("relative isolate border-b", toneClasses, className)}
		>
			{/* Make room on desktop for the overlapping image on the right */}
			<div
				className={cn(
					"relative mx-auto max-w-6xl  pt-16 pb-10 sm:pt-5 sm:pb-16",
					// add right padding only on large screens to avoid text under-image
					"lg:pr-[28rem]",
					innerClassName
				)}
			>
				{/* {breadcrumbs && breadcrumbs.length > 0 && (
					<nav
						aria-label="Breadcrumb"
						className={cn(
							"mb-3 text-sm text-gray-600",
							align === "center" && "text-center"
						)}
					>
						<ol className="flex flex-wrap items-center gap-1">
							{breadcrumbs.map((c, i) => (
								<li
									key={`${c.href}-${i}`}
									className="inline-flex items-center gap-1"
								>
									<a
										href={c.href}
										className="hover:text-emerald-700"
									>
										<Badge tone="light" size="sm">
											{c.label}
										</Badge>
									</a>
									{i < breadcrumbs.length - 1 && (
										<span aria-hidden>{">"}</span>
									)}
								</li>
							))}
						</ol>
					</nav>
				)} */}
				{/* Foreground image (desktop: overlapping right; mobile: stacks below) */}
				{fgImageSrc && (
					<>
						{/* Desktop / lg+: positioned right, vertically centered, slightly overlapping */}
						<div
							className={cn(
								"pointer-events-none absolute inset-y-0 right-0 hidden lg:flex",
								"items-center justify-end pr-6"
							)}
							aria-hidden={fgImageAlt === "" ? "true" : undefined}
						>
							<div
								className={cn(
									"relative",
									// playful offset/overlap feel
									"-mr-4 -mt-8 "
								)}
							>
								<Image
									src={fgImageSrc}
									alt={fgImageAlt}
									width={fgImageWidth}
									height={fgImageHeight}
									className={cn(
										"h-auto w-[26rem] max-w-none rounded-2xl shadow-lg ring-1 ring-black/5",
										// gentle fade on the left edge so text feels layered
										"mask-image [mask-image:linear-gradient(to_left,black_85%,transparent_100%)]",
										fgImageClassName
									)}
									sizes="(min-width:1024px) 26rem, 100vw"
									priority
								/>
							</div>
						</div>

						{/* Mobile / tablet: render image inline below the title */}
						<div className="mt-6 lg:hidden">
							<Image
								src={fgImageSrc}
								alt={fgImageAlt}
								width={fgImageWidth}
								height={fgImageHeight}
								className="h-auto w-full rounded-2xl shadow-md ring-1 ring-black/5"
								sizes="100vw"
								priority
							/>
						</div>
					</>
				)}

				{/* Breadcrumbs */}

				{eyebrow && (
					<p className="text-sm font-semibold tracking-wider text-emerald-600 mt-10">
						{eyebrow}
					</p>
				)}

				<h1
					className={cn(
						"mt-2 text-3xl font-bold tracking-tight sm:text-5xl",
						align === "center" && "text-center"
					)}
				>
					{title}
				</h1>

				{description && (
					<p
						className={cn(
							"mt-4 max-w-2xl text-base text-gray-700 sm:text-lg",
							align === "center" && "mx-auto"
						)}
					>
						{description}
					</p>
				)}

				{meta && meta.length > 0 && (
					<dl
						className={cn(
							"mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600",
							align === "center" && "justify-center"
						)}
					>
						{meta.map((m) => (
							<div key={m.label} className="flex gap-2">
								<dt className="text-gray-500">{m.label}:</dt>
								<dd className="text-gray-900">{m.value}</dd>
							</div>
						))}
					</dl>
				)}
			</div>
		</header>
	);
}
