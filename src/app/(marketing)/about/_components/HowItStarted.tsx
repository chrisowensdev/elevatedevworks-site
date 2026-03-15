export default function HowItStarted() {
	return (
		<section
			id="how-it-started"
			className="mx-auto max-w-5xl px-6 py-14 md:py-20 "
		>
			<div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
				<div>
					<p className="text-xs font-semibold tracking-wider text-emerald-600">
						Our Story
					</p>
					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
						How It Started
					</h2>
					<p className="mt-8">
						Elevate DevWorks started as a weekend side project —
						mostly because I kept seeing small businesses get stuck
						with tools that looked good on the surface, but broke
						down when it was time to update, scale, or integrate
						with how they actually work. I’m{" "}
						<strong>Chris Owens</strong>, and after years supporting
						enterprise systems, I wanted to bring that same
						reliability and attention to detail to smaller teams —
						without the red tape.
					</p>
					<p className="mt-4">
						What began as a few builds for friends and referrals
						turned into a studio focused on{" "}
						<strong>clarity, craftsmanship, and trust</strong>.
						Today I partner with business owners and designers to
						ship modern websites and custom development, from
						SEO-ready marketing sites to automations, integrations,
						and lightweight web apps that save time and support
						growth.
					</p>
				</div>

				<div className="mt-2">
					<div className="relative mx-auto max-w-sm">
						<div className="overflow-hidden rounded-lg md:rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
							<div className="bg-neutral-50">
								<img
									src="/images/about/about_us_chris_owens.webp"
									sizes="(min-width: 768px) 672px, 92vw"
									alt="Responsive small business website design example"
									className="block w-full h-auto [filter:contrast(1.03)_saturate(1.02)]"
									loading="eager"
									fetchPriority="high"
									decoding="async"
									width={600}
									height={800}
								/>
							</div>
						</div>
						<p className="mt-3 text-sm text-neutral-500 text-center">
							Chris Owens - Founder, Elevate DevWorks
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
