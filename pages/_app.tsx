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

export default MyApp;
