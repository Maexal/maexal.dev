import React from "react";
import { useRouter } from "next/router";
import { useI18n } from "next-localization";

import { Head, Header, Main, Link } from "../components";
import { capitalizeFirst } from "../utils";

const NotFoundPage = (): JSX.Element => {
	const i18n = useI18n();
	const router = useRouter();
	const [time, setTime] = React.useState(5000);
	const [ticking, setTicking] = React.useState<boolean>(true);
	let timer;

	React.useEffect(() => {
		if (time <= 0) router.push("/");

		timer = setTimeout(() => setTime(time - 1000), 1000);

		return () => clearTimeout(timer);
	}, [time]);

	const cancelTimer = () => {
		setTicking(false);
		clearTimeout(timer);
	};

	const getTimeInSeconds = (seconds: number) => Math.floor(seconds / 1000);

	return (
		<>
			<Head title={`404 ${i18n.t("404-page.not-found")}`} />

			<Header />

			<Main className="not-found page-centered min-h-screen py-24">
				<h1>404 {capitalizeFirst(i18n.t("not-found"))}</h1>

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

export default NotFoundPage;
