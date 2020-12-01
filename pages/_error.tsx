import Head from "next/head";
import { Link, withTranslation } from "../i18next";

const ErrorPage = ({ statusCode, t }) => {
	return (
		<>
			<Head>
				<title>{{ statusCode }}- M&#230;xal</title>
			</Head>

			<main className="container">
				<p>
					{statusCode} {t("whoops")}
				</p>
				<Link href="/">
					<span className="underline cursor-pointer">{t("back-to-safety")}</span>
				</Link>
			</main>
		</>
	);
};

ErrorPage.getInitialProps = async ({ res, err }) => {
	let statusCode = null;
	if (res) {
		({ statusCode } = res);
	} else if (err) {
		({ statusCode } = err);
	}
	return {
		namespacesRequired: ["common"],
		statusCode,
	};
};

// @ts-ignore
export default withTranslation("all")(ErrorPage);
