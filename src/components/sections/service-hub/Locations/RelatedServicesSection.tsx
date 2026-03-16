import { RelatedServiceCard } from "./LocationRelatedServiceCard";

type GraphicType = "webDesign" | "seo" | "maintenance";

type RelatedService = {
	title: string;
	description: string;
	href: string;
	ctaLabel: string;
	graphic: GraphicType;
};

type RelatedServicesSectionProps = {
	eyebrow?: string;
	headline: string;
	intro: string;
	services: RelatedService[];
};

export function RelatedServicesSection({
	eyebrow = "Related services",
	headline,
	intro,
	services,
}: RelatedServicesSectionProps) {
	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6">
				<div className="max-w-2xl">
					<p className="text-sm font-medium text-emerald-700">
						{eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
						{headline}
					</h2>
					<p className="mt-4 text-base leading-7 text-slate-600">
						{intro}
					</p>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-2">
					{services.map((service) => (
						<RelatedServiceCard
							key={service.href}
							title={service.title}
							description={service.description}
							href={service.href}
							ctaLabel={service.ctaLabel}
							graphic={service.graphic}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
