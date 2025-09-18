import WebsiteAssessmentForm from "@/components/website_assessment/WebsiteAssessmentForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Web Assessment",
	description: "ChrisOwensDev - Web Assessment for new clients form",
};

export default function WebsiteAssessment() {
	return (
		<main className="pt-20">
			<h1 className="text-5xl text-center m-10">
				Website Needs Assessment
			</h1>
			<p className="italic text-center">
				Client Discovery and Website Planning
			</p>
			<WebsiteAssessmentForm />
		</main>
	);
}
