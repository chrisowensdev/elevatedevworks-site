// src/components/ui/badge/Badge.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "brand" | "dark" | "light";
type Size = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
	tone?: Tone;
	size?: Size;
	leadingIcon?: React.ReactNode;
}

const toneStyles: Record<Tone, string> = {
	neutral: "border-gray-300 text-gray-800",
	brand: "border-emerald-500 text-emerald-700",
	dark: "border-white/70 text-white",
	light: "border-gray-300 text-gray-700 bg-white/60 backdrop-blur",
};

const sizeStyles: Record<Size, string> = {
	sm: "text-[11px] px-2.5 py-1",
	md: "text-xs px-3 py-1.5",
};

export function Badge({
	children,
	className,
	tone = "neutral",
	size = "md",
	leadingIcon,
	...props
}: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex select-none items-center gap-1 rounded-full border transition-colors",
				sizeStyles[size],
				toneStyles[tone],
				className
			)}
			{...props}
		>
			{leadingIcon ? (
				<span className="inline-flex">{leadingIcon}</span>
			) : null}
			{children}
		</span>
	);
}

export default Badge;
