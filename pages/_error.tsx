import Head from "next/head";
import Link from "next/link";
import { useI18n } from "next-localization";

const ErrorPage = ({ statusCode }) => {
	const i18n = useI18n();

	return (
		<>
			<Head>
				<title>{{ statusCode }}- M&#230;xal</title>
			</Head>

			<main className="container">
				<p>
					{statusCode} {i18n.t("whoops")}
				</p>
				<Link href="/">
					<span className="underline cursor-pointer">{i18n.t("back-to-safety")}</span>
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
		statusCode,
	};
};

export default ErrorPage;
