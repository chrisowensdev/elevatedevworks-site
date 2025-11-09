import { Container } from "@/components/layout";
import Main from "@/components/layout/Main";
import Prose from "@/components/sections/Prose";
import Link from "next/link";
import WorkPageHeader from "../_components/WorkPageHeader";

export default function GreenScapeCaseStudy() {
	return (
		<Main>
			{/* <WorkPageHeader
				breadcrumbs={[
					{ href: "/", label: "Home" },
					{ href: "/work", label: "Work" },
				]}
				eyebrow="Case Study"
				title="Greenscape Landscaping"
				description="A fast, SEO-ready site for a local landscaping company. We focused on service clarity, lead gen, and performance."
				tone="muted"
				align="left"
				meta={[
					{ label: "Client", value: "Greenscape" },
					{ label: "Role", value: "Design & Development" },
					{ label: "Year", value: "2025" },
				]}
			/> */}
			<WorkPageHeader
				breadcrumbs={[
					{ href: "/", label: "Home" },
					{ href: "/work", label: "Work" },
				]}
				eyebrow="Case Study"
				title="Greenscape Landscaping"
				description="A fast, SEO-ready site for a local landscaping company. We focused on service clarity, lead gen, and performance."
				tone="muted"
				align="left"
				meta={[
					{ label: "Client", value: "Greenscape" },
					{ label: "Role", value: "Design & Development" },
					{ label: "Year", value: "2025" },
				]}
				fgImageSrc="/work/landscaping-800.webp" // your right-side image
				fgImageAlt="" // decorative (empty alt for a11y)
				fgImageWidth={960}
				fgImageHeight={640}
			/>

			{/* Match site rhythm: light paper background, border divider, same paddings as other sections */}
			<section className="border-b bg-white/70">
				<Container className="mx-auto max-w-5xl px-6 py-16 md:py-24">
					<article className="mx-auto max-w-3xl rounded-2xl bg-white/80 p-8 shadow-sm">
						<Prose>
							{/* (No <h1> here because WorkPageHeader already renders the page H1) */}
							<section>
								<h2>Problem</h2>
								<p>
									Contractors need simple, trust-building
									sites that convert calls and form leads.
								</p>
							</section>

							<section>
								<h2>Solution</h2>
								<ul>
									<li>
										Next.js static export for blazing load
										times
									</li>
									<li>
										Clear services pages + “Call Now” button
									</li>
									<li>
										Custom OG/Twitter cards for shareability
									</li>
								</ul>
							</section>

							<section>
								<h2>Tech Stack</h2>
								<p>
									Next.js, Tailwind CSS, Hostinger (static
									export), GA4 / Plausible.
								</p>
							</section>

							<section>
								<h2>See it live</h2>
								<p>
									<a
										href="https://greenscape.elevatedevworks.com"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 font-medium text-emerald-600 hover:text-emerald-700"
									>
										greenscape.elevatedevworks.com
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M13.5 4.5H20m0 0v6.5m0-6.5L10 14"
											/>
										</svg>
									</a>
								</p>
							</section>

							<hr />

							<div className="mt-10 text-center">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
								>
									Want a site like this? Book a 15-min intro →
								</Link>
							</div>
						</Prose>
					</article>
				</Container>
			</section>
		</Main>
	);
}
