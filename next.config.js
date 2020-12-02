module.exports = {
	target: "serverless",
	sassOptions: {
		includePaths: ["styles"],
	},
	i18n: {
		locales: ["en", "nl"],
		defaultLocale: "en",
	},
	trailingSlash: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./utils/generateSiteMap");
		}

		return config;
	},
};
