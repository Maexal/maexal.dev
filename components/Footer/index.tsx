import React from 'react';

import { useI18n } from 'next-localization';

import { FooterInfo } from './Info';
import { FooterNotice } from './Notice';
import * as Styled from './styles';
import type { Props } from './types';

export const Footer = ({ type = 'regular', ...props }: Props): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	switch (type) {
		case 'notice-only':
			return (
				<Styled.Footer {...props}>
					<FooterNotice />
				</Styled.Footer>
			);

		case 'regular':
		default:
			return (
				<Styled.Footer {...props}>
					<Styled.Container>
						<FooterInfo />
						<Styled.Column
							css={`
								--grid-column-start: 4;
							`}
						></Styled.Column>
						<Styled.Column
							css={`
								--grid-column-start: 5;
							`}
						>
							<Styled.Paragraph>{t('footer.social.heading')}</Styled.Paragraph>
							<Styled.Link href="https://github.com/maexal/" target="_blank">
								GitHub
							</Styled.Link>
							<Styled.Link href="https://linkedin.com/company/maexal/" target="_blank">
								LinkedIn
							</Styled.Link>
							<Styled.Link href="https://facebook.com/maexal.dev/" target="_blank">
								Facebook
							</Styled.Link>
							<Styled.Link href="https://instagram.com/maexal.dev/" target="_blank">
								Instagram
							</Styled.Link>
							<Styled.Link href="https://twitter.com/maexal_dev/" target="_blank">
								Twitter
							</Styled.Link>
						</Styled.Column>
					</Styled.Container>
					<FooterNotice />
				</Styled.Footer>
			);
	}
};

export default Footer;
