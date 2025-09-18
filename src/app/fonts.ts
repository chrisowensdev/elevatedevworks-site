import { Inter, Manrope } from "next/font/google";

export const text = Inter({
	subsets: ["latin"],
	variable: "--font-text",
	display: "swap",
});

export const display = Manrope({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});
