import React from "react";
import NextApp from "next/app";
import { I18nProvider } from "next-localization";
import { NextRouter } from "next/router";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

import "../styles/tailwind.scss";
import "../styles/index.scss";
import "../styles/global.scss";
import "../styles/customCSS.scss";

import lngDictEN from "../locales/en.json";
import lngDictNL from "../locales/nl.json";
import { Header, ParticlesBackground } from "../components";

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

class App extends NextApp {
	//eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	constructor(props) {
		super(props);

		_checkDarkMode();
	}

	render(): JSX.Element {
		const { Component, pageProps, router } = this.props;

		return (
			<React.StrictMode>
				<I18nProvider lngDict={_getLngDict(router)} locale={router.locale}>
					<>
						<ParticlesBackground
							hide={!_getShouldParticlesBackgroundShow(router.route)}
							bouncing={_getShouldParticlesBackgroundBounce(router.route)}
						/>
						<Header />
						<AnimatePresence exitBeforeEnter>
							<motion.div key={router.route} {...motionProps}>
								<Component {...pageProps} />
							</motion.div>
						</AnimatePresence>
					</>
				</I18nProvider>
			</React.StrictMode>
		);
	}
}

export default App;
