module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Source Sans Pro", ...require("tailwindcss/defaultTheme").fontFamily.sans],
				serif: ["Merriweather", ...require("tailwindcss/defaultTheme").fontFamily.serif],
				mono: ["Fira Code", ...require("tailwindcss/defaultTheme").fontFamily.mono],
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
		extend: {},
		animation: ["responsive", "motion-safe", "motion-reduce"],
	},
	plugins: [],
};
