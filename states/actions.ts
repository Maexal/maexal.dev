import { NextRouter } from 'next/router';

import type { ActionTypes, Language, Theme } from '@/types';
import { setTheme } from '@/utils';

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
