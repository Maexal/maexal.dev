import React from 'react';
import dynamic from 'next/dynamic';
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirst, getLanguageFromString, getThemeFromString } from '@/utils';
import { State } from '@/types';
import { changeLanguage, changeTheme } from '@/redux';
import { projectConfig } from '@/project.config';
import * as Styled from './styles';

const Link = dynamic(() => import('@/components/Link'));
const Logo = dynamic(() => import('@/components/Logo'));

export const FooterInfo = (): JSX.Element => {
	const router = useRouter();
	const appState = useSelector((state: State) => state.app);
	const dispatch = useDispatch();
	const i18n = useI18n();
	const { t } = i18n;
	const { owner, ownerURL, languages } = projectConfig;

	const _changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void =>
		dispatch(changeLanguage(getLanguageFromString(event.target.value), router));

	const _changeTheme = (event: React.ChangeEvent<HTMLSelectElement>): void =>
		dispatch(changeTheme(getThemeFromString(event.target.value)));

	return (
		<Styled.Wrapper>
			<Styled.LogoLink href={t('navigation.home.url')}>
				<Logo />
			</Styled.LogoLink>
			<Styled.Paragraph>
				{t('footer.description-1')}
				<Link href={ownerURL} target="_blank">
					{owner}
				</Link>
				{t('footer.description-2')}
			</Styled.Paragraph>
			<Styled.OptionsContainer>
				<Styled.Label>
					<Styled.Span>{t('words.language')}</Styled.Span>
					<Styled.Select value={appState.language} onChange={_changeLanguage}>
						{languages.map(
							({ key, name }: { key: string; name: string }): JSX.Element => (
								<option key={key} value={key}>
									{name}
								</option>
							),
						)}
					</Styled.Select>
				</Styled.Label>
				<Styled.Label>
					<Styled.Span>{t('words.theme')}</Styled.Span>
					<Styled.Select value={appState.theme} onChange={_changeTheme}>
						<option value="system">{capitalizeFirst(t('words.system'))}</option>
						<option value="light">{capitalizeFirst(t('words.light'))}</option>
						<option value="dark">{capitalizeFirst(t('words.dark'))}</option>
					</Styled.Select>
				</Styled.Label>
			</Styled.OptionsContainer>
		</Styled.Wrapper>
	);
};

export default FooterInfo;
