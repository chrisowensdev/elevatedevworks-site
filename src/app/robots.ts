// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// disallow: ["/admin", "/drafts"], // add if needed
		},
		sitemap: "https://elevatedevworks.com/sitemap.xml",
		// host is non-standard; omit unless you specifically target Yandex
		// host: "https://elevatedevworks.com",
	};
}
