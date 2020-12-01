import Head from "next/head";
import { Logo } from "../components";

export const Home = () => {
	return (
		<div className="home bg-gray-100 dark:bg-gray-800">
			<Head>
				<title>M&#230;xal</title>
			</Head>

			<div className="bg-blue-600 dark:bg-blue-800 z-30">
				<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between flex-wrap">
						<div className="w-0 flex-1 flex items-center">
							<span className="flex p-2 rounded-lg bg-blue-700 dark:bg-blue-900">
								<svg
									className="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
									/>
								</svg>
							</span>
							<p className="ml-3 font-medium text-white truncate">
								<span className="md:hidden"> We are working on a brand new website! </span>
								<span className="hidden md:inline">
									Big news! We're excited to announce that we are working on a brand new website!
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<main className="z-10">
				<h1 className="m-4">
					<Logo interactive />
				</h1>
				<p className="text-black dark:text-white">Contact us through:</p>
				<a href="mailto:hello@maexal.dev">
					<button className="elevated cool-one">
						<span className="font-mono">hello@maexal.dev</span>
					</button>
				</a>
			</main>

			<footer className="z-20">
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">KVK:</strong>78183251
				</div>
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">BTW:</strong>NL003297690B50
				</div>
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">IBAN:</strong>NL14 BUNQ 2044 3278 72
				</div>
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">BIC:</strong>BUNQNL2AXXX
				</div>
			</footer>
		</div>
	);
};

export default Home;
