import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FaqItem = {
	id: string;
	question: string;
	answer: string;
};

type FaqOverride = Partial<FaqItem> & { id: string };

export function mergeFaqs(
	defaultFaqs: FaqItem[],
	overrides: FaqOverride[] = [],
): FaqItem[] {
	const overridesMap = new Map(overrides.map((item) => [item.id, item]));

	return defaultFaqs.map((faq) => {
		const override = overridesMap.get(faq.id);

		if (!override) return faq;

		return {
			...faq,
			...override,
		};
	});
}
