// -----------------------------
// /lib/consent.ts
// -----------------------------
"use client";

export type ConsentState = "granted" | "denied";

const COOKIE_NAME = "edw_cookie_consent_v2";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days

export function readConsent(): ConsentState | null {
	if (typeof document === "undefined") return null;
	const m = document.cookie.match(
		new RegExp("(^| )" + COOKIE_NAME + "=([^;]+)")
	);
	return m ? (decodeURIComponent(m[2]) as ConsentState) : null;
}

export function writeConsent(value: ConsentState) {
	if (typeof document === "undefined") return;
	document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
		value
	)}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
}

// Push a Consent Mode update to gtag
export function updateGtagConsent(value: ConsentState) {
	if (typeof window === "undefined") return;
	const granted = value === "granted";
	const consentObj: unknown = {
		ad_storage: granted ? "granted" : "denied",
		ad_user_data: granted ? "granted" : "denied",
		ad_personalization: granted ? "granted" : "denied",
		analytics_storage: granted ? "granted" : "denied",
		functionality_storage: "granted", // typically okay for essential cookies
		security_storage: "granted",
	};
	window.gtag?.("consent", "update", consentObj);
}

export function setConsent(value: ConsentState) {
	writeConsent(value);
	updateGtagConsent(value);
}
