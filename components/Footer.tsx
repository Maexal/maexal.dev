import React from "react";
import { useI18n } from "next-localization";
import { useRouter } from "next/router";

import { Link } from ".";
import { projectConfig } from "@/project.config";
import { setTheme, Theme, getTypeOfTheme } from "../utils";

export const Footer = ({ type = "regular" }: { type?: "small" | "regular" }): JSX.Element => {
	const i18n = useI18n();
	const router = useRouter();
	const [dropdownTheme, setDropdownTheme] = React.useState<Theme>(getTypeOfTheme());
	const { t } = i18n;
	const { name } = projectConfig;

	const _changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		const lng = event.target.value;

		router.push(router.pathname, router.pathname, { locale: lng });
	};

	const _changeTheme = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		const targetValue = event.target.value;

		if (targetValue === "light" || targetValue === "dark" || targetValue === "auto") {
			setTheme(targetValue);
			setDropdownTheme(targetValue);
		}
	};

	// <footer data-type={type}>
	// 	<div className="footer-wrapper">
	// 		<div className="font-mono text-black dark:text-white">
	// 			<strong className="font-mono">KVK:</strong>78183251
	// 		</div>
	// 		<div className="font-mono text-black dark:text-white">
	// 			<strong className="font-mono">BTW:</strong>NL003297690B50
	// 		</div>
	// 		<div className="font-mono text-black dark:text-white">
	// 			<strong className="font-mono">IBAN:</strong>NL14 BUNQ 2044 3278 72
	// 		</div>
	// 		<div className="font-mono text-black dark:text-white">
	// 			<strong className="font-mono">BIC:</strong>BUNQNL2AXXX
	// 		</div>
	// 	</div>
	// </footer>

	switch (type) {
		case "small":
		case "regular":
		default:
			return (
				<footer className="w-full bg-blue-100 dark:bg-blue-900">
					<div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
						<div className="col-span-3">
							{/* <a href="/" title="Go to Kutty Home Page">
								<svg
									className="w-auto h-6"
									width="86"
									height="24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 335 93"
								>
									<path
										d="M134.71 45.7599c1.32-1.44 2.67-2.94 4.05-4.5 1.44-1.56 2.82-3.09 4.14-4.59 1.32-1.56 2.55-3.03 3.69-4.41 1.2-1.38 2.22-2.58 3.06-3.6h15.93c-3.18 3.66-6.3 7.17-9.36 10.53-3 3.3-6.3 6.72-9.9 10.26 1.8 1.62 3.66 3.57 5.58 5.85 1.92 2.22 3.78 4.53 5.58 6.93 1.8 2.4 3.45 4.8 4.95 7.2 1.5 2.4 2.76 4.59 3.78 6.57h-15.39c-.96-1.56-2.07-3.27-3.33-5.13-1.2-1.92-2.49-3.81-3.87-5.67-1.38-1.92-2.85-3.75-4.41-5.49-1.5-1.74-3-3.21-4.5-4.41v20.7H121.3V8.31991l13.41-2.16V45.7599zM209.35 74.3799c-2.28.66-5.22 1.26-8.82 1.8-3.6.6-7.38.9-11.34.9-4.02 0-7.38-.54-10.08-1.62-2.64-1.08-4.74-2.58-6.3-4.5-1.56-1.98-2.67-4.32-3.33-7.02-.66-2.7-.99-5.67-.99-8.91v-26.37h13.41v24.75c0 4.32.57 7.44 1.71 9.36 1.14 1.92 3.27 2.88 6.39 2.88.96 0 1.98-.03 3.06-.09 1.08-.12 2.04-.24 2.88-.36v-36.54h13.41v45.72zM217.888 16.8699l13.41-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.89 10.44c-1.62.66-3.42 1.23-5.4 1.71-1.98.48-4.41.72-7.29.72-3.66 0-6.69-.48-9.09-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.46-3.96-3.06-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78zM254.279 16.8699l13.409-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.891 10.44c-1.62.66-3.421 1.23-5.401 1.71s-4.409.72-7.289.72c-3.66 0-6.691-.48-9.091-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.459-3.96-3.059-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78zM334.028 28.6599c-2.7 9.12-5.52 17.67-8.46 25.65-2.94 7.98-6.15 15.72-9.63 23.22-1.26 2.7-2.52 4.98-3.78 6.84-1.26 1.92-2.64 3.48-4.14 4.68-1.5 1.26-3.21 2.16-5.13 2.7-1.86.6-4.05.9-6.57.9-2.1 0-4.05-.21-5.85-.63-1.74-.36-3.18-.78-4.32-1.26l2.34-10.71c1.38.48 2.61.81 3.69.99 1.08.18 2.22.27 3.42.27 2.4 0 4.23-.66 5.49-1.98 1.32-1.26 2.43-3.03 3.33-5.31-3.06-6-6.12-12.72-9.18-20.16-3.06-7.5-5.94-15.9-8.64-25.2h14.22c.6 2.34 1.29 4.89 2.07 7.65.84 2.7 1.71 5.46 2.61 8.28.9 2.76 1.8 5.46 2.7 8.1.96 2.64 1.86 5.04 2.7 7.2.78-2.16 1.59-4.56 2.43-7.2.84-2.64 1.65-5.34 2.43-8.1.84-2.82 1.62-5.58 2.34-8.28.78-2.76 1.47-5.31 2.07-7.65h13.86z"
										fill="#1A202C"
									/>
									<path
										d="M5.61825.4114C24.3953-2.95442 43.4551 21.1695 51.21 34.8757v29.6906c-4.8347 14.2497-12.952 19.1401-20.8473 19.362-12.7347.358-22.758-14.27-17.6881-25.9574 2.926-6.7451 8.905-10.1655 13.0016-11.2189C5.61473 45.9161.32294 23.2628.01461 7.98884-.05756 4.41366 2.09844 1.04233 5.61825.4114z"
										fill="#9E58E9"
									/>
									<path
										d="M96.8018.4114C78.0247-2.95442 58.9649 21.1695 51.21 34.8757v29.6906c4.8347 14.2497 12.952 19.1401 20.8474 19.362 12.7346.358 22.7579-14.27 17.688-25.9574-2.9259-6.7451-8.905-10.1655-13.0015-11.2189 20.0614-.8359 25.3531-23.4892 25.6611-38.76316.073-3.57518-2.083-6.94651-5.6032-7.57744z"
										fill="#7629C8"
									/>
								</svg>
								<span className="sr-only">Kutty Home Page</span>
							</a>
							<p className="my-4 text-xs leading-normal text-gray-800 dark:text-gray-200">
								Bring together your discussions, memberships, and content. Integrate a thriving
								community wherever your audience is, all under your own brand.
							</p> */}
							<label className="flex w-24 text-gray-800 dark:text-gray-200">
								<span className="sr-only">Change language</span>
								<select
									className="form-select form-select-sm text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800"
									value={i18n.locale()}
									onChange={_changeLanguage}
								>
									<option value="en">English</option>
									<option value="nl">Dutch</option>
								</select>
							</label>
							<label className="flex w-24 text-gray-800 dark:text-gray-200">
								<span className="sr-only">Change theme</span>
								<select
									className="form-select form-select-sm text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800"
									value={dropdownTheme}
									onChange={_changeTheme}
								>
									<option value="auto">System</option>
									<option value="light">Light</option>
									<option value="dark">Dark</option>
								</select>
							</label>
						</div>
						{/* <nav className="col-span-1 md:col-span-1 lg:col-span-2">
							<p className="mb-3 text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-200 uppercase">
								Product
							</p>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Features
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Integrations
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Documentation
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								FAQs
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Pricing
							</a>
						</nav>
						<nav className="col-span-1 md:col-span-1 lg:col-span-2">
							<p className="mb-3 text-xs font-semibold tracking-wider  text-gray-800 dark:text-gray-200 uppercase">
								About
							</p>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Press-Kit
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Company
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Privacy
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Blog
							</a>
						</nav>
						<nav className="col-span-2 md:col-span-1 lg:col-span-2">
							<p className="mb-3 text-xs font-semibold tracking-wider  text-gray-800 dark:text-gray-200 uppercase">
								Contact
							</p>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Twitter
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Instagram
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Email
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Advertising
							</a>
							<a
								href="#"
								className="flex mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition md:mb-2 hover:text-primary"
							>
								Chat
							</a>
						</nav>
						<div className="col-span-3">
							<p className="mb-3 text-xs font-semibold tracking-wider  text-gray-800 dark:text-gray-200 uppercase">
								SUBSCRIBE TO OUR NEWSLETTER
							</p>

							<p className="text-xs leading-normal text-gray-700 dark:text-gray-300">
								Get lessons and insights on how to grow your freelance business.
							</p>
						</div> */}
					</div>
					<div className="container px-4 py-12 mx-auto">
						<div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-200 dark:border-gray-800 md:flex-row md:items-center">
							<p className="mb-6 text-sm text-left text-gray-600 dark:text-gray-400 md:mb-0">
								&copy; Copyright 2020-{new Date().getFullYear()} {name}.{" "}
								{t("phrases.all-rights-reserved")}.
							</p>
							<div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
								<Link
									href={t("navigation.terms-and-conditions.url")}
									className="text-sm text-gray-600 dark:text-gray-400"
								>
									{t("navigation.terms-and-conditions.capitalized-name")}
								</Link>
								<Link
									href={t("navigation.privacy-policy.url")}
									className="text-sm text-gray-600 dark:text-gray-400"
								>
									{t("navigation.privacy-policy.capitalized-name")}
								</Link>
							</div>
						</div>
					</div>
				</footer>
			);
	}
};

export default Footer;
