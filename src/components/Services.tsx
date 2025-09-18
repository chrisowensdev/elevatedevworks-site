// components/Services.tsx
"use client";

import { Laptop, Server, LineChart, Palette, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";
import { services } from "@/data/services";
import Container from "./Container";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };
const Icons = {
	web: Laptop,
	hosting: Server,
	seo: LineChart,
	design: Palette,
	care: ShieldCheck,
	analytics: LineChart,
};

export default function Services() {
	return (
		<section
			id="services"
			className="border-y"
			style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
		>
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{services.map((s, i) => {
						const Icon = Icons[s.icon] || Laptop;
						return (
							<FadeIn key={s.title} delay={i * 0.05}>
								<article
									className="rounded-2xl border bg-white p-6 shadow-sm border-t-4"
									style={{ borderTopColor: BRAND.accent }}
								>
									<div className="flex items-center gap-2">
										<Icon
											className="h-4 w-4"
											aria-hidden
											style={{ color: BRAND.primary }}
										/>
										<h3 className="text-lg font-semibold">
											{s.title}
										</h3>
									</div>
									<p className="mt-2 text-sm text-neutral-700">
										{s.body}
									</p>
									<ul className="mt-4 space-y-1 text-sm text-neutral-600">
										{(
											s.points ?? [
												"Discovery & planning",
												"Design & development",
												"Launch & support",
											]
										).map((pt) => (
											<li key={pt}>• {pt}</li>
										))}
									</ul>
								</article>
							</FadeIn>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
