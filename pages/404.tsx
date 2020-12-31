import React from "react";
import { useI18n } from "next-localization";

import { Head, Main, Link } from "@/components";
import { capitalizeFirst } from "@/utils";

const NotFoundPage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<>
			<Head title={`Error 404: ${capitalizeFirst(t("phrases.page-not-found"))}`} />

			<Main fullPage className="container px-4 py-24 mx-auto flex flex-col justify-center items-center">
				<div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
					<div>
						<p className="text-left font-mono mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
							Error 404: {capitalizeFirst(t("phrases.page-not-found"))}
						</p>
						<h1 className="font-serif mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 dark:text-gray-100 md:text-4xl">
							{t("sentences.404-title")}
						</h1>
						<p className="font-sans mb-5 text-base text-left text-gray-800 dark:text-gray-200 md:text-xl">
							{t("sentences.404-text")}
						</p>

						<Link type="button" href={t("navigation.home.url")} elevation="hovering" margin>
							{capitalizeFirst(t("phrases.back-to-safety"))}
						</Link>
						<Link type="button" href={t("navigation.contact.url")} margin color="blue">
							{capitalizeFirst(t("phrases.contact-us"))}
						</Link>
					</div>
					<div
						className="w-full h-full py-48 bg-gray-200 dark:bg-gray-800 rounded-lg bg-center bg-cover bg-no-repeat"
						style={{ backgroundImage: `url("https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif")` }}
					></div>
				</div>
			</Main>
		</>
	);
};

export default NotFoundPage;
