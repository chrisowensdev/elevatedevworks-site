import Container from "@/components/layout/Container";
import { siteConfig } from "@/content/siteConfig";
import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import ContactCard from "./_components/ContactCard";
import ContactForm from "./_components/ContactForm";

export const metadata = {
	title: "Contact | Elevate DevWorks",
	description:
		"Get in touch with Elevate DevWorks. Tell us about your project or request a free quote. We typically reply within one business day.",
	alternates: { canonical: "https://elevatedevworks.com/contact" },
	openGraph: {
		title: "Contact | Elevate DevWorks",
		description:
			"Tell us about your project or request a free quote. We typically reply within one business day.",
		url: "https://elevatedevworks.com/contact",
		images: ["/elevate_devworks_seo_image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact | Elevate DevWorks",
		description:
			"Tell us about your project or request a free quote. We typically reply within one business day.",
		images: ["https://elevatedevworks.com/elevate_devworks_seo_image.png"],
	},
};

export default function ContactPage() {
	return (
		<Main>
			<PageHero
				eyebrow="Get in touch"
				title="Let’s build something great together"
				description="Tell us a bit about your goals and timeline. We’ll reply within one business day."
				primaryCta={{
					href: "mailto:chris@elevatedevworks.com",
					label: "Email us",
				}}
				secondaryCta={{ href: "/privacy", label: "Privacy policy" }}
				align="center"
				headingLevel="h1"
			/>
			{/* Content grid */}
			<section className="py-12 sm:py-16">
				<Container>
					<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
						{/* Contact methods */}
						<div className="lg:col-span-1">
							<div className="grid grid-cols-1 gap-4">
								<ContactCard
									title="Email"
									subtitle="We reply within 1 business day"
								>
									<p className="text-gray-700">
										<a
											href={`mailto:${siteConfig.email}`}
											className="underline underline-offset-2"
										>
											{siteConfig.email}
										</a>
									</p>
								</ContactCard>

								<ContactCard
									title="Project fit"
									subtitle="Small businesses & design partners"
								>
									<ul className="list-disc pl-5 text-gray-700">
										<li>New website or redesign</li>
										<li>WordPress or Next.js builds</li>
										<li>Performance & SEO improvements</li>
										<li>
											Design-to-development partnerships
										</li>
									</ul>
								</ContactCard>

								<ContactCard
									title="FAQ"
									subtitle="What to include"
								>
									<ul className="list-disc pl-5 text-gray-700">
										<li>Your goals & audience</li>
										<li>Pages/features you need</li>
										<li>Timeline & rough budget</li>
										<li>Any reference sites you like</li>
									</ul>
								</ContactCard>
							</div>
						</div>

						<ContactForm />
					</div>
				</Container>
			</section>
			{/* Optional: map or service area strip */}
			<section className="pb-16">
				<Container>
					<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-semibold">
							Based in Richmond, VA — working with clients
							anywhere
						</h2>
						<p className="mt-2 text-gray-600">
							We commonly support US small businesses and partner
							with independent designers.
						</p>
					</div>
				</Container>
			</section>
			{/* Structured data for a ContactPage */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ContactPage",
						name: "Contact Elevate DevWorks",
						url: "https://elevatedevworks.com/contact",
						mainEntity: {
							"@type": "Organization",
							name: "Elevate DevWorks",
							url: "https://elevatedevworks.com",
							email: siteConfig.email,
							sameAs: [
								"https://x.com/elevatedevworks",
								"https://www.facebook.com/elevatedevworks",
								"https://www.linkedin.com/company/elevatedevworks",
							],
						},
					}),
				}}
			/>
		</Main>
	);
}

/* ———————————————————————————————— */
