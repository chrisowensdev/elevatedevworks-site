// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import FixedBackground from "@/components/FixedBackground";
import Container from "@/components/Container";
import { site } from "@/data/site";

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
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [hp, setHp] = useState(""); // honeypot

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);
		setSuccess(null);

		// simple validation
		if (!name.trim() || !email.trim() || !message.trim()) {
			setError("Please fill in your name, email, and a short message.");
			return;
		}

		// primitive email check
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		// honeypot
		if (hp) {
			setSuccess("Thanks!");
			return;
		}

		setLoading(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message, budget }),
			});

			if (!res.ok) throw new Error("Failed to send");

			setSuccess(
				"Thanks — your message has been sent. We’ll get back within one business day."
			);
			setName("");
			setEmail("");
			setMessage("");
			setBudget("");
		} catch (err) {
			console.error(err);
			setError(
				"Sorry, something went wrong sending your message. You can email us directly at " +
					site.supportEmail
			);
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="min-h-screen text-neutral-900">
			<FixedBackground />
			<div className="relative z-10">
				{/* Hero */}
				<section className="pt-16 sm:pt-24">
					<Container>
						<p className="text-sm font-semibold tracking-wider text-emerald-600">
							Contact
						</p>
						<h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
							Let’s build something great together
						</h1>
						<p className="mt-4 max-w-2xl text-gray-600">
							Tell us a bit about your project, timeline, and
							goals. We’ll review and reply within one business
							day with next steps.
						</p>
					</Container>
				</section>

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
											<li>
												Performance & SEO improvements
											</li>
											<li>
												Design-to-development
												partnerships
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
											<li>
												Any reference sites you like
											</li>
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
											onChange={(e) =>
												setHp(e.target.value)
											}
										/>
									</div>

									{error && (
										<p
											className="mt-4 text-sm text-red-600"
											role="alert"
										>
											{error}
										</p>
									)}
									{success && (
										<p
											className="mt-4 text-sm text-emerald-700"
											role="status"
										>
											{success}
										</p>
									)}

									<div className="mt-6 flex flex-wrap items-center gap-3">
										<button
											type="submit"
											disabled={loading}
											className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-60"
										>
											{loading
												? "Sending…"
												: "Send message"}
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
			</div>

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
		</main>
	);
}

/* ———————————————————————————————— */
function ContactCard({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
			<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
			{subtitle && (
				<p className="mt-1 text-sm text-gray-600">{subtitle}</p>
			)}
			<div className="mt-3 text-gray-700">{children}</div>
		</div>
	);
}

function InputField({
	id,
	label,
	value,
	onChange,
	type = "text",
	autoComplete,
	required,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	autoComplete?: string;
	required?: boolean;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="mb-2 block text-sm font-medium text-gray-900"
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				autoComplete={autoComplete}
				required={required}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-emerald-500 transition focus:ring-2"
			/>
		</div>
	);
}

function SelectField({
	id,
	label,
	value,
	onChange,
	options,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options: { value: string; label: string }[];
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="mb-2 block text-sm font-medium text-gray-900"
			>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={onChange}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm outline-none ring-emerald-500 transition focus:ring-2"
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
}

function TextArea({
	id,
	label,
	value,
	onChange,
	rows = 6,
	required,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows?: number;
	required?: boolean;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="mb-2 block text-sm font-medium text-gray-900"
			>
				{label}
			</label>
			<textarea
				id={id}
				value={value}
				onChange={onChange}
				rows={rows}
				required={required}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-emerald-500 transition focus:ring-2"
			/>
		</div>
	);
}
