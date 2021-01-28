const path = await import("path");
const nextBuildId = await import("next-build-id");
const withPWA = await import("next-pwa");
const withBundleAnalyzer = await import("@next/bundle-analyzer")({
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
		},
		generateBuildId: () => nextBuildId({ dir: __dirname }),
		sassOptions: {
			includePaths: [path.join(__dirname, "styles")],
		},
		i18n: {
			locales: ["en", "nl"],
			defaultLocale: "en",
		},
		images: {
			domains: ["media.giphy.com"],
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
