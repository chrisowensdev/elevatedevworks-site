"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GATracker() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const gaId = "G-HRK4JC4W3J";

	useEffect(() => {
		if (!gaId) return;

		// Construct the full path (include query for distinct pages)
		const page_path = searchParams?.toString()
			? `${pathname}?${searchParams.toString()}`
			: pathname || "/";

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		window.gtag?.("config", gaId, { page_path });
	}, [gaId, pathname, searchParams]);

	return null;
}
