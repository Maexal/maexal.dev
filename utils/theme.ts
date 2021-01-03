export type Theme = "light" | "dark" | "system";

export const checkDarkMode = (): void => {
	if (typeof window !== "undefined")
		if (
			window.localStorage.theme === "dark" ||
			(!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			addDarkModeClass();
		else removeDarkModeClass();
};

export const getTypeOfTheme = (): Theme => {
	if (typeof window !== "undefined")
		if (window.localStorage.theme === "dark") return "dark";
		else if (window.localStorage.theme === "light") return "light";
		else return "system";
	else return "system";
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
			removeThemeLocalStorage();

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
			addThemeLocalStorage(theme);
			break;
		case "system":
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
	document.querySelector("html").classList.add("dark");
};

export const removeDarkModeClass = (): void => {
	document.querySelector("html").classList.remove("dark");
};
