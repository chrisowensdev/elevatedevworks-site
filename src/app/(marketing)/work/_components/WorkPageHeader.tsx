// // src/components/sections/work/WorkPageHeader.tsx
// import * as React from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { Container } from "@/components/layout";

// type Crumb = { href: string; label: string };

// export type WorkPageHeaderProps = {
// 	/** Small label above the title (e.g., "Our Work" or "Case Study") */
// 	eyebrow?: string;
// 	/** Main heading; default h1 for page title */
// 	title: React.ReactNode;
// 	/** Optional supporting copy */
// 	description?: React.ReactNode;

// 	/** Breadcrumbs (e.g., [{href:"/",label:"Home"},{href:"/work",label:"Work"}]) */
// 	breadcrumbs?: Crumb[];

// 	/** Optional meta row (e.g., client, role, year) */
// 	meta?: Array<{ label: string; value: string }>;

// 	/** Background tone */
// 	tone?: "white" | "muted" | "brand";
// 	/** Align content */
// 	align?: "left" | "center";
// 	/** Heading level if you need h2 inside a larger layout */
// 	headingLevel?: "h1" | "h2";

// 	/** Optional actions area (e.g., CTA buttons, filters) */
// 	actionsSlot?: React.ReactNode;

// 	className?: string;
// 	innerClassName?: string;
// };

// export default function WorkPageHeader({
// 	eyebrow = "Our Work",
// 	title,
// 	description,
// 	breadcrumbs,
// 	meta,
// 	tone = "white",
// 	align = "left",
// 	headingLevel = "h1",
// 	actionsSlot,
// 	className,
// 	innerClassName,
// }: WorkPageHeaderProps) {
// 	const Heading = headingLevel;

// 	const toneClasses =
// 		tone === "brand"
// 			? "bg-brand text-white"
// 			: tone === "muted"
// 			? "bg-brand-light text-neutral-900"
// 			: "bg-white text-neutral-900";

// 	const alignClasses =
// 		align === "center"
// 			? "text-center items-center"
// 			: "text-left items-start";

// 	return (
// 		<section className={cn("relative isolate border-b", className)}>
// 			<Container>
// 				<div
// 					className={cn(
// 						"mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16 flex flex-col gap-4",
// 						alignClasses,
// 						innerClassName
// 					)}
// 				>
// 					{/* Breadcrumbs */}
// 					{breadcrumbs && breadcrumbs.length > 0 && (
// 						<nav
// 							aria-label="Breadcrumb"
// 							className={cn(
// 								"text-sm",
// 								align === "center" && "mx-auto"
// 							)}
// 						>
// 							<ol className="flex flex-wrap items-center gap-1 text-gray-500">
// 								{breadcrumbs.map((c, i) => (
// 									<li
// 										key={`${c.href}-${i}`}
// 										className="inline-flex items-center gap-1"
// 									>
// 										<Link
// 											href={c.href}
// 											className={cn(
// 												"hover:underline",
// 												tone === "brand"
// 													? "text-white/80 hover:text-white"
// 													: "text-gray-600 hover:text-gray-900"
// 											)}
// 										>
// 											{c.label}
// 										</Link>
// 										{i < breadcrumbs.length - 1 && (
// 											<span aria-hidden>›</span>
// 										)}
// 									</li>
// 								))}
// 							</ol>
// 						</nav>
// 					)}

// 					{/* Eyebrow */}
// 					{eyebrow && (
// 						<p
// 							className={cn(
// 								"text-sm font-semibold tracking-wider",
// 								tone === "brand"
// 									? "text-white/80"
// 									: "text-emerald-600",
// 								align === "center" && "mx-auto"
// 							)}
// 						>
// 							{eyebrow}
// 						</p>
// 					)}

// 					{/* Title */}
// 					<Heading
// 						className={cn(
// 							"text-3xl font-bold tracking-tight sm:text-5xl",
// 							tone === "brand" ? "text-white" : "text-gray-900",
// 							align === "center" && "mx-auto"
// 						)}
// 					>
// 						{title}
// 					</Heading>

// 					{/* Description */}
// 					{description && (
// 						<p
// 							className={cn(
// 								"max-w-2xl text-base sm:text-lg",
// 								tone === "brand"
// 									? "text-white/90"
// 									: "text-gray-600",
// 								align === "center" && "mx-auto"
// 							)}
// 						>
// 							{description}
// 						</p>
// 					)}

// 					{/* Meta row (client / role / year etc.) */}
// 					{meta && meta.length > 0 && (
// 						<dl
// 							className={cn(
// 								"mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm",
// 								align === "center" && "justify-center"
// 							)}
// 						>
// 							{meta.map((m) => (
// 								<div key={m.label} className="flex gap-2">
// 									<dt
// 										className={cn(
// 											tone === "brand"
// 												? "text-white/70"
// 												: "text-gray-500"
// 										)}
// 									>
// 										{m.label}:
// 									</dt>
// 									<dd
// 										className={cn(
// 											tone === "brand"
// 												? "text-white"
// 												: "text-gray-900"
// 										)}
// 									>
// 										{m.value}
// 									</dd>
// 								</div>
// 							))}
// 						</dl>
// 					)}

// 					{/* Actions / Filters / CTA */}
// 					{actionsSlot && (
// 						<div
// 							className={cn(
// 								"mt-4",
// 								align === "center" && "flex justify-center"
// 							)}
// 						>
// 							{actionsSlot}
// 						</div>
// 					)}
// 				</div>
// 			</Container>
// 		</section>
// 	);
// }

// src/components/sections/work/WorkPageHeader.tsx
import Image from "next/image";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Crumb = { href: string; label: string };

export type WorkPageHeaderProps = {
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

export default function WorkPageHeader({
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
}: WorkPageHeaderProps) {
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
			<Container>
				{/* Make room on desktop for the overlapping image on the right */}
				<div
					className={cn(
						"relative mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16",
						// add right padding only on large screens to avoid text under-image
						"lg:pr-[28rem]",
						innerClassName
					)}
				>
					{breadcrumbs && breadcrumbs.length > 0 && (
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
					)}
					{/* Foreground image (desktop: overlapping right; mobile: stacks below) */}
					{fgImageSrc && (
						<>
							{/* Desktop / lg+: positioned right, vertically centered, slightly overlapping */}
							<div
								className={cn(
									"pointer-events-none absolute inset-y-0 right-0 hidden lg:flex",
									"items-center justify-end pr-6"
								)}
								aria-hidden={
									fgImageAlt === "" ? "true" : undefined
								}
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
									<dt className="text-gray-500">
										{m.label}:
									</dt>
									<dd className="text-gray-900">{m.value}</dd>
								</div>
							))}
						</dl>
					)}
				</div>
			</Container>
		</header>
	);
}
