import React from 'react';

import * as Styled from './styles';

export const PageHomeHero = (): JSX.Element => {
	return (
		<Styled.Wrapper>
			<Styled.Container>
				<h1>Hallo</h1>
			</Styled.Container>
		</Styled.Wrapper>
	);
};

export default PageHomeHero;

/**


	<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
					<h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-gray-100 md:text-6xl md:tracking-tight">
						{t('sentences.home-hero-title-1')}{' '}
						<span className="block font-serif w-full text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 lg:inline">
							{t('sentences.home-hero-title-highlight')}
						</span>{' '}
						{t('sentences.home-hero-title-2')}
					</h1>
					<p className="px-0 mb-6 text-lg text-gray-600 dark:text-gray-400 md:text-xl lg:px-24">
						{t('sentences.home-hero-subtitle')}
					</p>
					<div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
						<span
							css={`
								margin: 0.5rem;
								display: inline-flex;
								justify-content: center;
								align-items: center;
								width: auto;
								@media ${device.mobileM} {
									margin-bottom: 0;
								}
							`}
						>
							<Link type="button-link" href={t('navigation.contact.url')} elevation="hovering">
								{t('phrases.contact-us')}
							</Link>
						</span>

						 <Spacer axis="horizontal" size={1} unit="rem" />

					 <span
									css={`
										margin: 0.5rem;
										display: inline-flex;
										justify-content: center;
										align-items: center;
										width: auto;
										@media ${device.mobileM} {
											margin-bottom: 0;
										}
									`}
								>
									<Link type="button-link" href={t("navigation.about.url")}>
										{t("phrases.get-to-know-us")}
									</Link>
								</span>
					</div>
				</div>
*/
