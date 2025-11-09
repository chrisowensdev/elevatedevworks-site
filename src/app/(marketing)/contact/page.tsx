// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import FixedBackground from "@/components/layout/FixedBackground";
import Container from "@/components/layout/Container";
import { site } from "@/data/site";
import Main from "@/components/layout/Main";
import PageHero from "@/components/sections/PageHero";
import ContactCard from "./_components/ContactCard";
import InputField from "./_components/InputField";
import SelectField from "./_components/SelectField";
import TextArea from "./_components/TextArea";

// export const metadata = {
// 	title: "Contact | Elevate DevWorks",
// 	description:
// 		"Get in touch with Elevate DevWorks. Tell us about your project or request a free quote. We typically reply within one business day.",
// 	alternates: { canonical: "https://elevatedevworks.com/contact" },
// 	openGraph: {
// 		title: "Contact | Elevate DevWorks",
// 		description:
// 			"Tell us about your project or request a free quote. We typically reply within one business day.",
// 		url: "https://elevatedevworks.com/contact",
// 		images: ["/assets/og-contact-elevate-devworks.png"],
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "Contact | Elevate DevWorks",
// 		description:
// 			"Tell us about your project or request a free quote. We typically reply within one business day.",
// 		images: ["/assets/og-contact-elevate-devworks.png"],
// 	},
// };

export default function ContactPage() {
	// basic client-side state & validation
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [budget, setBudget] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [hp, setHp] = useState(""); // honeypot
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [startedAt, setStartedAt] = useState<number>(0);

	// async function onSubmit(e: React.FormEvent) {
	// 	e.preventDefault();
	// 	setError(null);
	// 	setSuccess(null);

	// 	// simple validation
	// 	if (!name.trim() || !email.trim() || !message.trim()) {
	// 		setError("Please fill in your name, email, and a short message.");
	// 		return;
	// 	}

	// 	// primitive email check
	// 	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
	// 		setError("Please enter a valid email address.");
	// 		return;
	// 	}

	// 	// honeypot
	// 	if (hp) {
	// 		setSuccess("Thanks!");
	// 		return;
	// 	}

	// 	setLoading(true);
	// 	try {
	// 		const res = await fetch("/api/contact", {
	// 			method: "POST",
	// 			headers: { "Content-Type": "application/json" },
	// 			body: JSON.stringify({ name, email, message, budget }),
	// 		});

	// 		if (!res.ok) throw new Error("Failed to send");

	// 		setSuccess(
	// 			"Thanks — your message has been sent. We’ll get back within one business day."
	// 		);
	// 		setName("");
	// 		setEmail("");
	// 		setMessage("");
	// 		setBudget("");
	// 	} catch (err) {
	// 		console.error(err);
	// 		setError(
	// 			"Sorry, something went wrong sending your message. You can email us directly at " +
	// 				site.supportEmail
	// 		);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// }

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");
		setError(null);

		const form = e.currentTarget;
		const fd = new FormData(form);

		// honeypot: if bots fill this, bail silently
		const website = (fd.get("website") as string) || "";
		if (website.length) {
			setStatus("success");
			form.reset();
			setStartedAt(Date.now());
			return;
		}

		const payload = {
			name: fd.get("name"),
			email: fd.get("email"),
			message: fd.get("message"),
			budget: fd.get("budget"),
			website, // honeypot field (empty for humans)
			startedAt, // ms epoch captured on mount
			userAgent: navigator.userAgent,
		};

		console.log("payload", payload);

		// try {
		// 	const res = await fetch("https://elevatedevworks.com/contact.php", {
		// 		method: "POST",
		// 		headers: { "Content-Type": "application/json" },
		// 		body: JSON.stringify(payload),
		// 	});

		// 	const json = await res.json().catch(() => null);
		// 	if (!res.ok || !json?.ok) {
		// 		setError(json?.error ?? "Something went wrong.");
		// 		setStatus("error");
		// 		return;
		// 	}

		// 	form.reset();
		// 	setStartedAt(Date.now());
		// 	setStatus("success");
		// } catch {
		// 	setError("Network error. Please try again.");
		// 	setStatus("error");
		// }
	}

	return (
		<Main>
			<PageHero
				eyebrow="Get in touch"
				title="Let’s build something great together"
				description="Tell us a bit about your goals and timeline. We’ll reply within one business day."
				primaryCta={{
					href: "mailto:hello@elevatedevworks.com",
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
											href={`mailto:${site.supportEmail}`}
											className="underline underline-offset-2"
										>
											{site.supportEmail}
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

						{/* Form */}
						<div className="lg:col-span-2">
							<form
								onSubmit={onSubmit}
								className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
							>
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<InputField
										id="name"
										label="Your name"
										name="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										autoComplete="name"
										required
									/>
									<InputField
										id="email"
										type="email"
										label="Email address"
										name="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										autoComplete="email"
										required
									/>
								</div>

								<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
									<SelectField
										id="budget"
										label="Estimated budget"
										value={budget}
										name="budget"
										onChange={(e) =>
											setBudget(e.target.value)
										}
										options={[
											{
												value: "",
												label: "Select a range",
											},
											{
												value: "under-2k",
												label: "Under $2,000",
											},
											{
												value: "2k-5k",
												label: "$2,000 – $5,000",
											},
											{
												value: "5k-10k",
												label: "$5,000 – $10,000",
											},
											{
												value: "10k-plus",
												label: "$10,000+",
											},
										]}
									/>
								</div>

								<div className="mt-6">
									<TextArea
										id="message"
										label="Tell us about your project"
										value={message}
										name="message"
										onChange={(e) =>
											setMessage(e.target.value)
										}
										rows={6}
										required
									/>
								</div>

								{/* honeypot hidden field */}
								<div className="hidden" aria-hidden>
									<label htmlFor="company">Company</label>
									<input
										id="company"
										name="company"
										value={hp}
										onChange={(e) => setHp(e.target.value)}
									/>
								</div>

								{status === "success" && (
									<p
										className="text-sm"
										style={{ color: "#21a37c" }}
									>
										Thanks! I’ll get back to you shortly.
									</p>
								)}
								{status === "error" && (
									<p className="text-sm text-red-600">
										{error}
									</p>
								)}

								<div className="mt-6 flex flex-wrap items-center gap-3">
									<button
										type="submit"
										disabled={status === "sending"}
										className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-60"
									>
										{status === "sending"
											? "Sending…"
											: "Send"}
									</button>
									<Link
										href={`mailto:${site.supportEmail}`}
										className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
									>
										Email us instead
									</Link>
								</div>

								<p className="mt-4 text-xs text-gray-500">
									By sending this form you agree to our{" "}
									<Link
										href="/privacy"
										className="underline underline-offset-2"
									>
										Privacy Policy
									</Link>
									. We use your details only to respond to
									your inquiry.
								</p>
							</form>
						</div>
					</div>
				</Container>
			</section>

			{/* Optional: map or service area strip
        <section className="pb-16">
          <Container>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Based in Richmond, VA — working with clients anywhere</h2>
              <p className="mt-2 text-gray-600">We commonly support US small businesses and partner with independent designers.</p>
            </div>
          </Container>
        </section>*/}

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
							email: site.supportEmail,
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
