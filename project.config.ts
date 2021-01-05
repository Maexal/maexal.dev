import { IParticlesParams } from "react-particles-js";
import { ToastContainerProps } from "react-toastify";

const name = "Mæxal";
const nameSafe = "M&aelig;xal";
const owner = "Max Altena";
const domain = "maexal.dev";

interface ProjectConfig {
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
						src: "https://maexal.dev/assets/vectors/code.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/terminal.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/cloud.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/database.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/server.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/beaker.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/at-symbol.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/chip.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/desktop-computer.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/device-mobile.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/device-tablet.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/globe-alt.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/hashtag.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/heart.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/light-bulb.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/lightning-bolt.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/paper-airplane.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/sparkles.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/star.svg",
						height: 20,
						width: 20,
					},
					{
						src: "https://maexal.dev/assets/vectors/support.svg",
						height: 20,
						width: 20,
					},
				],
			},
		},
	},
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
