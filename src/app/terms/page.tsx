import FixedBackground from "@/components/FixedBackground";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Terms of Use",
	description: "Terms for using the Elevate DevWorks website and content.",
	alternates: { canonical: "https://elevatedevworks.com/terms" },
};

export default function TermsPage() {
	return (
		<main className="min-h-screen text-neutral-900">
			<FixedBackground />
			<div className="relative z-10">
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
							<h1>Terms of Use</h1>
							<p>
								<em>
									Last updated:{" "}
									{new Date().toLocaleDateString()}
								</em>
							</p>

							<h2>Use of this site</h2>
							<p>
								By accessing this website you agree to use it
								lawfully and not to misuse or interfere with its
								operation. Content is provided “as is” without
								warranties.
							</p>

							<h2>Intellectual property</h2>
							<p>
								Unless stated otherwise, all content on this
								site is owned by Chris Owens. Client work shown
								may be the property of each client and used here
								for portfolio purposes only. You may not copy or
								redistribute without permission.
							</p>

							<h2>No professional relationship</h2>
							<p>
								Viewing this site does not create a client
								relationship. Any services are governed by a
								separate written agreement.
							</p>

							<h2>Third-party links</h2>
							<p>
								Links to other sites are provided as a
								convenience; we’re not responsible for their
								content or policies.
							</p>

							<h2>Limitation of liability</h2>
							<p>
								To the maximum extent permitted by law, we’re
								not liable for any indirect or consequential
								damages arising from your use of this site.
							</p>

							<h2>Governing law</h2>
							<p>
								These terms are governed by the laws of the
								Commonwealth of Virginia, USA.
							</p>

							<h2>Contact</h2>
							<p>
								Questions?{" "}
								<a href="mailto:hello@chrisowens.dev">
									chris@elevatedevworks.com
								</a>
							</p>
						</article>
					</Container>
				</section>
				<Footer />
			</div>
		</main>
	);
}
