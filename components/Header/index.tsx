import React from 'react';
import dynamic from 'next/dynamic';
import { useI18n } from 'next-localization';
import * as Styled from './styles';

const Link = dynamic(() => import('@/components/Link'));
const Logo = dynamic(() => import('@/components/Logo'));

export const Header = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const [scrolled, setScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		const _handleScroll = () => {
			if (window.scrollY > 10) setScrolled(true);
			else setScrolled(false);
		};

		window.addEventListener('scroll', _handleScroll);
		return () => window.removeEventListener('scroll', _handleScroll);
	}, []);

	return (
		<Styled.Header scrolled={scrolled}>
			<Styled.Container>
				<Styled.Logo href={t('navigation.home.url')}>
					<Logo />
				</Styled.Logo>

				<Styled.Navigation>
					{/* <Link href={t("navigation.projects.url")} type="navigation-link">
						{capitalizeFirst(t("navigation.projects.name"))}
					</Link> */}
					{/* <Link href={t("navigation.services.url")} type="navigation-link">
						{capitalizeFirst(t("navigation.services.name"))}
					</Link> */}
					{/* <Link href={t("navigation.about.url")} type="navigation-link">
						{capitalizeFirst(t("navigation.about.name"))}
					</Link> */}

					{/* <Spacer axis="horizontal" size={1} unit="rem" /> */}

					<Link type="navigation-button" href={t('navigation.contact.url')} elevation="hovering">
						{t('navigation.contact.name')}
					</Link>
				</Styled.Navigation>
			</Styled.Container>
		</Styled.Header>
	);
};

export default Header;
