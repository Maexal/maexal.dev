module.exports = {
	purge: ["./src/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Source Sans Pro", ...require("tailwindcss/defaultTheme").fontFamily.sans],
				serif: ["Merriweather", ...require("tailwindcss/defaultTheme").fontFamily.serif],
				mono: ["Fira Code", ...require("tailwindcss/defaultTheme").fontFamily.mono],
			},
			transitionDuration: {
				half: "calc(var(--transition-speed) / 2)",
				regular: "var(--transition-speed)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
