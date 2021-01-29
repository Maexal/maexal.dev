export interface Color {
	DEFAULT: string;
	0?: string;
	100?: string;
	200?: string;
	300?: string;
	400?: string;
	500?: string;
	600?: string;
	700?: string;
	800?: string;
	900?: string;
	1000?: string;
}

export interface Theme {
	id: string;
	name: string;
	fonts: typeof font;
	sizes: typeof size;
	devices: typeof device;
	colors: {
		gray: Color;
		text: string;
		background: string;
		primary: Color;
		secondary: Color;
		red: string;
		green: string;
		blue: string;
		toasterProgress?: string;
		swalProgress?: string;
	};
}

export const sansSerifFont =
	"'Source Sans Pro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
export const serifFont = "'Merriweather', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
export const monoFont =
	"'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

export const font = {
	DEFAULT: sansSerifFont,
	sans: sansSerifFont,
	serif: serifFont,
	mono: monoFont,
};

export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
};

export const lightTheme: Theme = {
	id: "light",
	name: "Light theme",
	fonts: font,
	sizes: size,
	devices: device,
	colors: {
		text: "#0a0a0a",
		background: "#ffffff",
		gray: {
			DEFAULT: "#757575",
			0: "#ffffff",
			100: "#f2f2f2",
			200: "#d9d9d9",
			300: "#9c9c9c",
			400: "#7e7e7e",
			500: "#757575",
			600: "#686868",
			700: "#5c5c5c",
			800: "#363636",
			900: "#2b2b2b",
			1000: "#000000",
		},
		primary: {
			DEFAULT: "#03aaf7",
			100: "#f0faff",
			200: "#b3e6fe",
			300: "#77d3fd",
			400: "#3abffd",
			500: "#03aaf7",
			600: "#028bca",
			700: "#026897",
			800: "#014565",
			900: "#012332",
		},
		secondary: {
			DEFAULT: "#f75003",
			100: "#fff5f0",
			200: "#fecbb3",
			300: "#fda277",
			400: "#fd783a",
			500: "#f75003",
			600: "#ca4102",
			700: "#973102",
			800: "#652101",
			900: "#321001",
		},
		red: "#ef4444",
		green: "#10b981",
		blue: "#3b82f6",
		toasterProgress: "#f2f2f2",
		swalProgress: "#7e7e7e",
	},
};

export const darkTheme: Theme = {
	id: "dark",
	name: "Dark theme",
	fonts: font,
	sizes: size,
	devices: device,
	colors: {
		text: "#ffffff",
		background: "#0e0e0e",
		gray: {
			DEFAULT: "#757575",
			0: "#000000",
			100: "#2b2b2b",
			200: "#363636",
			300: "#5c5c5c",
			400: "#686868",
			500: "#757575",
			600: "#7e7e7e",
			700: "#9c9c9c",
			800: "#d9d9d9",
			900: "#f2f2f2",
			1000: "#ffffff",
		},
		primary: {
			DEFAULT: "#03aaf7",
			100: "#012332",
			200: "#014565",
			300: "#026897",
			400: "#028bca",
			500: "#03aaf7",
			600: "#3abffd",
			700: "#77d3fd",
			800: "#b3e6fe",
			900: "#f0faff",
		},
		secondary: {
			DEFAULT: "#f75003",
			100: "#321001",
			200: "#652101",
			300: "#973102",
			400: "#ca4102",
			500: "#f75003",
			600: "#fd783a",
			700: "#fda277",
			800: "#fecbb3",
			900: "#fff5f0",
		},
		red: "#ef4444",
		green: "#10b981",
		blue: "#3b82f6",
		toasterProgress: "#f2f2f2",
		swalProgress: "#686868",
	},
};

export const themes = { lightTheme, darkTheme };

export default themes;
