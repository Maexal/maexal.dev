import React from "react";
import { useI18n } from "next-localization";

import { Head, Main, Link } from "../components";
import { capitalizeFirst } from "../utils";

const NotFoundPage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<>
			<Head title={`Error 404: ${capitalizeFirst(t("phrases.page-not-found"))}`} />

			<Main fullPage className="not-found">
				<div>
					<div>
						<p className="label">Error 404: {capitalizeFirst(t("phrases.page-not-found"))}</p>
						<h1>{t("sentences.404-title")}</h1>
						<p>{t("sentences.404-text")}</p>

						<Link type="button" href={t("navigation.home.url")} elevation="hovering" margin>
							{capitalizeFirst(t("phrases.back-to-safety"))}
						</Link>
						<Link type="button" href={t("navigation.contact.url")} margin color="blue">
							{capitalizeFirst(t("phrases.contact-us"))}
						</Link>
					</div>
					<div>
						<div className="image"></div>
					</div>
				</div>
			</Main>
		</>
	);
};

export default NotFoundPage;
