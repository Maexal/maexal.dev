import React from "react";

const Logo = ({ interactive = false, size = 100 }: { interactive: boolean; size: 50 | 60 | 80 | 100 | 150 | 200 }) => {
	const classInteractive = interactive ? `logo-interactive` : `logo-color`;
	const classSize = `size-${size}`;

	return <div className={`logo ${classInteractive} ${classSize}`}>M&#230;xal</div>;
};

export default Logo;
