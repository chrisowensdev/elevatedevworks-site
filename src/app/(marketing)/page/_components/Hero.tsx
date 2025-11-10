// components/Hero.tsx
"use client";

import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<Container className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
				<FadeIn>
					<h1 className="text-4xl md:text-6xl leading-tight tracking-tight">
						Websites that elevate your business.
					</h1>
					<p className="mt-5 text-lg text-neutral-700">
						We design, build, and host high-performing websites for
						small businesses.
					</p>
					<div className="w-full pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
						<a
							href="#contact"
							aria-label="Get a free website assessment"
							className="rounded-xl px-5 py-3 text-white font-medium min-w-[200px] text-center"
							style={{ background: BRAND.primary }}
						>
							Free Assessment
						</a>
						<a
							href="#work"
							className="rounded-xl border px-5 py-3 font-medium min-w-[200px] text-center"
							style={{
								borderColor: BRAND.primary,
								color: BRAND.primary,
							}}
						>
							View Work
						</a>
					</div>
					<div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
						<span>Fast • SEO-ready • Mobile-first</span>
						<span className="hidden md:inline">|</span>
						<span>Richmond, VA</span>
					</div>
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
