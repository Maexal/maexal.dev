import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html dir="ltr" lang="en">
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
					<meta name="keywords" content="maexal,mæxal,max,altena,max altena" />
					<meta name="description" content="Website of Maexal" />
					<meta name="subject" content="Maexal" />
					<meta name="copyright" content="Maexal" />
					<meta name="language" content="en" />
					<meta name="revised" content="Monday, June 1, 2020, 12:00 pm" />
					<meta name="abstract" content="Website of Maexal" />
					<meta name="topic" content="Maexal" />
					<meta name="summary" content="Website of Maexal" />
					<meta name="Classification" content="Website" />
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
					<meta name="og:title" content="Maexal" />
					<meta name="og:type" content="website" />
					<meta name="og:url" content="https://maexal.dev/" />
					<meta name="og:site_name" content="Maexal" />
					<meta name="og:description" content="Website of Maexal" />
					<meta name="og:email" content="max@maexal.dev" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-touch-fullscreen" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black" />
					<meta name="mssmarttagspreventparsing" content="true" />
					<meta httpEquiv="X-UA-Compatible" content="chrome=1" />
					<meta name="msapplication-starturl" content="https://maexal.dev/" />
					<meta name="msapplication-navbutton-color" content="black" />
					<meta name="application-name" content="Maexal" />
					<meta name="msapplication-tooltip" content="Launch Maexal" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Merriweather&family=Source+Sans+Pro&family=Fira+Code&display=swap"
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
