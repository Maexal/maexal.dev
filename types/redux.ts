import { CHANGE_LANGUAGE, CHANGE_THEME } from '@/redux';

export type Theme = 'system' | 'light' | 'dark';
export type Language = 'en' | 'nl';

export interface State {
	app: {
		theme: Theme;
		language: Language;
	};
}

interface ChangeThemeAction {
	type: typeof CHANGE_THEME;
	theme: Theme;
}

interface ChangeLanguageAction {
	type: typeof CHANGE_LANGUAGE;
	language: Language;
}

export type AppActionTypes = ChangeThemeAction | ChangeLanguageAction;
export type ActionTypes = AppActionTypes;
