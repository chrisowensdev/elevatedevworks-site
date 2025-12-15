import { caseStudies } from "@/content/caseStudies";
import { notFound } from "next/navigation";
import CaseStudyPage from "../_components/CaseStudyPage";

export function generateStaticParams() {
	return caseStudies.map((c) => ({ slug: c.slug }));
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
