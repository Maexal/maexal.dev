import React from 'react';

import NextDocument, { Html, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { HeadDocument } from '@/components';

class Document extends NextDocument {
	static getInitialProps = async (context: DocumentContext): Promise<DocumentInitialProps> => {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = context.renderPage;
		const initialProps = await NextDocument.getInitialProps(context);

		try {
			if (process.env.NODE_ENV !== 'production') return initialProps;

			context.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	};

	render(): JSX.Element {
		return (
			<Html>
				<HeadDocument />

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
