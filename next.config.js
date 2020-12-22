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
};
