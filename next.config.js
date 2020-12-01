module.exports = {
	target: "serverless",
	sassOptions: {
		includePaths: ["styles"],
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./utils/generateSiteMap");
		}

		return config;
	},
};
