const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
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
			fontFamily: {
				sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
				serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
				mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
	},
	variants: {
		extend: {
			ringWidth: ["hover", "active", "focus"],
		},
		animation: ["responsive", "motion-safe", "motion-reduce"],
	},
	plugins: [],
};
