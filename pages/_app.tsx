import { I18nProvider } from "next-localization";
import { useRouter } from "next/router";
import "../styles/index.scss";
import lngDictEN from "../locales/en.json";
import lngDictNL from "../locales/nl.json";

const MyApp = ({ Component, pageProps }) => {
	if (typeof window !== "undefined") {
		if (
			window.localStorage.theme === "dark" ||
			(!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			document.querySelector("html").classList.add("dark");
		else document.querySelector("html").classList.remove("dark");
	}

	const router = useRouter();
	let lngDict;
	switch (router.locale) {
		case "nl":
			lngDict = lngDictNL;
			break;
		case "en":
		default:
			lngDict = lngDictEN;
			break;
	}

	return (
		<I18nProvider lngDict={lngDict} locale={router.locale}>
			<Component {...pageProps} />
		</I18nProvider>
	);
};

export default MyApp;
