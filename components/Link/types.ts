import { CSSProperties } from "react";
import { LinkProps as NextLinkProps } from "next/link";

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
