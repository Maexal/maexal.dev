import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirst, getLanguageFromString, getThemeFromString } from "@/utils";
import { State } from "@/types";
import { changeLanguage, changeTheme } from "@/redux";
import { projectConfig } from "@/project.config";
import * as Styled from "./styles";
import type { Props } from "./types";
import { FooterNotice } from "./Notice";

const Link = dynamic(() => import("@/components/Link"));
const Logo = dynamic(() => import("@/components/Logo"));

export const Footer = ({ type = "regular", ...props }: Props): JSX.Element => {
	const router = useRouter();
	const appState = useSelector((state: State) => state.app);
	const dispatch = useDispatch();
	const i18n = useI18n();
	const { t } = i18n;
	const { owner, ownerURL, languages } = projectConfig;

	const _changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void =>
		dispatch(changeLanguage(getLanguageFromString(event.target.value), router));

	const _changeTheme = (event: React.ChangeEvent<HTMLSelectElement>): void =>
		dispatch(changeTheme(getThemeFromString(event.target.value)));

	switch (type) {
		case "notice-only":
			return (
				<Styled.Footer {...props}>
					<FooterNotice />
				</Styled.Footer>
			);

		case "regular":
		default:
			return (
				<Styled.Footer {...props}>
					<Styled.Container>
						<div className="col-span-2 md:col-start-1">
							<Link
								href={t("navigation.home.url")}
								className="inline-flex relative justify-center items-center select-none no-underline"
							>
								<Logo />
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
						<Styled.Column
							css={`
								--grid-column-start: 4;
							`}
						></Styled.Column>
						<Styled.Column
							css={`
								--grid-column-start: 5;
							`}
						>
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
						</Styled.Column>
					</Styled.Container>
					<FooterNotice />
				</Styled.Footer>
			);
	}
};

export default Footer;
