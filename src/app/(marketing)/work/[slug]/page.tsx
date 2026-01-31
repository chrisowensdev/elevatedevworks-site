import { caseStudies } from "@/content/caseStudies";
import { notFound } from "next/navigation";
import CaseStudyPage from "../_components/CaseStudyPage";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const data = caseStudies.find((c) => c.slug === slug);
	if (!data) return {};

	const title = `${data.name} Website Demo | Elevate DevWorks`;
	const description = data.metaDescription;

	// const robots =
	// 	data.index === false
	// 		? { index: false, follow: false }
	// 		: { index: true, follow: true };

	return {
		title,
		description,
		// robots,
		alternates: { canonical: `/work/${data.slug}/` },
		openGraph: {
			title,
			description,
			url: `/work/${data.slug}/`,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const data = caseStudies.find((c) => c.slug === slug);
	if (!data) return notFound();
	return <CaseStudyPage data={data} />;
}
