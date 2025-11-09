import * as React from "react";
import { Badge, type BadgeProps } from "./Badge";
import { cn } from "@/lib/utils";

export interface BadgeGroupProps {
	items: Array<string | React.ReactNode>;
	tone?: BadgeProps["tone"];
	size?: BadgeProps["size"];
	className?: string;
	badgeClassName?: string; // style each badge
}

export function BadgeGroup({
	items,
	tone = "neutral",
	size = "md",
	className,
	badgeClassName,
}: BadgeGroupProps) {
	return (
		<div
			className={cn("mt-4 flex flex-wrap items-center gap-2", className)}
		>
			{items.map((it, i) => (
				<Badge
					key={i}
					tone={tone}
					size={size}
					className={badgeClassName}
				>
					{it}
				</Badge>
			))}
		</div>
	);
}

export default BadgeGroup;
