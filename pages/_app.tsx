import React from 'react';

import { I18nProvider } from 'next-localization';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '@/styles/tailwind.scss';
import '@/styles/customCSS.scss';
import { projectConfig } from '@/project.config';
import { useStore, changeLanguage, changeTheme } from '@/states';
import {
	getLanguageDictionary,
	getLanguageFromString,
	getThemeFromString,
	useLocalStorage,
	checkDarkMode,
	addListenerForTheme,
} from '@/utils';

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
	const { initialReduxState } = pageProps;
	const store = useStore(initialReduxState);

	checkDarkMode();
	addListenerForTheme();

	const state = store.getState();
	const { language, theme } = state.app;
	const { locale } = router;

	const [lsTheme] = useLocalStorage('theme', 'system');

	if (locale && language !== locale) store.dispatch(changeLanguage(getLanguageFromString(locale)));
	if (theme !== lsTheme) store.dispatch(changeTheme(getThemeFromString(lsTheme.toString())));

	const {
		toastify: { toastContainer },
	} = projectConfig;

	return (
		<React.StrictMode>
			<Provider store={store}>
				<I18nProvider lngDict={getLanguageDictionary(language)} locale={language}>
					<>
						<Component {...pageProps} />
						<ToastContainer {...toastContainer} />
					</>
				</I18nProvider>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
