import React from "react";
import { useI18n } from "next-localization";

import { Head, Header, Link, Main, ParticlesBackground } from "../components";
import { capitalizeFirst } from "../utils";

const ErrorPage = ({ statusCode = 500 }: { statusCode?: number }): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<>
			<Head title={`Error ${statusCode}: ${capitalizeFirst(t("phrases.internal-server-error"))}`} />

			<ParticlesBackground bouncing />

			<Header />

			<Main fullPage className="error">
				<div>
					<div>
						<p className="label">
							Error {statusCode}: {capitalizeFirst(t("phrases.internal-server-error"))}
						</p>
						<h1>{t("sentences.500-title")}</h1>
						<p>{t("sentences.500-text")}</p>

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

ErrorPage.getInitialProps = async ({ res, err }) => {
	let statusCode = null;
	if (res) ({ statusCode } = res);
	else if (err) ({ statusCode } = err);

	return {
		statusCode,
	};
};

export default ErrorPage;
