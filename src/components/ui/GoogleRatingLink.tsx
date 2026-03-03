import Link from "next/link";
import { Star } from "lucide-react";

export function GoogleRatingLink() {
	return (
		<div className="text-center mt-5">
			<Link
				href="https://www.google.com/search?sca_esv=73000156de4ea350&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX54Nn9NeDOYwaxEetnptESI8rrp09Ng9OXieh0aJ1QvVJwgknH0f9wsR8zlRpKKs6O7CBIhLJlQNRA4wOSNdwgIQVjqkcryvl7xFKJut6atDMOJ5Q%3D%3D&q=Elevate+DevWorks+Reviews&sa=X&ved=2ahUKEwjI3Ky6kYSTAxW-FVkFHY8nFRAQ0bkNegQIORAF&biw=1280&bih=1328&dpr=2"
				className="group inline-flex items-center justify-center gap-3 text-sm font-medium text-emerald-600 transition hover:text-emerald-800"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="inline-flex items-center text-emerald-600 transition-colors group-hover:text-emerald-800">
					{Array.from({ length: 5 }).map((_, i) => (
						<Star
							key={i}
							size={20}
							className="fill-current stroke-none transition-colors"
						/>
					))}
				</span>

				<span className="font-bold">5.0 on Google</span>
			</Link>
		</div>
	);
}
