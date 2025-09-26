import { NextRequest, NextResponse } from "next/server";

const PHP_ENDPOINT = process.env.PHP_CONTACT_ENDPOINT!; // e.g. https://api.yoursite.com/contact.php

// Very light validation (add zod if you want stricter)
function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Optional simple rate limit (memory-based for demo)
const hits = new Map<string, { count: number; ts: number }>();
function rateLimit(ip: string, windowMs = 60_000, max = 5) {
	const now = Date.now();
	const rec = hits.get(ip);
	if (!rec || now - rec.ts > windowMs) {
		hits.set(ip, { count: 1, ts: now });
		return false;
	}
	rec.count++;
	if (rec.count > max) return true;
	return false;
}

export async function POST(req: NextRequest) {
	const ip = req.headers.get("x-forwarded-for") || "unknown";
	if (rateLimit(ip)) {
		return NextResponse.json(
			{ error: "Too many requests" },
			{ status: 429 }
		);
	}

	const { name, email, message, userAgent } = await req
		.json()
		.catch(() => ({}));
	if (!name || !email || !message || !isValidEmail(email)) {
		return NextResponse.json(
			{ error: "Invalid form data" },
			{ status: 400 }
		);
	}

	try {
		// Forward to PHP as JSON (recommended)
		const res = await fetch(PHP_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": process.env.PHP_CONTACT_API_KEY || "",
			},
			body: JSON.stringify({ name, email, message, userAgent, ip }),
			// If your PHP is on a slower shared host, bump timeout via AbortController in real apps
		});

		const data = await res.json().catch(() => ({}));
		if (!res.ok) {
			return NextResponse.json(
				{ error: data?.error || "PHP mailer failed" },
				{ status: 502 }
			);
		}
		return NextResponse.json({ ok: true });
	} catch (err) {
		return NextResponse.json(
			{ error: "Upstream error", err },
			{ status: 502 }
		);
	}
}
