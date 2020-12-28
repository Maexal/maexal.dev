import React, { MouseEvent } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
	children?: React.ReactNode;
	styled?: boolean;
	navLink?: boolean;
	className?: string;
	type?: "normal" | "button";
	onClick?: (event: MouseEvent) => void;
	elevation?: "flat" | "hovering" | "flying";
	color?: "orange" | "blue";
	margin?: boolean;
}

export const Link = ({
	styled = true,
	navLink = false,
	children,
	className,
	type = "normal",
	onClick,
	elevation = "flat",
	color = "orange",
	margin = false,
	...props
}: LinkProps): JSX.Element => {
	switch (type) {
		case "button":
			return (
				<NextLink {...props}>
					<a>
						<button
							className={`link button${styled ? ` styled-link` : ``}${className ? ` ${className}` : ``}`}
							data-elevation={elevation}
							data-color={color}
							data-margin={margin}
							onClick={onClick}
						>
							<span className="content">{children}</span>
						</button>
					</a>
				</NextLink>
			);
		case "normal":
		default:
			if (navLink)
				return (
					<NextLink {...props}>
						<a>
							<button
								className={`link nav-link${styled ? ` styled-link` : ``}${
									className ? ` ${className}` : ``
								}`}
							>
								{children}
							</button>
						</a>
					</NextLink>
				);
			else
				return (
					<NextLink {...props}>
						<a>
							<button
								className={`link${styled ? ` styled-link` : ``}${className ? ` ${className}` : ``}`}
							>
								{children}
							</button>
						</a>
					</NextLink>
				);
	}
};

export default Link;
