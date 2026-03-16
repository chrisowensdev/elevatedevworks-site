import type { LocationImprovementCardProps } from "@/types/location-pages";
import {
	FileText,
	MapPin,
	MessageSquare,
	Search,
	Smartphone,
	TrendingUp,
	Wrench,
} from "lucide-react";

export default function LocationImprovementCard({
	title,
	description,
	iconKey,
}: LocationImprovementCardProps) {
	const iconMap = {
		MessageSquare,
		TrendingUp,
		Smartphone,
		Search,
		MapPin,
		Wrench,
		FileText,
	};
	const Icon = iconMap[iconKey];

	return (
		<article
			key={title}
			className="rounded-2xl border bg-white/90 py-6 px-4 shadow-sm"
		>
			<div className="flex gap-3 ">
				{Icon ? (
					<Icon
						className="h-5 w-5 text-emerald-600 mt-1"
						aria-hidden
					/>
				) : null}

				<h3 className="text-lg font-semibold tracking-tight text-gray-900">
					{title}
				</h3>
			</div>

			<p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
				{description}
			</p>
		</article>
	);
}
