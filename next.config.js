/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
	withPWA({
		target: 'serverless',
		reactStrictMode: true,
		trailingSlash: true,
		pwa: {
			dest: 'public',
			disable: process.env.NODE_ENV === 'development',
			register: true,
			scope: '/',
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
			domains: [
				{
					domain: 'maexal.dev',
					defaultLocale: 'en',
				},
				{
					domain: 'maexal.nl',
					defaultLocale: 'nl',
				},
				{
					domain: 'maexal.site',
					defaultLocale: 'en',
				},
				{
					domain: 'maexal.site',
					defaultLocale: 'en',
				},
				{
					domain: 'maexal.online',
					defaultLocale: 'en',
				},
				{
					domain: 'maexal.com',
					defaultLocale: 'en',
				},
				{
					domain: 'maexal.eu',
					defaultLocale: 'en',
				},
				{
					domain: 'maexal.shop',
					defaultLocale: 'en',
				},
			],
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
