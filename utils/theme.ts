import { Theme } from "@/types";

export const checkDarkMode = (): void => {
	if (typeof window !== "undefined")
		if (
			window.localStorage.theme === "dark" ||
			((window.localStorage.theme !== "light" || window.localStorage.theme !== "system") &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			addDarkModeClass();
		else removeDarkModeClass();
};

export const setTheme = (theme: Theme): void => {
	switch (theme) {
		case "light":
			removeDarkModeClass();
			setThemeLocalStorage(theme);
			break;
		case "dark":
			addDarkModeClass();
			setThemeLocalStorage(theme);
			break;
		case "system":
		default:
			setThemeLocalStorage("system");

			if (typeof window !== "undefined")
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) addDarkModeClass();
				else removeDarkModeClass();
			else removeDarkModeClass();
			break;
	}
};

export const setThemeLocalStorage = (theme: Theme): void => {
	switch (theme) {
		case "light":
		case "dark":
		case "system":
			addThemeLocalStorage(theme);
			break;
		default:
			removeThemeLocalStorage();
			break;
	}
};

export const addThemeLocalStorage = (theme: Theme): void => {
	if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
};

export const removeThemeLocalStorage = (): void => {
	if (typeof window !== "undefined") window.localStorage.removeItem("theme");
};

export const setDarkModeClass = (theme: Theme): void => {
	switch (theme) {
		case "dark":
			addDarkModeClass();
			break;
		case "light":
		case "system":
		default:
			removeDarkModeClass();
			break;
	}
};

export const addDarkModeClass = (): void => {
	document?.querySelector("html")?.classList?.add("dark");
};

export const removeDarkModeClass = (): void => {
	document?.querySelector("html")?.classList?.remove("dark");
};
