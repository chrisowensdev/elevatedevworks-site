"use client";

import Link from "next/link";
import { Laptop, Server, LineChart } from "lucide-react";
import { FadeIn } from "@/components/media";
import Section from "@/components/layout/Section";
import { SectionActions } from "@/components/sections/SectionActions";

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
	actionText,
	actionUrl,
}: {
	className?: string;
	actionText?: string;
	actionUrl?: string;
}) {
	return (
		<Section
			id="services"
			eyebrow="Services"
			title="End-to-end website design, development, and growth"
			description="We handle the full lifecycle of your website, from design
					and development to hosting, maintenance, and ongoing SEO.
					Our focus is clarity, performance, and long-term
					maintainability."
		>
			<div className="mt-10 grid gap-6 items-stretch md:grid-cols-3 h-full">
				{services.map((service, i) => {
					const Icon = service.icon;

					const Card = (
						<article
							className={[
								"relative h-full rounded-2xl border bg-white/90 p-6 transition",
								"flex flex-col",
								service.href
									? "hover:bg-white focus-within:ring-2"
									: "",
							].join(" ")}
						>
							<div className="absolute left-[3px] top-0 h-1 w-full rounded-tl-full bg-gradient-to-r from-emerald-600/60 to-emerald-600/0" />
							<div>
								<div className="flex items-center gap-3">
									<Icon
										className="h-5 w-5 text-emerald-600"
										aria-hidden
									/>
									<h3 className="text-lg font-semibold text-gray-900 tracking-tight">
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
							</div>

							{service.href ? (
								<div className="mt-auto pt-5 text-sm font-medium text-emerald-700">
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
									className="group block h-full rounded-2xl focus:outline-none"
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

			{actionText && actionUrl && (
				<SectionActions
					links={[
						{
							text: actionText,
							href: actionUrl,
						},
					]}
				/>
			)}
		</Section>
	);
}
