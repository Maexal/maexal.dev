import React, { MouseEvent } from "react";

import { Link } from ".";
import { LinkProps } from "./Link";

export interface ButtonProps extends LinkProps {
	children: React.ReactNode;
	onClick?: (event: MouseEvent) => void;
	elevation?: "flat" | "hovering" | "flying";
}

export const Button = ({
	children,
	onClick = event => {
		event.preventDefault();
	},
	elevation = "flat",
	href,
	...props
}: ButtonProps): JSX.Element => {
	if (href)
		return (
			<Link href={href} styled={false} {...props}>
				<button className="button" data-elevation={elevation} onClick={onClick}>
					<span className="content">{children}</span>
				</button>
			</Link>
		);

	return (
		<button className="button" data-elevation={elevation} onClick={onClick}>
			<span className="content">{children}</span>
		</button>
	);
};

export default Button;
