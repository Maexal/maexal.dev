import React from "react";

export const Main = ({
	children,
	className,
	centered = false,
	fullPage = false,
}: {
	children: React.ReactNode;
	className?: string;
	centered?: boolean;
	fullPage?: boolean;
}): JSX.Element => (
	<main className={className} data-full-page={fullPage} data-centered={centered}>
		{children}
	</main>
);

export default Main;
