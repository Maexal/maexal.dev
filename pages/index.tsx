import React from "react";
import { useI18n } from "next-localization";

import { Button, Head, Header, Logo, Main } from "../components";
import projectConfig from "../project.config";

const Homepage = (): JSX.Element => {
	const i18n = useI18n();
	const { name, abstract } = projectConfig;

	// <div className="banner bg-blue-600 dark:bg-blue-800 z-30">
	// 				<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
	// 					<div className="flex items-center justify-between flex-wrap">
	// 						<div className="w-0 flex-1 flex items-center">
	// 							<span className="flex p-2 rounded-lg bg-blue-700 dark:bg-blue-900">
	// 								<svg
	// 									className="h-6 w-6 text-white"
	// 									xmlns="http://www.w3.org/2000/svg"
	// 									fill="none"
	// 									viewBox="0 0 24 24"
	// 									stroke="currentColor"
	// 									aria-hidden="true"
	// 								>
	// 									<path
	// 										strokeLinecap="round"
	// 										strokeLinejoin="round"
	// 										strokeWidth="2"
	// 										d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
	// 									/>
	// 								</svg>
	// 							</span>
	// 							<p className="ml-3 font-medium text-white truncate">
	// 								<span className="md:hidden">{i18n.t("banner-short")}</span>
	// 								<span className="hidden md:inline">{i18n.t("banner-long")}</span>
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 			<footer className="z-20">
	// 				<div className="font-mono text-black dark:text-white">
	// 					<strong className="font-mono">{i18n.t("coc")}:</strong>78183251
	// 				</div>
	// 				<div className="font-mono text-black dark:text-white">
	// 					<strong className="font-mono">{i18n.t("vat")}:</strong>NL003297690B50
	// 				</div>
	// 				<div className="font-mono text-black dark:text-white">
	// 					<strong className="font-mono">IBAN:</strong>NL14 BUNQ 2044 3278 72
	// 				</div>
	// 				<div className="font-mono text-black dark:text-white">
	// 					<strong className="font-mono">BIC:</strong>BUNQNL2AXXX
	// 				</div>
	// 			</footer>

	const {
		email: { general },
	} = projectConfig;

	return (
		<>
			<Head title={`${name}: ${abstract}`} useTitleTemplate={false} />

			<Header />

			<Main className="home py-24">
				<h1>
					<Logo interactive size={80} />
				</h1>
				<p>{i18n.t("contact-us-through")}:</p>

				<Button href={`mailto:${general}`} elevation="flying">
					{general}
				</Button>
			</Main>
		</>
	);
};

export default Homepage;
