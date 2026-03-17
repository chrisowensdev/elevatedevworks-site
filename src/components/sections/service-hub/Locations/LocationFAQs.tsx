// src/components/ui/FAQAccordion.tsx
"use client";

import * as React from "react";

export type FAQItem = { id: string; question: string; answer: string };

export default function LocationFAQs({ items }: { items: FAQItem[] }) {
	const [open, setOpen] = React.useState<number | null>(null);

	return (
		<div className="space-y-3">
			{items.map((f, idx) => {
				const isOpen = open === idx;
				return (
					<div key={f.id} className="rounded-2xl border bg-white/70">
						<button
							type="button"
							className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
							aria-expanded={isOpen}
							onClick={() => setOpen(isOpen ? null : idx)}
						>
							<span className="text-base font-medium tracking-tight text-gray-900">
								{f.question}
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
									{f.answer}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
