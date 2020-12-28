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
		className={`logo ${interactive ? `logo-interactive` : `logo-color`} size-${size}${
			className ? ` ${className}` : ""
		}`}
	>
		M&aelig;xal
	</div>
);

export default Logo;
