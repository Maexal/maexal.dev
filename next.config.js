const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
	en: "en",
	nl: "nl",
};

module.exports = {
	target: "serverless",
	sassOptions: {
		includePaths: ["styles"],
	},
	rewrites: async () => nextI18NextRewrites(localeSubpaths),
	publicRuntimeConfig: {
		localeSubpaths,
	},
	trailingSlash: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./utils/generateSiteMap");
		}

		return config;
	},
};
