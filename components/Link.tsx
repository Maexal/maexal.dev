import React, { CSSProperties, MouseEvent } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
	children?: React.ReactNode;
	navLink?: boolean;
	className?: string;
	style?: CSSProperties;
	type?: "normal" | "button";
	onClick?: (event: MouseEvent) => void;
	elevation?: "flat" | "hovering" | "flying";
	color?: "orange" | "blue";
	margin?: boolean;
	target?: "_blank";
}

export const Link = ({
	navLink = false,
	children,
	className,
	style,
	type = "normal",
	onClick,
	elevation = "flat",
	color = "orange",
	margin = false,
	target,
	...props
}: LinkProps): JSX.Element => {
	switch (type) {
		case "button":
			return (
				<NextLink {...props}>
					<a
						target={target}
						className={`styled-button cursor-pointer outline-none rounded focus:outline-none select-none no-underline inline-block relative w-auto text-center text-white border-none bg-transparent py-1 px-3 font-mono${
							margin ? ` m-2` : ``
						}${className ? ` ${className}` : ``}`}
						style={style}
						data-elevation={elevation}
						data-color={color}
						data-margin={margin}
						onClick={onClick}
					>
						<span className="content block text-white relative text-base transform-gpu duration-150 ease-in-out font-mono z-10">
							{children}
						</span>
					</a>
				</NextLink>
			);
		case "normal":
		default:
			return (
				<NextLink {...props}>
					<a
						target={target}
						className={`cursor-pointer outline-none rounded focus:outline-none${
							navLink
								? ` nav-link select-none no-underline py-1 px-3 mr-2 duration-150 ease-in-out hover:px-1 active:px-2 font-mono`
								: ` underline`
						}${className ? ` ${className}` : ``}`}
						style={style}
					>
						{children}
					</a>
				</NextLink>
			);
	}
};

export default Link;
