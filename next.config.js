const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
	target: "serverless",
	reactStrictMode: true,
	trailingSlash: true,
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
		register: true,
		scope: "/",
		sw: "/sw.js",
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	i18n: {
		locales: ["en", "nl"],
		defaultLocale: "en",
		domains: [
			{
				domain: "maexal.dev",
				defaultLocale: "en",
			},
			{
				domain: "maexal.nl",
				defaultLocale: "nl",
			},
		],
	},
	images: {
		domains: ["raw.githubusercontent.com", "media.giphy.com"],
	},
	async redirects() {
		return [
			{
				source: "/terms",
				destination: "/terms-and-conditions",
				permanent: true,
			},
			{
				source: "/conditions",
				destination: "/terms-and-conditions",
				permanent: true,
			},
			{
				source: "/privacy",
				destination: "/privacy-policy",
				permanent: true,
			},
		];
	},
});
