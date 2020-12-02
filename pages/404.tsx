import Head from "next/head";
import Link from "next/link";
import { useI18n } from "next-localization";

const NotFoundPage = () => {
	const i18n = useI18n();

	return (
		<>
			<Head>
				<title>404 {i18n.t("not-found")} - M&#230;xal</title>
			</Head>

			<main className="container">
				<h1>404 {i18n.t("not-found")}</h1>
				<Link href="/">
					<span className="underline cursor-pointer">{i18n.t("back-to-safety")}</span>
				</Link>
			</main>
		</>
	);
};

export default NotFoundPage;
