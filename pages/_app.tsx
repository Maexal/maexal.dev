import App from "next/app";
import { appWithTranslation } from "../utils/i18next";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
	if (typeof window !== "undefined") {
		if (
			window.localStorage.theme === "dark" ||
			(!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			document.querySelector("html").classList.add("dark");
		else document.querySelector("html").classList.remove("dark");
	}

	return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext: any) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
