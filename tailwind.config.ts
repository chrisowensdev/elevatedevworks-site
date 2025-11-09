import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}", // if you have /pages
		"./src/**/*.{js,ts,jsx,tsx,mdx}", // if you use /src
	],
	theme: {
		extend: {
			colors: {
				brand: { DEFAULT: "#2175a2", light: "#eaf3f7" },
			},
			fontFamily: {
				sans: [
					"var(--font-text)",
					"ui-sans-serif",
					"system-ui",
					"Arial",
				],
				display: [
					"var(--font-display)",
					"var(--font-text)",
					"ui-sans-serif",
					"system-ui",
				],
			},
		},
	},
	plugins: [typography],
} satisfies Config;
