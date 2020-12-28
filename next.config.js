module.exports = {
	target: "serverless",
	sassOptions: {
		includePaths: ["styles"],
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
};
