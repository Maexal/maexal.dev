import { ToastContainerProps } from "react-toastify";

const name = "Mæxal";
const nameSafe = "M&aelig;xal";
const owner = "Max Altena";
const domain = "maexal.dev";

const company = {
	kvk: "78183251",
	bic: "BUNQNL2AXXX",
	iban: "NL14 BUNQ 2044 3278 72",
	btw: "NL003297690B50",
};

export interface ProjectConfig {
	name: string;
	nameSafe: string;
	owner: string;
	ownerURL: string;
	titleTemplate: string;
	faviconVersion: string;
	domain: string;
	iconPath: string;
	url: string;
	keywords: Array<string>;
	startYear: number;
	company: typeof company;
	email: {
		general: string;
		personal: string;
		contact: string;
	};
	twitter: {
		handle: string;
	};
	languages: Array<{ key: string; name: string }>;
	toastify: {
		toastContainer: ToastContainerProps;
	};
}

export const projectConfig: ProjectConfig = {
	name,
	nameSafe,
	owner,
	ownerURL: "https://maxaltena.com/",
	titleTemplate: "{{title}} – {{name}}",
	faviconVersion: "2Ia6uyFL0E",
	domain,
	startYear: 2020,
	iconPath: "/assets/icons/android-chrome-512x512.png",
	url: `https://${domain}/`,
	keywords: ["maexal", "mæxal", "max", "altena", "max altena"],
	company,
	email: {
		general: `hello@${domain}`,
		personal: `max@${domain}`,
		contact: `contact@${domain}`,
	},
	twitter: {
		handle: "maexal_dev",
	},
	languages: [
		{ key: "en", name: "English" },
		{ key: "nl", name: "Nederlands" },
	],
	toastify: {
		toastContainer: {
			limit: 5,
			position: "bottom-right",
			autoClose: 7500,
			hideProgressBar: false,
			pauseOnHover: true,
			pauseOnFocusLoss: true,
			rtl: false,
			closeOnClick: true,
			newestOnTop: false,
			draggable: true,
			draggablePercent: 75,
			role: "alert",
			className: "toast-container",
		},
	},
};

export default projectConfig;
