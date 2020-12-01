import Head from "next/head";
import { Link } from "../utils/i18next";
import { withTranslation } from "../utils/i18next";

const NotFoundPage = ({ t }) => {
	return (
		<>
			<Head>
				<title>404 {t("not-found")} - M&#230;xal</title>
			</Head>

			<main className="container">
				<h1>404 {t("not-found")}</h1>
				<Link href="/">
					<span className="underline cursor-pointer">{t("back-to-safety")}</span>
				</Link>
			</main>
		</>
	);
};

export default withTranslation("all")(NotFoundPage);
