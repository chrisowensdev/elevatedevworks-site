"use client";

import { Laptop, Server, LineChart } from "lucide-react";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionCTA from "@/components/layout/SectionCTA";

type ServiceItem = {
	title: string;
	description: string;
	points: string[];
	icon: React.ElementType;
};

const services: ServiceItem[] = [
	{
		title: "Custom Websites",
		description:
			"Thoughtfully designed and built websites using modern tools like Next.js or WordPress, focused on clarity, performance, and accessibility.",
		points: [
			"Discovery & structure planning",
			"Responsive, mobile-first layouts",
			"Accessibility & performance best practices",
			"Clean, maintainable code",
		],
		icon: Laptop,
	},
	{
		title: "Hosting & Maintenance",
		description:
			"Reliable hosting and ongoing care to keep your site fast, secure, and running smoothly without constant oversight.",
		points: [
			"Managed hosting & SSL",
			"Automated backups",
			"Security monitoring",
			"Updates & small fixes",
		],
		icon: Server,
	},
	{
		title: "SEO & Growth",
		description:
			"Practical SEO and measurement to help your site get found, understood, and improved over time.",
		points: [
			"On-page SEO foundations",
			"Core Web Vitals optimization",
			"Analytics & Search Console setup",
			"Ongoing visibility improvements",
		],
		icon: LineChart,
	},
];

export default function ServicesOverview({
	className,
	ctaText,
	ctaUrl,
}: {
	className?: string;
	ctaText?: string;
	ctaUrl?: string;
}) {
	return (
		<section
			aria-labelledby="services-overview-heading"
			className={className}
		>
			<Container className="py-16 md:py-24">
				<SectionHeader
					eyebrow="What We Do"
					title="End-to-end website design, development, and growth"
				/>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					We handle the full lifecycle of your website — from design
					and development to hosting, maintenance, and ongoing SEO.
					Our focus is clarity, performance, and long-term
					maintainability.
				</p>

				{/* Services grid */}
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{services.map((service, i) => {
						const Icon = service.icon;
						return (
							<FadeIn key={service.title} delay={i * 0.05}>
								<article className="rounded-2xl border bg-white/90 p-6 shadow-sm border-t-4 border-t-brand-accent">
									<div className="flex items-center gap-3">
										<Icon
											className="h-5 w-5 text-emerald-600"
											aria-hidden
										/>
										<h3 className="text-lg font-semibold text-gray-900">
											{service.title}
										</h3>
									</div>

									<p className="mt-3 text-sm text-gray-600">
										{service.description}
									</p>

									<ul className="mt-4 space-y-2 text-sm text-gray-700">
										{service.points.map((point) => (
											<li
												key={point}
												className="flex gap-2"
											>
												<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
												<span className="leading-6">
													{point}
												</span>
											</li>
										))}
									</ul>
								</article>
							</FadeIn>
						);
					})}
				</div>
				{ctaText && ctaUrl && (
					<SectionCTA ctaText={ctaText} ctaUrl={ctaUrl} />
				)}
			</Container>
		</section>
	);
}
