import Container from "@/components/layout/Container";
import Main from "@/components/layout/Main";

import { site } from "@/data/site";

export const metadata = {
	title: "Privacy Policy",
	description:
		"How Elevate DevWorks collects, uses, and protects your information.",
	alternates: { canonical: "https://elevatedevworks.com/privacy" },
};

export default function PrivacyPage() {
	return (
		<Main>
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
						<em>Last updated: {new Date().toLocaleDateString()}</em>
					</p>

					<h2 id="who-we-are">Who we are</h2>
					<p>
						This website is operated by{" "}
						<strong>Elevate DevWorks, LLC</strong>, based in
						Richmond, VA. Contact:{" "}
						<a href={`mailto:${site.supportEmail}`}>
							{site.supportEmail}
						</a>
						.
					</p>

					<h2 id="information-we-collect">Information we collect</h2>
					<ul>
						<li>
							<strong>Contact form:</strong> name, email, and
							message (to respond to inquiries).
						</li>
						<li>
							<strong>Technical data:</strong> IP address,
							device/browser info, and server logs (security &
							performance).
						</li>
						<li>
							<strong>Cookies/analytics:</strong> only if enabled
							(see “Cookies” and “Google Analytics” below).
						</li>
					</ul>

					<h2 id="how-we-use-it">How we use your information</h2>
					<ul>
						<li>Respond to inquiries and provide services.</li>
						<li>Operate, secure, and improve the site.</li>
						<li>Comply with legal obligations.</li>
					</ul>

					<h2 id="sharing">Sharing</h2>
					<p>
						We don’t sell your personal information. We may share
						limited data with service providers who help run this
						site (e.g., hosting, CI/CD, email delivery, analytics)
						under their terms and only as necessary to provide the
						service.
					</p>

					<h2 id="cookies">Cookies</h2>
					<p>
						This site may use cookies and similar technologies to
						support essential functionality and, if you consent,
						analytics. You can accept or decline non-essential
						cookies via our banner.
					</p>
					<ul>
						<li>
							<strong>Essential (functional/security):</strong>{" "}
							required to operate the site (e.g., load balancing,
							security). These do not require consent.
						</li>
						<li>
							<strong>Analytics (with consent):</strong> help us
							understand traffic and improve content/design.
						</li>
					</ul>
					<p>
						You can manage your choices at any time by selecting{" "}
						<strong>Cookie Preferences</strong> (see “Your choices”
						below). We do not sell or “share” data for cross-context
						behavioral advertising.
					</p>

					<h2 id="google-analytics">
						Google Analytics (GA4) & Consent Mode
					</h2>
					<p>
						We use <strong>Google Analytics 4 (GA4)</strong> to
						measure website usage. GA4 may collect aggregated
						statistics such as pages visited, time on page,
						approximate location (city/country), device/browser
						type, and referring pages.
					</p>
					<ul>
						<li>
							We implement <strong>Google Consent Mode v2</strong>
							, which keeps analytics cookies disabled until you
							choose “Accept” in the banner.
						</li>
						<li>
							We configure GA to use <code>anonymize_ip</code> and
							to disable Google signals unless consent is given.
						</li>
					</ul>
					<p>
						You can opt out by declining analytics in our banner or
						by using Google’s{" "}
						<a
							href="https://tools.google.com/dlpage/gaoptout"
							rel="noopener noreferrer"
							target="_blank"
						>
							Analytics Opt-Out Add-on
						</a>
						. For more information, see{" "}
						<a
							href="https://policies.google.com/privacy"
							rel="noopener noreferrer"
							target="_blank"
						>
							Google’s Privacy Policy
						</a>
						.
					</p>

					<h2 id="your-choices">Your choices</h2>
					<ul>
						<li>
							<strong>Cookie preferences:</strong> You can manage
							or withdraw consent for analytics cookies at any
							time. If your footer includes a “Cookie Preferences”
							link, it will re-open the banner. (If you use our
							component from the docs, it’s the{" "}
							<code>resetConsent()</code> action.)
						</li>
						<li>
							<strong>Browser settings:</strong> You can disable
							cookies in your browser; parts of the site may not
							function properly without them.
						</li>
						<li>
							<strong>Access/deletion:</strong> Email{" "}
							<a href={`mailto:${site.supportEmail}`}>
								{site.supportEmail}
							</a>{" "}
							to access or delete inquiry messages we hold.
						</li>
					</ul>

					<h2 id="retention">Retention</h2>
					<p>
						Inquiry emails are retained as needed to communicate and
						for records, then deleted or archived securely.
						Analytics data in GA4 is retained for no longer than{" "}
						<strong>14 months</strong> (or a shorter window if
						configured), after which it is automatically deleted by
						Google.
					</p>

					<h2 id="jurisdiction">Jurisdiction-specific rights</h2>
					<p>
						Depending on your location (e.g., California or EU/UK),
						you may have additional rights to access, correct,
						delete, or restrict the processing of your information.
						Contact us to exercise these rights.
					</p>
					<ul>
						<li>
							<strong>EU/UK (GDPR):</strong> Where applicable, our
							legal bases may include consent (Art. 6(1)(a)) for
							analytics cookies, legitimate interests (Art.
							6(1)(f)) for essential site security/operation, and
							contract/legal obligation where relevant.
						</li>
						<li>
							<strong>California (CCPA/CPRA):</strong> We do not
							sell personal information. If we ever engage in
							activities that qualify as “sharing” for
							cross-context behavioral advertising, we will
							provide a “Do Not Sell or Share My Personal
							Information” link.
						</li>
					</ul>

					<h2 id="security">Security</h2>
					<p>
						We apply reasonable technical and organizational
						measures to protect your information. No method of
						transmission over the Internet or electronic storage is
						100% secure, but we work to keep your data protected.
					</p>

					<h2 id="third-parties">Third-party service providers</h2>
					<p>
						We may use trusted vendors for hosting, deployment,
						email, and analytics. These providers process data on
						our behalf under their own privacy terms and only as
						needed to deliver their services.
					</p>

					<h2 id="children">Children</h2>
					<p>
						This site isn’t intended for children under 13, and we
						don’t knowingly collect their personal information.
					</p>

					<h2 id="changes">Changes</h2>
					<p>
						We may update this policy and will revise the “Last
						updated” date above when we do.
					</p>

					<h2 id="contact">Contact</h2>
					<p>
						Questions about this policy or your data? Email{" "}
						<a href={`mailto:${site.supportEmail}`}>
							{site.supportEmail}
						</a>
						.
					</p>
				</article>
			</Container>
		</Main>
	);
}
