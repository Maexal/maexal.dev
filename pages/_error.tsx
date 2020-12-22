import React from "react";
import { useI18n } from "next-localization";

import { Head, Header, Link, Main } from "../components";
import { useRouter } from "next/router";
import { capitalizeFirst } from "../utils";

const ErrorPage = ({ statusCode }: { statusCode?: never }): JSX.Element => {
	const i18n = useI18n();
	const router = useRouter();
	const [time, setTime] = React.useState(5000);
	const [ticking, setTicking] = React.useState<boolean>(true);
	let timer: ReturnType<typeof setTimeout>;

	React.useEffect(() => {
		if (time <= 0) router.push("/");

		timer = setTimeout(() => setTime(time - 1000), 1000);

		return () => clearTimeout(timer);
	}, [time]);

	const cancelTimer = (): void => {
		setTicking(false);
		clearTimeout(timer);
	};

	const getTimeInSeconds = (seconds: number): number => Math.floor(seconds / 1000);

	return (
		<>
			<Head title={statusCode} />

			<Header />

			<Main className="error page-centered min-h-screen py-24">
				<h1>
					{statusCode} {capitalizeFirst(i18n.t("whoops"))}
				</h1>

				<div className="gif"></div>

				<Link href="/" className={ticking ? "" : "link-height"}>
					{capitalizeFirst(i18n.t("back-to-safety"))}
				</Link>

				{ticking && (
					<p className="text">
						<span className="timer">
							{capitalizeFirst(i18n.t("redirecting-in"))} {getTimeInSeconds(time)}{" "}
							{getTimeInSeconds(time) > 1 ? i18n.t("seconds.other") : i18n.t("seconds.one")}
						</span>

						<span className="cancel" onClick={cancelTimer}>
							{capitalizeFirst(i18n.t("cancel"))}
						</span>
					</p>
				)}
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
