import React from 'react';

import { useI18n } from 'next-localization';

import { Page, Footer, Head, Main, PageHomeHero, PageHomeContact } from '@/components';
import { projectConfig } from '@/project.config';

const HomePage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const { name } = projectConfig;

	return (
		<Page>
			<Head title={`${name}: ${t('information.abstract')}`} useTitleTemplate={false} />

			<Main>
				<PageHomeHero />
				<PageHomeContact />
			</Main>

			<Footer />
		</Page>
	);
};

export default HomePage;
