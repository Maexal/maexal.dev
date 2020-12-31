import React from "react";
import { useI18n } from "next-localization";

import { Logo, Link } from ".";
import { capitalizeFirst } from "../utils";

export const Header = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const [scrolled, setScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		const _handleScroll = () => {
			if (window.scrollY > 10) setScrolled(true);
			else setScrolled(false);
		};

		window.addEventListener("scroll", _handleScroll);
		return () => window.removeEventListener("scroll", _handleScroll);
	}, []);

	return (
		<header
			className={`fixed z-10 top-0 inset-x-0 w-full duration-150 ease-in-out ${
				scrolled ? `h-16 shadow-md bg-blue-100 dark:bg-blue-900` : `h-24 shadow-none bg-transparent`
			}`}
			style={{
				willChange: "height, box-shadow, background-color",
				transitionProperty: "height, box-shadow, background-color",
			}}
		>
			<div className="container h-full mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
				<Link
					href={t("navigation.home.url")}
					style={{ display: "inherit" }}
					className="inline-flex relative justify-center items-center select-none no-underline h-full"
				>
					<Logo interactive size={40} />
				</Link>

				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-mono">
					<Link href={t("navigation.projects.url")} navLink>
						{capitalizeFirst(t("navigation.projects.name"))}
					</Link>
					<Link href={t("navigation.services.url")} navLink>
						{capitalizeFirst(t("navigation.services.name"))}
					</Link>
					<Link href={t("navigation.about.url")} navLink>
						{capitalizeFirst(t("navigation.about.name"))}
					</Link>

					<span className="w-2" />

					<Link type="button" href={t("navigation.contact.url")} elevation="hovering">
						<span className="header-cta font-mono">{t("navigation.contact.name")}</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
