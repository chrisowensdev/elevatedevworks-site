"use client";
import { useEffect, useState } from "react";

export default function Contact() {
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [error, setError] = useState<string | null>(null);
	const [startedAt, setStartedAt] = useState<string>("");

	useEffect(() => setStartedAt(String(Date.now())), []);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");
		setError(null);

		const form = e.currentTarget;
		const data = new FormData(form);
		data.set("startedAt", startedAt);

		try {
			const res = await fetch("/contact.php", {
				method: "POST",
				body: data,
			});
			const json = await res.json().catch(() => null);
			if (!res.ok || !json?.ok) {
				setError(json?.error ?? "Something went wrong.");
				setStatus("error");
				return;
			}
			form.reset();
			setStartedAt(String(Date.now()));
			setStatus("success");
		} catch {
			setError("Network error. Please try again.");
			setStatus("error");
		}
	}

	return (
		<section
			id="contact"
			className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-16 md:py-24"
		>
			<div className="grid md:grid-cols-2 gap-10">
				<div>
					<h2 className="text-2xl md:text-3xl font-semibold">
						Let’s talk
					</h2>
					<p className="mt-2 text-neutral-700">
						Have a project in mind? I’ll reply within one business
						day.
					</p>
					<ul className="mt-6 space-y-2 text-sm text-neutral-700">
						<li>📍 Richmond, VA</li>
						<li>✉️ chris@chrisowens.dev</li>
					</ul>
				</div>

				<form
					onSubmit={onSubmit}
					className="rounded-2xl border bg-white p-6 shadow-sm grid gap-4"
				>
					{/* Honeypot (hidden from users) */}
					<input
						type="text"
						name="website"
						tabIndex={-1}
						autoComplete="off"
						className="hidden"
						aria-hidden="true"
					/>

					<div>
						<label className="text-sm" htmlFor="name">
							Name
						</label>
						<input
							id="name"
							name="name"
							required
							className="mt-1 w-full rounded-lg border px-3 py-2"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label className="text-sm" htmlFor="email">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="mt-1 w-full rounded-lg border px-3 py-2"
							placeholder="you@example.com"
						/>
					</div>

					<div>
						<label className="text-sm" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							minLength={10}
							className="mt-1 w-full rounded-lg border px-3 py-2"
							rows={4}
							placeholder="Tell me about your project"
						/>
					</div>

					<button
						type="submit"
						disabled={status === "sending"}
						className="rounded-xl px-5 py-3 text-white font-medium disabled:opacity-60"
						style={{ background: "#2175a2" }}
					>
						{status === "sending" ? "Sending…" : "Send"}
					</button>

					{status === "success" && (
						<p className="text-sm" style={{ color: "#21a37c" }}>
							Thanks! I’ll get back to you shortly.
						</p>
					)}
					{status === "error" && (
						<p className="text-sm text-red-600">{error}</p>
					)}
				</form>
			</div>
		</section>
	);
}
