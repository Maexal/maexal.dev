import React from "react";
import { NextPageContext } from "next";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";

const Head = dynamic(() => import("@/components/Head"));
const Link = dynamic(() => import("@/components/Link"));
const Main = dynamic(() => import("@/components/Main"));
import { capitalizeFirst } from "@/utils";

const ErrorPage = ({ statusCode = null }: { statusCode?: number | null }): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	const errorText = statusCode ? t("phrases.error-with-status", { statusCode }) : t("phrases.error-without-status");

	return (
		<>
			<Head title={errorText} />

			<Main fullPage spaced>
				<div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
					<div>
						<p className="text-left font-mono mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
							{errorText}
						</p>
						<h1 className="font-serif mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 dark:text-gray-100 md:text-4xl">
							{t("sentences.500-title")}
						</h1>
						<p className="font-sans mb-5 text-base text-left text-gray-800 dark:text-gray-200 md:text-xl">
							{t("sentences.500-text")}
						</p>

						<Link type="button-link" href={t("navigation.home.url")} elevation="hovering" margin>
							{capitalizeFirst(t("phrases.back-to-safety"))}
						</Link>
						<Link type="button-link" href={t("navigation.contact.url")} margin color="blue">
							{capitalizeFirst(t("phrases.contact-us"))}
						</Link>
					</div>
					<div
						className="w-full h-full py-48 bg-gray-200 dark:bg-gray-800 rounded-lg bg-center bg-cover bg-no-repeat"
						style={{ backgroundImage: `url("https://media.giphy.com/media/Fs0vJPEU1l6sU/giphy.gif")` }}
					></div>
				</div>
			</Main>
		</>
	);
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
	let statusCode = null;
	if (res) ({ statusCode } = res);
	else if (err) ({ statusCode } = err);

	return {
		statusCode,
	};
};

export default ErrorPage;
