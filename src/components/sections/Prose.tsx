import * as React from "react";
import { cn } from "@/lib/utils";

type ProseProps = React.HTMLAttributes<HTMLDivElement>;

export default function Prose({ className, ...props }: ProseProps) {
	return (
		<div
			className={cn(
				// base
				"prose prose-neutral",
				// headings & rhythm
				"prose-headings:font-semibold prose-h1:tracking-tight",
				"prose-h1:text-4xl sm:prose-h1:text-5xl",
				"prose-h2:mt-12 prose-h2:text-2xl",
				// brand accents (make sure `brand` color exists)
				"prose-h2:text-brand",
				"prose-li:marker:text-emerald-600",
				// text colors
				"prose-p:text-gray-700",
				// links
				// "prose-a:text-emerald-600 hover:prose-a:text-emerald-700",
				// images, hr, code tweaks (optional)
				"prose-hr:border-gray-200",
				className
			)}
			{...props}
		/>
	);
}
