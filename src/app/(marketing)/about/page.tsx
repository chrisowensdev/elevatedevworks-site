import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About Elevate DevWorks | Web Development for Small Businesses & Designers",
	description:
		"Learn about Elevate DevWorks — a friendly, modern web development studio helping small businesses and creative professionals build fast, SEO-ready websites with care.",
	openGraph: {
		title: "About Elevate DevWorks | Web Development for Small Businesses & Designers",
		description:
			"Discover our story, mission, and values — and see how we help small businesses and web designers bring their ideas to life online.",
		url: "https://elevatedevworks.com/about",
		images: ["/elevate_devworks_seo_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Elevate DevWorks",
		description:
			"Friendly, reliable web development for small businesses and designers.",
		images: ["https://elevatedevworks.com/elevate_devworks_seo_image.png"],
	},
};

export default function AboutPage() {
	return (
		<Main>
			{/* Hero */}
			<PageHero
				eyebrow="About Elevate DevWorks"
				title="Building better digital experiences — together."
				description="Elevate DevWorks helps small businesses and creative professionals turn ideas into fast, modern, beautifully built websites."
				primaryCta={{ href: "/contact", label: "Get a free quote" }}
				secondaryCta={{ href: "/work", label: "View projects" }}
				tone="white"
				align="left"
				headingLevel="h1"
			/>

			{/* Content sections */}
			<section className="border-t border-gray-100 bg-white">
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:gap-16 sm:py-24">
					{/* Our Story */}
					<Section
						eyebrow="Our Story"
						title="How It Started"
						body={
							<>
								<p>
									Elevate DevWorks began as a small passion
									project by <strong>Chris Owens</strong>, a
									developer who saw how often great designs
									were held back by unreliable or overly
									complex development. After years of working
									with enterprise systems, Chris set out to
									bring that same level of precision and
									quality to smaller teams — without the
									layers of red tape.
								</p>
								<p className="mt-4">
									What started as weekend projects soon grew
									into a development studio focused on{" "}
									<strong>
										partnership, craftsmanship, and trust
									</strong>
									. Today, we collaborate with business owners
									and designers who want reliable, modern
									websites that actually deliver results.
								</p>
							</>
						}
					/>

					{/* Mission */}
					<Section
						eyebrow="Our Mission"
						title="Why We Exist"
						body={
							<>
								<p>
									Our mission is simple: to{" "}
									<strong>
										empower small businesses and creative
										professionals
									</strong>{" "}
									with clean, scalable web solutions that
									elevate their online presence and help them
									grow confidently.
								</p>
								<p className="mt-4">
									We believe great websites come from
									collaboration — not confusion. That’s why we
									focus on clear communication, transparency,
									and helping our clients understand what’s
									being built every step of the way.
								</p>
							</>
						}
					/>

					{/* Values */}
					<div>
						<Eyebrow>Our Values</Eyebrow>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
							What We Stand For
						</h2>
						<ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
							<ValueCard
								title="Clarity over complexity"
								emoji="✨"
							>
								We keep things simple and purposeful — no
								unnecessary plugins or bloated frameworks.
							</ValueCard>
							<ValueCard title="Partnership first" emoji="🤝">
								We listen, collaborate, and build around your
								goals — not ours.
							</ValueCard>
							<ValueCard title="Craft and care" emoji="🛠️">
								We treat every project like it’s our own brand
								on the line.
							</ValueCard>
							<ValueCard title="Sustainability" emoji="🌱">
								We build for the long term — your site should
								grow with you, not hold you back.
							</ValueCard>
						</ul>
					</div>

					{/* How We Work */}
					<div>
						<Eyebrow>The Elevate Approach</Eyebrow>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
							How We Work
						</h2>
						<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{[
								{
									step: "01",
									title: "Discover your goals",
									text: "We start by understanding your vision, audience, and success metrics.",
								},
								{
									step: "02",
									title: "Design the roadmap",
									text: "A plan that fits your timeline and budget — no surprises, just clarity.",
								},
								{
									step: "03",
									title: "Build & launch",
									text: "Fast, responsive, and SEO-optimized sites with clean, maintainable code.",
								},
								{
									step: "04",
									title: "Support & grow",
									text: "We stick around with updates, hosting advice, and analytics guidance.",
								},
							].map((item) => (
								<div
									key={item.step}
									className="rounded-2xl border border-gray-200 p-6 shadow-sm"
								>
									<div className="text-sm font-semibold text-emerald-600">
										{item.step}
									</div>
									<h3 className="mt-2 text-lg font-semibold text-gray-900">
										{item.title}
									</h3>
									<p className="mt-2 text-gray-600">
										{item.text}
									</p>
								</div>
							))}
						</div>
						<div className="mt-8">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
							>
								Let’s build something great together
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Optional structured data for Organization */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Elevate DevWorks",
						url: "https://elevatedevworks.com",
						logo: "https://elevatedevworks.com/assets/logo.png",
						description:
							"Elevate DevWorks builds modern, SEO-ready websites for small businesses and creative professionals.",
						founder: { "@type": "Person", name: "Chris Owens" },
						sameAs: [
							"https://x.com/elevatedevworks",
							"https://www.facebook.com/elevatedevworks",
							"https://www.linkedin.com/company/elevatedevworks",
						],
					}),
				}}
			/>
		</Main>
	);
}

/* ———————————————————————————————— */
function Eyebrow({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-sm/6 font-semibold tracking-wider text-emerald-600">
			{children}
		</p>
	);
}

function Section({
	eyebrow,
	title,
	body,
}: {
	eyebrow: string;
	title: string;
	body: React.ReactNode;
}) {
	return (
		<div>
			<Eyebrow>{eyebrow}</Eyebrow>
			<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
				{title}
			</h2>
			<div className="prose prose-gray mt-4 max-w-none text-gray-700">
				{body}
			</div>
		</div>
	);
}

function ValueCard({
	title,
	emoji,
	children,
}: {
	title: string;
	emoji?: string;
	children: React.ReactNode;
}) {
	return (
		<li className="rounded-2xl border border-gray-200 p-6 shadow-sm">
			<div className="flex items-center gap-2">
				<span className="text-xl" aria-hidden>
					{emoji}
				</span>
				<h3 className="text-base font-semibold text-gray-900">
					{title}
				</h3>
			</div>
			<p className="mt-2 text-gray-600">{children}</p>
		</li>
	);
}
