import Section from "@/components/layout/Section";
import ReviewCard from "@/components/layout/ReviewCard";
import { Star } from "lucide-react";
import Link from "next/link";

export type ReviewCardProps = {
	stars: number;
	reviewText: string;
	user: string;
	company?: string;
};

const reviewCards: ReviewCardProps[] = [
	{
		stars: 5,
		reviewText:
			"High-quality, clean development and great communication throughout. Professional, easy to work with — I recommend Elevate DevWorks.”",
		user: "Vlad Z.",
		company: "Lux IT Solutions",
	},
	{
		stars: 5,
		reviewText:
			"They got my Shopify store up and running and helped with a logo. Fast, helpful, and saved me a ton of time — highly recommend.",
		user: "Martha M.",
		company: "Made By Rockstar",
	},
];

export default function Reviews({
	actionText = "Read all reviews",
	actionUrl = "https://www.google.com/search?sca_esv=73000156de4ea350&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX54Nn9NeDOYwaxEetnptESI8rrp09Ng9OXieh0aJ1QvVJwgknH0f9wsR8zlRpKKs6O7CBIhLJlQNRA4wOSNdwgIQVjqkcryvl7xFKJut6atDMOJ5Q%3D%3D&q=Elevate+DevWorks+Reviews&sa=X&ved=2ahUKEwjI3Ky6kYSTAxW-FVkFHY8nFRAQ0bkNegQIORAF&biw=1280&bih=1328&dpr=2",
}: {
	actionText?: string;
	actionUrl?: string;
}) {
	return (
		<Section
			eyebrow="Client Feedback"
			title="Clear communication. Fast delivery. Solid results."
		>
			<div className="flex flex-col justify-center">
				<div className="display flex justify-center mb-10">
					<Star fill="#21a37c" stroke="none" size={20} />
					<Star fill="#21a37c" stroke="none" size={20} />
					<Star fill="#21a37c" stroke="none" size={20} />
					<Star fill="#21a37c" stroke="none" size={20} />
					<Star fill="#21a37c" stroke="none" size={20} />
					<p className="text-sm px-3"> 5.0 on Google</p>
				</div>
			</div>
			<div
				className={["grid gap-4 items-stretch md:grid-cols-2"]
					.filter(Boolean)
					.join(" ")}
			>
				{reviewCards.map((item) => (
					<ReviewCard key={item.company ?? item.company} {...item} />
				))}
			</div>

			<div className="mt-10 flex items-center justify-between">
				<Link
					href={actionUrl}
					className="inline-flex items-center text-sm font-medium text-emerald-600 transition hover:text-emerald-800"
					target="_blank"
					rel="noopener noreferrer"
				>
					{actionText}{" "}
					<span aria-hidden className="ml-1">
						→
					</span>
				</Link>
			</div>
		</Section>
	);
}
