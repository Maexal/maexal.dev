/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');

module.exports = withBundleAnalyzer(
	withPWA({
		reactStrictMode: true,
		future: {
			webpack5: true,
		},
		trailingSlash: true,
		pwa: {
			dest: 'public',
			disable: process.env.NODE_ENV === 'development',
			register: true,
		},
		generateBuildId: () => nextBuildId({ dir: __dirname }),
		sassOptions: {
			includePaths: [path.join(__dirname, 'styles')],
		},
		images: {
			domains: ['media.giphy.com'],
		},
		i18n: {
			locales: ['en', 'nl'],
			defaultLocale: 'en',
		},
		async rewrites() {
			return [
				{ source: '/nl', destination: '/nl/' },
				{
					source: '/nl/algemene-voorwaarden/',
					destination: '/en/terms-and-conditions/',
					locale: false,
				},
				{
					source: '/nl/privacybeleid/',
					destination: '/en/privacy-policy/',
					locale: false,
				},
			];
		},
		async redirects() {
			return [
				{
					source: '/terms',
					destination: '/terms-and-conditions/',
					permanent: true,
				},
				{
					source: '/conditions',
					destination: '/terms-and-conditions/',
					permanent: true,
				},
				{
					source: '/privacy',
					destination: '/privacy-policy/',
					permanent: true,
				},
			];
		},
	}),
);
