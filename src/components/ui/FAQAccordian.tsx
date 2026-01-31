// src/components/ui/FAQAccordion.tsx
"use client";

import * as React from "react";

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
	const [open, setOpen] = React.useState<number | null>(0);

	return (
		<div className="space-y-3">
			{items.map((f, idx) => {
				const isOpen = open === idx;
				return (
					<div key={f.q} className="rounded-2xl border bg-white/70">
						<button
							type="button"
							className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
							aria-expanded={isOpen}
							onClick={() => setOpen(isOpen ? null : idx)}
						>
							<span className="text-base font-semibold tracking-tight text-gray-900">
								{f.q}
							</span>
							<span
								aria-hidden
								className={[
									"text-gray-500 transition-transform",
									isOpen ? "rotate-45" : "rotate-0",
								].join(" ")}
							>
								+
							</span>
						</button>

						<div
							className={[
								"grid transition-all duration-200 ease-out",
								isOpen
									? "grid-rows-[1fr] opacity-100"
									: "grid-rows-[0fr] opacity-0",
							].join(" ")}
						>
							<div className="overflow-hidden px-5 pb-4">
								<p className="text-sm leading-6 text-gray-700">
									{f.a}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
