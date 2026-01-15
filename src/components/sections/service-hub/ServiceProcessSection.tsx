"use client";

import * as React from "react";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";

type Props = {
	eyebrow?: string;
	title: string;
	description?: React.ReactNode;
	items: CardProps[];
};

export default function ServiceProcessSection({
	eyebrow = "Process",
	title,
	description,
	items,
}: Props) {
	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<Cards items={items} columns={4} cardVariant="mini" />
		</Section>
	);
}
