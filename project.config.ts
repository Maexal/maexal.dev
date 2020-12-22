const name = "Mæxal";
const nameSafe = "M&aelig;xal";
const owner = "Max Altena";
const domain = "maexal.dev";

export const projectConfig = {
	name,
	nameSafe,
	owner,
	titleTemplate: "{{title}} – {{name}}",
	faviconVersion: "2Ia6uyFL0E",
	abstract: "Software development company",
	description: `The website of a software development company named ${name} run by a robot with passion called ${owner}`,
	domain,
	iconPath: "/assets/icons/android-chrome-512x512.png",
	url: `https://${domain}/`,
	keywords: ["maexal", "mæxal", "max", "altena", "max altena"],
	email: {
		general: `hello@${domain}`,
		personal: `max@${domain}`,
		contact: `contact@${domain}`,
	},
	twitter: {
		handle: "maexal_dev",
	},
	colors: {
		primary: "#03aaf9",
		background: "#ffffff",
	},
};

export default projectConfig;
