import React from "react";
import { useI18n } from "next-localization";

import { Footer, Head, Link, Main } from "@/components";
import projectConfig from "@/project.config";

const HomePage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const {
		name,
		abstract,
		email: { general },
	} = projectConfig;

	return (
		<>
			<Head title={`${name}: ${abstract}`} useTitleTemplate={false} />

			<Main>
				<section id="hero" className="relative bg-transparent" style={{ height: "calc(100vh - 6rem)" }}>
					<div className="container h-full px-4 py-24 mx-auto flex flex-col justify-center items-center">
						<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
							<h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-gray-100 md:text-6xl md:tracking-tight">
								All the{" "}
								<span className="block font-serif w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 lg:inline">
									expected results
								</span>{" "}
								of your future online product met.
							</h1>
							<p className="px-0 mb-6 text-lg text-gray-600 dark:text-gray-400 md:text-xl lg:px-24">
								This is what we guarantee you here at Maexal.
							</p>
							<div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
								<Link
									type="button"
									href={`mailto:${general}`}
									margin
									elevation="hovering"
									className="inline-flex items-center justify-center w-full mb-2 sm:w-auto sm:mb-0"
								>
									{t("phrases.contact-us")}
								</Link>

								<Link
									type="button"
									href={t("navigation.about.url")}
									margin
									color="blue"
									className="inline-flex items-center justify-center w-full mb-2 sm:w-auto sm:mb-0"
								>
									{t("phrases.get-to-know-us")}
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Main>

			<Footer />
		</>
	);
};

export default HomePage;
