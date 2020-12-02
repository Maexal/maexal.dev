import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<link rel="author" href="humans.txt" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="assets/icons/apple-touch-icon.png?v=2Ia6uyFL0E"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="assets/icons/favicon-32x32.png?v=2Ia6uyFL0E"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="194x194"
						href="assets/icons/favicon-194x194.png?v=2Ia6uyFL0E"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="assets/icons/android-chrome-192x192.png?v=2Ia6uyFL0E"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="assets/icons/favicon-16x16.png?v=2Ia6uyFL0E"
					/>
					<link rel="manifest" href="assets/icons/site.webmanifest?v=2Ia6uyFL0E" />
					<link rel="mask-icon" href="assets/icons/safari-pinned-tab.svg?v=2Ia6uyFL0E" color="#03aaf9" />
					<link rel="shortcut icon" href="assets/icons/favicon.ico?v=2Ia6uyFL0E" />
					<meta name="apple-mobile-web-app-title" content="M&#230;xal" />
					<meta name="application-name" content="M&#230;xal" />
					<meta name="msapplication-TileColor" content="#03aaf9" />
					<meta name="msapplication-TileImage" content="assets/icons/mstile-144x144.png?v=2Ia6uyFL0E" />
					<meta name="msapplication-config" content="assets/icons/browserconfig.xml?v=2Ia6uyFL0E" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="keywords" content="maexal,m&#230;xal,max,altena,max altena" />
					<meta
						name="description"
						content="The website of a development company run by a robot with passion called M&#230;xal"
					/>
					<meta name="subject" content="M&#230;xal" />
					<meta name="copyright" content="M&#230;xal" />
					<meta
						name="abstract"
						content="The website of a development company run by a robot with passion called M&#230;xal"
					/>
					<meta name="topic" content="M&#230;xal" />
					<meta
						name="summary"
						content="The website of a development company run by a robot with passion called M&#230;xal"
					/>
					<meta name="classification" content="Website" />
					<meta name="author" content="Max Altena, max@maexal.dev" />
					<meta name="designer" content="Max Altena" />
					<meta name="copyright" content="Max Altena" />
					<meta name="reply-to" content="max@maexal.dev" />
					<meta name="owner" content="Max Altena" />
					<meta name="url" content="https://maexal.dev/" />
					<meta name="identifier-URL" content="https://maexal.dev/" />
					<meta name="rating" content="General" />
					<meta name="revisit-after" content="7 days" />
					<meta httpEquiv="Expires" content="0" />
					<meta httpEquiv="Pragma" content="no-cache" />
					<meta httpEquiv="Cache-Control" content="no-cache" />
					<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
					<meta name="og:title" content="M&#230;xal" />
					<meta name="og:type" content="website" />
					<meta name="og:url" content="https://maexal.dev/" />
					<meta name="og:site_name" content="M&#230;xal" />
					<meta
						name="og:description"
						content="The website of a development company run by a robot with passion called M&#230;xal"
					/>
					<meta name="og:email" content="max@maexal.dev" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-touch-fullscreen" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="white" />
					<meta name="mssmarttagspreventparsing" content="true" />
					<meta httpEquiv="X-UA-Compatible" content="chrome=1" />
					<meta name="msapplication-starturl" content="https://maexal.dev/" />
					<meta name="msapplication-navbutton-color" content="white" />
					<meta name="application-name" content="M&#230;xal" />
					<meta name="msapplication-tooltip" content="Launch M&#230;xal" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Source+Sans+Pro&family=Fira+Code&display=swap"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
