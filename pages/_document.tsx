import React from "react";
import dynamic from "next/dynamic";
import NextDocument, { Html, Main, NextScript, DocumentContext } from "next/document";

const HeadDocument = dynamic(() => import("../components/Head").then(mod => mod.HeadDocument) as any);

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
