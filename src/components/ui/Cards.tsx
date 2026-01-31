// components/ui/Cards.tsx
"use client";

import * as React from "react";

export type CardItem = {
	title: string;
	description?: string;
	icon?: React.ElementType;
	href?: string;
};

type Props = {
	items: CardItem[];
	columns?: 2 | 3 | 4;
	dense?: boolean;
};

export default function Cards({ items, columns = 3, dense = false }: Props) {
	const gridCols =
		columns === 2
			? "md:grid-cols-2"
			: columns === 4
				? "md:grid-cols-2 lg:grid-cols-4"
				: "md:grid-cols-2 lg:grid-cols-3";

	const pad = dense ? "p-4" : "p-6";

	return (
		<div className={`grid gap-4 ${gridCols}`}>
			{items.map((item) => {
				const Icon = item.icon;

				const Inner = (
					<div
						className={`rounded-2xl border ${pad} transition hover:bg-muted/40`}
					>
						<div className="flex items-start gap-3">
							{Icon ? (
								<div className="mt-0.5 rounded-xl border p-2">
									<Icon
										className="h-5 w-5"
										aria-hidden="true"
									/>
								</div>
							) : null}

							<div className="min-w-0">
								<h3 className="text-sm font-semibold tracking-tight">
									{item.title}
								</h3>
								{item.description ? (
									<p className="mt-2 text-sm text-muted-foreground">
										{item.description}
									</p>
								) : null}
							</div>
						</div>
					</div>
				);

				if (item.href) {
					return (
						<a
							key={item.title}
							href={item.href}
							className="block focus:outline-none focus:ring-2 rounded-2xl"
						>
							{Inner}
						</a>
					);
				}

				return <div key={item.title}>{Inner}</div>;
			})}
		</div>
	);
}
