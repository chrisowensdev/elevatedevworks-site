import type { Metadata, Viewport } from "next";
import "./globals.css";
import { text, display } from "./fonts";
import {
	SEOJsonLd,
	ConsentScript,
	CookieBanner,
} from "@/components/analytics-privacy";
import { Header, Footer, FixedBackground } from "@/components/layout";

export const viewport: Viewport = { themeColor: "#2175a2" };

export const metadata: Metadata = {
	metadataBase: new URL("https://elevatedevworks.com"),
	title: {
		default: "Elevate DevWorks - Web/Application Development",
		template: "%s | Elevate DevWorks - Web/Application Development",
	},
	description: "Building High-Quality Websites for Business",
	openGraph: {
		type: "website",
		url: "https://elevatedevworks.com",
		siteName: "Elevate DevWorks",
		images: [
			{
				url: "/elevate_devworks_seo_image.png",
				width: 1200,
				height: 630,
				alt: "Elevate DevWorks",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["https://elevatedevworks.com/elevate_devworks_seo_image.png"],
	},
	alternates: { canonical: "https://elevatedevworks.com" },

	icons: {
		// If you prefer explicit control in addition to app/icon.png:
		icon: "/elevate-logo-symbol-48x48.png",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#2175a2",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${text.variable} ${display.variable}`}>
			<head>
				<meta charSet="utf-8" />
			</head>
			<body>
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded bg-white px-3 py-2 text-sm shadow"
				>
					Skip to content
				</a>
				<FixedBackground />
				<SEOJsonLd />
				<ConsentScript gaMeasurementId="G-HRK4JC4W3J" />

				<Header />
				{children}
				<Footer />

				<CookieBanner />
			</body>
		</html>
	);
}
