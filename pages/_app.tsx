import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { I18nProvider } from "next-localization";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

import "@/styles/tailwind.scss";
import "@/styles/index.scss";
import "@/styles/global.scss";
import "@/styles/customCSS.scss";

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
					</>
				</I18nProvider>
			</Provider>
		</React.StrictMode>
	);
};

// class App extends NextApp {
// 	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// 	constructor(props) {
// 		super(props);

// 		checkDarkMode();

// 		if (typeof window !== "undefined")
// 			window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => checkDarkMode());
// 	}

// 	render(): JSX.Element {
// 		const { Component, pageProps, router } = this.props;
// 		const { initialReduxState } = pageProps;
// 		const { route, locale } = router;

// 		// const store = useStore(initialReduxState);
// 		const dispatch = useDispatch();
// 		const [lsTheme] = useLocalStorage<Theme>("theme", "system");

// 		const state = store.getState();
// 		const { language, theme } = state;
// 		if (language !== locale) dispatch(changeLanguage(getLanguageFromString(language)));
// 		if (theme !== lsTheme) dispatch(changeTheme(getThemeFromString(theme)));
// 		const languageDictionary = getLanguageDictionary(language);

// 		return (
// 			<React.StrictMode>
// 				<Provider store={store}>
// 					<I18nProvider lngDict={languageDictionary} locale={language}>
// 						<>
// 							<ParticlesBackground
// 								hide={!_getShouldParticlesBackgroundShow(route)}
// 								bouncing={_getShouldParticlesBackgroundBounce(route)}
// 							/>
// 							<Header />
// 							<AnimatePresence exitBeforeEnter>
// 								<motion.div key={route} {...motionProps}>
// 									<Component {...pageProps} />
// 								</motion.div>
// 							</AnimatePresence>
// 						</>
// 					</I18nProvider>
// 				</Provider>
// 			</React.StrictMode>
// 		);
// 	}
// }

export default App;
