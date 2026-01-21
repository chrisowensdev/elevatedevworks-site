// components/ui/Cards.tsx
"use client";

import * as React from "react";
import Card, { type CardProps } from "./Card";

type Props = {
	items: CardProps[];
	columns?: 2 | 3 | 4;
	className?: string;
	cardVariant?: CardProps["variant"];
	accent?: boolean;
};

// components/ui/Cards.tsx
export default function Cards({
	items,
	columns = 3,
	className,
	cardVariant = "compact",
	accent = false,
}: Props) {
	const gridCols =
		columns === 2
			? "md:grid-cols-2"
			: columns === 4
			? "md:grid-cols-2 lg:grid-cols-4"
			: "md:grid-cols-2 lg:grid-cols-3";

	return (
		<div
			className={[
				"grid gap-4 items-stretch", // ✅ add
				gridCols,
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			{items.map((item) => (
				<Card
					key={item.href ?? item.title}
					{...item}
					variant={item.variant ?? cardVariant}
					accent={item.accent ?? accent}
				/>
			))}
		</div>
	);
}
