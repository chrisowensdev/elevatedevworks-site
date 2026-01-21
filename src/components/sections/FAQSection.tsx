"use client";

import { useMemo, useState } from "react";
import type { FAQContext } from "@/content/faq";
import { faqs } from "@/content/faq";
import Section from "../layout/Section";

type Props = {
	context: FAQContext; // "home" | "services" | "contact"
	limit?: number; // use on home page to show only top 3
	eyebrow?: string;
	title?: string;
	description?: string;
};

export default function FAQSection({
	context,
	limit,
	eyebrow = "Common Questions",
	title = "A few things you might be wondering",
	description,
}: Props) {
	const items = useMemo(() => {
		const filtered = faqs.filter((f) => f.showOn.includes(context));
		return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
	}, [context, limit]);

	// open the first item by default on non-home contexts (optional)
	const [openIndex, setOpenIndex] = useState<number | null>(
		context === "home" || "services" ? null : 0,
	);

	if (items.length === 0) return null;

	return (
		<>
			<Section
				eyebrow={eyebrow}
				title={title}
				description={description}
				id="common-questions"
			>
				<div className="mt-10 space-y-4">
					{items.map((item, idx) => {
						const isOpen = openIndex === idx;
						const buttonId = `faq-button-${context}-${idx}`;
						const panelId = `faq-panel-${context}-${idx}`;

						return (
							<div
								className="rounded-2xl border bg-white shadow-sm"
								key={item.q}
							>
								<h3>
									<button
										id={buttonId}
										type="button"
										className="flex w-full items-center justify-between gap-4 p-6 text-left"
										aria-expanded={isOpen}
										aria-controls={panelId}
										onClick={() =>
											setOpenIndex((prev) =>
												prev === idx ? null : idx,
											)
										}
									>
										<span className="text-base font-semibold text-gray-900">
											{item.q}
										</span>

										<span
											className={[
												"shrink-0 rounded-full border px-2 py-1 text-xs font-semibold",
												isOpen
													? "border-emerald-200 bg-emerald-50 text-emerald-700"
													: "border-gray-200 bg-gray-50 text-gray-700",
											].join(" ")}
											aria-hidden
										>
											{isOpen ? "–" : "+"}
										</span>
									</button>
								</h3>

								<div
									id={panelId}
									role="region"
									aria-labelledby={buttonId}
									className={[
										"px-6 pb-6",
										isOpen ? "block" : "hidden",
									].join(" ")}
								>
									<p className="text-sm leading-relaxed text-gray-600">
										{item.a}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</Section>
		</>
	);
}
