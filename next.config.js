const path = require("path");
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
	withPWA({
		target: "serverless",
		reactStrictMode: true,
		trailingSlash: true,
		pwa: {
			dest: "public",
			disable: process.env.NODE_ENV === "development",
			register: true,
			scope: "/",
			sw: "/serviceworker.js",
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
		async rewrites() {
			return [
				{
					source: "/nl/algemene-voorwaarden/",
					destination: "/en/terms-and-conditions/",
					locale: false,
				},
				{
					source: "/nl/privacybeleid/",
					destination: "/en/privacy-policy/",
					locale: false,
				},
			];
		},
		async redirects() {
			return [
				{
					source: "/terms",
					destination: "/terms-and-conditions/",
					permanent: true,
				},
				{
					source: "/conditions",
					destination: "/terms-and-conditions/",
					permanent: true,
				},
				{
					source: "/privacy",
					destination: "/privacy-policy/",
					permanent: true,
				},
			];
		},
	})
);
