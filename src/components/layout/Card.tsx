"use client";

import * as React from "react";
import Link from "next/link";

export type CardProps = {
	title: string;
	description?: React.ReactNode;
	eyebrow?: string;
	emoji?: string;
	icon?: React.ElementType;
	href?: string;

	className?: string;
	headerClassName?: string;
	bodyClassName?: string;

	variant?: "primary" | "compact" | "mini"; // default "compact"
	accent?: boolean; // default false (adds your emerald top bar)
	children?: React.ReactNode;
};

export default function Card({
	title,
	description,
	eyebrow,
	emoji,
	icon,
	href,
	className,
	headerClassName,
	bodyClassName,
	variant = "compact",
	accent = false,
	children,
}: CardProps) {
	const Icon = icon;

	const pad =
		variant === "mini" ? "p-4" : variant === "primary" ? "p-6" : "p-6";

	// Titles: primary = larger, compact = balanced, mini = small
	const titleClass =
		variant === "primary"
			? "text-lg font-semibold text-gray-900"
			: variant === "mini"
				? "text-sm font-semibold text-gray-900"
				: "text-base font-semibold text-gray-900";

	const descClass =
		variant === "mini"
			? "mt-2 text-sm text-gray-600"
			: "mt-2 text-sm text-gray-600";

	const Wrapper: React.ElementType = href ? Link : "div";
	const wrapperProps = href ? { href } : {};

	return (
		<Wrapper
			{...wrapperProps}
			className={[
				"group block h-full rounded-2xl focus:outline-none focus:ring-2",
				href ? "cursor-pointer" : "",
			]
				.filter(Boolean)
				.join(" ")}
			aria-label={href ? title : undefined}
		>
			<article
				className={[
					"relative h-full rounded-2xl border bg-white/90 transition",
					pad,
					className,
				]
					.filter(Boolean)
					.join(" ")}
			>
				{accent ? (
					<div className="absolute left-[3px] top-0 h-1 w-full rounded-tl-full bg-gradient-to-r from-emerald-600/60 to-emerald-600/0" />
				) : null}

				<div
					className={["flex items-start gap-3", headerClassName]
						.filter(Boolean)
						.join(" ")}
				>
					<div className="min-w-0">
						<div className="flex justify-between items-center">
							{eyebrow ? (
								<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">
									{eyebrow}
								</div>
							) : null}
							{Icon ? (
								<div className="rounded-xl">
									<Icon
										className="h-5 w-5 text-emerald-600 mb-3"
										aria-hidden
									/>
								</div>
							) : null}
						</div>

						{emoji ? (
							<div className="flex items-center gap-2">
								<span className="text-xl" aria-hidden>
									{emoji}
								</span>
								<h3
									className={[
										titleClass,
										"tracking-tight",
									].join(" ")}
								>
									{title}
								</h3>
							</div>
						) : (
							<h3
								className={[titleClass, "tracking-tight"].join(
									" ",
								)}
							>
								{title}
							</h3>
						)}

						{description ? (
							<div
								className={[descClass, bodyClassName]
									.filter(Boolean)
									.join(" ")}
							>
								{description}
							</div>
						) : null}
					</div>
				</div>

				{children ? <div className="mt-4">{children}</div> : null}

				{href ? (
					<div className="mt-5 text-sm font-medium text-emerald-700">
						<span className="text-muted-foreground transition group-hover:text-foreground">
							Learn more <span aria-hidden>→</span>
						</span>
					</div>
				) : null}
			</article>
		</Wrapper>
	);
}
