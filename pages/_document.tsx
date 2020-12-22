import React from "react";
import Document, { Html, Main, NextScript, DocumentContext } from "next/document";

import { HeadDocument } from "../components/Head";

class MyDocument extends Document {
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

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => App,
			enhanceComponent: Component => Component,
		});

	const initialProps = await Document.getInitialProps(ctx);

	return initialProps;
};

export default MyDocument;
