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
	<main
		className={`w-full h-auto${fullPage ? ` min-h-screen py-24` : ``}${
			centered ? ` flex flex-grow flex-col justify-center items-center` : ``
		}${className ? ` ${className}` : ``}`}
	>
		{children}
	</main>
);

export default Main;
