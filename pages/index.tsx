import React from "react";
import { useI18n } from "next-localization";

import { Footer, Head, Link, Main } from "@/components";
import projectConfig from "@/project.config";

const HomePage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const {
		name,
		email: { general },
	} = projectConfig;

	return (
		<>
			<Head title={`${name}: ${t("information.abstract")}`} useTitleTemplate={false} />

			<Main>
				<section
					id="hero"
					className="relative bg-transparent pt-20 font-sans"
					style={{ height: "calc(100vh - 6rem)" }}
				>
					<div className="container h-full px-4 py-24 mx-auto flex flex-col justify-center items-center">
						<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
							<h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-gray-100 md:text-6xl md:tracking-tight">
								{t("sentences.home-hero-title-1")}{" "}
								<span className="block font-serif w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 lg:inline">
									{t("sentences.home-hero-title-highlight")}
								</span>{" "}
								{t("sentences.home-hero-title-2")}
							</h1>
							<p className="px-0 mb-6 text-lg text-gray-600 dark:text-gray-400 md:text-xl lg:px-24">
								{t("sentences.home-hero-subtitle")}
							</p>
							<div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
								<Link
									type="button"
									href={t("navigation.contact.url")}
									margin
									elevation="hovering"
									className="inline-flex items-center justify-center w-full mb-2 sm:w-auto sm:mb-0"
								>
									{t("phrases.contact-us")}
								</Link>

								{/* <Link
									type="button"
									href={t("navigation.about.url")}
									margin
									color="blue"
									className="inline-flex items-center justify-center w-full mb-2 sm:w-auto sm:mb-0"
								>
									{t("phrases.get-to-know-us")}
								</Link> */}
							</div>
						</div>
					</div>
				</section>
				<section
					id={t("navigation.contact.id")}
					className="relative bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-gray-100 font-sans pt-20"
				>
					<div className="container px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap">
						<div className="lg:w-2/3 md:w-1/2 h-600px sm:max-h-full bg-orange-100 dark:bg-orange-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
							<iframe
								width="100%"
								height="100%"
								className="absolute inset-0"
								frameBorder={0}
								title="map"
								marginHeight={0}
								marginWidth={0}
								scrolling="0"
								src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Maexal,Best,Netherlands&amp;ie=UTF8&amp;t=&amp;z=7&amp;iwloc=B&amp;output=embed"
								style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
							></iframe>
							<div className="bg-gray-100 dark:bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
								<div className="lg:w-1/2 px-6">
									<h2 className="font-serif font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">
										{t("words.address").toLocaleUpperCase()}
									</h2>
									<p className="mt-1 text-gray-800 dark:text-gray-200">{t("information.address")}</p>
								</div>
								<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
									<h2 className="font-serif font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">
										{t("words.email").toLocaleUpperCase()}
									</h2>
									<a
										href={`mailto:${general}`}
										className="text-gray-800 dark:text-gray-200 leading-relaxed"
									>
										{general}
									</a>
									<h2 className="font-serif font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs mt-4">
										{t("words.phone").toLocaleUpperCase()}
									</h2>
									<p className="text-gray-800 dark:text-gray-200 leading-relaxed">
										<a href="tel:+310639105742">+31 (0)6 39 10 57 42</a>
									</p>
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 bg-blue-200 dark:bg-blue-800 rounded-lg flex flex-col md:ml-auto w-full p-4 md:p-8 mt-8 sm:mt-0">
							<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
							<p className="leading-relaxed mb-5 text-gray-600">
								Post-ironic portland shabby chic echo park, banjo fashion axe
							</p>
							<div className="relative mb-4">
								<label htmlFor="name" className="leading-7 text-sm text-gray-600">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label htmlFor="email" className="leading-7 text-sm text-gray-600">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label htmlFor="message" className="leading-7 text-sm text-gray-600">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
							<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Button
							</button>
							<p className="text-xs text-gray-500 mt-3">
								Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
							</p>
						</div>
					</div>
				</section>
			</Main>

			<Footer />
		</>
	);
};

export default HomePage;
