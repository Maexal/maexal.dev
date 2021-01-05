import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { I18nProvider } from "next-localization";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "@/styles/tailwind.scss";
import "@/styles/index.scss";
import "@/styles/global.scss";
import "@/styles/customCSS.scss";
import "@/styles/toastify.scss";
import "@/styles/swal.scss";

import { Header, ParticlesBackground } from "@/components";
import {
	checkDarkMode,
	getLanguageFromString,
	getLanguageDictionary,
	getThemeFromString,
	useLocalStorage,
} from "@/utils";
import { changeLanguage, changeTheme, useStore } from "@/redux";
import { Theme } from "@/types";
import { projectConfig } from "@/project.config";

const motionProps: MotionProps = {
	initial: "pageInitial",
	animate: "pageAnimate",
	exit: "pageExit",
	variants: {
		pageInitial: {
			opacity: 0,
		},
		pageAnimate: {
			opacity: 1,
		},
		pageExit: {
			opacity: 0,
		},
	},
	transition: {
		duration: 0.15,
		ease: "easeInOut",
	},
};

const _getShouldParticlesBackgroundShow = (route: string): boolean => {
	switch (route) {
		case "/terms-and-conditions":
		case "/privacy-policy":
		case "/404":
		case "/":
		default:
			return true;
	}
};

const _getShouldParticlesBackgroundBounce = (route: string): boolean => {
	switch (route) {
		case "/":
		case "/privacy-policy":
		case "/terms-and-conditions":
			return false;
		case "/404":
		default:
			return true;
	}
};

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
	checkDarkMode();

	if (typeof window !== "undefined")
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => checkDarkMode());

	const { initialReduxState } = pageProps;
	const { route, locale } = router;
	const {
		toastify: { toastContainer },
	} = projectConfig;

	const store = useStore(initialReduxState);
	const [lsTheme] = useLocalStorage<Theme>("theme", "system");

	const state = store.getState();
	const { language, theme } = state.app;
	if (language !== locale) store.dispatch(changeLanguage(getLanguageFromString(locale)));
	if (theme !== lsTheme) store.dispatch(changeTheme(getThemeFromString(lsTheme.toString())));
	const languageDictionary = getLanguageDictionary(language);

	return (
		<React.StrictMode>
			<Provider store={store}>
				<I18nProvider lngDict={languageDictionary} locale={language}>
					<>
						<ParticlesBackground
							hide={!_getShouldParticlesBackgroundShow(route)}
							bouncing={_getShouldParticlesBackgroundBounce(route)}
						/>
						<Header />
						<AnimatePresence exitBeforeEnter>
							<motion.div key={route} {...motionProps}>
								<Component {...pageProps} />
							</motion.div>
						</AnimatePresence>
						<ToastContainer {...toastContainer} />
					</>
				</I18nProvider>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
