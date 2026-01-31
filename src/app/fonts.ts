import { Inter, Manrope } from "next/font/google";

export const text = Inter({
	subsets: ["latin"],
	variable: "--font-text",
	display: "swap",
	weight: ["400", "600", "500"],
});

export const display = Manrope({
	subsets: ["latin"],
	variable: "--font-display",
	display: "optional",
	weight: ["500", "600", "700"],
});
