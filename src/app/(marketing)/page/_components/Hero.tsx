// components/Hero.tsx
"use client";

import { Container } from "@/components/layout";
import CTAButtons from "@/components/layout/CTAButtons";
import { FadeIn } from "@/components/media";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<Container
				className="py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center"
				size="wide"
			>
				<FadeIn>
					<h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
						High-performing websites for small businesses that want
						to grow.
					</h1>
					<p className="mt-5 text-lg text-neutral-600">
						Design, development, and hosting handled end-to-end — so
						your site stays fast, reliable, and easy to manage.
					</p>
					<CTAButtons secondaryCTA />
				</FadeIn>

				<FadeIn delay={0.1}>
					<div
						className="w-full rounded-3xl bg-white shadow-lg border border-neutral-200 overflow-hidden relative"
						style={{ aspectRatio: "4 / 3" }}
					>
						{/* brand border accent */}
						<div
							className="absolute inset-0 pointer-events-none"
							style={{
								padding: 2,
								background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.accent} 100%)`,
								WebkitMask:
									"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
								WebkitMaskComposite: "xor",
								maskComposite: "exclude",
							}}
						/>
						<div
							className="h-full w-full grid place-items-center"
							style={{ backgroundColor: "rgba(0,0,0,0.02)" }}
						>
							<div
								className="relative rounded-xl border border-neutral-200 bg-black overflow-hidden"
								style={{ aspectRatio: "16 / 10", width: "92%" }}
							>
								<video
									src="/hero-demo.mp4"
									poster="/hero-poster.webp"
									autoPlay
									muted
									loop
									playsInline
									className="absolute inset-0 h-full w-full object-cover"
								/>
								<div
									className="absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full"
									style={{
										backgroundColor:
											"rgba(255,255,255,0.6)",
									}}
								/>
							</div>
						</div>
					</div>
				</FadeIn>
			</Container>
		</section>
	);
}
