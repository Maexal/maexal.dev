import React from "react";
import { Head as NextDocumentHead } from "next/document";
import { default as NextHead } from "next/head";
import { useRouter } from "next/router";

import { projectConfig } from "../project.config";
import { getFullTitle } from "../utils";

const _getMeta = () => {
	const { url } = projectConfig;

	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link rel="author" href="humans.txt" />
			<link rel="alternate" href={url} hrefLang="x-default" />
			<link rel="alternate" href={`${url}en`} hrefLang="en" />
			<link rel="alternate" href={`${url}nl`} hrefLang="nl" />
			<meta httpEquiv="X-UA-Compatible" content="chrome=1" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-touch-fullscreen" content="yes" />
			<meta name="mssmarttagspreventparsing" content="true" />
			<meta name="classification" content="Website" />
			<meta name="og:type" content="website" />
			<meta name="rating" content="General" />
			<meta name="revisit-after" content="7 days" />
			<meta httpEquiv="Expires" content="0" />
			<meta httpEquiv="Pragma" content="no-cache" />
			<meta httpEquiv="Cache-Control" content="no-cache" />
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
		</>
	);
};

const _getMetaLocale = (locale = "en") => {
	return (
		<>
			<meta httpEquiv="content-language" content={locale} />
		</>
	);
};

const _getRestOfHead = () => {
	const {
		name,
		owner,
		abstract,
		description,
		faviconVersion,
		url,
		keywords,
		iconPath,
		email: { personal },
		twitter: { handle },
		colors: { primary, background },
	} = projectConfig;

	return (
		<>
			<link rel="manifest" href={`assets/icons/site.webmanifest?v=${faviconVersion}`} />
			<meta name="msapplication-config" content={`assets/icons/browserconfig.xml?v=${faviconVersion}`} />

			<meta name="abstract" content={abstract} />
			<meta name="description" content={description} />
			<meta name="summary" content={description} />
			<meta name="og:description" content={description} />

			<meta name="apple-mobile-web-app-title" content={name} />
			<meta name="application-name" content={name} />

			<meta name="msapplication-TileColor" content={primary} />
			<meta name="theme-color" content={background} />
			<meta name="apple-mobile-web-app-status-bar-style" content={background} />
			<meta name="msapplication-navbutton-color" content={background} />

			<meta name="url" content={url} />
			<meta name="identifier-URL" content={url} />
			<meta name="og:url" content={url} />
			<meta name="msapplication-starturl" content={url} />

			<meta name="reply-to" content={personal} />
			<meta name="og:email" content={personal} />

			<meta name="subject" content={name} />
			<meta name="copyright" content={name} />
			<meta name="topic" content={name} />
			<meta name="og:title" content={name} />
			<meta name="og:site_name" content={name} />
			<meta name="application-name" content={name} />
			<meta name="msapplication-tooltip" content={`Launch ${name}`} />
			<meta name="twitter:card" content={description} />
			<meta name="twitter:creator" content={handle} />

			<meta name="keywords" content={keywords.join(",")} />

			<meta property="og:image" content={iconPath} />

			<meta name="author" content={`${owner}, ${personal}`} />
			<meta name="designer" content={owner} />
			<meta name="owner" content={owner} />
		</>
	);
};

const _getIcons = () => {
	const {
		faviconVersion,
		colors: { primary },
	} = projectConfig;

	return (
		<>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`assets/icons/favicon-16x16.png?v=${faviconVersion}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`assets/icons/favicon-32x32.png?v=${faviconVersion}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="194x194"
				href={`assets/icons/favicon-194x194.png?v=${faviconVersion}`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`assets/icons/apple-touch-icon.png?v=${faviconVersion}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href={`assets/icons/android-chrome-192x192.png?v=${faviconVersion}`}
			/>
			<link rel="mask-icon" href={`assets/icons/safari-pinned-tab.svg?v=${faviconVersion}`} color={primary} />
			<link rel="shortcut icon" href={`assets/icons/favicon.ico?v=${faviconVersion}`} />
			<meta name="msapplication-TileImage" content={`assets/icons/mstile-144x144.png?v=${faviconVersion}`} />
		</>
	);
};

const _getTitle = (title?: string, useTitleTemplate = true) => {
	let titleOutput = "";

	if (title && useTitleTemplate) titleOutput = getFullTitle(title);
	else if (title && !useTitleTemplate) titleOutput = title;
	else titleOutput = projectConfig.name;

	return <title>{titleOutput}</title>;
};

const _getExternalStyles = () => {
	return (
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Merriweather:wght@800;900&family=Source+Sans+Pro&family=Fira+Code&display=swap"
		/>
	);
};

export const HeadNext = ({
	title,
	useTitleTemplate = true,
}: {
	title: string;
	useTitleTemplate?: boolean;
}): JSX.Element => {
	const router = useRouter();

	const { locale } = router;

	return (
		<NextHead>
			{_getMetaLocale(locale)}
			{_getTitle(title, useTitleTemplate)}
		</NextHead>
	);
};

export const HeadDocument = (): JSX.Element => (
	<NextDocumentHead>
		{_getMeta()}
		{_getIcons()}
		{_getRestOfHead()}
		{_getExternalStyles()}
	</NextDocumentHead>
);

export const Head = HeadNext;

export default Head;
