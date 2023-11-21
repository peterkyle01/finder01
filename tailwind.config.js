import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				agbalumo: "var(--font-agbalumo)",
				permanent_marker: "var(--font-permanent-marker)",
			},
			spacing: {
				98: "30rem",
				100: "35rem",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
