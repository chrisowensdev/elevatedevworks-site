// app/privacy/page.tsx
import Header from "@/components/Header";
import FixedBackground from "@/components/FixedBackground";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Privacy Policy",
	description:
		"How ChrisOwensDev collects, uses, and protects your information.",
	alternates: { canonical: "https://chrisowens.dev/privacy" },
};

export default function PrivacyPage() {
	return (
		<main className="min-h-screen text-neutral-900">
			<FixedBackground />
			<div className="relative z-10">
				<Header />
				<section>
					<Container className="py-16 md:py-24">
						<article
							className="prose prose-neutral max-w-3xl
              prose-headings:font-semibold
              prose-h1:text-4xl md:prose-h1:text-5xl
              prose-h2:text-2xl md:prose-h2:text-3xl
              prose-h3:text-xl  md:prose-h3:text-2xl
              prose-a:text-[#2175a2] hover:prose-a:opacity-80
            "
						>
							<h1>Privacy Policy</h1>
							<p>
								<em>
									Last updated:{" "}
									{new Date().toLocaleDateString()}
								</em>
							</p>

							<h2>Who we are</h2>
							<p>
								This website is operated by{" "}
								<strong>ChrisOwensDev</strong> (Chris Owens),
								based in Richmond, VA. Contact:{" "}
								<a href="mailto:hello@chrisowens.dev">
									hello@chrisowens.dev
								</a>
								.
							</p>

							<h2>Information we collect</h2>
							<ul>
								<li>
									<strong>Contact form:</strong> name, email,
									and message (to respond to inquiries).
								</li>
								<li>
									<strong>Technical data:</strong> IP address,
									device/browser info, and server logs
									(security & performance).
								</li>
								<li>
									<strong>Cookies/analytics:</strong> only if
									enabled (see “Cookies”).
								</li>
							</ul>

							<h2>How we use your information</h2>
							<ul>
								<li>
									Respond to inquiries and provide services.
								</li>
								<li>Operate, secure, and improve the site.</li>
								<li>Comply with legal obligations.</li>
							</ul>

							<h2>Sharing</h2>
							<p>
								We don’t sell your personal information. We may
								share limited data with service providers who
								help run this site and email (e.g., hosting, CI,
								email delivery), under their terms.
							</p>

							<h2>Retention</h2>
							<p>
								Inquiry emails are kept as needed to communicate
								and for records, then deleted or archived
								securely.
							</p>

							<h2>Your choices</h2>
							<ul>
								<li>
									Email us to access or delete your inquiry
									messages.
								</li>
								<li>
									You can disable cookies; if analytics are
									enabled, we’ll provide opt-out details.
								</li>
							</ul>

							<h2>Cookies</h2>
							<p>
								This site may use functional cookies. If
								analytics are enabled (e.g., Google Analytics),
								we’ll disclose that here and provide an opt-out.
								We do not sell or “share” data for cross-context
								behavioral advertising.
							</p>

							<h2>Children</h2>
							<p>
								This site isn’t intended for children under 13,
								and we don’t knowingly collect their personal
								information.
							</p>

							<h2>Jurisdiction-specific rights</h2>
							<p>
								Depending on your location (e.g., California or
								EU/UK), you may have additional rights to
								access, correct, or delete your information.
								Contact us to exercise these rights.
							</p>

							<h2>Changes</h2>
							<p>
								We may update this policy and will revise the
								“Last updated” date above when we do.
							</p>
						</article>
					</Container>
				</section>
				<Footer />
			</div>
		</main>
	);
}
