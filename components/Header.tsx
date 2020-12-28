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
			if (window.scrollY > 0) setScrolled(true);
			else setScrolled(false);
		};

		window.addEventListener("scroll", _handleScroll);
		return () => window.removeEventListener("scroll", _handleScroll);
	}, []);

	return (
		<header data-scrolled={scrolled}>
			<div className="header-wrapper">
				<Link href="/" className="logo-link">
					<Logo interactive size={40} />
				</Link>

				<nav>
					<Link href={t("navigation.projects.url")} navLink>
						{capitalizeFirst(t("navigation.projects.name"))}
					</Link>
					<Link href={t("navigation.services.url")} navLink>
						{capitalizeFirst(t("navigation.services.name"))}
					</Link>
					<Link href={t("navigation.about.url")} navLink>
						{capitalizeFirst(t("navigation.about.name"))}
					</Link>

					<span className="space" />

					<Link type="button" href={t("navigation.contact.url")} elevation="hovering">
						<span className="cta">{t("navigation.contact.name")}</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
