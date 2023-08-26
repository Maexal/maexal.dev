import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Mæxal",
		template: "%s | Mæxal",
	},
	abstract: "Mæxal",
	creator: "Mæxal",
	authors: [
		{
			name: "Mæxal",
			url: "https://github.com/Maexal",
		},
		{
			name: "Max Altena",
			url: "https://github.com/MaxAltena",
		},
	],
	keywords: ["Mæxal", "Maexal", "Max Altena", "Max", "Altena"],
};

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
