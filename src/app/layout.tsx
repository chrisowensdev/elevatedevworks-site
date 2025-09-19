import type { Metadata } from "next";
import "./globals.css";
import { text, display } from "./fonts";
import SEOJsonLd from "@/components/SEOJsonLd";
import type { Viewport } from "next";
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
				url: "/og-default-1200x630.jpg",
				width: 1200,
				height: 630,
				alt: "Elevate DevWorks",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["/og-default-1200x630.jpg"],
	},
	alternates: { canonical: "https://elevatedevworks.com" },
	themeColor: "#2175a2",

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
				<SEOJsonLd />
				{children}
			</body>
		</html>
	);
}
