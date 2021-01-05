import React from "react";
import { useI18n } from "next-localization";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Link, Logo } from ".";
import { projectConfig } from "@/project.config";
import { capitalizeFirst, getLanguageFromString, getThemeFromString } from "@/utils";
import { State } from "@/types";
import { changeLanguage, changeTheme } from "@/redux";

export const Footer = ({
	type = "regular",
	shade = false,
}: {
	type?: "regular" | "notice-only";
	shade?: boolean;
}): JSX.Element => {
	const router = useRouter();
	const appState = useSelector((state: State) => state.app);
	const dispatch = useDispatch();
	const i18n = useI18n();
	const { t } = i18n;
	const { name, owner, ownerURL, languages, startYear } = projectConfig;

	const _changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void =>
		dispatch(changeLanguage(getLanguageFromString(event.target.value), router));

	const _changeTheme = (event: React.ChangeEvent<HTMLSelectElement>): void =>
		dispatch(changeTheme(getThemeFromString(event.target.value)));

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
		case "notice-only":
			return (
				<footer className={`relative w-full bg-primary-100 dark:bg-primary-900${shade ? ` shade` : ``}`}>
					<div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
						<div className="flex flex-col items-center justify-between pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 md:flex-row">
							<p className="mb-6 text-sm text-left text-gray-600 dark:text-gray-400 md:mb-0">
								&copy; Copyright {startYear}-{new Date().getFullYear()} {name}.{" "}
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

		case "regular":
		default:
			return (
				<footer className={`relative w-full bg-primary-100 dark:bg-primary-900${shade ? ` shade` : ``}`}>
					<div className="container mx-auto px-8 grid grid-cols-2 gap-10 mb-3 md:grid-cols-5 lg:gap-20">
						<div className="col-span-2 md:col-start-1">
							<Link
								href={t("navigation.home.url")}
								className="inline-flex relative justify-center items-center select-none no-underline"
							>
								<Logo interactive size={40} />
							</Link>
							<p className="my-4 text-xs leading-normal text-gray-800 dark:text-gray-200">
								{t("footer.description-1")}{" "}
								<Link href={ownerURL} target="_blank">
									{owner}
								</Link>
								{t("footer.description-2")}
							</p>
							<div className="grid grid-cols-2 gap-6">
								<label className="col-span-1 flex flex-col text-gray-800 dark:text-gray-200">
									<span className="mb-2 text-xs font-semibold tracking-wider uppercase">
										{t("words.language")}
									</span>
									<select
										className="form-select form-select-sm font-mono rounded w-34 p-1 px-2 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800"
										value={appState.language}
										onChange={_changeLanguage}
									>
										{languages.map(
											({ key, name }: { key: string; name: string }): JSX.Element => (
												<option key={key} value={key}>
													{name}
												</option>
											)
										)}
									</select>
								</label>
								<label className="col-span-1 flex flex-col text-gray-800 dark:text-gray-200">
									<span className="mb-2 text-xs font-semibold tracking-wider uppercase">
										{t("words.theme")}
									</span>
									<select
										className="form-select form-select-sm font-mono rounded w-34 p-1 px-2 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800"
										value={appState.theme}
										onChange={_changeTheme}
									>
										<option value="system">{capitalizeFirst(t("words.system"))}</option>
										<option value="light">{capitalizeFirst(t("words.light"))}</option>
										<option value="dark">{capitalizeFirst(t("words.dark"))}</option>
									</select>
								</label>
							</div>
						</div>
						<nav className="col-span-1 md:col-start-4 grid grid-flow-row"></nav>
						<nav className="col-span-1 md:col-start-5 grid grid-flow-row">
							<p className="mb-3 text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-200 uppercase">
								{t("footer.social.heading")}
							</p>
							<Link
								href="https://github.com/maexal/"
								target="_blank"
								className="footer-link mb-2 text-sm font-medium text-gary-700 dark:text-gray-300"
							>
								GitHub
							</Link>
							<Link
								href="https://linkedin.com/company/maexal/"
								target="_blank"
								className="footer-link mb-2 text-sm font-medium text-gary-700 dark:text-gray-300"
							>
								LinkedIn
							</Link>
							<Link
								href="https://facebook.com/maexal.dev/"
								target="_blank"
								className="footer-link mb-2 text-sm font-medium text-gary-700 dark:text-gray-300"
							>
								Facebook
							</Link>
							<Link
								href="https://instagram.com/maexal.dev/"
								target="_blank"
								className="footer-link mb-2 text-sm font-medium text-gary-700 dark:text-gray-300"
							>
								Instagram
							</Link>
							<Link
								href="https://twitter.com/maexal_dev/"
								target="_blank"
								className="footer-link mb-2 text-sm font-medium text-gary-700 dark:text-gray-300"
							>
								Twitter
							</Link>
						</nav>
					</div>
					<div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
						<div className="flex flex-col items-center justify-between pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 md:flex-row">
							<p className="mb-6 text-sm text-left text-gray-600 dark:text-gray-400 md:mb-0">
								&copy; Copyright {startYear}-{new Date().getFullYear()} {name}.{" "}
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
