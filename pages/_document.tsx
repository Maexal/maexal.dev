import React from "react";
import NextDocument, { Html, Main, NextScript, DocumentContext } from "next/document";

import { HeadDocument } from "@/components/Head";

class Document extends NextDocument {
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

Document.getInitialProps = async (context: DocumentContext) => {
	const originalRenderPage = context.renderPage;

	context.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => App,
			enhanceComponent: Component => Component,
		});

	const initialProps = await NextDocument.getInitialProps(context);

	return initialProps;
};

export default Document;
