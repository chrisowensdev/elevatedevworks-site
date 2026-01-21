// components/layout/Section.tsx
"use client";

import * as React from "react";
import { Container } from "@/components/layout";

type Props = {
	id?: string;
	className?: string;
	containerClassName?: string;
	eyebrow?: string;
	title?: string;
	description?: React.ReactNode;
	children?: React.ReactNode;

	// spacing + layout
	padding?: "sm" | "md" | "lg"; // default "lg"
	align?: "left" | "center"; // default "left"
	muted?: boolean; // optional subtle background
};

export default function Section({
	id,
	className,
	containerClassName,
	eyebrow,
	title,
	description,
	children,
	padding = "md",
	align = "left",
	muted = false,
}: Props) {
	const pad =
		padding === "sm"
			? "py-10 md:py-14"
			: padding === "md"
				? "py-14 md:py-20"
				: "py-16 md:py-24";

	const alignText = align === "center" ? "text-center" : "text-left";
	const headerWidth = align === "center" ? "mx-auto" : "";
	const descWidth = align === "center" ? "mx-auto" : "";
	const bg = muted ? "bg-gray-50/60" : "";

	const hasHeader = eyebrow || title || description;

	return (
		<section
			id={id}
			className={[bg, className].filter(Boolean).join(" ") + "z-10"}
		>
			<Container
				className={[pad, containerClassName].filter(Boolean).join(" ")}
			>
				{hasHeader ? (
					<div
						className={[alignText, headerWidth]
							.filter(Boolean)
							.join(" ")}
					>
						{eyebrow ? (
							<div className="text-xs font-semibold tracking-wider text-brand-accent">
								{eyebrow}
							</div>
						) : null}

						{title ? (
							<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
								{title}
							</h2>
						) : null}

						{description ? (
							<div
								className={[
									"mt-3 max-w-2xl text-base text-gray-600 sm:text-lg",
									descWidth,
								]
									.filter(Boolean)
									.join(" ")}
							>
								{description}
							</div>
						) : null}
					</div>
				) : null}

				{children ? (
					<div className={hasHeader ? "mt-10" : ""}>{children}</div>
				) : null}
			</Container>
		</section>
	);
}
