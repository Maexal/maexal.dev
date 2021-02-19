import LanguageDictionaryEN from '@/locales/en.json';
import LanguageDictionaryNL from '@/locales/nl.json';
import type { Language, LanguageDictionary } from '@/types';

export const getLanguageDictionary = (language: Language): LanguageDictionary => {
	switch (language) {
		case 'nl':
			return LanguageDictionaryNL;
		case 'en':
		default:
			return LanguageDictionaryEN;
	}
};
