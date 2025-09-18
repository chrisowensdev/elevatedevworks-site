// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime

const schema = z.object({
	name: z.string().min(2, "Please enter your full name."),
	email: z.string().email("Please enter a valid email."),
	message: z.string().min(10, "Please include a few details."),
	website: z
		.string()
		.optional()
		.transform((v) => v?.trim()), // honeypot
});

function getErrorMessage(e: unknown): string {
	if (e instanceof Error) return e.message;
	if (typeof e === "string") return e;
	try {
		return JSON.stringify(e);
	} catch {
		return "Unknown error";
	}
}

// Fail fast if env is missing
function assertEnv() {
	const missing: string[] = [];
	if (!process.env.RESEND_API_KEY) missing.push("RESEND_API_KEY");
	if (!process.env.CONTACT_TO) missing.push("CONTACT_TO");
	if (!process.env.CONTACT_FROM) missing.push("CONTACT_FROM");
	if (missing.length)
		throw new Error(`Missing env vars: ${missing.join(", ")}`);
}

export async function POST(req: Request) {
	try {
		assertEnv();
		const resend = new Resend(process.env.RESEND_API_KEY!);

		const form = await req.formData();
		const values = {
			name: String(form.get("name") || ""),
			email: String(form.get("email") || ""),
			message: String(form.get("message") || ""),
			website: String(form.get("website") || ""),
		};

		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			return NextResponse.json(
				{ ok: false, errors: parsed.error.flatten().fieldErrors },
				{ status: 400 }
			);
		}

		// Honeypot: silently succeed
		if (parsed.data.website) return NextResponse.json({ ok: true });

		const to = process.env.CONTACT_TO!;
		const from = process.env.CONTACT_FROM!;

		const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2 style="margin:0 0 12px 0;">New Inquiry</h2>
        <p style="margin:0 0 6px 0;"><strong>Name:</strong> ${escapeHtml(
			parsed.data.name
		)}</p>
        <p style="margin:0 0 6px 0;"><strong>Email:</strong> ${escapeHtml(
			parsed.data.email
		)}</p>
        <p style="margin:16px 0 6px 0;"><strong>Message:</strong></p>
        <p style="white-space:pre-line; margin:0;">${escapeHtml(
			parsed.data.message
		)}</p>
      </div>
    `;

		const { error } = await resend.emails.send({
			from, // must be a verified domain
			to, // start with delivered@resend.dev if needed
			replyTo: parsed.data.email, // ✅ camelCase per SDK docs
			subject: `New contact from ${parsed.data.name}`,
			text:
				`Name: ${parsed.data.name}\n` +
				`Email: ${parsed.data.email}\n\n` +
				`${parsed.data.message}\n`,
			html,
		});

		if (error) {
			// Log full error for server console; return helpful summary to client
			console.error("Resend error:", error);
			return NextResponse.json(
				{ ok: false, error: String(error?.message || error) },
				{ status: 502 }
			);
		}

		return NextResponse.json({ ok: true });
	} catch (e: unknown) {
		const message = getErrorMessage(e);
		console.error("Contact route error:", message, e);
		return NextResponse.json(
			{ ok: false, error: message },
			{ status: 500 }
		);
	}
}

function escapeHtml(str: string) {
	return str
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}
