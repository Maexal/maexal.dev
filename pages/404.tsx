import React from 'react';

import { useI18n } from 'next-localization';

import { Head, Main, Page, Page404Content } from '@/components';
import { capitalizeFirst } from '@/utils';

const NotFoundPage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<Page>
			<Head title={`Error 404: ${capitalizeFirst(t('phrases.page-not-found'))}`} />

			<Main fullPage spaced>
				<Page404Content />
			</Main>
		</Page>
	);
};

export default NotFoundPage;
