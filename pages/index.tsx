import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import projectConfig from "@/project.config";
import { toastError, toastSuccess } from "@/utils";
import { device } from "@/styles";
import { Page } from "@/components";

import "react-toastify/dist/ReactToastify.min.css";

const Footer = dynamic(() => import("@/components/Footer"));
const Head = dynamic(() => import("@/components/Head"));
const Link = dynamic(() => import("@/components/Link"));
const Main = dynamic(() => import("@/components/Main"));

const HomePage = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [timesSent, setTimesSent] = useState<number>(0);
	const i18n = useI18n();
	const { t } = i18n;
	const {
		name,
		email: { general },
	} = projectConfig;
	const form = useRef();

	const _sendForm = async (formData: FormData): Promise<void> => {
		setLoading(true);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			// @ts-ignore
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => {
				toastSuccess(
					t("toast.contact.success"),
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="inline-block text-white w-8 h-8 mr-2 -mt-1 transform-gpu rotate-45"
					>
						<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
					</svg>
				);
				setLoading(false);
				setTimesSent(value => value + 1);
			})
			.catch(error => {
				console.error(error);
				toastError(t("toast.contact.error"));
				setLoading(false);
			});
	};

	const _handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const Swal = (await import("sweetalert2")).default;

		const formData = new FormData(form.current);

		if (timesSent >= 3)
			Swal.fire({
				confirmButtonText: t("alert.contact-again-too-much.confirm"),
				title: t("alert.contact-again-too-much.title"), // font-serif text-gray-900 dark:text-gray-100 text-xl
				html: t("alert.contact-again-too-much.html"), // font-sans text-gray-800 dark:text-gray-200 text-base
			});
		else if (timesSent >= 1)
			Swal.fire({
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: t("alert.contact-again.confirm"),
				cancelButtonText: t("alert.contact-again.cancel"),
				title: t("alert.contact-again.title"), // font-serif text-gray-900 dark:text-gray-100 text-xl
				html: t("alert.contact-again.html", { amount: timesSent }), // font-sans text-gray-800 dark:text-gray-200 text-base
			}).then(async result => {
				if (result.value) _sendForm(formData);
			});
		else _sendForm(formData);
	};

	return (
		<Page>
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
								<span className="block font-serif w-full text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 lg:inline">
									{t("sentences.home-hero-title-highlight")}
								</span>{" "}
								{t("sentences.home-hero-title-2")}
							</h1>
							<p className="px-0 mb-6 text-lg text-gray-600 dark:text-gray-400 md:text-xl lg:px-24">
								{t("sentences.home-hero-subtitle")}
							</p>
							<div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
								<span
									css={`
										margin: 0.5rem;
										display: inline-flex;
										justify-content: center;
										align-items: center;
										width: auto;
										@media ${device.mobileM} {
											margin-bottom: 0;
										}
									`}
								>
									<Link type="button-link" href={t("navigation.contact.url")} elevation="hovering">
										{t("phrases.contact-us")}
									</Link>
								</span>

								{/* <Spacer axis="horizontal" size={1} unit="rem" /> */}

								{/* <span
									css={`
										margin: 0.5rem;
										display: inline-flex;
										justify-content: center;
										align-items: center;
										width: auto;
										@media ${device.mobileM} {
											margin-bottom: 0;
										}
									`}
								>
									<Link type="button-link" href={t("navigation.about.url")}>
										{t("phrases.get-to-know-us")}
									</Link>
								</span> */}
							</div>
						</div>
					</div>
				</section>
				<section
					id={t("navigation.contact.id")}
					className="relative bg-primary-100 dark:bg-primary-900 text-gray-900 dark:text-gray-100 font-sans py-8"
				>
					<div className="container px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap">
						<div className="lg:w-2/3 md:w-1/2 w-full h-600px sm:max-h-full bg-secondary-200 dark:bg-secondary-900 rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end justify-start relative">
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
								<div className="lg:w-1/2 px-6 lg:mt-0">
									<h2 className="font-serif mb-1 font-semibold uppercase text-gray-900 dark:text-gray-100 tracking-widest text-xs">
										{t("words.email").toLocaleUpperCase()}
									</h2>
									<a
										href={`mailto:${general}`}
										className="font-mono text-gray-800 dark:text-gray-200 leading-relaxed underline"
									>
										{general}
									</a>
									<h2 className="font-serif mb-1 mt-4 font-semibold uppercase text-gray-900 dark:text-gray-100 tracking-widest text-xs">
										{t("words.phone").toLocaleUpperCase()}
									</h2>
									<p className="font-mono text-gray-800 dark:text-gray-200 leading-relaxed whitespace-nowrap underline">
										<a href="tel:+310639105742">+31 (0)6 39 10 57 42</a>
									</p>
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 border-primary-500 border-1 rounded-lg flex flex-col md:ml-auto w-full p-6 md:p-8 mt-8 sm:mt-0">
							<h2 className="text-primary-900 dark:text-primary-100 font-serif text-3xl mb-4 font-medium text-center">
								{t("contact.heading")}
							</h2>
							<p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400 min-h-28">
								{t("contact.sub")}
							</p>
							<form
								id="contact-form"
								className="flex-grow flex flex-col items-center"
								onSubmit={_handleSubmit}
								name="contact"
								data-netlify="true"
								ref={form.current}
							>
								<div className="relative mb-4 w-full">
									<label
										htmlFor="name"
										className="leading-7 text-sm text-gray-600 dark:text-gray-400"
									>
										{t("contact.name")}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										autoComplete="name"
										placeholder={t("contact.name-placeholder")}
										className={`w-full rounded border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-400 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out ${
											loading ? `bg-gray-300 dark:bg-gray-700` : `bg-gray-50 dark:bg-gray-900`
										}`}
										required
										disabled={loading}
									/>
								</div>
								<div className="relative mb-4 w-full">
									<label
										htmlFor="email"
										className="leading-7 text-sm text-gray-600 dark:text-gray-400"
									>
										{t("contact.email")}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										autoComplete="email"
										placeholder={t("contact.email-placeholder")}
										className={`w-full rounded border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-400 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out ${
											loading ? `bg-gray-300 dark:bg-gray-700` : `bg-gray-50 dark:bg-gray-900`
										}`}
										required
										disabled={loading}
									/>
								</div>
								<div className="relative mb-4 w-full">
									<label
										htmlFor="message"
										className="leading-7 text-sm text-gray-600 dark:text-gray-400"
									>
										{t("contact.message")}
									</label>
									<textarea
										id="message"
										name="message"
										placeholder={t("contact.message-placeholder")}
										className={`w-full rounded border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-400 h-18 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-150 ease-in-out ${
											loading ? `bg-gray-300 dark:bg-gray-700` : `bg-gray-50 dark:bg-gray-900`
										}`}
										required
										disabled={loading}
									></textarea>
								</div>
								<Link
									type="button-function"
									css={`
										width: 100%;
										@media ${device.laptop} {
											margin-left: auto;
											margin-right: auto;
											width: auto;
										}
									`}
									disabled={loading}
								>
									{t("contact.cta")}
								</Link>
							</form>
							<small className="text-xs text-gray-500 mt-3 h-4">{t("contact.last")}</small>
						</div>
					</div>
				</section>
			</Main>

			<Footer />
		</Page>
	);
};

export default HomePage;
