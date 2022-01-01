import React from 'react';

import { useI18n } from 'next-localization';

import * as Styled from './styles';
import type { Props } from './types';
import { Link } from '@/components';
import { capitalizeFirst } from '@/utils';

export const PageErrorContent = ({ errorText }: Props): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<Styled.Wrapper>
			<div>
				<Styled.Label>{errorText}</Styled.Label>
				<Styled.Heading>{t('sentences.500-title')}</Styled.Heading>
				<Styled.Paragraph>{t('sentences.500-text')}</Styled.Paragraph>

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

export default PageErrorContent;
