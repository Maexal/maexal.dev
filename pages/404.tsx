import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
	return (
		<>
			<Head>
				<title>Not found - M&#230;xal</title>
			</Head>

			<main className="container">
				<h1>404 - Not found</h1>
				<Link href="/">Back to safety</Link>
			</main>
		</>
	);
};

export default NotFound;
