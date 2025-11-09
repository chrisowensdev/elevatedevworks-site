import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default [
	{ ignores: ["node_modules", ".next", "out", "dist"] },
	...tseslint.configs.recommended,
	{
		plugins: { "@next/next": nextPlugin },
		languageOptions: { ecmaVersion: 2023 },
		rules: {
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/consistent-type-imports": "warn",
			"no-console": ["warn", { allow: ["warn", "error"] }],
		},
	},
];
