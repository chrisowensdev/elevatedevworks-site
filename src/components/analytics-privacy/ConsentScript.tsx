// -----------------------------
// /components/ConsentScript.tsx
// -----------------------------
"use client";
import { readConsent } from "@/lib/consent";
import Script from "next/script";
import { useEffect } from "react";

/**
 * Injects gtag + Consent Mode defaults.
 *
 * Usage: <ConsentScript gaMeasurementId="G-XXXXXXX" /> in app/layout.tsx
 */
export default function ConsentScript({
	gaMeasurementId,
}: {
	gaMeasurementId: string;
}) {
	// Compute default consent from existing cookie at runtime (CSR only)
	const cookieConsent = typeof window !== "undefined" ? readConsent() : null;
	const defaultStatus = cookieConsent ?? "denied";

	// On mount, send a consent default BEFORE config
	useEffect(() => {
		// Initialize dataLayer/gtag
		window.dataLayer = window.dataLayer || [];

		function gtag(...args: unknown[]) {
			(window.dataLayer ||= []).push(args);
		}
		window.gtag = gtag;

		gtag("consent", "default", {
			ad_storage: defaultStatus,
			ad_user_data: defaultStatus,
			ad_personalization: defaultStatus,
			analytics_storage: defaultStatus,
			functionality_storage: "granted",
			security_storage: "granted",
		});

		// Mark region if you want stricter behavior only in EEA (optional)
		// gtag('set', 'region', ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB']);
	}, [defaultStatus]);

	return (
		<>
			{/* gtag loader (does not set cookies until consent = granted) */}
			<Script
				id="gtag-src"
				src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
				strategy="afterInteractive"
			/>

			{/* GA config – safe because Consent Mode defaults to denied until accepted */}
			<Script id="gtag-config" strategy="afterInteractive">
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', {
anonymize_ip: true,
allow_google_signals: false
});
`}
			</Script>
		</>
	);
}
