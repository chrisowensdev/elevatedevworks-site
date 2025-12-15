"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";

export default function ContactForm() {
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

		try {
			const res = await fetch("https://elevatedevworks.com/contact.php", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const json = await res.json().catch(() => null);
			if (!res.ok || !json?.ok) {
				setError(json?.error ?? "Something went wrong.");
				setStatus("error");
				return;
			}

			form.reset();
			setName("");
			setEmail("");
			setBudget("");
			setMessage("");
			setStartedAt(Date.now());
			setStatus("success");
		} catch {
			setError("Network error. Please try again.");
			setStatus("error");
		}
	}

	return (
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
						onChange={(e) => setName(e.target.value)}
						autoComplete="name"
						required
					/>
					<InputField
						id="email"
						type="email"
						label="Email address"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						onChange={(e) => setBudget(e.target.value)}
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
						onChange={(e) => setMessage(e.target.value)}
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
					<p className="text-sm" style={{ color: "#21a37c" }}>
						Thanks! I’ll get back to you shortly.
					</p>
				)}
				{status === "error" && (
					<p className="text-sm text-red-600">{error}</p>
				)}

				<div className="mt-6 flex flex-wrap items-center gap-3">
					<button
						type="submit"
						disabled={status === "sending"}
						className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-60"
					>
						{status === "sending" ? "Sending…" : "Send"}
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
					. We use your details only to respond to your inquiry.
				</p>
			</form>
		</div>
	);
}
