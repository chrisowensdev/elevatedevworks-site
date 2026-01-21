// components/sections/service-hub/ServiceDeliverablesSection.tsx
"use client";

import * as React from "react";
import Section from "@/components/layout/Section";
import Cards from "@/components/layout/Cards";
import type { CardProps } from "@/components/layout/Card";
import { SectionActions } from "../SectionActions";

type ActionLink = { text: string; href: string };

type Props = {
	eyebrow?: string;
	title: string;
	description?: React.ReactNode;
	items: CardProps[];
	actions?: ActionLink[];
};

export default function ServiceDeliverablesSection({
	eyebrow = "Deliverables",
	title,
	description,
	items,
	actions,
}: Props) {
	return (
		<Section eyebrow={eyebrow} title={title} description={description}>
			<Cards items={items} columns={2} cardVariant="compact" />
			{actions?.length ? <SectionActions links={actions} /> : null}
		</Section>
	);
}
