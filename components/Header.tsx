import React from "react";
import { useI18n } from "next-localization";

import { Logo, Link, Button } from ".";
import { capitalizeFirst } from "../utils";

export const Header = (): JSX.Element => {
	const i18n = useI18n();
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
				<span className="logo ">
					<Link href="/#" styled={false}>
						<Logo interactive size={40} />
					</Link>
				</span>

				<nav>
					<Link href={`/#${i18n.t("projects.url")}`} navLink={true}>
						{capitalizeFirst(i18n.t("projects.name"))}
					</Link>
					<Link href={`/#${i18n.t("services.url")}`} navLink={true}>
						{capitalizeFirst(i18n.t("services.name"))}
					</Link>
					<Link href={`/#${i18n.t("about.url")}`} navLink={true}>
						{capitalizeFirst(i18n.t("about.name"))}
					</Link>
					<Button href={`/#${i18n.t("contact.url")}`} elevation="hovering">
						<span className="cta">{i18n.t("contact.name")}</span>
					</Button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
