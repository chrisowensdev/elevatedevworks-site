"use client";

import { Container } from "@/components/layout";
import CTAButtons from "@/components/layout/CTAButtons";
import { FadeIn } from "@/components/media";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<Container className="relative py-10 md:py-16" size="wide">
				{/* Top: Copy */}
				<FadeIn>
					<div className="mx-auto max-w-4xl text-center">
						<p className="text-sm font-medium tracking-wide text-neutral-600">
							Richmond, VA • Web Design + Development
						</p>

						<h1 className="mt-4 max-w-4xl mx-auto text-4xl md:text-6xl font-semibold leading-[1.02] tracking-tight text-neutral-900">
							High-performing websites for small businesses that
							want to grow.
						</h1>

						<p className="mt-4 max-w-3xl mx-auto text-md text-neutral-600">
							Design, development, and hosting handled end-to-end.
							Built for speed, SEO foundations, and more calls
							from the right customers.
						</p>

						<div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-neutral-700">
							<span className="inline-flex items-center gap-2">
								<span
									className="h-2 w-2 rounded-full"
									style={{ backgroundColor: BRAND.accent }}
								/>
								Fast + SEO-ready
							</span>
							<span className="inline-flex items-center gap-2">
								<span
									className="h-2 w-2 rounded-full"
									style={{ backgroundColor: BRAND.accent }}
								/>
								Built to convert
							</span>
							<span className="inline-flex items-center gap-2">
								<span
									className="h-2 w-2 rounded-full"
									style={{ backgroundColor: BRAND.accent }}
								/>
								Hosting + updates handled
							</span>
						</div>

						<div className="mt-5 flex justify-center">
							<CTAButtons secondaryCTA />
						</div>
					</div>
				</FadeIn>

				<FadeIn delay={0.08}>
					<div className="mt-7">
						<div className="relative mx-auto max-w-2xl">
							<div className="overflow-hidden rounded-lg md:rounded-3xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] pt-1">
								<div className="bg-neutral-50">
									<img
										src="/work/clearpath-1200.webp"
										alt="ClearPath desktop website preview"
										className="block w-full h-auto [filter:contrast(1.03)_saturate(1.02)]"
										loading="eager"
									/>
								</div>
							</div>

							{/* Phone overlay (desktop only) */}
							<div className="hidden sm:block absolute -bottom-5 right-6 w-[60px] md:w-[130px]">
								<div className="overflow-hidden  border-0 rounded-lg md:rounded-3xl shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
									<img
										src="/clearpath-mobile-mockup-1.png"
										alt="ClearPath mobile preview"
										className="block w-full h-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</FadeIn>

				<div className="mt-15 border-t border-neutral-200 pt-5 text-xs text-neutral-500 flex flex-wrap justify-center gap-x-3 gap-y-2">
					<span className="font-medium text-neutral-800">
						Built with:
					</span>
					<span>Next.js</span>
					<span className="text-neutral-300">•</span>
					<span>SEO foundations</span>
					<span className="text-neutral-300">•</span>
					<span>Analytics</span>
					<span className="text-neutral-300">•</span>
					<span>Secure hosting</span>
				</div>
			</Container>
		</section>
	);
}
