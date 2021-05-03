import React from 'react';

import { NextPageContext } from 'next';
import { useI18n } from 'next-localization';

import { Head, Main, Page, PageErrorContent } from '@/components';

const ErrorPage = ({ statusCode = null }: { statusCode?: number | null }): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	const errorText = statusCode ? t('phrases.error-with-status', { statusCode }) : t('phrases.error-without-status');

	return (
		<Page>
			<Head title={errorText} />

			<Main fullPage spaced>
				<PageErrorContent errorText={errorText} />
			</Main>
		</Page>
	);
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
	let statusCode = null;
	if (res) ({ statusCode } = res);
	else if (err) ({ statusCode } = err);

	return {
		statusCode,
	};
};

export default ErrorPage;
