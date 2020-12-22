import React from "react";
import { I18nProvider } from "next-localization";
import { NextRouter, useRouter } from "next/router";

import "../styles/index.scss";

import lngDictEN from "../locales/en.json";
import lngDictNL from "../locales/nl.json";

const _getLngDict = (router: NextRouter) => {
	switch (router.locale) {
		case "nl":
			return lngDictNL;
		case "en":
		default:
			return lngDictEN;
	}
};

const _checkDarkMode = () => {
	if (typeof window !== "undefined") {
		if (
			window.localStorage.theme === "dark" ||
			(!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			document.querySelector("html").classList.add("dark");
		else document.querySelector("html").classList.remove("dark");
	}
};

const MyApp = ({ Component, pageProps }: { Component; pageProps }): JSX.Element => {
	const router = useRouter();

	_checkDarkMode();

	return (
		<I18nProvider lngDict={_getLngDict(router)} locale={router.locale}>
			<Component {...pageProps} />
		</I18nProvider>
	);
};

export default MyApp;
