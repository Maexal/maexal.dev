import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import * as Styled from "./styles";

const Link = dynamic(() => import("@/components/Link"));
const Logo = dynamic(() => import("@/components/Logo"));

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
		<Styled.Header scrolled={scrolled}>
			<div className="container h-full mx-auto flex flex-wrap p-4 items-center">
				<Link
					href={t("navigation.home.url")}
					style={{ display: "inherit" }}
					className="inline-flex relative justify-center items-center select-none no-underline h-full"
				>
					<Logo />
				</Link>

				<nav className="ml-auto flex flex-wrap items-center text-base justify-center font-mono">
					{/* <Link href={t("navigation.projects.url")} navLink>
						{capitalizeFirst(t("navigation.projects.name"))}
					</Link>
					<Link href={t("navigation.services.url")} navLink>
						{capitalizeFirst(t("navigation.services.name"))}
					</Link>
					<Link href={t("navigation.about.url")} navLink>
						{capitalizeFirst(t("navigation.about.name"))}
					</Link>

					<span className="w-2" /> */}

					<Link type="button-link" href={t("navigation.contact.url")} elevation="hovering" className="mr-2">
						<span className="header-cta font-mono">{t("navigation.contact.name")}</span>
					</Link>
				</nav>
			</div>
		</Styled.Header>
	);
};

export default Header;
