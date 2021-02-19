import { NextRouter } from 'next/router';
import { setTheme } from '@/utils';
import type { ActionTypes, Language, Theme } from '@/types';

export const CHANGE_THEME = '@APP/CHANGE_THEME';
export const CHANGE_LANGUAGE = '@APP/CHANGE_LANGUAGE';

export const changeTheme = (theme: Theme): ActionTypes => {
	setTheme(theme);

	return {
		type: CHANGE_THEME,
		theme,
	};
};

export const changeLanguage = (language: Language, router?: NextRouter): ActionTypes => {
	if (router) router.push(router.pathname, router.pathname, { locale: language });

	return {
		type: CHANGE_LANGUAGE,
		language,
	};
};
