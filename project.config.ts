import { IParticlesParams } from "react-particles-js";

const name = "Mæxal";
const nameSafe = "M&aelig;xal";
const owner = "Max Altena";
const domain = "maexal.dev";

interface ProjectConfig {
	name: string;
	nameSafe: string;
	owner: string;
	titleTemplate: string;
	faviconVersion: string;
	domain: string;
	iconPath: string;
	url: string;
	keywords: Array<string>;
	email: {
		general: string;
		personal: string;
		contact: string;
	};
	twitter: {
		handle: string;
	};
	colors: {
		primary: string;
		background: string;
	};
	languages: Array<{ key: string; name: string }>;
	particles: IParticlesParams;
}

export const projectConfig: ProjectConfig = {
	name,
	nameSafe,
	owner,
	titleTemplate: "{{title}} – {{name}}",
	faviconVersion: "2Ia6uyFL0E",
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
	languages: [
		{ key: "en", name: "English" },
		{ key: "nl", name: "Nederlands" },
	],
	particles: {
		fpsLimit: 60,
		pauseOnBlur: true,
		detectRetina: true,
		autoPlay: true,
		pauseOnOutsideViewport: true,
		particles: {
			number: {
				value: 10,
				density: {
					enable: true,
					area: 150,
				},
			},
			move: {
				speed: 1,
				random: true,
				outMode: "out",
			},
			rotate: {
				random: true,
				animation: {
					enable: true,
					speed: 1,
					sync: false,
				},
			},
			collisions: {
				enable: true,
			},
			color: {
				value: "#ffffff",
			},
			lineLinked: {
				enable: false,
			},
			size: {
				value: 16,
				random: true,
				animation: {
					enable: true,
					speed: 0.5,
					minimumValue: 8,
					sync: false,
				},
			},
			opacity: {
				value: 0.75,
				random: true,
				animation: {
					enable: true,
					speed: 0.5,
					minimumValue: 0.25,
					sync: false,
				},
			},
			shape: {
				type: ["image"],
				image: [
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/code.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/terminal.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/cloud.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/database.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/server.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/beaker.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/at-symbol.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/chip.svg",
						height: 20,
						width: 20,
					},
					{
						src:
							"https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/desktop-computer.svg",
						height: 20,
						width: 20,
					},
					{
						src:
							"https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/device-mobile.svg",
						height: 20,
						width: 20,
					},
					{
						src:
							"https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/device-tablet.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/globe-alt.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/hashtag.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/heart.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/light-bulb.svg",
						height: 20,
						width: 20,
					},
					{
						src:
							"https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/lightning-bolt.svg",
						height: 20,
						width: 20,
					},
					{
						src:
							"https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/paper-airplane.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/sparkles.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/star.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/solid/support.svg",
						height: 20,
						width: 20,
					},
				],
			},
		},
	},
};

export default projectConfig;
