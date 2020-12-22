import React from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
	children?: React.ReactNode;
	styled?: boolean;
	navLink?: boolean;
	className?: string;
}

export const Link = ({ styled = true, navLink = false, children, className, ...props }: LinkProps): JSX.Element => {
	if (navLink)
		return (
			<NextLink {...props}>
				<button className={`${className ? `${className} ` : ""}link nav-link`}>{children}</button>
			</NextLink>
		);

	if (styled)
		return (
			<NextLink {...props}>
				<span className={`${className ? `${className} ` : ""}link styled-link`}>{children}</span>
			</NextLink>
		);

	return (
		<NextLink {...props}>
			<span className={`${className ? `${className} ` : ""}link`}>{children}</span>
		</NextLink>
	);
};

export default Link;
