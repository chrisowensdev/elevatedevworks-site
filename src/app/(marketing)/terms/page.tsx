import Container from "@/components/layout/Container";
import Main from "@/components/layout/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service | Elevate DevWorks",
	description: "The terms that govern your use of Elevate DevWorks services.",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://elevatedevworks.com/terms",
	},
};

export default function TermsPage() {
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
					<h1>Terms of Use</h1>
					<p>
						<em>Last updated: October 1st, 2025</em>
					</p>

					<h2>Use of this site</h2>
					<p>
						By accessing this website you agree to use it lawfully
						and not to misuse or interfere with its operation.
						Content is provided “as is” without warranties.
					</p>

					<h2>Intellectual property</h2>
					<p>
						Unless stated otherwise, all content on this site is
						owned by Chris Owens. Client work shown may be the
						property of each client and used here for portfolio
						purposes only. You may not copy or redistribute without
						permission.
					</p>

					<h2>No professional relationship</h2>
					<p>
						Viewing this site does not create a client relationship.
						Any services are governed by a separate written
						agreement.
					</p>

					<h2>Third-party links</h2>
					<p>
						Links to other sites are provided as a convenience;
						we’re not responsible for their content or policies.
					</p>

					<h2>Limitation of liability</h2>
					<p>
						To the maximum extent permitted by law, we’re not liable
						for any indirect or consequential damages arising from
						your use of this site.
					</p>

					<h2>Governing law</h2>
					<p>
						These terms are governed by the laws of the Commonwealth
						of Virginia, USA.
					</p>

					<h2>Contact</h2>
					<p>
						Questions?{" "}
						<a href="mailto:chris@elevatedevworks.com">
							chris@elevatedevworks.com
						</a>
					</p>
				</article>
			</Container>
		</Main>
	);
}
