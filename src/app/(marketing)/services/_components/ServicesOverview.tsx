"use client";

import Link from "next/link";
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
	href?: string; // ✅ add
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
		href: "/web-design", // ✅ link hub
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
		href: "/maintenance",
		// href: "/maintenance" // add later if/when it exists
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
		href: "/seo",
		// href: "/seo" // add later if/when it exists
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

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{services.map((service, i) => {
						const Icon = service.icon;

						const Card = (
							<article
								className={[
									"relative rounded-2xl border bg-white/90 p-6 transition",
									service.href
										? "hover:bg-white focus-within:ring-2"
										: "",
								].join(" ")}
							>
								<div className="absolute left-[3px] top-0 h-1 w-full rounded-tl-full bg-gradient-to-r from-emerald-600/60 to-emerald-600/0" />

								<div className="flex items-center gap-3">
									<Icon
										className="h-5 w-5 text-emerald-600"
										aria-hidden
									/>
									<h3 className="text-base font-semibold text-gray-900 tracking-tight">
										{service.title}
									</h3>
								</div>

								<p className="mt-3 text-sm text-gray-600">
									{service.description}
								</p>

								<ul className="mt-4 space-y-2 text-sm text-gray-700">
									{service.points.map((point) => (
										<li key={point} className="flex gap-2">
											<span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
											<span className="leading-6">
												{point}
											</span>
										</li>
									))}
								</ul>

								{service.href ? (
									<div className="mt-5 text-sm font-medium text-emerald-700">
										Learn more <span aria-hidden>→</span>
									</div>
								) : null}
							</article>
						);

						return (
							<FadeIn key={service.title} delay={i * 0.05}>
								{service.href ? (
									<Link
										href={service.href}
										className="group block rounded-2xl focus:outline-none"
										aria-label={`Learn more about ${service.title}`}
									>
										{Card}
									</Link>
								) : (
									Card
								)}
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
