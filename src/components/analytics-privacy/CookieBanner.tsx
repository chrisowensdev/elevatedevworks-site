// -----------------------------
// /components/CookieBanner.tsx
// -----------------------------
"use client";
import { useEffect, useState } from "react";
import { readConsent, setConsent } from "@/lib/consent";
import Link from "next/link";

export default function CookieBanner() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Only show if no consent cookie yet
		const existing = readConsent();
		if (!existing) setVisible(true);
	}, []);

	const accept = () => {
		setConsent("granted");
		setVisible(false);
	};

	const decline = () => {
		setConsent("denied");
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-4xl px-4 pb-6 sm:px-6">
			<div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:p-5">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<div className="text-sm text-gray-700">
						<p className="font-medium text-gray-900">
							Cookies & Privacy
						</p>
						<p className="mt-1">
							We use cookies to improve your experience and
							analyze website traffic. Manage your preferences or
							read more in our{" "}
							<Link
								href="/privacy"
								className="underline underline-offset-2"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
					<div className="flex shrink-0 gap-2">
						<button
							onClick={decline}
							className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
						>
							Decline
						</button>
						<button
							onClick={accept}
							className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
						>
							Accept
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
