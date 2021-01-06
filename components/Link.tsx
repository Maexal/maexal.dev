import React, { CSSProperties } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
	children?: React.ReactNode;
	navLink?: boolean;
	className?: string;
	style?: CSSProperties;
	type?: "normal" | "button" | "button-function" | "button-link";
	elevation?: "flat" | "hovering" | "flying";
	color?: "orange" | "blue";
	margin?: boolean;
	disabled?: boolean;
	target?: "_blank";
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Link = ({
	navLink = false,
	children,
	className,
	style,
	type = "normal",
	elevation = "flat",
	color = "orange",
	margin = false,
	disabled = false,
	target,
	onClick,
	...props
}: LinkProps): JSX.Element => {
	switch (type) {
		case "button-link":
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
						rel="noopener noreferrer"
					>
						<span className="content inline-block text-white relative text-base transform-gpu duration-150 ease-in-out font-mono z-10">
							{children}
						</span>
					</a>
				</NextLink>
			);
		case "button":
		case "button-function":
			return (
				<button
					disabled={disabled}
					className={`styled-button cursor-pointer outline-none rounded focus:outline-none select-none no-underline inline-block relative w-auto text-center text-white border-none bg-transparent py-1 px-3 font-mono${
						margin ? ` m-2` : ``
					}${type === "button-function" ? ` styled-button-function` : ``}${className ? ` ${className}` : ``}`}
					style={style}
					data-elevation={elevation}
					data-color={color}
					data-margin={margin}
					onClick={onClick}
				>
					<span className="content inline-block text-white relative text-base transform-gpu duration-150 ease-in-out font-mono z-10">
						{children}
					</span>
				</button>
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
						rel="noopener noreferrer"
					>
						{children}
					</a>
				</NextLink>
			);
	}
};

export default Link;
