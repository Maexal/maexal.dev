import React from "react";

export const Logo = ({
	interactive = false,
	size = 100,
	className,
}: {
	interactive: boolean;
	size: 30 | 40 | 50 | 60 | 80 | 100 | 150 | 200;
	className?: string;
}): JSX.Element => (
	<div
		className={`logo relative select-none rounded outline-none z-10 ${
			interactive
				? `logo-interactive text-transparent`
				: `logo-color text-primary text-center font-bold font-serif`
		} size-${size}${className ? ` ${className}` : ""}`}
	>
		<span className={interactive ? `sr-only` : ``}>M&aelig;xal</span>
	</div>
);

export default Logo;
