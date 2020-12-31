const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				...defaultTheme.colors,
				blue: {
					DEFAULT: "#03aaf7",
					100: "#f0faff",
					200: "#b3e6fe",
					300: "#77d3fd",
					400: "#3abffd",
					500: "#03aaf7",
					600: "#028bca",
					700: "#026897",
					800: "#014565",
					900: "#012332",
				},
				orange: {
					DEFAULT: "#f75003",
					100: "#fff5f0",
					200: "#fecbb3",
					300: "#fda277",
					400: "#fd783a",
					500: "#f75003",
					600: "#ca4102",
					700: "#973102",
					800: "#652101",
					900: "#321001",
				},
			},
			borderWidth: {
				...defaultTheme.borderWidth,
				1: "1px",
				3: "3px",
				5: "5px",
				6: "6px",
				7: "7px",
			},
			zIndex: {
				...defaultTheme.zIndex,
				n10: "-10",
			},
			fontFamily: {
				...defaultTheme.fontFamily,
				sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
				serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
				mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
			},
			animation: {
				...defaultTheme.animation,
				"spin-slow": "spin 3s linear infinite",
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			keyframes: {
				...defaultTheme.keyframes,
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
	},
	variants: {
		animation: ["responsive", "motion-safe", "motion-reduce"],
		outline: ["focus"],
		padding: ["hover", "active"],
	},
	plugins: [],
};
