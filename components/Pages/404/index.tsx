import React from 'react';

import { useI18n } from 'next-localization';

import { Link } from '@/components';
import { capitalizeFirst } from '@/utils';

import * as Styled from './styles';

export const Page404Content = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<Styled.Wrapper>
			<div>
				<Styled.Label>Error 404: {capitalizeFirst(t('phrases.page-not-found'))}</Styled.Label>
				<Styled.Heading>{t('sentences.404-title')}</Styled.Heading>
				<Styled.Paragraph>{t('sentences.404-text')}</Styled.Paragraph>

				<span
					css={`
						margin-top: 1rem;
						margin-right: 2rem;
						margin-left: 0.25rem;
					`}
				>
					<Link type="button-link" href={t('navigation.home.url')} elevation="hovering">
						{capitalizeFirst(t('phrases.back-to-safety'))}
					</Link>
				</span>
				<Link type="button-link" href={t('navigation.contact.url')} color="blue">
					{capitalizeFirst(t('phrases.contact-us'))}
				</Link>
			</div>
			<Styled.Image />
		</Styled.Wrapper>
	);
};

export default Page404Content;
