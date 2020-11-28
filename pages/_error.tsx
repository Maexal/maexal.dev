import Head from "next/head";
import Link from "next/link";

const Error = ({ statusCode }) => {
	return (
		<>
			<Head>
				<title>Error- M&#230;xal</title>
			</Head>

			<main className="container">
				<p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
				<Link href="/">Back to safety</Link>
			</main>
		</>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
