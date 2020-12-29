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
	abstract: string;
	description: string;
	domain: string;
	iconPath: string;
	url: string;
	lastUpdated: string;
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
	particles: IParticlesParams;
}

export const projectConfig: ProjectConfig = {
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
	lastUpdated: "December 28, 2020",
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
						src: "assets/vectors/code.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/terminal.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/cloud.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/database.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/server.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/beaker.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/at-symbol.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/chip.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/desktop-computer.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/device-mobile.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/device-tablet.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/globe-alt.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/hashtag.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/heart.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/light-bulb.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/lightning-bolt.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/paper-airplane.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/sparkles.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/star.svg",
						height: 20,
						width: 20,
					},
					{
						src: "assets/vectors/support.svg",
						height: 20,
						width: 20,
					},
				],
			},
		},
	},
};

export default projectConfig;
