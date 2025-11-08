import * as React from "react";
import { cn } from "@/lib/utils"; // your className merge helper

type MainProps = React.ComponentPropsWithoutRef<"main"> & {
	/**
	 * When true, automatically sets id="main" so the global skip link works.
	 * Defaults to true for consistency.
	 */
	withSkipTarget?: boolean;
};

export default function Main({
	className,
	withSkipTarget = true,
	id,
	...props
}: MainProps) {
	return (
		<main
			id={withSkipTarget ? id ?? "main" : id}
			className={cn(
				"min-h-screen text-neutral-900 relative z-10",
				className
			)}
			{...props}
		/>
	);
}
